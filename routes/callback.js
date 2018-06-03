'use strict';

const express = require('express');
const requestPromise = require('request-promise');
const asyncHandler = require('express-async-handler');
const knexConfig = require('./../knexfile.js');
const knex = require('knex')(knexConfig);
const jwt = require('jsonwebtoken');
const config = require('config');

const router = express.Router();

function generateToken(userId) {
  const claims = { sub: userId };

  return jwt.sign(claims, process.env.JWT_SECRET, { expiresIn: '60d' });
}

async function getTokenFromCode(code) {
  const response = await requestPromise({
    method: 'POST',
    json: true,
    uri: 'https://www.googleapis.com/oauth2/v4/token',
    form: {
      code,
      client_id: config.get('googleClientId'),
      client_secret: config.get('googleClientSecret'),
      redirect_uri: config.get('redirectUri'),
      grant_type: 'authorization_code',
    },
  });

  return response;
}

async function getUserinfo(accessToken) {
  const response = await requestPromise({
    method: 'GET',
    json: true,
    uri: `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`,
  });

  return response;
}

function setCookieAndRedirect(userId, res) {
  const token = generateToken(userId);

  res.cookie('accessToken', token, { maxAge: 9000000000, httpOnly: true, secure: config.get('cookieSecure') });
  res.redirect('/');
}

router.get('/', asyncHandler(async (req, res) => {
  const status = await getTokenFromCode(req.query.code);

  const userinfo = await getUserinfo(status.access_token);

  const user = await knex.select('id')
    .from('users')
    .where('google_id', userinfo.id);

  if (user.length === 0) {
    const id = await knex.insert({
      name: userinfo.name,
      email: userinfo.email,
      picture: userinfo.picture,
      google_id: userinfo.id,
      admin: false,
      active: false,
    })
      .returning('id')
      .into('users');

    const matchIds = await knex.select('id')
      .from('matches');

    const userBets = [];

    for (let i = 0; i < matchIds.length; i++) {
      userBets.push({ user_id: id + '', match_id: matchIds[i].id + '' });
    }

    await knex('bets').insert(userBets); //TODO samme transakasjon som insert user

    setCookieAndRedirect(id, res);
  } else {
    setCookieAndRedirect(user[0].id, res);
  }
}));


module.exports = router;
