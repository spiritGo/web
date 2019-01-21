// 04_number.js

var n = new Number(true);
console.log(n+2);
console.log(typeof(n));

var n2 = Number("10a");
console.log(n2);

//
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//保留小数点后n位
var num1 = 0.1+0.2;
console.log(num1.toFixed(1));