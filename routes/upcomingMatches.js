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
  const upcoming = (await knex.raw(`
SELECT m.game_start, m.away_team, m.home_team, b.home_score, b.away_score, b.match_id, b.id bet_id, m.channel
FROM bets b, matches m
WHERE b.user_id = ?
AND b.match_id = m.id
AND game_start > now()
ORDER BY game_start, m.id asc;`,
    [req.user.id + ''])).rows;

  res.render('upcomingMatches', { user: req.user, upcoming });
}

router.get('/', asyncHandler(async (req, res) => {
  await showUpcoming(req, res);
}));

function isValidMatch(validMatches, id) {
  for (let i = 0; i < validMatches.length; i++) {
    if (validMatches[i].id === id) {
      return true;
    }
  }
  return false;
}

router.post('/', asyncHandler(async (req, res) => {

  const validMatches = (await knex.raw(`
SELECT id
FROM matches m
WHERE game_start > now();`)).rows;

  for (const key in req.body) {
    let score = req.body[key];
    if (score === '' || isNumeric(score)) {
      if (score === '') {
        score = null;
      }
      const team = key.startsWith('home') ? 'home' : 'away';
      const id = key.replace('home-', '').replace('away-', '');
      if (isValidMatch(validMatches, id)) {
        const bet = {};
        bet[`${team}_score`] = score;

        await knex('bets')
          .where('user_id', '=', req.user.id)
          .where('match_id', '=', id)
          .update(bet)
      }
    }
  }

  await showUpcoming(req, res);
}));

module.exports = router;
