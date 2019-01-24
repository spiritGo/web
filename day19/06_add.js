// 06_add.js

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
var pool = mysql.createPool({
	host: "127.0.0.1",
	port: "3306",
	user: "root",
	password: "",
	database: "tedu",
	connectionLimit: 20
});

var server = express();
server.use(express.static("public"));
server.listen(8080);

server.use(bodyParser.urlencoded({
	extended: false
}));

server.get("/add", (req, res) => {
	pool.query("INSERT INTO dept SET ?", [req.query], (err, data) => {
		if (err) throw err;
		if (data.affectedRows>=1) res.send("添加数据成功:"+req.query.did+","+req.query.dname);
	});
});