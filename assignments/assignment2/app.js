const express = require('express');


const port = 3000;
const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1>Users page</h1>')
});

app.use('/', (req, res, next) => {
    res.send('<h1>home page</h1>');
});

app.listen(port, () => {
    console.log(`listening on ${port}`)
})