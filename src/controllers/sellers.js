const { getSellers } = require('../database/queries');

const getAllSellers = (req, res) => {
    getSellers()
        .then((data) => res.json(data.rows))
        .catch((err) => res.status(500).json({ msg: `server error${err}` }));
};

module.exports = getAllSellers;
