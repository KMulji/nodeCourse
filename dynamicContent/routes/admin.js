const express = require('express');
const path = require('path');
const router = express.Router();
const products = [];

//display products page
router.get('/add-product', (req, res, next) => {
    console.log('Product Page', req.url);
    res.render('add-product',{pageTitle:"Add Product"})
});

//post data to form
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.route = router;
exports.products = products;