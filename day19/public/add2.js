// add.js

const express = require("express");
const mysql = require("mysql");
const bodyParse = require("body-parser");
var server = express();
server.listen(8080);
var pool = mysql.createPool({
	host:"127.0.0.1",
	port:"3306",
	user:"root",
	password:"",
	database:"tedu",
	connectionLimit:20
});

// server.use(bodyParse.urlencoded({
// 	extended:false
// }));

server.use(express.static("public"));

var qs = require("querystring");

server.post("/add",(req,res)=>{
	// pool.query("INSERT INTO emp SET ?",[req.body],(err,data)=>{
	// 	if (err) throw err;
	// 	if (data.affectedRows>0) res.send("插入数据成功"+req.body.eid);
	// 	console.log(data);
	// });
	req.on("data",(bug)=>{
		console.log(qs.parse(bug.toString()));
		res.send(qs.parse(bug.toString()));
	})
	
});