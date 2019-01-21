// 08_api.js
var arr = ["Tom", "jerry", "kate"];
console.log(arr.toString());
console.log(arr.join("-"))
var arr1 = ["king", "lucy"];
console.log(arr.concat(arr1));

console.log("---------------------------");

var arr = ["Tom1", "Tom2"];
var arr1 = ["Tom3", "Tom4"];
var arr2 = ["Tom5", "Tom6"];
var bigArr = arr.concat(arr1, arr2);
console.log(bigArr);
console.log(bigArr.toString());
console.log(bigArr.join(" 'u' "));

console.log("---------------------------");

var newi = ["军事", "国际", "时尚", "旅游", "动漫"];
// var str = newi.slice(2);//一个参数截取到最后
// var str = newi.slice(2,3); // [2,3)
var str = newi.slice(-3, -1); //到着数
console.log(str);
console.log("删除", newi.splice(0, 2));

var arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
var new1 = arr.slice(1, 3);
var new2 = arr.slice(-2, -1);
// console.log(new2);
console.log(new1.concat(new2));

var arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
arr.splice(2, 2);
arr.splice(1, 0, "z");
console.log(arr);

//默认是按照Unicode码从小到大排序
var arr = [82, 73, 85, 69, 55, 44, 66, 95, 32, 25, 100];
console.log(arr.sort());
//借助回调函数
var arr = arr.sort(function(a, b) {
	return a - b;
});

console.log(arr.reverse());