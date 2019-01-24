// 06_middleware.js

const express = require("express");
var server = express();
server.listen(8080);

//使用中间件对数据进行验证
server.use((req,res,next)=>{
	//在中间件也可以拦截到请求，并作出响应
	console.log(req.method);
	// res.send("你是外星人");

	//继续下一步
	next();
});

server.use((req,res,next)=>{
	console.log("欢迎光临");
	next();
});



//注册路由--主要的业务逻辑
server.get("/reg",(req,res,next)=>{
	res.send("注册成功");
	next();
});

server.get("/list",(req,res)=>{
	res.send("这是商品列表");
});


//记录到日志
server.use((req,res)=>{
	console.log("记录到日志了");
});