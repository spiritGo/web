// 程序22.js

// 题目：求1+2!+3!+...+20!的和 

function fun(a) {
	for (var i = 2, res = 1; i <= a; i++) {
		res *= i;
	}
	// console.log(res);
	return res;
}

for (var i = 2, sum = 0; i <= 20; i++) {
	sum+=fun(i);
}

console.log(sum);