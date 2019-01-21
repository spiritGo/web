// 程序17.js

// 题目：一个数如果恰好等于它的因子之和，
// 这个数就称为“完数”。例如6=1＋2＋3.编程找出1000以内的所有完数。

function perfect(a) {
	for (var i = 2, res = 1, m = a; i <= m; i++) {
		if (m % i == 0) {
			res += i;
			m /= i;
			i = 1;
		}
	}
	return res==a;
}

for (var i = 1; i < 1000; i++) {
	if (perfect(i)) {
		console.log(i);
	}
}

// console.log(perfect(10));