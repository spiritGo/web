// main.js

var fs = require("fs");

fs.readFile("C:\\Users\\web\\Desktop\\正式班01\\node.js\\day01\\input.txt",function(err,data){
	if (err) return console.error(err);
	console.log(data.toString());
});

console.log("程序执行结束");