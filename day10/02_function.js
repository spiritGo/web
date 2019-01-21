// 02_function.js

console.log("hello");
console.log("world");
console.log("javascript");

console.log("-----------------function----------------");

function print(str, len) {
	for (var i = 0; i < len; i++) {
		console.log(str);
	}
}

print("hello", 2);

console.log("------------------------------------------");

function sum(i, j,len) {
	for (var k = 0; k < len; k++) {
		console.log(i + j);
	}
}

sum(10,20,20);

function sum1(len) {
	for (var k = 1,sum = 0; k <= len; k++) {
		sum+=k;
	}

	console.log(sum);
}

console.log("-------------------------------------------");

sum1(1000);

function add(...nums){
	for (var i = 0,sum; i < nums.length; i++) {
		sum+=i;
	}

	console.log(sum);
}
add(1,2,3);