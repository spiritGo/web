// 03_two_array.js

var pro = ["北京", "天津", "广东", "四川"];
var city = [
	["海淀区", "西城区", "东城区", "朝阳区"],
	["和平区", "河东区", "河西区", "南开区"],
	["广州", "深圳", "佛山", "惠州"],
	["成都", "南充", "广安", "眉山"]
];

for(var p in pro){
	console.log("---------------"+pro[p]+"-------------");
	console.log(city[p]);
	console.log();
}