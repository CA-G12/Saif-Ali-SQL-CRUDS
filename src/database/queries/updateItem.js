const connection = require('../config/db_connection');

const updateItem = (editedData, id) => {
    // return connection.query(
    //     ' UPDATE items SET 
    //     item_name = editedData.name,
    //     price = editedData.price,
    //     seller_id = editedData.seller_id 
    //     WHERE items.item_id = id; '
    // )
};

module.exports = updateItem;
