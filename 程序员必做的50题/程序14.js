// 程序14.js

// 题目：输入两个正整数m和n，求其最大公约数和最小公倍数。 

// 公约数，亦称“公因数”。它是一个能被若干个整数同时均整除的整数。如果一个整数同时是几个整数的约数，称这个整数为它们的“公约数”；
// 公约数中最大的称为最大公约数。对任意的若干个正整数，1总是它们的公因数。

// var one = [2, 3, 4, 6];
// var two = [1, 2, 3, 4];

// console.log(one.contains(two));

// 4 6
//公倍数
function fun1(a, b) {
	for (var i = 1; i <= a; i++) {
		for (var j = 1; j <= b; j++) {
			if (i * b == j * a) return i * b;
		}
	}
}

var x = fun1(4, 8);
console.log(x);

//最大公约数
function fun2(a, b) {
	for (var i = a; i >= 1; i--) {
		if (a % i == 0 && b % i == 0) {
			return i;
		}
	}
}

var y = fun2(12, 4);
console.log(y);

// function intersect(a,b){
// 	a.each(function(e){
// 		console.log(e);
// 	});
// }

// intersect(one, two);