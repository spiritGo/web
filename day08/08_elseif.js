// 08_elseif.js

var type = "团员";
if (type=="群众") {
	console.log("这个人是群众");
}else if (type=="党员") {
	console.log("这个人是党员");
}else if (type=="团员") {
	console.log("这个人是团员");
}else{
	console.log("非法的政治面貌");
}

var status = 1;
if(status==1){
	console.log("等待付款");
}else if(status==2){
	console.log("等待发货");
}else if(status==3){
	console.log("运输中");
}else if(status==4){
	console.log("已签收");
}else if(status==5){
	console.log("已取消");
}else{
	console.log("无法追踪");
}

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

// 练习：银行根据客户的存款进行分类
//100000以下				  普通客户
//100000~10000000以下     金牌客户
//1000000~10000000以下    白金客户
//10000000以上	          钻石客户
var money=150000;
if (money<100000) {
	console.log("您是普通用户");
}else if (money<1000000) {
	console.log("您是金牌客户");
}else if (money<10000000) {
	console.log("您是白金客户");
}else{
	console.log("您是钻石客户");
}