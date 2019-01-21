// 09_object.js

console.log("---------------1--------------");

var car = new Object();

console.log(car);

car.color = "red";
car.brand = "兰博基尼";
car.size = "122";

console.log(car);


console.log("---------------2--------------");

//练习：使用内置构造函数创建一个书对象，属性有标题，作者，出版社，。出版时间。价格

var book = new Object();

book.title = "三国演义";
book.author = "罗贯中";
book.publish="人民出版社";
book["publish time"] = "2019-2-10";
book.price = "￥23";
console.log(book);

console.log("---------------3--------------");
