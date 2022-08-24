const router = require('express').Router();
const { getAllSellers } = require('../controllers');

router.get('/sellers', getAllSellers);

module.exports = router;