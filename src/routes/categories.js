const router = require('express').Router();
const { getAllCategories } = require('../controllers');

router.get('/categories', getAllCategories);

module.exports = router;