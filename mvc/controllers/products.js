const Product = require('../models/products')


exports.getAddProducts = (req, res, next) => {
    console.log('Product Page', req.url);
    res.render('add-product', { pageTitle: "Add Product", path: "/admin/add-product", productCSS: true, formsCSS: true, activeAddProduct: true })
};

exports.postProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}
exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('shop', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, productCSS: true, activeShop: true });
    });
}