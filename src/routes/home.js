const router = require('express').Router();
const { getAllItems } = require('../controllers');

router.get('/', getAllItems);

module.exports = router;
