const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const mainRouter = require('./routes/main');
const userRouter = require('./routes/users');

const port = 3000;
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`listening on ${port}`);
})