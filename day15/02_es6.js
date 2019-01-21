// 02_es6.js

// 1.块级作用域
{
	//使用let声明的不存在提升
	let a = 1;
	console.log(a)
}

{
	let a = 1;
}

var arr = [5, 4, 6, 3, 7, 8, 4, 6];

arr.sort((a, b) => a - b);
console.log(arr);

var name = "Tom";
var age = 18;
var sex = 1;
console.log(`
	我的姓名是${name}，
	年龄是${age}，
	性别是${sex == 1 ? "男":"女"}
	`);

var emp = {
	name: "Tom",
	sex: "男",
	birthday: "1995-2-10",
	salary: 1000000
}

console.log(`
		姓名：${emp.name}
		性别：${emp.sex}
		生日：${emp.birthday}
		工资：${emp.salary}
	`);