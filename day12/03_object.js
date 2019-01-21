// 03_object.js

var person = {
	name: 'tom',
	age: 18
}

//把person对象的地址赋值给了person2
//两个变量指向同一个对象
var person2 = person;
console.log(person2,'改之前');
person.age = 20;
console.log(person2,'改之后');

console.log(person2,'改之前');
person2.age = 26;
console.log(person,'改之后');

//释放（销毁）堆内存中的数据
///只要堆内存中的数据没有被地址所引用，则就会自动销毁
person = null;
person2 = null;


