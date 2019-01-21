// 程序24.js

// 题目：利用递归函数调用方式，将所输入的5个字符，以相反顺序打印出来。 
var s = "rdsaf";
var len = s.length;
var arr = [];
function fun(s) {
	if (len == 0) return arr.join("");
	len--;
	arr.push(s[len]);
	return fun(s);
}
console.log(fun(s));