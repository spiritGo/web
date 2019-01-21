// exercise.js

console.log("--------------------1-------------------");
var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
for (var i = 0, newArr = [], index = 0; i < 6; i++) {
	index = Math.floor(Math.random() * c.length);
	newArr.push(c[index]);
	c.splice(index, 1);
}
newArr.sort(function(a, b) {
	return a - b;
});

var two = getRandom(1, 17).toString().split();
newArr = newArr.concat(two);
console.log(newArr);


function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

console.log("--------------------2-------------------");

for (var i = 0, newArr = [], index = 0,isture = false; i < 6; i++) {
	index = getRandom(1, 34);
	istrue = contain(newArr,index);
	console.log(istrue);
	if (istrue) {
		i--;
	}else{
		newArr.push(index);
	}
}

newArr.sort(function(a,b){
	return a-b;
});

var two = getRandom(1,17);
newArr = newArr.concat(two);
console.log(newArr);

function contain(arr, e) {
	for (var i = 0; i < arr.length; i++) {
		return arr[i] == e;
	}
}

console.log(contain([2,8,9,5,6,4],2));