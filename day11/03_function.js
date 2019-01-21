// 03_function.js

//创建函数 -- 函数声明
function add(){
	console.log(1+2);
}

add();

console.log("--------------------2-----------------");

//匿名函数
//把匿名函数放到变量add2中
//此时add2自动成为了函数的名称
//创建函数 -- 函数表达式
var add2 = function() {
	console.log(1+2);
}

add2();

console.log("--------------------3-----------------");

var add2 = function(a,b) {
	console.log(a+b);
}

add2(5,10);

console.log("--------------------4-----------------");

//匿名函数自调用
(function(a,b){//创建时的括号
	console.log(a+b);
})(1,2);
