'use strict';

exports.up = async (knex) => {

  await knex.schema.createTable('matches', (t) => {
    t.uuid('id').default(knex.raw('uuid_generate_v4()')).primary();
    t.string('type').notNullable();
    t.string('home_team').notNullable();
    t.string('away_team').notNullable();
    t.integer('home_score').nullable();
    t.integer('away_score').nullable();
    t.timestamp('game_start').notNullable();
    t.string('channel').notNullable();
    t.timestamps(false, true);
  });
};

exports.down = function down() {
  throw new Error('Rollback unsupported');
};
