// 03_transform.js

//隐式转换
console.log(1+"2",typeof(1+"2"));

console.log(3-500,typeof(3+true),"----44----fffss------545------------------------");

console.log(true+'hello',typeof(true+'hello'));

var a = 3, b = true, c = "tedu";
console.log(a+b+c);	//4tedu
console.log(b+c+a);	//truetedu3
console.log(c+a+b);	//tedu3true

//强制转换
//将任意数据为数值型
var a = Number("1");
console.log(a,typeof(a));
console.log(a+2);//3

var b = Number("1a");
console.log(b,typeof(b));//not a number : NAN

var c = Number(true);
console.log(c);//1

var d = Number(undefined);//NAN
var e = Number(null);//0

console.log(d,e);


console.log('3'-1,typeof('3'-1));
console.log('2a'/5,typeof('2a'/5));
console.log(true-null,typeof(true-null));

var num1 = parseInt("3.9");
console.log(num1);//3

var num3= parseInt("a4");
var num2= parseInt("4a");

console.log(num2,num3);//4 NaN

console.log(parseInt(true));//NaN

var num5 = parseFloat("3.9");
console.log(num5);//3.9

var num6 = parseFloat("4.5a");
console.log(num6);//4.5

var num7 = parseFloat("a4.5");
console.log(num7);//NaN

var num8 = parseFloat("4a");
console.log(num8);//4

var a = 2;
a= a.toString();
console.log(a,typeof(a));

var num10 = 255;
num10 = num10.toString(16);//转为字符串的同事设置进制
console.log(num10);
