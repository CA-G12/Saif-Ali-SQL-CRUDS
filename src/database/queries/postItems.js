const connection = require('../config/db_connection');

const postItems = (formData) => {
    return connection.query('insert into items (item_name, price, seller_id) values ($1, $2, $3);', [formData.name, formData.price, formData.seller_id])
};


module.exports = postItems;

