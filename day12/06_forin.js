// 06_forin.js

var preson = ["Tom", "jerry", "kate", "king"];
var person = {
	"ename": "Tom",
	"age": 20
};

for (var a in preson) {
	console.log(preson[a]);
}

for (var i = 0; i < preson.length; i++) {
	console.log(preson[i]);
}

var phone = new Array();
phone["color"] = "red";
phone["size"] = 6.1;
phone["brand"] = "魅族";
console.log(phone);
for (var p in phone) {
	console.log(phone[p]);
}

var score = [100, 101, 102, 103, 102];
for (var s in score) {
	score[s] += 10;
}
console.log(score);

var cars = ["兰博基尼", "劳斯莱斯", "宝马", "路虎", "宾利"];
for (var i = 0; i < cars.length; i++) {
	cars[i] = cars[i] === "宝马" ? "BMW" : cars[i];
}

console.log(cars);

var emp = [80, 90, 60, 10, 12];

function getTotal(emp) {
	var sum = 0;
	for (var e in emp) {
		sum += emp[e];
	}
	sum /= emp.length;

	console.log(sum);
}

getTotal(emp);

console.log("-------------------------------");

function getCount(sum, name) {
	for (var i = 0, count = 0; i < sum.length; i++) {
		if (sum[i] == name) count++;
	}
	return count;
}

console.log(getCount(["Tom", "Lucy", "Tom", "Kate"], "Tom"));

console.log("-------------------------------");


function getMax(arr) {
	for (var i = 0, temp = 0; i < arr.length; i++) {
		if (temp < arr[i]) temp = arr[i];	
	}

	return temp;
}

console.log(getMax([70, 69, 34, 56, 25,100]));