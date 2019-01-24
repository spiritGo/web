// exersice.js

const express = require("express");
var server = express();
server.listen(8080);
var qs = require("querystring");

server.get("/verify", (req, res) => {
	res.sendFile(__dirname + "/vertify.html");
});
var result = "";

server.use("/result", (req, res, next) => {
	// res.send("结果验证中，请您稍等");
	req.on("data", (buffer) => {
		var id = qs.parse(buffer.toString()).vertify.toString();
		// 360731199502108931
		result = id.substr(6, 4) + "年" + id.substr(10, 2) + "月" + id.substr(12, 2) + "日" + (id.substr(-2, 1) % 2 == 1 ? "男" : "女");
	});
	next();
});
server.post("/result", (req, res) => {
	res.send(result);
});