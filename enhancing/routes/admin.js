const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

//display products page
router.get('/add-product', adminController.getAddProducts);
router.get('/products',adminController.getProducts);

//post data to form
router.post('/add-product', adminController.postProducts);


module.exports = router;
