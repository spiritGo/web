// user.js

const express = require("express");
var router = express.Router();

router.get("/detail",(req,res)=>{
	res.send("这是用户的详情");
});

module.exports = router;