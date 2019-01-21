// 05_if.js

var total = 28;
//判断是否满30，如果满30就减25
if (total>=30) {
	total-=25;
}

console.log(total);


// 练习：生命变量保存年龄，如果年龄超过50，在原来的基础上减5岁，打印年龄
var age = 50;

if (age>=50) {
	age-=5;
}
console.log(age);

var uname = "root";
var upwd = "123456";
if (uname == "root" && upwd == "123456") {
	console.log("登录成功");
	console.log("欢迎");

}

if ("") {
	console.log(1);
}

str=""
if(!str){
	console.log("这家伙很懒，什么也没留下");
}console.log(str);