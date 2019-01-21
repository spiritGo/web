// 07_2.js

var a = 5;
console.log("我是引入过来的");

function print(){
	console.log("hello");
}

module.exports.b = 2;
module.exports.print = print;

//直接公開出一個函數
module.exports.say = function(){
	console.log("哈哈哈哈哈哈");
}