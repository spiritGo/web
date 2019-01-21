// 07_for.js

for (var i = 1, sum = 0; i <= 100; i++) {
	sum += i;
}

var i = 1,
	sum = 0;
for (; i < 100; i++) {
	sum += i;
}


var i = 1,
	sum = 0;
for (; i <= 100;) {
	sum += i;
	i++;
}

console.log(sum);

console.log("---------------------------------")

var sum = 0;
for (var i = 1, j = 10; i <= 10; i++, j--) {
	sum += i / j;
}
console.log(sum);