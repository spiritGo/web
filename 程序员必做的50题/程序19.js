// 程序19.js

// 题目：猴子吃桃问题：猴子第一天摘下若干个桃子，当即吃了一半，还不瘾，又多吃了一个  
// 第二天早上又将剩下的桃子吃掉一半，又多吃了一个。以后每天早上都吃了前一天剩下的一半零一个。
// 到第10天早上想再吃时，见只剩下一个桃子了。求第一天共摘了多少。

for (var i = 0, c = 1; i < 10; i++) {

	c = (c + 1) * 2
	console.log(c);
}
1     10 
4     9
10    8
22    7
46    6
94    5
190   4
382   3
766   2
1534  1
3070

