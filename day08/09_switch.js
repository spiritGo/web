// 09_switch.js

var status = 1;
switch(status){
	case 1:
		console.log("等待付款");
		break;
	case 2:
		console.log("等待发货");
		break;
	case 3:
		console.log("运输中");
		break;
	case 4:
		console.log("已签收");
		break;
	case 5:
		console.log("已取消");
		break;

	default:
		console.log("无法追踪");
}

console.log(65535/1024/1024);

var weekday = 9;
switch(weekday){ 
	case 0:
		console.log("星期天");
		break;
	case 1:
		console.log("星期一");
		break;
	case 2:
		console.log("星期二");
		break;
	case 3:
		console.log("星期三");
		break;
	case 4:
		console.log("星期四");
		break;
	case 5:
		console.log("星期五");
		break;
	case 6:
		console.log("星期六");
		break;
	default:
		console.log("外星人，我们地球一星期只有7天，请输入0-6之间的整数");
}

var clz= 1812;
switch(clz){
	case 1810:
	case 1811:
	case 1812:
		console.log("有100人");
		break;
	case 1901:
		console.log("有101人");
		break;
	default:
		console.log("错误的班级");
}


var score = 96;
// score/=10
score = parseInt(score/=10);
console.log(score);
switch(score){
	case 10:
	case 9:
		console.log("优秀");
		break;
	case 8:
	case 7:
		console.log("良好");
		break;
	case 6:
		console.log("及格");
		break;
	default:
		console.log("仍需努力");

}

var i=0;
while(i<=100){
	if(i%2!=0){
		console.log(i);
	}
	i++;
}

var i=0;
var sum=0;
while(i<=100){
	if(i%2!=0){
		sum+=i;//sum=sum+i
	}
	i++;
}

console.log(sum);

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
//       w       h          s

// 50~150之间的偶数
var num = 50;
while(num<=150){
	if (num%2==0) {
		console.log(num);
	}
	num++;
}

var num = 30;
while(num>=15){
	console.log(num);
	num-=3
}

var num = 30;
while(num>=15){
	if (num%3==0) {
		console.log(num);
	}
	num-=3
}

var num = 1;
var sum = 0;
while(num<=200){
	if (num%3==0) {
		sum+=num;
		console.log(num);
	}
	num++;
}
console.log(sum);