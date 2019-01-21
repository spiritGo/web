// 07_global_function.js

console.log(global.parseInt(3.5));

//一次性定时器
var time = global.setTimeout(function() {
	console.log("一次性定时器");
}, 3000);

//清楚一次性定时器
clearTimeout(time);

var timer = setInterval(function() {
	console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(timer);

var count = 0;
var timer = setInterval(function() {
	console.log("hello");
	count++;
	if (count == 3) {
		console.log("定时结束");
		clearInterval(timer);
	};
}, 1000);

process.nextTick(() => {
	console.log(1);
});
console.log(2);

setImmediate(() => {
	console.log(4);
});
console.log(5);