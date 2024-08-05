const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome');
// });

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(5000); // http://localhost:5000/ will display 'Welcome' in the browser

console.log("Server is listening on port 5000...");