const router = require('express').Router();
const homeRouter = require('./home');
const sellersRouter = require('./sellers');
const categoriesRouter = require('./categories');
const insertItemsRouter = require('./insertItems');
const deleteItemRouter = require('./deleteAllItem');

router.use(homeRouter);
router.use(sellersRouter);
router.use(categoriesRouter);
router.use(insertItemsRouter);
router.use(deleteItemRouter);

module.exports = router;
