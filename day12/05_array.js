// 05_array.js

// 数组分类
// 1.以数字作为下标--索引数组
var names = [];
names[0] = 'tom';
names[1] = 'jerry';

// 以字符串作为下标--关联数组
var emp = [];
emp["ename"] = 'kate';
emp["birthday"] = "1995-12-22";
console.log(emp);

//创建一个数组，数组包含三个员工的数据（姓名，性别，生日）
var emp = [{
	ename: "tom",
	birthday: "1995-2-10",
	sex: "male"
}, {
	ename: "lusy",
	birthday: "1995-2-10",
	sex: "famale"
}, {
	ename: "beryr",
	birthday: "1995-2-10",
	sex: "male"
}]

console.log(emp);