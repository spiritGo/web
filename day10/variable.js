// variable.js

// 程序在执行前，检查当前作用域下使用var声明的变量，把变量声明提升到最前边，
// 赋值还是在原来的位置
console.log(a);
var a = 1;

function fn() {
	//var b;自动提升
	console.log(b);
	var b = 3;
}

fn();

console.log("-----------------2-----------------");

var c = 1;
function fn() {
	// var c;自动提升
	console.log(c);
	c = 5;
}
fn();

console.log("-----------------3-----------------");

var d = 1;
function fn(d){
	d = 3;
	console.log(d); 
}
fn(5);
console.log(d);