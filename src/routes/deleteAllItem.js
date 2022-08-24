const router = require('express').Router();
const { deleteAllItem } = require('../controllers');

router.delete('/deleteItem/:id', deleteAllItem);

module.exports = router;