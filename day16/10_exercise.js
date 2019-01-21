// 10_exercise.js
var qs = require("querystring");
var url = require("url");

var str = "http://www.tmooc.cn:8080/web/1812.html?course=nodejs&cid=6";
str = url.parse(str);
str = qs.parse(str.query);
console.log(str);