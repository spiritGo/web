// 05_callback.js

//回调函数：把匿名函数以实参的形式传递
function fn(a){
	console.log(a());
}

fn(function() {
	return 1;
});

function add(a,b) {
	console.log(a()+b());
}

add(function(){
	return 1;
},function(){
	return 2;
});
var code = encodeURI("电脑");
console.log(code);
console.log(decodeURI(code));
