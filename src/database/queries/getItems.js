const connection = require('../config/db_connection');

const getItems = () => connection.query('select * from items inner join sellers on items.seller_id = sellers.id;');

module.exports = getItems;
