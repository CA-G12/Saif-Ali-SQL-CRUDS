const { Pool } = require('pg');
require('env2')('.env');

// const { DB_URL, DEV_DB_URL, NODE_ENV } = process.env;
const { DEV_DB_URL } = process.env;
// let dbUrl = process.env.DB_URL;
// switch (NODE_ENV) {
//   case 'production': dbUrl = DB_URL; break;
//   case 'development': dbUrl = DEV_DB_URL; break;
//   default: throw new Error('No Database found !');
// }

// "start": "NODE_ENV=production node src",
// "dev": "NODE_ENV=development nodemon src",
// "test": "NODE_ENV=test jest"
const connection = new Pool({
  connectionString: DEV_DB_URL,
  ssl: new URL(DEV_DB_URL).hostname !== 'localhost',
});

module.exports = connection;
