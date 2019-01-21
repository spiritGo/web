// 程序7.js

// 题目：将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5。
// var resolve_v = "";
// function resolve(n) {
// 	for (var i = 2, sum = ""; i <= n; i++) {
// 		if (n % i == 0) {
// 			n /= i;
// 			resolve_v += i+" ";
// 			return resolve(n);
// 		}
// 	}
// }

// resolve(6);
// console.log(resolve_v);

console.log("--------------------改版-------------------");

// function resolve(n,r) {
// 	for (var i = 2, sum = ""; i <= n; i++) {
// 		if (n % i == 0) {
// 			n /= i;
// 			// resolve_v += i + " ";
// 			r.method = resolve(n,r)
// 			r.i+=i+" ";
// 			return r.method;
// 		}
// 	}
// }

// var _resolve = new Object();
// _resolve.i = "";
// resolve(6,_resolve);
// console.log(_resolve.i);

console.log("--------------------改版-------------------");

function result(n) {
	var arr = [];

	function resolve(n) {
		for (var i = 2; i <= n; i++) {
			if (n % i == 0) {
				n /= i;
				arr.push(i);
				return resolve(n);
			}
		}
	}

	resolve(n);

	return arr;
}

console.log(result(180));