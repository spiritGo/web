// 02_property.js

var phone  =  {
	color:"red",
	size:6.1,
	brand:"华为"
};

//检测属性是否存在
console.log("color1" in phone);
console.log(phone.hasOwnProperty("color"));
console.log(phone.brand1);//undefined;

