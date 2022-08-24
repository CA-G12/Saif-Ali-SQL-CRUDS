const { getCategories } = require('../database/queries');

const getAllCategories = (req, res) => {
    getCategories()
        .then((data) => res.json(data.rows))
        .catch((err) => res.status(500).json({ msg: `server error${err}` }));
};

module.exports = getAllCategories;
