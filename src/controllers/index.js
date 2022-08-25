const getAllItems = require('./home');
const getAllSellers = require('./sellers');
const getAllCategories = require('./categories');
const postAllInfo = require('./insertItems');
const deleteAllItem = require('./deleteAllItem');
const updateAllItem = require('./updateAllItem');

module.exports = {
  getAllItems, getAllSellers, getAllCategories, postAllInfo, deleteAllItem, updateAllItem,
};
