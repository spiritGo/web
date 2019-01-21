// 程序27.js

// 题目：一个5位数，判断它是不是回文数。即12321是回文数，个位与万位相同，十位与千位相同。
var s = 45654;

function fun(s) {
	s = s.toString();
	for (var i = 0; i < s.length; i++) {
		// console.log(s[i] != s[s.length - i-1]);
		if (s[i] != s[s.length - i - 1]) return false;
	}
	return true;
}

console.log(fun(s));



// for (var i = 0; i < arr.length; i++) {


// 	for (var j = 0, temp = 0; j < arr.length - i; j++) {
// 		if (arr[j] > arr[j + 1]) {
// 			temp = arr[j];
// 			arr[j] = arr[j + 1];
// 			arr[j + 1] = temp;
// 		}
// 	}


// }


// 4,8,9,8
//      ,9

// a[j]  >  a[j+1]
// b = a[j]
// a[j] = a[j+1]
// a[j+1] = b

