'use strict';

const config = require('config');

module.exports = {
  client: 'pg',
  connection: config.get('databaseUrl') + "?ssl=true",
  migrations: {
    tableName: 'knex_migrations',
  },
};
