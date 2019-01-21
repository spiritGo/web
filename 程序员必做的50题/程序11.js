// 程序11.js

// 题目：判断101-200之间有多少个素数，并输出所有素数。

// 质数又称素数。一个大于1的自然数，除了1和它自身外，不能整除其他自然数的数叫做质数；否则称为合数。

for (var i = 101; i <= 200; i++) {
	for (var j = 2, count = 0; j < 200; j++) {
		if (i % j == 0) {
			// console.log(i);
			if (i == j) break;
			count++;
		}
	}
	if (count < 1) console.log(i);
}