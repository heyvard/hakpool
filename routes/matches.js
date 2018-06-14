'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');
const knexConfig = require('./../knexfile.js');
const knex = require('knex')(knexConfig);

const router = express.Router();

async function getBets(matchID) {
  return (await knex.raw(`
  select u.name, b.home_score, b.away_score, m.away_team, m.home_team, m.home_score home_result, m.away_score away_result
from users u, bets b, matches m
where u.id = b.user_id 
and b.match_id = m.id
AND game_start < now()
AND m.id = ?
order by u.name`,
    [matchID + ''])).rows;
}



router.get('/:matchid', asyncHandler(async (req, res) => {

  const bets = await getBets(req.params.matchid);

  res.render('match', { user: req.user, bets, match: bets[0] });
}));


module.exports = router;
