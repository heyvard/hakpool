'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');
const knexConfig = require('./../knexfile.js');
const knex = require('knex')(knexConfig);

const router = express.Router();

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

async function showUpcoming(req, res) {
  const matches = (await knex.raw(`
SELECT *
FROM matches m
ORDER BY m.game_start, m.id asc;`)).rows;

  res.render('resultservice', { user: req.user, matches });
}

router.get('/', asyncHandler(async (req, res) => {
  if (!req.user.admin) {
    throw new Error('Fy')
  }
  await showUpcoming(req, res);
}));


router.post('/', asyncHandler(async (req, res) => {
  if (!req.user.admin) {
    throw new Error('Fy')
  }


  const matchMap = {};

  for (const key in req.body) {
    matchMap[key.split('%')[1]] = {}
  }

  for (const key in req.body) {
    let strings = key.split('%');
    let bodyElement = req.body[key];
    if (bodyElement === '')
      bodyElement = null;
    matchMap[strings[1]][strings[0]] = bodyElement;
  }

  for (const id in matchMap) {
    await knex('matches')
      .where('id', '=', id)
      .update(matchMap[id])
  }
  
  await showUpcoming(req, res);
}));

module.exports = router;
