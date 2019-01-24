// 03_post_data.js

const express = require("express");
const bodyParser = require("body-parser");
const server = express();
server.listen(8080);

server.use(express.static("public"));
server.use(bodyParser.urlencoded({
	extended: false
	//不使用第三方的qs模块,而是使用querystring模块将查询字符串解析为对象
}));

server.post("/mylogin", (req, res) => {
	console.log(req.body);

	res.send("登录成功");
});