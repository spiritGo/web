// 程序20.js

// 题目：两个乒乓球队进行比赛，各出三人。甲队为a,b,c三人，乙队为x,y,z三人。
// 已抽签决定比赛名单。有人向队员打听比赛的名单。a说他不和x比，c说他不和x,z比，
// 请编程序找出三队赛手的名单。
// 甲队 a,b,c
// 乙队 x,y,z
// a说他不和x比
// c说他不和x,z比

var A = ["a", "b", "c"];
var B = ["x", "y", "z"];
var C = new Array(3);
for (var i in A) {
	for (var j in B) {
		if (B[j] != "x" && B[j] != "z") {
			if (A[i] == "c") C[i] = A[i] + "-" + B[j];
		} else if (B[j] != "x") {
			if (A[i] == "a") C[i] = A[i] + "-" + B[j];
		} else {
			if (A[i] == "b") C[i] = A[i] + "-" + B[j];
		}
	}
}

console.log(C);