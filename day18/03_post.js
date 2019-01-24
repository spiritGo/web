// 03_post.js

var express = require("express");
var server = express();
const qs = require("querystring");
server.listen(8080);
server.get("/register", (req, res) => {
	//准备注册页面，并响应给浏览器
	res.sendFile(__dirname + "/register.html");
	// res.send(req.query);
	console.log(req.query);
});

// 根据表单请求的方法和请求的URL写对应的路由

server.get("/myreg",(req,res)=>{
	res.send("注册用户成功，用户名为："+req.query.username);

});

server.post("/mylogin",(req,res)=>{
	res.send("登陆成功");
	req.on("data",(buffer)=>{
		var data = qs.parse(buffer.toString())
		console.log(data);
	})
});
