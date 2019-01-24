// 04_http_server.js

var http = require("http");
//创建web服务器
// var server = http.createServer((req,res)=>{
// 	req.setHeader({"Content-Type":"text/html charset=utf-8"});
// 	res.end("<h1 style=\"color:red\">小了白了兔，白了又了白，两了只了耳了朵了竖了起了来</h1>");
// });
//分配端口,监听8888端口
var server = http.createServer();
server.listen(8888,()=>{
	console.log("http://127.0.0.1:8888");
});

//接受浏览器的请求
//当有请求发生的时候，自动执行
server.on("request",(req,res)=>{
	// console.log("有一个请求发生");
	console.log(req.url);
	console.log(req.method);
	// console.log(req.headers);
});