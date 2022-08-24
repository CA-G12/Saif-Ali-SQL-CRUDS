const { deleteItem } = require('../database/queries');

const deleteAllItem = (req, res) => {
    console.log(req.params.id);
    deleteItem(req.params.id)
        .then((data) => res.redirect('/'))
        .catch((err) => {
            console.log(err);
            res.status(500).json({ msg: `server error${err}` })
        });
};

module.exports = deleteAllItem;
