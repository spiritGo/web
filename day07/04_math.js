// 04_math.js

//算数运算符
//取余
console.log(3%2);///1

console.log(-3%2);///-1

console.log(2%3);///2

//自增	++
var i=1;
i++;
console.log(i);//2

console.log(i++);//2	先打印i再自增
console.log(++i);//4	先自增再打印

var b=3;
console.log(b++ + ++b);//8 先拿出b的值3，然后在执行自增，此时内存b=4,然后拿出b的值b=4自增，自增后变成了5，然后在拿出来准备运算

console.log(++b + b++)//12 6+6
