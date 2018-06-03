'use strict';

exports.up = async (knex) => {

  const matches = [
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Russia 🇷🇺󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'Saudi Arabia 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-06-14 17:00:00+01',
      channel: 'NRK1'
    },
    {
      type: 'FINAL',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2018-07-15 17:00:00+01',
      channel: 'NRK1'
    },
  ];

  await knex('matches').insert(matches);
};

exports.down = function down() {
  throw new Error('Rollback unsupported');
};
