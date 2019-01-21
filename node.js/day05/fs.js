// fs.js
var fs = require("fs");
var http = require("http");
var path = require("path");

http.createServer(function(req,res){

	var fileName = path.join(__dirname,"demo.html");
	fs.readFile(fileName,function(err,data){
		res.end(data);
	});
	
}).listen(8898,function(){
	console.log("");
});