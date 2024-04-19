const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();

//display products page
router.get('/add-product', productsController.getAddProducts);

//post data to form
router.post('/add-product', productsController.postProducts);

module.exports = router;
