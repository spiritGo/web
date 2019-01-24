// 05_http_server.js

var http = require("http");

var server = http.createServer();
server.listen(8081, () => {
	console.log("服务器创建成功");
});

server.on("request", (req, res) => {
	// console.log(req.url);
	// console.log(req.method);
	// res.writeHead(302,{Location:"http://www.baidu.com",Server:"wsmmd"});
	// res.writeHead(200,{Location:"http://www.baidu.com",Server:"sprite"});
	// res.write(req.url);
	// console.log(req.url);
	// if (req.url === "/list") {
	// 	res.write("this is list");
	// } else if (req.url === "/search") {
	// 	res.writeHead(302, {
	// 		Location: "http://www.tmooc.cn/",
	// 		Server: "sprite"
	// 	});
	// }
	
	res.end();
	//当请求的url为/list,响应一行文本“this is list”,当请求的url为search，跳转http://www.tmooc.cn

});