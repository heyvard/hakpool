'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');
const scoreCalculator = require('./../lib/scoreCalculator');
const knexConfig = require('./../knexfile.js');
const knex = require('knex')(knexConfig);

const router = express.Router();

async function getPastBets(userId) {
  return (await knex.raw(`
SELECT m.game_start, m.away_team, m.home_team, b.home_score, b.away_score, m.type, m.home_score home_result, m.away_score away_result
FROM bets b, matches m
WHERE b.user_id = ?
AND b.match_id = m.id
AND game_start < now()
ORDER BY game_start desc, m.id asc;`,
    [userId + ''])).rows;
}

router.get('/', asyncHandler(async (req, res) => {
  const bets = scoreCalculator(await getPastBets(req.user.id));

  res.render('pastMatches', { user: req.user, betsFor: req.user.name, bets });
}));

router.get('/:userid', asyncHandler(async (req, res) => {
  const bets = scoreCalculator(await getPastBets(req.params.userid));

  const raw = await knex.raw(`
SELECT name from users where id = ?;`,
    [req.params.userid + '']);
  const username = raw.rows[0].name;

  res.render('pastMatches', { user: req.user, betsFor: username, bets });
}));


module.exports = router;
