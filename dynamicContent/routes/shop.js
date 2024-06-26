
const express = require('express');
const path = require('path');
const router = express.Router();

const adminData=require('./admin')

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    const products = adminData.products;
    res.render('shop',{prods:products,pageTitle:'Shop',path:'/',hasProducts:products.length>0,productCSS:true,activeShop:true});
});

module.exports = router;
