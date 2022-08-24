const connection = require('../config/db_connection');

const deleteItem = (id) => connection.query('delete from items where items.item_id = ($1);', [id]);

module.exports = deleteItem;
