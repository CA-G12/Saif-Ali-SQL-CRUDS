const { postItems } = require('../database/queries');

const postAllInfo = (req, res) => {
    postItems(req.body).then(res.redirect('/'));

};

module.exports = postAllInfo;

    // postItemCategories(itemId, categories

// 3, [1, 2, 3]

// insert into item_category(item_id, category_id) values()

// ['(3, 1)', '(3,2)', '(3,3)']

// const addCategory = () => query('insert into item_category(item_id, category_id) values()')


// Promise.all([ddCategory(), addCategory(), addCategory])
