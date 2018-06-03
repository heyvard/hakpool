'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');
const knexConfig = require('./../knexfile.js');
const knex = require('knex')(knexConfig);

const router = express.Router();

async function showUpcoming(req, res) {
  const upcoming = (await knex.raw(`
SELECT m.game_start, m.away_team, m.home_team, b.home_score, b.away_score, b.match_id, b.id bet_id, m.channel
FROM bets b, matches m
WHERE b.user_id = ?
AND b.match_id = m.id
ORDER BY game_start asc;`,
    [req.user.id + ''])).rows;

  res.render('upcomingMatches', { username: req.user.name, upcoming });
}

router.get('/', asyncHandler(async (req, res) => {
  await showUpcoming(req, res);
}));

router.post('/', asyncHandler(async (req, res) => {

  await showUpcoming(req, res);
}));

module.exports = router;
