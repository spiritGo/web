// 04_dowhile.js


//使用do-while循环1~10

var i = 1;
do{
	console.log(i);
	i++;
}while(i<=10);

console.log(Number("1"));


var i = 200;
var sum = 0;
do{
	if (i%7==0) {
		sum+=i;
	}
	i++;
}while(i<=300);
console.log(sum);

var i = 100;
do{
	console.log(i);
	i-=5;
}while(i>=70);

//练习：声明一个变量保存密码‘123456’，无限循环弹出提示框输入
// 如果正确则弹出“login suc” 结束循环

