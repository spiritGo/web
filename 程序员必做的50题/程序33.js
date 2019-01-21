// 程序33.js

// 题目：打印出杨辉三角形（要求打印出10行如下图） 


// 杨辉三角第n行的第1个数为1，
// 第二个数为1×(n-1)，
// 第三个数为1×(n-1)×（n-2）/2，
// 第四个数为1×(n-1)×（n-2）/2×（n-3）/3…依此类推。
//3 2
function fun(row, n) {
	for (var i = 1, res = 1; i < n; i++) {
		res *= (row - i) / i;
	}
	return res;
}

// console.log(fun(4,3));

// 每一行设为m行, 每行上面的某个元素, 设为第n个元素

//    2) 每一行上面, 第一个元素为1, 最后一个元素为1

//    3) 第m行上面, 有m个元素

//    4) 第m行上面的第n个元素的值, 等于第m - 1 行上面第n个元素与第m - 1 行上面第n - 1 个元素的值的和

//       用排列组合公式表示为： C(m, n) = C(m - 1, n) + C(m - 1, n - 1)

// 1  
// 1  1  
// 1  2  1  
// 1  3  3  1  
// 1  4  6  4  1  
// 1  5  10  10  5  1 

// function Combination(m, n) {
// 	if (n == 0) return 1; //每行第一个数为1
// 	else if (m == n) return 1; //最后一个数为1
// 	//其余都是相加而来 
// 	else return Combination(m - 1, n - 1) + Combination(m - 1, n);
// }

// function Pascal(n) { //杨辉三角,N为行数 
// 	for (var i = 0; i < n; i++) { //一共N行
// 		for (var j = 0, res = ""; j <= i; j++) { //每行数字的个数即为行号、例如第1行1个数、第2行2个数
// 			res += Combination(i, j) + "  ";
// 		}
// 		console.log(res);
// 	}
// }

// Pascal(6);
var n = 6;
for (var i = 1; i <= n; i++) {
	for (var j = 0, res = ""; j < i; j++) {
		if (j == 0 || j == i - 1) res += " " + 1
		else res += " " + fun(i, j + 1);
	}
	console.log(res);
}