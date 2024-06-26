const Product = require('../models/products')



exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('shop/product-list', { prods: products, pageTitle: 'All Products', path: '/products', hasProducts: products.length > 0, productCSS: true, activeShop: true });
    });
}

exports.getIndex=(req,res,next)=>{
    const products = Product.fetchAll(products => {
        res.render('shop/index', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, productCSS: true, activeShop: true });
    });
}
exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{path:'/cart',pageTitle:'Your Cart'})
}
exports.getCheckout=(req,res,next)=>{
    res.render('shop/checkout',{path:'/checkout',pageTitle:'Checkout'})
}