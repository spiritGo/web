// 02_recursion.js

var sum = 0;

function getSum(argument) {
	sum += argument;
	argument--;
	if (argument < 1) return sum;
	getSum(argument);


}

console.log(getSum(3));

console.log("----------------------2-------------------");

function getSum(argument) {
	if (argument == 1) {
		return 1;
	}

	return argument + getSum(argument - 1);
}

console.log(getSum(100));

console.log("----------------------3-------------------");

function product(a) {
	if (a == 1) {
		return 1;
	}

	return a * product(a - 1);
}

console.log(product(3));

console.log("----------------------4-------------------");

function product(a) {
	return a == 1 ? 1 : a * product(a - 1);
}

console.log(product(10));

console.log("----------------------5-------------------");

//斐波那契数列

// 1 1 2 3 5 8 13 21 34 55 89

//1

function fun1(n) {
	return (n == 1 || n == 2) ? 1 : fun1(n - 1) + fun1(n - 2);
}

console.log(fun1(36));

console.log("----------------------6-------------------");

// n n - 1 n - 2


function fun2(n) {
	var index = 1;
	var a = 1;
	var b = 1;
	var s = 1;

	do {
		if (index == 1 || index == 2) s = 1;
		s = a + b;//2
		a = b;//1
		b = s;//2
		index++;
	} while (index <= n-2)
	console.log(s);
}

fun2(6);

console.log("----------------------7-------------------");


var oddSum = function(n) {
	for (var i = 1, sum = 0; i <= n; i++) {
		if (i % 2 == 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(oddSum(6));