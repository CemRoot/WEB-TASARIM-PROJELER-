const http = require('http');
const fs = require('fs');
const path = require('path');
const readFile = require('./readfile')

http.createServer(function (request, response) {
    // console.log('request ', request.url);
    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    readFile(`./pages/${filePath}`, response)

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');