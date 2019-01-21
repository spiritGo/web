// 07_match.js

var str = "tom是一个程序员，Tom出生在中国，Tom上学的时候经常逃课，Tom还没有女朋友";
// str = str.replace("tom","汤姆");
// str = str.replace("Tom","汤姆");

// console.log(str);

// 正则表达式
// str = str.replace(/tom/gi,"汤姆");
// console.log(str);


console.log(str.match(/tom/gi));
//查找满足条件的第一个下标，找不到返回-1
console.log(str.search(/Tom/));