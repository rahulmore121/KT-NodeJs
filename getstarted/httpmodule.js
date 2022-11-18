/*Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
To include the HTTP module, use the require() method:
The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
Use the createServer() method to create an HTTP server:*/



// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080



// Add an HTTP Header
// If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});//first argument is status code and second is content type 
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);



//Read the Query String
//The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
//This object has a property called "url" which holds the part of the url that comes after the domain name:

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);//whatever query string is passed by user will be printed
//   res.end();
// }).listen(8080);



//Split the Query String


var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);