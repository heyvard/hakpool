'use strict';

exports.up = async (knex) => {

  const matches = [
    {
      type: 'ROUND1',
      home_team: '🇷🇺 󠁧Russland󠁿',
      away_team: '🇸🇦 󠁧Saudi Arabia󠁥󠁮󠁧󠁿',
      game_start: '2021-06-14 17:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇪🇬 Egypt',
      away_team: '🇺🇾 Uruguay',
      game_start: '2021-06-15 14:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇲🇦 Marokko',
      away_team: '🇮🇷 Iran',
      game_start: '2021-06-15 17:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇵🇹 Portugal',
      away_team: '🇪🇸 Spania',
      game_start: '2021-06-15 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: '🇫🇷 Frankrike',
      away_team: '🇦🇺 Australia',
      game_start: '2021-06-16 12:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: '🇦🇷 Argentina',
      away_team: '🇮🇸 Island',
      game_start: '2021-06-16 15:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇵🇪 Peru',
      away_team: '🇩🇰 Danmark',
      game_start: '2021-06-16 18:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: '🇭🇷 Kroatia',
      away_team: '🇳🇬 Nigeria',
      game_start: '2021-06-16 21:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇨🇷 Costa Rica',
      away_team: '🇷🇸 Serbia',
      game_start: '2021-06-17 14:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: '🇩🇪 Tyskland',
      away_team: '🇲🇽 Mexico',
      game_start: '2021-06-17 17:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: '🇧🇷 Brasil',
      away_team: '🇨🇭 Sveits',
      game_start: '2021-06-17 20:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇸🇪 Sverige',
      away_team: '🇰🇷 Sør-Korea',
      game_start: '2021-06-18 14:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇧🇪 Belgia',
      away_team: '🇵🇦 Panama',
      game_start: '2021-06-18 17:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: '🇹🇳 Tunisia',
      away_team: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',
      game_start: '2021-06-18 20:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND1',
      home_team: '🇨🇴 Colombia',
      away_team: '🇯🇵 Japan',
      game_start: '2021-06-19 14:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND1',
      home_team: '🇵🇱 Polen',
      away_team: '🇸🇳 Senegal',
      game_start: '2021-06-19 17:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: '🇷🇺 Russland',
      away_team: '🇪🇬 Egypt',
      game_start: '2021-06-19 20:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: '🇵🇹 Portugal',
      away_team: '🇲🇦 Marokko',
      game_start: '2021-06-20 14:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: '🇺🇾 Uruguay',
      away_team: '🇸🇦 󠁧Saudi Arabia',
      game_start: '2021-06-20 17:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: '🇮🇷 Iran',
      away_team: '🇪🇸 Spania',
      game_start: '2021-06-20 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: '🇩🇰 Danmark',
      away_team: '🇦🇺 Australia',
      game_start: '2021-06-21 14:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: '🇫🇷 Frankrike',
      away_team: '🇵🇪 Peru',
      game_start: '2021-06-21 17:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: '🇦🇷 Argentina',
      away_team: '🇭🇷 Kroatia',
      game_start: '2021-06-21 20:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: '🇧🇷 Brasil',
      away_team: '🇨🇷 Costa Rica',
      game_start: '2021-06-22 14:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: '🇳🇬 Nigeria',
      away_team: '🇮🇸 Island',
      game_start: '2021-06-22 17:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: '🇷🇸 Serbia',
      away_team: '🇨🇭 Sveits',
      game_start: '2021-06-22 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: '🇧🇪 Belgia',
      away_team: '🇹🇳 Tunisia',
      game_start: '2021-06-23 14:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: '🇰🇷 Sør-Korea',
      away_team: '🇲🇽 Mexico',
      game_start: '2021-06-23 17:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: '🇩🇪 Tyskland',
      away_team: '🇸🇪 Sverige',
      game_start: '2021-06-23 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',
      away_team: '🇵🇦 Panama',
      game_start: '2021-06-24 14:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND2',
      home_team: '🇯🇵 Japan',
      away_team: '🇸🇳 Senegal',
      game_start: '2021-06-24 17:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND2',
      home_team: '🇵🇱 Polen',
      away_team: '🇨🇴 Colombia',
      game_start: '2021-06-24 20:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND3',
      home_team: '🇸🇦 󠁧Saudi Arabia󠁥󠁮󠁧󠁿',
      away_team: '🇪🇬 Egypt',
      game_start: '2021-06-25 16:00:00+02',
      channel: 'TV2 Sport'
    },
    {
      type: 'ROUND3',
      home_team: '🇺🇾 Uruguay',
      away_team: '🇷🇺 󠁧Russland󠁿',
      game_start: '2021-06-25 16:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND3',
      home_team: '🇪🇸 Spania',
      away_team: '🇲🇦 Marokko',
      game_start: '2021-06-25 20:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND3',
      home_team: '🇮🇷 Iran',
      away_team: '🇵🇹 Portugal',
      game_start: '2021-06-25 20:00:00+02',
      channel: 'NRK3'
    },
    {
      type: 'ROUND3',
      home_team: '🇩🇰 Danmark',
      away_team: '🇫🇷 Frankrike',
      game_start: '2021-06-26 16:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND3',
      home_team: '🇦🇺 Australia',
      away_team: '🇵🇪 Peru',
      game_start: '2021-06-26 16:00:00+02',
      channel: 'NRK2'
    },
    {
      type: 'ROUND3',
      home_team: '🇳🇬 Nigeria',
      away_team: '🇦🇷 Argentina',
      game_start: '2021-06-26 20:00:00+02',
      channel: 'TV2 Sport'
    },
    {
      type: 'ROUND3',
      home_team: '🇮🇸 Island',
      away_team: '🇭🇷 Kroatia',
      game_start: '2021-06-26 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND3',
      home_team: '🇰🇷 Sør-Korea',
      away_team: '🇩🇪 Tyskland',
      game_start: '2021-06-27 16:00:00+02',
      channel: 'NRK2'
    },
    {
      type: 'ROUND3',
      home_team: '🇲🇽 Mexico',
      away_team: '🇸🇪 Sverige',
      game_start: '2021-06-27 16:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND3',
      home_team: '🇨🇭 Sveits',
      away_team: '🇨🇷 Costa Rica',
      game_start: '2021-06-27 20:00:00+02',
      channel: 'TV2 Sport'
    },
    {
      type: 'ROUND3',
      home_team: '🇷🇸 Serbia',
      away_team: '🇧🇷 Brasil',
      game_start: '2021-06-27 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND3',
      home_team: '🇸🇳 Senegal',
      away_team: '🇨🇴 Colombia',
      game_start: '2021-06-28 16:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'ROUND3',
      home_team: '🇯🇵 Japan',
      away_team: '🇵🇱 Polen',
      game_start: '2021-06-28 16:00:00+02',
      channel: 'TV2 Sport'
    },
    {
      type: 'ROUND3',
      home_team: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',
      away_team: '🇧🇪 Belgia',
      game_start: '2021-06-28 20:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'ROUND3',
      home_team: '🇵🇦 Panama',
      away_team: '🇹🇳 Tunisia',
      game_start: '2021-06-28 20:00:00+02',
      channel: 'NRK3'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-06-30 16:00:00+02',
      channel: 'NRK1'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-06-30 20:00:00+02',
      channel: 'NRK1'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-01 16:00:00+02',
      channel: 'TV2'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-01 20:00:00+02',
      channel: 'NRK1'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-02 16:00:00+02',
      channel: 'TV2'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-02 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-03 16:00:00+02',
      channel: 'NRK1'
    },
    {
      type: '8',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-03 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'QUARTER',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-06 16:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'QUARTER',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-06 20:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'QUARTER',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-07 16:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'QUARTER',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-07 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'SEMI',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-10 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'SEMI',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-11 20:00:00+02',
      channel: 'TV2'
    },
    {
      type: 'FINAL',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-14 16:00:00+02',
      channel: 'NRK1'
    },
    {
      type: 'FINAL',
      home_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      away_team: 'TBD󠁧󠁢󠁥󠁮󠁧󠁿 ',
      game_start: '2021-07-15 16:00:00+02',
      channel: 'NRK1'
    },
  ];

  await knex('matches').insert(matches);
};

exports.down = function down() {
  throw new Error('Rollback unsupported');
};
