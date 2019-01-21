// 10_forIn.js

console.log("---------------1------------");

var phone = {
	color: "red",
	size: 5.9,
	brand: "小米"
}

//遍历所有的属性
for (var key in phone) {
	console.log(phone[key]);
}

console.log("---------------2------------");

var user = {
	userName: "Tom",
	password: "123456",
	email: "132543@qq.com",
	phone: "13213245645"
}

for (var u in user) {
	console.log( user[u]);
}