// 07_exercise.js

var price = prompt("请输入单价");
var count = prompt("请输入数量");
var total = price*count;
var card = 1000;
if(total >= 500){
	total *= 0.8;
}

if(card > total){
	console.log("支付成功");
	alert("单价："+price+"￥/500g    数量："+count+"个    支付金额为："+total);
}else{
	console.log("余额不足");
	alert("余额不足");
}