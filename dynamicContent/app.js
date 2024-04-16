const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop');
const app = express();
const port = 3000;

//set the templating engine
app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({ extended: false }));
//allow access to public folder
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.use('/admin', adminData.route);
app.use(shopRouter);

//page not found
app.use((req, res, next) => {
    res.status(404).render('404')
});
//start server
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});