// 11_method.js

var person = {
	name: "Tom",
	age: 20,
	sex: "男",
	//方法对应的是一个函数
	say: function() {
		console.log("hello world,I'm " + this.name + " this year,I was " + this.age)
	}
}

person.say();