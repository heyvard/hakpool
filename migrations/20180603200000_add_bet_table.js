'use strict';

exports.up = async (knex) => {

  await knex.schema.createTable('bets', (t) => {
    t.uuid('id').default(knex.raw('uuid_generate_v4()')).primary();
    t.uuid('user_id').notNullable().references('users.id');
    t.uuid('match_id').notNullable().references('matches.id');
    t.integer('home_score').nullable();
    t.integer('away_score').nullable();
    t.timestamps(false, true);
  });
};

exports.down = function down() {
  throw new Error('Rollback unsupported');
};
