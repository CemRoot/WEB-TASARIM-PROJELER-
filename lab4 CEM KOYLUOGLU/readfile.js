const http = require('http');
const fs = require('fs');
const path = require('path');

const drawPage = (filePath, response) => {
    fs.exists(filePath, function(exists){
        if (exists) {        
          fs.createReadStream(filePath).pipe(response);
        } else {
          response.writeHead(400, {"Content-Type": "text/plain"});
          response.end("ERROR File does not exist");
        }
      });
}

module.exports = drawPage