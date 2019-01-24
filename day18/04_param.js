// 04_param.js

const express = require("express");

//创建web服务器
var server = express();
server.listen(8080);

//商品详情的路由
//get detail
///：lid设置接受数据的名称为lid
server.get("/detail/:lid",(req,res)=>{
	console.log(req.params);
	res.send("这是商品的详情");
});

server.get("/shopping/:lid/:price/:name",(req,res)=>{
	console.log(req.params);
	res.send("这是一辆购物车，已经被装满了");
});
