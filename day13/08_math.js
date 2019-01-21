// 08_math.js

//获取圆周率
console.log(Math.PI);

//取绝对值
console.log(Math.abs(-32))

//取整
console.log(Math.ceil(3.1));
console.log(Math.floor(3.9));
console.log(Math.round(3.5));

//获取一组数字的最大值
console.log(Math.max(23, 45, 69, 89, 99, 100));
console.log(Math.min(23, 45, 69, 89, 99, 100));

//计算x的y次幂
console.log(Math.pow(3, 2));

//取随机
console.log(Math.random()); //0~1

console.log(Math.floor(Math.random() * 9));

// while (true) {
// 	if (Math.floor(Math.random() * 9) == 9) {
// 		return;
// 	}
// }

var arr = "abcdefghijklmnopqrstuvwxyz0123456789";
for (var i = 0, newArr = []; i < 4; i++) {
	newArr.push(arr.substr(Math.floor(Math.random() * arr.length), 1));//[0,arr.length)
}
console.log(newArr);

var word = "how are you";
word = word.split(" ");
for (var w in word) {
	word[w] = word[w].substr(0, 1).toUpperCase() + word[w].substr(1).toLowerCase();
}
console.log(word.join(" "));
// var a = [4,4,44,44];
// console.log(a.join(""));
