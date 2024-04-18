const express = require('express');

const Router = express.Router();
const users = [];
Router.get('/users', (req, res, next) => {
    res.render('user', { pageTitle: 'Home', userData: users });
});
Router.post('/', (req, res, next) => {
    console.log(req.body.userName);
    users.push({ userName: req.body.userName });
    res.redirect('/users');
});
Router.get('/', (req, res, next) => {
    res.render('home', { pageTitle: 'Home' });
});

exports.route = Router;