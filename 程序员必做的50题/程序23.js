// 程序23.js

// 题目：利用递归方法求5!。
var res = 1;
function fun(a) {
	if (a == 1) return res;
	res *= a;
	return fun(a - 1);
}

console.log(fun(5));