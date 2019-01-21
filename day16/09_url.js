// 09_url.js

var str = "http://www.codeboy.com:80/admin/login.html?lid=5&name=dell";
//引入URL模块
const url = require("url");
//将URL解析为对象
str = url.parse(str);
console.log(str)
// str = url.(str);
console.log(str);

var obj1 = {
	protocol:"http",
	hostname:"www.codeboy.com",
	port:80,
	pathname:"/admin/login.html",
	query:{lid:5,name:"dell"}
}

console.log("------------------------");
str = url.format(obj1);
console.log(str);