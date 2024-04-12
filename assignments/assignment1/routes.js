
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<body><h1>Hello</h1><br><form action="/create-user" method="POST"><input type="text" name="username"><button type ="submit">submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            res.writeHead(302, { 'Location': '/' });
            return res.end()
        });
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<body><ul><li>User 1</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    return res.end()
}

module.exports = requestHandler;