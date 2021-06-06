'use strict';


function canCalculate(bet) {
  return bet.home_score === null ? false : bet.away_score === null ? false : bet.home_result === null ? false : bet.away_result !== null;
}

function getMatchValue(type) {
  switch (type) {
    case 'ROUND1':
      return 1.0;
    case 'ROUND2':
      return 1.0;
    case 'ROUND3':
      return 1.0;
    case '8':
      return 2.0;
    case 'QUARTER':
      return 2.0;
    case 'SEMI':
      return 2.0;
    case 'FINAL':
      return 3.0;
    default:
      throw new Error('Illegal match type')
  }
}

function calculateScores(bets, matchScoreMap) {

  return bets.map(bet => {
    if (canCalculate(bet)) {
      if (bet.home_score === bet.home_result && bet.away_score === bet.away_result) {
        console.log("Riktig resultat matchScoreMap[bet.match_id] " + bet.match_id)
        console.log(matchScoreMap[bet.match_id])
        bet.score = getMatchValue(bet.type) + matchScoreMap[bet.match_id];
      } else {

        let hubResult = 'U';
        if (bet.home_result > bet.away_result) {
          hubResult = 'H';
        }
        if (bet.home_result < bet.away_result) {
          hubResult = 'B';
        }

        let hubBet = 'U';
        if (bet.home_score > bet.away_score) {
          hubBet = 'H';
        }
        if (bet.home_score < bet.away_score) {
          hubBet = 'B';
        }
        if (hubBet === hubResult) {
          bet.score = getMatchValue(bet.type);
        } else {
          bet.score = 0.0;
        }
      }

    } else {
      bet.score = 0.0;
    }
    return bet;
  });
}

module.exports = calculateScores;
