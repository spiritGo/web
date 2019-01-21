// exercise.js

var arr = [8, 5, 3, 4, 6, 1];

for (var i = 0; i < arr.length; i++) {
	for (var j = 0, temp = 0; j < arr.length - i; j++) {
		if (arr[j] > arr[j + 1]) {
			temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
}

console.log(arr)

function getCount(arr, e) {
	for (var i = 0, count = 0; i < arr.length; i++) {
		if (arr[i] == e) {
			count++;
		}
	}

	return count;
}

console.log(getCount([2,5,2,5,2],2))

---
---
-