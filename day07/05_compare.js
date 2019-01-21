// 05_compare.js

//比较运算符
console.log(2>1);//true

console.log(3==3,3=="3");//true,true	比较值是否相同
console.log(3==="3",3===3);//false,true	比较值和类型是否相同

console.log(3>"10");//false 字符串转成了数值
console.log("3">"10");//true 比较的是Unicode码  51 > 49  true

console.log("3".charCodeAt(),"1".charCodeAt());//51 49
console.log("张无忌">"张翠山");//false

console.log(3>'10a',3<'10a',3=='10a');//'10a'=NaN
console.log('10a'.charCodeAt(),parseInt("10a"));

console.log(3 != "4a");

console.log(Number("10a"));