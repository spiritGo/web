// 04_mysql.js

const mysql = require("mysql");
//创建连接--对象
var connection = mysql.createConnection({
	host: "127.0.0.1",
	port: "3306",
	user: "root",
	password: "",
	database: "tedu" //连接成功后要使用的数据库
});
//执行连接--连接成功
connection.connect();
//执行SQL语句

connection.query("SELECT * FROM emp",(err,data)=>{
	if (err) throw err;
	console.log(data);
});

//关闭连接
connection.end();
