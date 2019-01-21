// 08_function_scop.js

function fn1() {
	console.log(1);
}

fn1();

function fun() {

	console.log("abc");
	fn1();
}

fun();

console.log("-------------------2------------------");

function fn1() {
	console.log(1);
	// 函数作用域下创建的函数
	// 只能在当前作用域下调用
	function fn2() {
		console.log(2);
	}

	fn2();
}

fn1();

console.log("-------------------3------------------");

var a = 1;

function fn1() {
	function fn2() {
		function fn3() {
			console.log(a);
		}
		fn3();
	}
	fn2();
}
fn1();

console.log("-------------------4------------------");

// 函数提升：在程序执行前，检查使用function关键字创建的函数，提升到所在作用域的最前面
add(2, 3);

function add(i, j) {
	console.log(i + j);
}

console.log("-------------------5------------------");


function factorial(n) {
	for (var i = n; i >= 1; i--) {

	}
}

function fun1(n) {
	for (var i = n, f = 1; i >= 1; i--) {
		f *= i
	}
}

fun1(3);