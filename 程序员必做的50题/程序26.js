// 程序26.js

// 题目：给一个不多于5位的正整数，要求：一、求它是几位数，二、逆序打印出各位数字。

var s = 9245;
s = s.toString().split("");
console.log(s.length,s.reverse());