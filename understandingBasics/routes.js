const fs = require('fs')
const requestHandler = (req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type ="submit">submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.writeHead(302, { 'Location': '/' });
                return res.end();
            });

        });


    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    return res.end()
}

module.exports = {
    handler: requestHandler,
    text: 'some text'
};