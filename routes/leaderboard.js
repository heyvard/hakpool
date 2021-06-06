'use strict';


const express = require('express');
const asyncHandler = require('express-async-handler');
const scoreCalculator = require('./../lib/scoreCalculator');
const knexConfig = require('./../knexfile.js');
const matchResultScores = require("../lib/matchResultScores");
const getAllBets = require("../lib/getAllBets");
const knex = require('knex')(knexConfig);

const router = express.Router();


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
    return a.name.localeCompare(b.name);
}

router.get('/', asyncHandler(async (req, res) => {
    const allBets = await getAllBets();
    if (allBets.length === 0) {
        const emptyBoard = await getEmptyBoard();
        res.render('leaderboard', {username: req.user.name, leaderboard: emptyBoard});
        return;
    }

    const matchScoreMap = matchResultScores(allBets)
    console.log("Match scores: ", matchScoreMap)
    console.log("Match scores: " + JSON.stringify(matchScoreMap))

    const personMap = {};

    allBets.forEach(bet => personMap[bet.userid] = []);

    allBets.forEach(bet => personMap[bet.userid].push(bet));

    const processedPersons = [];

    Object.keys(personMap).forEach(function (key) {
        const calculated = scoreCalculator(personMap[key], matchScoreMap);
        processedPersons.push(calculated);
        // key: the name of the object key
        // index: the ordinal position of the key within the object
    });

    const personsFlat = processedPersons.map(function (bets) {

        const person = {name: bets[0].name, userid: bets[0].userid, score: 0.0};
        bets.forEach(function (bet) {
            person.score += bet.score;
        });
        return person;
    });

    personsFlat.sort(compare)

    res.render('leaderboard', {user: req.user, leaderboard: personsFlat});
}));


module.exports = router;
