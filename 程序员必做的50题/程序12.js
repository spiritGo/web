// 程序12.js
// 题目：打印出所有的“水仙花数”，所谓“水仙花数”是指一个三位数，其各位数字
// 立方和等于该数本身。例如：153是一个“水仙花数”，因为153=1的三次方＋5的三次方＋3的三次方。 

// var i = 100;
// var ge = 0;
// var shi = 0;
// var bai = 0;
// while (i <= 999) {
// 	bai = parseInt(i / 100);
// 	shi = parseInt((i - bai* 100)/10);
// 	ge = i - shi * 10 - bai* 100;
// 	// console.log(bai, shi, ge);
// 	if (bai*bai*bai+shi*shi*shi+ge*ge*ge == i) console.log(i);
// 	i++;
// }

console.log("--------------------改版------------------");

var i = 100;
var b = 0;
while (i <= 999) {
	b = i.toString().split("")
	if (Math.pow(b[0], 3) + Math.pow(b[1], 3) + Math.pow(b[2], 3) == i) 
		console.log(i);
	i++;
}