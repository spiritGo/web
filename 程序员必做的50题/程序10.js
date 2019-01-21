// 程序10.js

// 题目：古典问题：有一对兔子，从出生后第3个月起每个月都生一对兔子，
// 小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问每个月的兔子总数为多少？
// month  1   2   3   4   5   6   7   8   9   10
// count  1   1   2   3   5   8   13  21  34  55

// function fun1(n) {
// 	if (n==1||n==2) return 1;
// 	return fun1(n-1)+fun1(n-2);
// }

// console.log(fun1(10));

console.log("----------------------do-while------------------");
// month  1   2   3   4   5   6   7   8   9   10
// count  1   1   2   3   5   8   13  21  34  55

function isFeiBoNaQi(n, dest) {

	var findMode = typeof(dest) == "undefined";
	console.log("是否查询index对应的斐波那契数列："+findMode);
	var _before = 1;
	var before = 1;
	var i = 1;
	var sum = 0;
	do {
		if (i == 1 || i == 2) {
			sum = 1
		} else {
			_before = before; //1 1 2
			before = sum; //1 2 2 3
			sum = _before + before; //2 3 5
		};

		if (!findMode) {
			if (sum == dest) {
				console.log("斐波那契数列"+dest+"对应的index是："+i);
				break;
			} else {
				if (n == dest) return console.log("对不起，查无此数");

				n++;
			}

		} else {
			if (i==n) console.log(i+"对应的斐波那契数列："+sum);
		}
		i++;
		// console.log(n);
		// console.log(sum);
		// sum == dest ? console.log(i) : n++;

	} while (i <= n);
}

//随便输入一个数字，判断是否是斐波那契数列
isFeiBoNaQi(6);