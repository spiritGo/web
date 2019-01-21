// 程序13.js

// 题目：利用条件运算符的
// 嵌套来完成此题：学习成绩&gt;=90分的同学用A表示，60-89分之间的用B表示，6 0分以下的用C表示。

var score = 80;
score = parseInt(score/10);
switch(score){
	case 10:
	case 9:
		console.log("A");
		break
	case 8:
	case 7:
	case 6:
		console.log('B');
		break;
	default:
		console.log("c");
}