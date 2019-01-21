// 03_date_api.js

//
var d = new Date("2019/1/16 14:34:25");
//三年前
d.setFullYear(d.getFullYear() - 3);
d.setMonth(11);
d.setDate(20);
d.setMilliseconds(888);
//无法设置星期
//设置距离计算机元年的毫秒数
d.setTime(1400000);
console.log(d);

//'2019-1-16 14:49:30'
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

var d = new Date("2019-2-5 10:20:30");
// 拷贝一个Date对象
var d2 = new Date(d);
d.setDate(d.getDate() + 15);
d.setHours(d.getHours() + 8);

console.log(d.toLocaleString());
console.log(d2);

var d = new Date("2018/11/16");
var dq = new Date(d);
dq.setFullYear(dq.getFullYear() + 3);
var xq = new Date(dq);
xq.setMonth(xq.getMonth() - 1);
// xq.getDay() == 0 || xq.getDay() == 6 ? xq.setDate(xq.getDate() - 2) : xq.getDay();
if (xq.getDay() == 0) {
	xq.setDate(xq.getDate() - 2);
} else if (xq.getDay() == 6) {
	xq.setDate(xq.getDate() - 1);
}

console.log("入职时间", d.toLocaleDateString());
console.log("到期时间", dq.toLocaleDateString());
console.log("续签时间", xq.toLocaleDateString(), xq.getDay());