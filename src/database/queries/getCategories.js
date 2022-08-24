const connection = require('../config/db_connection');

const getCategories = () => connection.query('select * from categories;');

module.exports = getCategories;
