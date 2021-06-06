'use strict';


function matchResultScores(allBets) {
    const matchMap = {};
    const poengTilDeling = 10
    const maxpoeng = 5
    const minpoeng = 2
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
        const grunnpoeng = Math.ceil(poengTilDeling / Math.max(correctResult, 1));
        processedMatches[key] = Math.max(Math.min(grunnpoeng, maxpoeng), minpoeng);
    });

    return processedMatches
}

module.exports = matchResultScores;
