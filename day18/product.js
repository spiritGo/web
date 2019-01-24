// product.js

const express = require("express");
//创建路由器
var router = express.Router();
//往路由器中添加商品模块下的所有路由
router.get("/list",(req,res)=>{
	res.send("这是商品列表");
});
// 导出路由器
module.exports = router;
