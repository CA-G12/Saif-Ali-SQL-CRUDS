const router = require('express').Router();
const { postAllInfo } = require('../controllers');

router.post('/insertItems', postAllInfo);

module.exports = router;