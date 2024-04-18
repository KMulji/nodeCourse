const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const userData = require('./routes/users')
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
//allow access to public folder

app.use(userData.route);

app.listen(3000, () => {
    console.log('listening on port 3000');
});




