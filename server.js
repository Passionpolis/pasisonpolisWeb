'use strict';

const http = require("http");
const mysql = require('mysql');
const config  = require('./app/config/config.js');

const port = process.env.PORT || 3000;
const connection = mysql.createConnection(config.mysql.connection);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

//Starting the node server
server.listen(port, function() {
  console.log(`Server running at ${port}`);
});
 
//Connection to mysql db
connection.connect(() => {
    console.log("Connected to Mysql");
});

connection.end();

// for regression tests purpose
module.exports = server;
