// 02_express_router.js

var express = require("express");
var server = express();
server.listen(8080);
var path = require("path");

//路由	
//请求的方法get，请求的url：/list
// server.get("/list",(req,res)=>{
// 	console.log("req,res");
// });

// 练习：创建路由，请求方法为get，请求url为/login,打印“有一个用户登录”

// server.get("/login",(req,res)=>{
// 	console.log("有一个用户登录");
// 	// console.log(req)
// 	res.send(`这是一个登陆页面<br>hello`);

// });

// server.get("/login",(req,res)=>{
// 	// res.sendFile(__dirname+"/list.html");
// 	res.redirect("http://www.tmooc.cn")

// });

server.get("/index",(req,res)=>{
	res.send("这是首页");
});

server.get("/login",(req,res)=>{
	res.sendFile(__dirname+"/list.html");
});

server.get("/study",(req,res)=>{
	res.redirect("http://www.codeboy.com");
});

server.get("/",(req,res)=>{
	res.redirect("/index");
	// console.log(req.method);
	// console.log(req.url);
	// console.log(req.headers);
	console.log(req.query);
});