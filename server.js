let http = require('http');

const PORT = 1234;

let httpServer = http.createServer(handleRequest);
httpServer.listen(PORT);
console.log('Server is listening at http://localhost:${PORT}')

/***** */
function handleRequest(req, res){
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.write('Hello world!');
    res.end();
}