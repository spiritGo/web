// 04_array.js

var arr = new Array();
arr.push("我是一个数组对象", "我所属的是字面量数组", "我是...", 1, false, undefined, null, 9 * 9);
console.log(arr);

var score = [80, 90, 100, 120, 129, 137, 140, 148, 150];
console.log(score[0]);
score[9] = 180;
console.log(score);

var ball = new Array(5); //自动自增
ball[0] = "大前锋";
ball[1] = "中锋";
ball[2] = "小前锋";
ball[3] = "控球后卫";
ball[4] = "得分后卫";
console.log(ball);

//创建数组，保存4门课程
var project = new Array();
project[0] = 90;
project[1] = 100;
project[2] = 130;
project[3] = 140;
console.log(project.length);
console.log("--------------------------------");

var nation = new Array();
nation[nation.length] = '中国';
nation[nation.length] = '法国';
nation[nation.length] = '美国';
nation[nation.length] = '俄罗斯';
console.log(nation[nation.length - 1]);