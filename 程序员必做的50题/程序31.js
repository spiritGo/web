// 程序31.js

// 题目：有一个已经排好序的数组。现输入一个数，要求按原来的规律将它插入数组中。

var arr = [1, 2, 3, 5, 6, 7, 8, 9];

function compare(a) {
	// console.log(arr)
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > a) {
			if (i == 0) {
				arr.unshift(a);
				return arr;
			} else if (arr[i-1] <= a) {
				arr.splice(i-1, 0, a);
				return arr;
			}
		} else if (arr[i] < a) {
			if (i == arr.length - 1) {
				arr.push(a);
				return arr;
			} else if (arr[i+1] >= a) {
				arr.splice(i+1, 0, a);
				return arr;
			}
		}
	}
}
var arr = compare(8);
console.log(arr);