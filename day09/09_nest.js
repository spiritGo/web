// 09_nest.js

var result = "";
for (var i = 0; i < 4; i++) {
	for (var j = 0; j < 4; j++) {
		result += "*";
	}
	console.log(result);
	result = "";
}

var i = 11;
var product = 1;
while (true) {
	if (i > 10) break;
	//if (i>10){return;};
	product *= i;
	i++;
}
console.log(product);

function ty() {
	var i = 11;
	var product = 1;
	while (true) {
		//if (i > 10) break;
		if (i>10){return;};
		product *= i;
		i++;
	}

	console.log(123);
}
ty();
console.log(5550);