// 程序5.js

// 题目：输入三个整数x,y,z，请把这三个数由小到大输出。 

var i = 112;
var j = 9;
var k = 100;

// console.log("---------------初级版-------------");

// var temp = 0;
// if (i > j) {
// 	temp = i;
// 	i = j;
// 	j = temp;
// }

// if (j > k) {

// 	temp = k;
// 	k = j;
// 	j = temp;
// 	if (i > j) {
// 		temp = i;
// 		i = j;
// 		j = temp;
// 	}
// }

console.log(i, j, k);
console.log("---------------版本二-------------");

var arr = [];
arr.push(i, j, k, 10);

var temp = 0;
for (var i = 0; i < arr.length; i++) {
	for (var j = i+1; j < arr.length; j++) {
		if (arr[i] > arr[j]) {
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}
console.log(arr);