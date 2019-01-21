// 程序9.js

// 题目：要求输出国际象棋棋盘。

// console.log("□■");

// for (var i = 0; i < 8; i++) {
// 	for (var j = 0, sum = ""; j < 8; j++) {
// 		if (i % 2 == 1) { //白
// 			if (j % 2 == 1) {
// 				sum += "□";
// 			} else {
// 				sum += "■";
// 			}
// 		} else { //黑
// 			if (j % 2 == 0) {
// 				sum += "□";
// 			} else {
// 				sum += "■";
// 			}
// 		}
// 	}

// 	console.log(sum);
// }

console.log("---------------------改版----------------");

for (var i = 0; i < 8; i++) {
	for (var j = 0, sum = ""; j < 8; j++) {
		if (i % 2 == 1) { //白
			printRect(0);
		} else { //黑
			printRect(1);
		}
	}

	console.log(sum);
}

function printRect(argument) {
	if (j % 2 == argument) {
		sum += "□";
	} else {
		sum += "■";
	}
}