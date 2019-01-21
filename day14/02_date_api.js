// 02_date_api.js

// var d1 = new Date("2019/1/16 10:40:50");
// //获取距离计算机元年的毫秒数
// console.log(d1.getTime());
// console.log(new Date(1547606450000));
// console.log(d1.getFullYear());
// console.log(d1.getMonth()); ///0~11
// console.log(d1.getDate()); //天
// console.log(d1.getHours());
// console.log(d1.getMinutes());
// console.log(d1.getSeconds());
// console.log(d1.getMilliseconds());
// console.log(d1.getDay());


var d = new Date("2019/10/5 0:0:0");
var time = "";
var year = d.getFullYear();
var month = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
var day = d.getDate() > 9 ? d.getDate() : "0" + d.getDate();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var week = d.getDay();
switch (week) {
	case 0:
		week = "星期天";
		break;
	case 1:
		week = "星期一";
		break;
	case 2:
		week = "星期二";
		break;
	case 3:
		week = "星期三";
		break;
	case 4:
		week = "星期四";
		break;
	case 5:
		week = "星期五";
		break;
	case 6:
		week = "星期六";
		break;
}

var arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

time = year + "年" + month + "月" + day + "日 " + hour + "时" + minute + "分" + second + "秒 " + week;
console.log(time);

//计算当前距离春节还有多少天？小时？分？秒
var d = new Date("2019/2/5"); //春节
var d1 = new Date();
var time = d.getTime() - d1.getTime();
// var day = time / 1000 / 60 / 60 / 24;
// day = Math.floor(day);
// var hour = time / 1000 / 60 / 60 % 24;
// hour = Math.floor(hour);
// var minute = time / 1000 / 60 % 60;
// minute = Math.floor(minute);
// var second = time / 1000 % 60;
// second = Math.floor(second);
time = Math.floor(time/1000);
var day = Math.floor(time/(24*60*60));
var hour = Math.floor(time%(24*60*60)/3600);
var minute = Math.floor(time%3600/60);
var second = Math.floor(time%60);
console.log(day+"天"+hour+"时"+minute+"分"+second+"秒");



