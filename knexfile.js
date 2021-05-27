'use strict';

const config = require('config');

module.exports = {
  client: 'pg',
  connection: {
    connectionString: config.get('databaseUrl'),
    ssl: { rejectUnauthorized: false },
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
