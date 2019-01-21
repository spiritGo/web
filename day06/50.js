// 程序员必做的50道题.js


// 1.题目:有1、2、3、4个数字,能组成多少个互不相同且无重复数字的三位数?都是多少?
for (var i = 1; i <= 4; i++) {
	for (var j = 1; j <= 4; j++) {
		if (j==i) continue;
		for (var k = 1; k <= 4; k++) {
			if (k==i||k==j) continue;
			console.log(i,j,k);
		}
	}
}