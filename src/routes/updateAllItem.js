const router = require('express').Router();
const { updateAllItem } = require('../controllers');

router.post('/updateItem/:id', updateAllItem);

module.exports = router;
