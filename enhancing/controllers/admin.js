const Product = require('../models/products')
exports.getAddProducts = (req, res, next) => {
    console.log('Product Page', req.url);
    res.render('admin/add-product', { pageTitle: "Add Product", path: "/admin/add-product", productCSS: true, formsCSS: true, activeAddProduct: true })
};

exports.postProducts = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title,imageUrl,description,price);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    const products = Product.fetchAll(products => {
        res.render('admin/products', { prods: products, pageTitle: 'Admin Products', path: '/admin/products', hasProducts: products.length > 0, productCSS: true, activeShop: true });
    });
}