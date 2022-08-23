const connection = require('../config/db_connection');

const getItems = () => connection.query('select * from items;');

module.exports = getItems;
