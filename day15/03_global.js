// 03_global.js

var a = 1;
console.log(global.a);

function add(){
	console.log(2);
}

global.add();
//结论：文件下的变量和函数不是全局作用域变量