const { Pool } = require('pg');
require('env2')('.env');

const { DEV_DB_URL } = process.env;

const connection = new Pool({
  connectionString: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : DEV_DB_URL,
  ssl: process.env.NODE_ENV === 'development' ? false : { rejectUnauthorized: false },
});

module.exports = connection;
