// break.js

var i = 1;
while (true) {
	if (i > 10)
		break;
	console.log(i);
	i++;
}

var i = 1;
var product = 1;
while (true) {
	if (i > 10) break;
	product *= i;
	i++;
}
console.log(product);

// var result = 5;
// var guess;
// while(true){
// 	guess = prompt(请输入一个数字);
// 	if (result<guess) {
// 		alert("猜大了");
// 	}else if (result>guess) {
// 		alert("猜小了");
// 	}else{
// 		alert("对了，分数+1");
// 		break;
// 	}
// }

var i = 1;
do {
	if (i % 2 == 1) {
		console.log(i);
	}
	i++;
} while (i <= 100);


var i = 1;
sum = 0;
do {
	sum += i
	i++;
} while (i <= 100);
console.log(sum += i);


for (var i = 1, sum = 0; i <= 100; i++) {
	sum += i;
	if (sum > 4000) {
		console.log(sum, i);
		break;
	}
}