// fsRequire.js

var http = require("http");

// http.createServer("request",function(req,res){
// 	res.setHeader("content-type","text/plain");
// 	res.end("hello world");

// }).listener(7777);

const server = http.createServer((req, res) => {
	// res.setHeader('Content-Type', 'text/html');
	// res.setHeader('X-Foo', 'bar');
	// res.writeHead(200, {
	// 	'Content-Type': 'text/plain'
	// });
	res.end('ok');
});