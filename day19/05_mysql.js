// 05_mysql.js

const mysql = require("mysql");
const express = require("express");

var server = express();
server.use(express.static("public"));
//创建连接池对象
var pool = mysql.createPool({
	host:"127.0.0.1",
	port:"3306",
	user:"root",
	password:"",
	database:"tedu",
	connectionLimit:20
});

// pool.query("DELETE FROM dept WHERE did = 40",(err,data)=>{
// 	if (err) throw err;
// 	console.log(data);
// });

// pool.query("SELECT * FROM dept",(err,data)=>{
// 	if (err) throw err;
// 	console.log(data);
// });

//返回对象,通过affectedRows来判断是否更改成功
//使用站位符(?):防止SQL注入
// pool.query("UPDATE dept SET dname = ? WHERE did = ?",["人力部",30],(err,data)=>{
// 	if (err) throw err;
// 	console.log(data);
// });

// pool.query("INSERT INTO dept VALUES(?,?)",[1,"运营部"],(err,data)=>{
// 	if (err) err;
// 	console.log(data)
// });

var deptObj = {
	did:2,
	dname:"财务部"
}

pool.query("INSERT INTO dept SET ?",[deptObj],(err,data)=>{
	if (err) throw err;
	console.log(data);
});
