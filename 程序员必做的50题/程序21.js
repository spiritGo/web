// 程序21.js

// 题目：有一分数序列：2/1，3/2，5/3，8/5，13/8，21/13...求出这个数列的前20项之和。

function fun(n){
	if (n==0||n==1) return 1;
	return fun(n-1)+fun(n-2);
}

for (var i = 0,res = 0; i < 20; i++) {
	res += fun(i+2)/fun(i+1);
}

console.log(res);