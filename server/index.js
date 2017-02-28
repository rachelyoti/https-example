'use strict'

const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');

const app = express();
const directoryToServe = 'client';
const port = 3030;

app.get('/', function(req, res){
  res.send('hello world');
});

const httpsOptions = {
    cert : fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
    key : fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem'))
}

https.createServer(httpsOptions, app)
    .listen(port, function(){
        console.log(`Serving the ${directoryToServe}/ directory on ${port}`);
        console.log(`https://10.222.192.185:${port}`);
    });
