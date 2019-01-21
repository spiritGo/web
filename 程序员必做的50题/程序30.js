// 程序30.js

// 题目：求一个3*3矩阵对角线元素之和 

// 1 2 3
// 4 5 6
// 7 8 9

for (var i = 1, sum = 0; i <= 9; i++) {
	if (i % 2 == 1) {
		sum+=i;
	}
}

console.log(sum);