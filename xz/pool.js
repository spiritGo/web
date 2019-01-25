// pool.js

// 连接数据库的模块

const mysql = require("mysql");

//创建连接池对象
var pool = mysql.createPool({
	host:"127.0.0.1",
	port:"3306",
	user:"root",
	password:"",
	database:"xz",
	connection:20
});

//导出连接池对象
module.exports = pool;