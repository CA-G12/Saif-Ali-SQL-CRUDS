const router = require('express').Router();
const homeRouter = require('./home');
const sellersRouter = require('./sellers');
const categoriesRouter = require('./categories');

router.use(homeRouter);
router.use(sellersRouter);
router.use(categoriesRouter);

module.exports = router;
