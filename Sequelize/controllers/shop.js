const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch((err) => {
      console.log(err);
    })
};
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      
      res.render('shop/product-detail', { pageTitle: product.title, product: product, path: '/products' });
    })
    .catch(err => {
      console.log(err);
    })

};
exports.getIndex = (req, res, next) => {

  Product.findAll()
    .then((products) => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch((err) => {
      console.log(err);
    })
};

exports.getCart = (req, res, next) => {

  req.user.getCart()
  .then(cart=>{
    return cart.getProducts();
  })
  .then(products=>{
        res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
  })
  .catch(err=>{console.log(err)});

};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  req.user.getCart()
    .then(cart=>{
      fetchedCart=cart;
      return cart.getProducts({where:{id:prodId}});
    })
    .then(products=>{
      let product;

      if(products.length>0){
        product=products[0];
      }
      let newQuantity=1;

      if(product){
        const oldQuantity = product.cartitem.quantity;
        newQuantity=oldQuantity+1;
        return fetchedCart.addProduct(product,{through:{quantity:newQuantity}});
      }
      return Product.findByPk(prodId)
        .then(product=>{
          fetchedCart.addProduct(product,{through:{quantity:newQuantity}});
        })
        .catch(err=>{console.log(err)});



    })
    .then(()=>{res.redirect('/cart')})
    .catch(err=>{console.log(err)});
}
exports.postCartDeletProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user.getCart()
    .then(cart=>{
      return cart.getProducts({where:{id:prodId}})
    })
    .then(products=>{
      const product = products[0];
      return product.cartitem.destroy();
    })
    .then(res=>{
      res.redirect('/cart');
    })
    .catch(err=>{console.log(err)});

}
exports.getOrders = (req, res, next) => {
  req.user.getOrders({ include: [{ model: Product }] })
  .then(orders=>{
    console.log(orders);
    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders',
      orders:orders
    })
    
  })
  .catch(err=>console.log(err));
};
exports.postOrder = (req,res,next)=>{
  let fetchedCart;
  return req.user.getCart()
    .then(cart=>{
      fetchedCart=cart;
      return cart.getProducts()
    })
    .then(products=>{
      return req.user.createOrder()
        .then(order=>{
          console.log('products are ......',products)
          return order.addProducts(products.map((product)=>{
            product.orderitem= {quantity:product.cartitem.quantity}
            return product;
          }))
        })
    })
    .then(result=>{
      fetchedCart.setProducts(null);
      
    })
    .then(result=>{
      res.redirect('/orders');
    })
    .catch(err=>{console.log(err)});
}