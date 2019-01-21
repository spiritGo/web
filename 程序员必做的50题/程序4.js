// 程序4.js

// 题目：输入某年某月某日，判断这一天是这一年的第几天？ 

// var time = "2000-9-09";
// var year = time.split("-")[0];
// var month = parseInt(time.split("-")[1]);
// var day = parseInt(time.split("-")[2]);
// console.log(year, month, day);
// var is_leap = false; //是否闰年
// var year_day = 365;
// var month_day = 30;
// var arr = [];

// if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
// 	is_leap = true;
// } else {
// 	is_leap = false;
// }

// if (is_leap) {
// 	year_day = 366;
// 	month_day = 29;
// }else{
// 	year_day = 365;
// 	month_day = 28;
// }

// switch(month){
// 	case 1:
// 	case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 		month_day = 31;
// 		break;
// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 		month_day = 30;
// 		break;
// 	case 2:
// 		break;
// 	default:console.log("外星人，我们地球只有12个月，请输入1-12的数字");
// }

// for (var i = 1; i <= 12; i++) {
// 	if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
// 		arr.push(31);
// 	} else if (i == 4 || i == 6 || i == 9 || i == 11) {
// 		arr.splice(i, 0, 30);
// 	} else { //2月
// 		if (is_leap) {
// 			arr.splice(i, 0, 29);
// 		} else {
// 			arr.splice(i, 0, 28);
// 		}
// 	}
// }

// console.log(arr);

// for (var i = 0, dayCount = 0; i < month; i++) {
// 	if (i == month - 1) {
// 		dayCount += day;
// 		console.log(dayCount);
// 		break;
// 	}

// 	dayCount += arr[i];
// }

console.log("-------------------精简版------------------");

//分割时间
var time = "2019-9-09";
var year = time.split("-")[0];
var month = parseInt(time.split("-")[1]);
var day = parseInt(time.split("-")[2]);

var is_leap = false; //是否闰年
var dayOfMonth = [];

//闰年判定
is_leap = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;

for (var i = 1; i <= 12; i++) {
	if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
		dayOfMonth.push(31);
	} else if (i == 4 || i == 6 || i == 9 || i == 11) {
		dayOfMonth.splice(i, 0, 30);
	} else { //2月
		if (is_leap) {
			dayOfMonth.splice(i, 0, 29);
		} else {
			dayOfMonth.splice(i, 0, 28);
		}
	}
}

for (var i = 0, dayCount = 0; i < month; i++) {
	if (i == month - 1) {
		dayCount += day;
		console.log(dayCount);
		break;
	}

	dayCount += dayOfMonth[i];
}