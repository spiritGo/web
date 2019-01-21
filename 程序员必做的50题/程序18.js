// 程序18.js

// 题目：一球从100米高度自由落下，每次落地后反跳回原高度的一半；
// 再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？ 


for (var i = 0, length = 0, height = 0; i < 10; i++) {
	if (i == 0) {
		length = 100;
		height = 100;
	} else {
		height /= 2;
		length += height * 2;
	}

	console.log(length,height);
}


// var a = 5,
// 	b = 4;
// a++;
// b--;
// console.log(++a - b++);
// console.log(++a - b++)

// var foo = "11" + 2 - "1";
// console.log(foo); //111
// console.log(typeof foo); //number