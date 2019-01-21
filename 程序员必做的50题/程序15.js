// 程序15.js

// 题目：输入一行字符，分别统计出其中英文字母、空格、数字和其它字符的个数。

function getcount(s) {
	var count = {
		char: 0,
		num: 0,
		blank: 0,
		other: 0
	}
	count.char = s.match(/[abcdefghijklmnopqrstuvwxyz]/ig).length;
	count.num = s.match(/[0123456789]/ig).length;
	count.blank = s.match(/[ ]/ig).length;
	count.other = s.length - count.char - count.num - count.blank;
	return count;
}

var count = getcount("fafafd45456   adf'+");
console.log(count.char, count.num, count.blank,count.other);