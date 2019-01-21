// 06_for.js
// while 循环 1~10
var i = 0;

//循环条件
while (i <= 10) {
	console.log(i); //循环体

	i++; //增量
}

//for循环1~10
for (var i = 1; i <= 10; i++) {
	console.log(i);
}

for (var i = 20; i <= 60; i++) {
	if (i % 2 == 1) {
		console.log(i);
	}
}

for (var i = 80; i >= 50;) {
	console.log(i);
	i -= 3;
}


for (var i = 80; i >= 50; i -= 3) {
	console.log(i);
}

var product = 1;
for (var i = 1; i <= 20; i++) {
	if (i % 2 == 0) {
		product *= i;
	}
}
console.log(product);

// var product = 1;
for (var i = 200, product = 1; i <= 400; i++) {
	if (i % 3 == 0) {
		product += i;
	}
}
console.log(product);

console.log("---------------------闰年------------------");

for (var i = 2000; i <= 2100; i++) {
	if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) console.log(i);
}


// 本金10000，每年的利率是3.5%，计算5年后本金和利息一共有多少
var money = 10000;
for (var i = 0; i < 5; i++) {
	console.log("------" + i + "-----");
	money = money * .035 + money;
}
console.log(money);

var money = 10000;
for (var i = 0; i < 5; i++) {
	console.log("------" + i + "-----");
	money *= 1.035;
}
console.log(money);
console.log("-------------------乘法口诀表------------------");

var result = "";
for (var i = 1; i <= 9; i++) {
	for (var j = 1; j <= i; j++) {
		result += i + "*" + j + "=" + i * j + "  ";
	}
	console.log(result);
	result = "";
}