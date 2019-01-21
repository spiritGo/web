// 03_break.js

var result = 5;
var guess;
while(true){
	guess = prompt("请输入一个数字");

	if (result<guess) {
		alert("猜大了");
	}else if (result>guess) {
		alert("猜小了");
	}else if(result==guess){
		alert("对了，分数+1");
		break;
	}else{
		alert("请输入一个数字");
	}
}