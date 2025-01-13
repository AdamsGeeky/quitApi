const http = require('http');

// get request
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello, World! from the Server');
// });

// post request
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('Body: ', body);
            res.end('ok');
        });
    }
}


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});