const { getItems } = require('../database/queries');

const getAllItems = (req, res) => {
  getItems()
    .then((data) => res.json(data.rows))
    .catch((err) => res.status(500).json({ msg: `server error${err}` }));
}

module.exports = getAllItems;
