'use strict';

exports.up = async (knex) => {

  const matches = [
    {
      type: 'ROUND1',
      home_team: '🇷🇺 󠁧Russia󠁿',
      away_team: '🇸🇦 󠁧Saudi Arabia󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇪🇬 Egypt',
      away_team: '🇺🇾 Uruguay',
      game_start: '2018-06-15 14:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇲🇦 Marokko',
      away_team: '🇮🇷 Iran',
      game_start: '2018-06-15 17:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇵🇹 Portugal',
      away_team: '🇪🇸 Spania',
      game_start: '2018-06-15 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'FINAL',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-07-15 17:00:00+02',
      channel: 'NRK1'
    },
  ];

  await knex('matches').insert(matches);
};

exports.down = function down() {
  throw new Error('Rollback unsupported');
};
