// 程序28.js

// 题目：请输入星期几的第一个字母来判断一下是星期几，
// 如果第一个字母一样，则继续判断第二个字母。 

// Monday、Tuesday、Wednesday、Thursday、Friday、Saturday、Sunday
function fun(a, w) {
	for (var i in w) {
		if (a[i] != w[i]) return false;
	}
	return true;
}

var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function fun2(w) {
	for (var i = 0; i < week.length; i++) {
		if(fun(week[i],w)) return week[i];
	}
}

console.log(fun2("Sun"));