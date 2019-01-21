// 程序8.js

// 题目：输出9*9口诀。

for (var i = 1; i <= 9; i++) {
	for (var j = 1, row = ""; j <= i; j++) {
		row += i + "*" + j + "=" + i * j+" ";
	}
	console.log(row);
}