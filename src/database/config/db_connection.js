const { Pool } = require('pg');
require('env2')('.env');

const { DB_URL } = process.env;

const connection = new Pool({
  connectionString: DB_URL,
  ssl: new URL(DB_URL).hostname !== 'localhost',
});

module.exports = connection;
