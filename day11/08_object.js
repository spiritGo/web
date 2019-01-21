// 08_object.js

// 创建一个手机对象
var phone = {
	color: "黑色",
	size: "5.9",
	"brand": "华为",
	"made-in": '中国'

};
console.log(phone);

var dempt = {
	demptId: 20,
	demptName: "人事部"
};

var emp = {
	oId: 20,
	name: "Tom",
	sex: "男",
	birthday: "2-10",
	salary: 1000000,
	demptId: 20
}

console.log(dempt.demptName, emp["name"]);

emp.salary +=20000;
emp.addr="beijing";
console.log(emp);