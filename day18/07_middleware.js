// 07_middleware.js

const express = require("express");

var server = express();
server.listen(8080);

//拦截登录的路由
server.use("/login",(req,res,next)=>{
	console.log("验证了登录");
	next();
});

server.get("/login",(req,res)=>{
	res.send("这是登录的页面");
});

server.get("/reg",(req,res)=>{
	res.send("这是注册的页面");
});

var num = 0;
server.use("/view",(req,res,next)=>{
	num++;
	next();
	console.log(num);
});

server.get("/view",(req,res)=>{
	res.send(num.toString());
});