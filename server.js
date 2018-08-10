//Load HTTP module
const http = require("http");
const port = process.env.PORT || 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, function() {
  console.log(`Server running at ${port}`);
});
