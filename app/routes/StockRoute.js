
const express = require('express');
const router = express.Router();

const stockController = require('../controllers/stockController');
router.get('/list',stockController.list);
router.get('/getAQOfLenses',stockController.getAvailableQuantityOfLenses);
router.get('/getAQOfProduct',stockController.getAvailableQuantityOfProduct);
router.post('/updateQuantityAfterInsertingData/:qte',stockController.updateQuantityAfterInsertingData);


module.exports = router;

