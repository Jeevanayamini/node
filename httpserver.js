const http = require('http');
const { clearScreenDown } = require('readline');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});


server.listen(4000, () => {
    console.log(`Server running at 4000`);
});
