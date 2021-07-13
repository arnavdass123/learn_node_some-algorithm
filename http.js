const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world form node js')
        res.end();
    } else {
        res.write('hello you are another domain')
    }
})

server.listen('3000')