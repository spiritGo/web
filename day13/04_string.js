// 04_string.js

//将任意个数据包装成字符串对象
var s = new String(1);
console.log(typeof(s));
console.log(s+2);

console.log(s.charCodeAt());//49

var s2 = String(2);
console.log(s2);
console.log(typeof(s2));
console.log("it's a dog");
console.log('it\'s a dog');
console.log("a \t b");
console.log("welcome to chi\\na");
console.log("@".length);