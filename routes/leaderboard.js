'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');
const scoreCalculator = require('./../lib/scoreCalculator');
const knexConfig = require('./../knexfile.js');
const knex = require('knex')(knexConfig);

const router = express.Router();


async function getAllBets() {
  return (await knex.raw(`
SELECT u.id userid, u.name, m.game_start, m.away_team, m.home_team, b.home_score, b.away_score, m.type, m.home_score home_result, m.away_score away_result
FROM bets b, matches m, users u
WHERE b.user_id = u.id
AND b.match_id = m.id
AND game_start < now();`)).rows;
}

async function getEmptyBoard() {
  return (await knex.raw(`
SELECT u.id userid, u.name, 0.0 score
FROM users u`)).rows;
}

function compare(a, b) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

router.get('/', asyncHandler(async (req, res) => {
  const allBets = await getAllBets();
  if (allBets.length === 0) {
    const emptyBoard = await getEmptyBoard();
    res.render('leaderboard', { username: req.user.name, leaderboard: emptyBoard });
    return;
  }

  const personMap = {};

  allBets.forEach(bet => personMap[bet.userid] = []);

  allBets.forEach(bet => personMap[bet.userid].push(bet));

  const processedPersons = [];

  Object.keys(personMap).forEach(function (key) {
    const calculated = scoreCalculator(personMap[key]);
    processedPersons.push(calculated);
    // key: the name of the object key
    // index: the ordinal position of the key within the object
  });

  const personsFlat = processedPersons.map(function (bets) {

    const person = { name: bets[0].name, userid: bets[0].userid, score: 0.0 };
    bets.forEach(function (bet) {
      person.score += bet.score;
    });
    return person;
  });

  personsFlat.sort(compare)

  res.render('leaderboard', { username: req.user.name, leaderboard: personsFlat });
}));


module.exports = router;
