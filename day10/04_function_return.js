// 04_function_return.js

//计算任意两个数字的和
function add(a, b) {
	// console.log(a+b);
	return a + b;
}

//保存两个数字相加的结果
var str = add(3, 4);
console.log(str);

var tom = add(90, 89);
var jerry = add(100, 89);
var scott = add(60, 89);
console.log(tom + jerry + scott);

console.log("-------------------------------------");

function compare(i, j) {
	if (i > j) return i;
	return j;
}

console.log(compare(20, 2));

console.log("-------------------------------------");

function compare(i, j, k) {
	if (i > j) {
		if (i > k) return i;
		return k;
	} else if (i < j) {
		if (j > k) return j;
		return k;
	}
}

// function compare(i, j, k) {
// 	var max = 0;
// 	if (i > j) {
// 		max = i;
// 	} else if (i < j) {
// 		max = j;
// 	}

// 	if (max>k) {
// 		return max;
// 	}else if (max<k) {
// 		return k;
// 	}
// }

function compare(i, j, k) {
	var max = i > j ? i : j;
	return max > k ? max : k;
}

var max = compare(60, 10, 50);
console.log(max);

function order(status) {
	var s = "";
	if (status == 1) {
		s = "待付款";
	} else if (status == 2) {
		s = "待发货";
	} else if (status == 3) {
		s = "运输中";
	} else if (status == 4) {
		s = "已签收";
	} else {
		s = "无法追踪";
	}

	return s;
}

var status = order(1);
console.log(status);

console.log("-----------------------------------");

// switch (status) {
// 	case 1:
// 		return "待付款"
// 	case 2:
// 		return "待发货"
// 	case 3:
// 		return "运输中"
// 	case 4:
// 		return "已签收"
// 	default:
// 		return "无法追踪"
// }

console.log("-----------------------------------");

function isLeap(year) {
	return year%4==0&&year%100!=0||year%400==0;
}
console.log(isLeap(2000));
