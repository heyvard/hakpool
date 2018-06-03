'use strict';

const config = require('config');

module.exports = {
  client: 'pg',
  connection: config.get('databaseUrl'),
  migrations: {
    tableName: 'knex_migrations',
  },
};
