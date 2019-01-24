// user.js

const express = require("express");
var router = express.Router();
router.get("/list",(req,res)=>{
	res.send("这是一个用户路由器哦");
});

module.exports = router;