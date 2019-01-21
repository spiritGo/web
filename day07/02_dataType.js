// 02_dataType.js

// 十进制
// 0 1 2 3 4 5 6 7 8 9 10
// 八进制
// 0 1 2 3 4 5 6 7 10 11 12 13 14 15
var num2 = 012;

// 十六进制
// 0 1 2 ... 9 a b c d e f 10 
var num3 = 0x10;

var num4 = 1234.56;

// 1.23456*10^3
var num5 = 1.23456E3;//指数 E 可大小写

// 0.0000034
var num6 = 3.4e-6; 

console.log(num2,num3,num5);

var str =10;
console.log(typeof(str));

console.log("华".charCodeAt());

console.log("a".charCodeAt());

console.log(typeof(true));

var ename;
console.log(ename,typeof(ename));

//检测类型 返回'object'
var student = null;

console.log(student,typeof(student));