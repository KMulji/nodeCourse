const express = require('express');

const app = express();
const port = 3000;


app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
});

app.use((req, res, next) => {
    console.log('in the middleware 2');
    res.send('<h1>Hello World</h1>');
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})