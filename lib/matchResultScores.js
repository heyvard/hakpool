'use strict';


function matchResultScores(allBets) {
    const matchMap = {};

    allBets.forEach(bet => matchMap[bet.match_id] = []);

    allBets.forEach(bet => matchMap[bet.match_id].push(bet));

    const processedMatches = {};

    Object.keys(matchMap).forEach(function (key) {
        var correctResult = 0
        matchMap[key].forEach(function (bet) {
            if(bet.home_score === bet.home_result && bet.away_score === bet.away_result){
                correctResult++
            }
        })
        processedMatches[key] = correctResult;
    });
}

module.exports = matchResultScores;
