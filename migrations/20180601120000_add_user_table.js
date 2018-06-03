'use strict';

exports.up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

  await knex.schema.createTable('users', (t) => {
    t.uuid('id').default(knex.raw('uuid_generate_v4()')).primary();
    t.string('google_id').notNullable();
    t.string('picture').nullable();
    t.boolean('active').notNullable();
    t.string('email').notNullable();
    t.string('name').notNullable();
    t.boolean('admin').notNullable();
    t.timestamps(false, true);
  });
};

exports.down = function down() {
  throw new Error('Rollback unsupported');
};
