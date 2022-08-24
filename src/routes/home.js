const router = require('express').Router();
const { getAllItems } = require('../controllers');

router.get('/items', getAllItems);

module.exports = router;
