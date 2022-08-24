const connection = require('../config/db_connection');

const getSellers = () => connection.query('select * from sellers;');

module.exports = getSellers;
