// 11_fs.js

const fs = require("fs");
//查看文件的状态
fs.stat("node_modules", function(err, state) {
	if (err) {
		throw err;
	}
	console.log(state, state.isFile(), state.isDirectory());

});

console.log("-------------------------------");

var res = fs.statSync("node_modules");
console.log(res.isFile());

var foo = 1;

function f() {
	console.log(foo); //1
	var foo = 2;
	console.log(foo);
}

f();