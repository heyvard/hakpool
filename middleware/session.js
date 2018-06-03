'use strict';

const jwt = require('jsonwebtoken');
const config = require('config');
const asyncHandler = require('express-async-handler');
const knexConfig = require('./../knexfile.js');
const knex = require('knex')(knexConfig);

function verifyToken(token) {
  try {
    return jwt.verify(token, config.get('jwtSecret'));
  } catch (err) {
    throw new Error('Cant verify token');
  }
}

function redirectToGoogle(res) {
  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.get('googleClientId')}&redirect_uri=${config.get('redirectUri')}&scope=openid email https://www.googleapis.com/auth/userinfo.profile&response_type=code`);
}

const verifySessionAsync = asyncHandler(async (req, res, next) => {
  if (req.url.startsWith('/callback')) {
    next();
    return;
  }

  const token = req.cookies.accessToken;

  if (token === undefined) {
    redirectToGoogle(res);
    return;
  }
  const claims = verifyToken(token);


  const user = await knex.select('*')
    .from('users')
    .where('id', claims.sub);

  if (user.length === 0) {
    redirectToGoogle(res);
    return;
  }

  const theUser = user[0];

  req.user = theUser; // eslint-disable-line no-param-reassign
  next();
});


function verifySession(req, res, next) {
  return verifySessionAsync(req, res, next);
}


module.exports = verifySession;
