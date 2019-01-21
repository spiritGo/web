// exercise.js

// console.log("-----------------1---------------");

// function reversei(arr) {
// 	for (var i = 0 ; i < arr.length-1; i++) {
// 		arr.splice(i,0,arr[arr.length-1]);
// 		arr.splice(-1);
// 	}
// 	return arr;
// }
// console.log(reversei(["a", "b", "c", "d"]));

// // console.log("-----------------2---------------");

// function reversei(arr) {
// 	for (var i = arr.length-1 ,arri=[]; i >= 0; i--) {
// 		arri[arr.length-1-i] = arr[i]
// 	}

// 	return arri;
// }
// console.log(reversei(["a", "b", "c", "d"]));

// console.log("-----------------3---------------");

// function reversei(arr) {
// 	for (var i = arr.length-1 ,arri=[]; i >= 0; ) {//d
// 		arri.push(arr[i]);
// 		i--;
// 	}
// 	return arri;
// }
// console.log(reversei(["a", "b", "c", "d"]));

// console.log("-----------------4---------------");

// var a = 1;
// a = 5 
// var arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// console.log(arr);


// function reversei(arr) {
// 	for (var i = 0, arri = []; i < arr.length; i++) {
// 		arri[i] = arr[arr.length - i - 1]
// 	}
// 	return arri;

// }
// console.log(reversei(["a", "b", "c", "d"]));

// console.log("-----------------5---------------");

// function reversei(arr) {
// 	for (var i = 0, arri = []; i < arr.length; i++) {
// 		arri[i] = arr[arr.length-i-1]
// 	}
// 	return arri;

// }
// console.log(reversei(["a", "b", "c", "d"]));

// console.log();
// console.log("-----------------6---------------");
// function reversei(arr) {
// 	return arr.sort(function(a,b){
// 		return b.charCodeAt() - a.charCodeAt();
// 	});
// }
// console.log(reversei(["a", "b", "g","c", "d","p"]));

// console.log();
// a = 1
// b = 2
// b = b - a; //1
// a = a + b; //1+1=2

// var arr = ["hello","world"];
// for (var i = 0,newArr = []; i < arr.length; i++) {
// 	newArr[i] = arr[arr.length-1-i];
// }
// console.log(newArr);

var arr = [23, 9, 78, 6, 45];

for (var i = 0, temp = 0; i < arr.length - 1; i++) {
	for (var j = 0; j < arr.length - i-1; j++) {
		// console.log(j,"before");
		if (arr[j] > arr[j+1]) {
			temp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = temp;
		}
		// console.log(j,"after");
	}
	// console.log(j,"after-");
}
console.log(arr);

