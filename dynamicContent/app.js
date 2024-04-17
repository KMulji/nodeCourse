const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { engine } = require('express-handlebars');
const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop');
const app = express();
const port = 3000;

//set the templating engine pug
// app.set('view engine', 'pug');
//set the templating engine handlebars
app.engine('hbs', engine({
    defaultLayout: 'main-layout.hbs',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
//allow access to public folder
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.use('/admin', adminData.route);
app.use(shopRouter);

//page not found
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404' })
});
//start server
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});