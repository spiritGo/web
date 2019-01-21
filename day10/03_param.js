// 03_param.js

//计算任意两个数字相加

function add(i, j) {
	console.log(i + j);
}

add(10, 50);

console.log("--------------------------");

function getSum(len) {
	for (var i = 1, sum = 0; i <= len; i++) {
		sum += i;
	}
	console.log(sum);
}

getSum(100);

console.log("---------------------------");

function getLeap(i, j) {
	for (var k = i, count = 0; k <= j; k++) {

		if (k % 4 == 0 && k % 100 != 0 || k % 400 == 0) {
			count++;
		}k
		// console.log(i);
	}
	console.log(count);
}

getLeap(2000,2100);
// getLeap(2100,2200);