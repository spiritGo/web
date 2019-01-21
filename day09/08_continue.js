// 08_continue.js

for (var i = 1; i <= 10; i++) {
	if (i == 5) continue;
	console.log(i);
}

for (var i = 1, sum = 0; i <= 100; i++) {
	if (i % 2 == 1) continue;
	sum += i;
}
console.log(sum);

for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0 || i % 4 == 0) continue;
	console.log(i);
}

for (var i = 2000,count = 0; i <= 2100; i++) {
	
	if (i%4==0&&i%100!=0 || i%400==0) {
		if (count>=10) {
			break;
		}

		console.log(i);

		count++;
	}
}