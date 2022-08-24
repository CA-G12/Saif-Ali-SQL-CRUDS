const { Pool } = require('pg');
require('env2')('.env');

const { DEV_DB_URL } = process.env;

const connection = new Pool({
  connectionString: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : DEV_DB_URL,
  ssl: false,
});

module.exports = connection;

tuqnhanrtgbctc
ff5df8a1f6a08db17fd08482083b21031d5ed7f30b2db04a5e4ef196c46f4d0b
ec2-52-48-159-67.eu-west-1.compute.amazonaws.com
5432
d109lbheikc33e