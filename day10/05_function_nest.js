// 05_function_nest.js

//

function a1() {
	console.log(1);
}

function a2() {
	a1();
}

a2();

function isLeap(year) {
	return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

function getLeap(k, j) {
	for (var i = k, count = 0; i <= j; i++) {
		if (isLeap(i)) count++;
	}
	return count;
}

var s = getLeap(2000,2100);
console.log(s);