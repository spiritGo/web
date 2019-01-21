// 05_console.js

global.console.log("nodejs");
global.console.error("nodejs");
global.console.warn("nodejs");
global.console.info("nodejs");

global.console.time("");
var i = 0;
while (i < 1000000000) {
	i++;
}

global.console.timeEnd("");

console.time("for");
for (var i = 0; i < 100000; i++) {}
console.timeEnd("for");

console.time("do-while");
var i = 0;
do {i++} while (i < 100000);
console.timeEnd("do-while");

console.time("while");
var i = 0;
while (i < 100000) {i++}
console.timeEnd("while");