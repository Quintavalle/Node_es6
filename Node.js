const http = require('http');

const server = http.createServer((req, res) => {
    const jsonResponse = JSON.stringify({ location: "Mars" });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', jsonResponse.length);
    res.end(jsonResponse);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
