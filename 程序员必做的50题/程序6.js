// 程序6.js

// 题目：用*号输出字母C的图案。 

// console.log("  ******");
// console.log(" **     ");
// console.log("**      ");
// console.log("**      ");
// console.log(" **     ");
// console.log("  ******");
var mx = 12;
for (var i = mx,c = 5; i > 0; i--) {
	if (i<mx/2-1) {=[]
		c++;
	}else if (i>mx/2+1) {
		c--;
	}

	if(i==mx/2||i==mx/2+1) continue;
	var s = "";
	for (var j = 0; j <= c; j++) {
		s+="*";
	}

	console.log(s);
}
