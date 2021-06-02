'use strict';

exports.up = async (knex) => {

  const matches = [
    {
      type: 'ROUND1',
      home_team: 'Tyrkia 🇹🇷󠁿',
      away_team: 'Italia 🇮🇹',
      game_start: '2021-06-11 21:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿',
      away_team: 'Sveits 🇨🇭',
      game_start: '2021-06-12 15:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Danmark 🇩🇰',
      away_team: 'Finland 🇫🇮',
      game_start: '2021-06-12 18:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Belgia 🇧🇪',
      away_team: 'Russland 🇷🇺',
      game_start: '2021-06-12 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: 'England 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      away_team: 'Kroatia 🇭🇷',
      game_start: '2021-06-13 15:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: 'Østerrike 🇦🇹',
      away_team: 'Nord-Makedonia 🇲🇰',
      game_start: '2021-06-13 18:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: 'Nederland 🇳🇱',
      away_team: 'Ukraina 🇺🇦',
      game_start: '2021-06-13 21:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Skottland 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
      away_team: 'Tsjekkia 🇨🇿',
      game_start: '2021-06-14 15:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: 'Polen 🇵🇱',
      away_team: 'Slovakia 🇸🇰',
      game_start: '2021-06-14 18:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Spania 🇪🇸',
      away_team: 'Sverige 🇸🇪',
      game_start: '2021-06-14 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: 'Ungarn 🇭🇺',
      away_team: 'Portugal 🇵🇹',
      game_start: '2021-06-15 18:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: 'Frankrike 🇫🇷',
      away_team: 'Tyskland 🇩🇪',
      game_start: '2021-06-15 21:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Finland 🇫🇮',
      away_team: 'Russland 🇷🇺',
      game_start: '2021-06-16 15:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Tyrkia 🇹🇷󠁿',
      away_team: 'Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿',
      game_start: '2021-06-16 18:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: 'Italia 🇮🇹',
      away_team: 'Sveits 🇨🇭',
      game_start: '2021-06-16 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: 'Ukraina 🇺🇦',
      away_team: 'Nord-Makedonia 🇲🇰',
      game_start: '2021-06-17 15:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: 'Danmark 🇩🇰',
      away_team: 'Belgia 🇧🇪',
      game_start: '2021-06-17 18:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: 'Nederland 🇳🇱',
      away_team: 'Østerrike 🇦🇹',
      game_start: '2021-06-17 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: 'Sverige 🇸🇪',
      away_team: 'Slovakia 🇸🇰',
      game_start: '2021-06-18 15:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: 'Kroatia 🇭🇷',
      away_team: 'Tsjekkia 🇨🇿',
      game_start: '2021-06-18 18:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: 'England 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      away_team: 'Skottland 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
      game_start: '2021-06-18 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: 'Ungarn 🇭🇺',
      away_team: 'Frankrike 🇫🇷',
      game_start: '2021-06-19 15:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: 'Portugal 🇵🇹',
      away_team: 'Tyskland 🇩🇪',
      game_start: '2021-06-19 18:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: 'Spania 🇪🇸',
      away_team: 'Polen 🇵🇱',
      game_start: '2021-06-19 21:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND3',
      home_team: 'Italia 🇮🇹',
      away_team: 'Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿',
      game_start: '2021-06-20 18:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND3',
      home_team: 'Sveits 🇨🇭',
      away_team: 'Tyrkia 🇹🇷',
      game_start: '2021-06-20 18:00:00+02',
      channel: 'TV2 SPORT 1'
    },
    {
      type: 'ROUND3',
      home_team: 'Nord-Makedonia 🇲🇰',
      away_team: 'Nederland 🇳🇱',
      game_start: '2021-06-21 18:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND3',
      home_team: 'Ukraina 🇺🇦',
      away_team: 'Østerrike 🇦🇹',
      game_start: '2021-06-21 18:00:00+02',
      channel: 'TV2 SPORT 1'
    },
    {
      type: 'ROUND3',
      home_team: 'Russland 🇷🇺',
      away_team: 'Danmark 🇩🇰',
      game_start: '2021-06-21 21:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND3',
      home_team: 'Finland 🇫🇮',
      away_team: 'Belgia 🇧🇪',
      game_start: '2021-06-21 21:00:00+02',
      channel: 'NRK3'
    },
    {
      type: 'ROUND3',
      home_team: 'Tsjekkia 🇨🇿',
      away_team: 'England 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      game_start: '2021-06-22 21:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND3',
      home_team: 'Kroatia 🇭🇷',
      away_team: 'Skottland 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
      game_start: '2021-06-22 21:00:00+02',
      channel: 'NRK3'
    },
    {
      type: 'ROUND3',
      home_team: 'Sverige󠁮 🇸🇪󠁧󠁿',
      away_team: 'Polen 🇵🇱',
      game_start: '2021-06-23 18:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND3',
      home_team: 'Slovakia 🇸🇰',
      away_team: 'Spania 🇪🇸',
      game_start: '2021-06-23 18:00:00+02',
      channel: 'NRK2'
    },
    {
      type: 'ROUND3',
      home_team: 'Portugal 🇵🇹',
      away_team: 'Frankrike 🇫🇷',
      game_start: '2021-06-23 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND3',
      home_team: 'Tyskland 🇩🇪',
      away_team: 'Ungarn 🇭🇺',
      game_start: '2021-06-23 21:00:00+02',
      channel: 'TV2 SPORT 1'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-06-26 18:00:00+02',
      channel: 'NRK1'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-06-26 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-06-27 18:00:00+02',
      channel: 'TV2'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-06-27 21:00:00+02',
      channel: 'NRK1'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-06-28 18:00:00+02',
      channel: 'NRK1'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-06-28 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-06-29 18:00:00+02',
      channel: 'TV2'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-06-29 21:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'QUARTER',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-02 18:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'QUARTER',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-02 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'QUARTER',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-03 18:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'QUARTER',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-03 21:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'SEMI',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-06 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'SEMI',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-11 21:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'FINAL',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-11 21:00:00+02',
      channel: 'NRK1'
    },
  ];

  await knex('matches').insert(matches);
};

exports.down = function down() {
  throw new Error('Rollback unsupported');
};
