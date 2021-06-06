'use strict';


function matchResultScores(allBets) {
    const matchMap = {};
    const poengTilDeling = 10
    allBets.forEach(bet => matchMap[bet.match_id] = []);

    allBets.forEach(bet => matchMap[bet.match_id].push(bet));

    const processedMatches = {};

    Object.keys(matchMap).forEach(function (key) {
        let correctResult = 0;
        matchMap[key].forEach(function (bet) {
            if (bet.home_score === bet.home_result && bet.away_score === bet.away_result) {
                correctResult++
            }
        })
        processedMatches[key] = Math.ceil(poengTilDeling / correctResult);
    });

    return processedMatches
}

module.exports = matchResultScores;
