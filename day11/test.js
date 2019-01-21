// test.js
// 1 A 输 B   C 
// 2 B 输 A   C
// 3 C 输 A   B
// 4 A 输 B   C
// 5 B 输 A   C
// 6 C 输 A   B
// 7 A 输 B   C
// 8 B 输 A   C 
// 9 C 输 A   B
// BABCABCAB

// for(var i=0;i<30;i++){
// 	console.log("---------"+i+"--------")
// 	for (var j = i+1,sum = 0; j <= i+7; j++) {
// 		if (j>30) return;
// 		sum+=j
// 		// console.log(j);
// 	}
// 	console.log(sum);
// 	console.log("---------"+i+"--------")
// }

// c    m    e    z
// 语文 数学 英语 政治
// 任意三门平均分 81 83 75 79

// c+m+e 81 m+e+z c+e+z
// c+e+z 83
// c+m+z 75
// m+e+z 79

// z-m = 6
// e-m = 24
// e-z = 18
// e-c = 12
// c-m = 12

// 2、某人在一次期中考试时，语文、数学、英语和政治四门课，
// 任意三门课的成绩的平均分别为81分、83分、75分和79分，那么其在这次考试中成绩最好的一门课得了多少分?

// var arr = [81, 83, 75, 79];
// for (var i = 1; i <= 4; i++) {
// 	for (var j = 1; j <= 4; j++) {
// 		for (var k = 1; k <= 4; k++) {
// 			if (i==j||i==k||j==k) continue;
// 			console.log(i,j,k);
// 		}
// 	}
// }

var circle = {
	r: 20,
	PI: 3.14,
	getLength: function() {
		return this.PI * this.r * 2
	},
	getArea: function() {
		return this.PI * this.r * this.r
	}
}

console.log(circle.getLength());
console.log(circle.getArea());