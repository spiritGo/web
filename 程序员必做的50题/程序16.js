// 程序16.js

// 题目：求s=a+aa+aaa+aaaa+aa...a的值，
// 其中a是一个数字。例如2+22+222+2222+22222(此时共有5个数相加)，几个数相加有键盘控制。

function add(a, n) {
	for (var i = 1, ores = 0; i <= n; i++) {
		for (var j = 0, res = ""; j < i; j++) {
			res += a;
		}

		ores += "+"+res;
	}
	return eval(ores);
}

var res = add(3, 5);
console.log(res);