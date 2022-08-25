const { updateItem } = require('../database/queries');

const updateAllItem = (req, res) => {
  updateItem(req.body, req.params.id)
    .then(() => res.redirect('/'))
    .catch((err) => {
      res.status(500).json({ msg: `server error${err}` });
    });
};

module.exports = updateAllItem;
