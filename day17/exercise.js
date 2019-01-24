// exercise.js

// 练习：使用http模块创建web服务器，根据请求的url响应不同的内容
// 	/login  响应文本this is login page
// 	/index  响应文本this is home page
// 	/study  跳转到学子商城
// 	/       跳转到/index
// 	如果以上都没有  跳转到/notfound
// 	/notfound  响应文本  404 not found

var http = require("http");
var server = http.createServer();
server.listen(8080, () => {
	console.log("创建服务器成功");
});

server.on("request", (req, res) => {
	switch (req.url) {
		case "/login":
			res.write("this is login page");
			break;
		case "/index":
			res.write("this is index page");
			break;
		case "/study":
			res.writeHead(302, {
				Location: "http://www.codeboy.com",
				Server: "sprite"
			});
			break;
		case "/notfound":
			res.write("404 not found");
			break;
		case "/":
			res.writeHead(302, {
				Location: "http://127.0.0.1:8080/index",
				Server: "sprite"
			});
			break;
		default:
			res.writeHead(302, {
				Location: "http://127.0.0.1:8080/notfound",
				Server: "sprite"
			});
	}
	res.end();
});