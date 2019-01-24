// 03_http_browser.js

var http = require("http");

//模拟浏览器发请求
//获取服务器的内容
//参数一：请求的url 参数二：获取服务器端的响应
// http.get("http://www.codeboy.com",function(res){//res是服务器端响应的对象
// 	//获取响应的状态码
// 	console.log(res.statusCode);
// 	//获取响应的内容
// 	//当有数据传输的时候，就会触发这个事件
// 	res.on("data",(buffer)=> {
// 		console.log(buffer.toString());
// 	});
// });

http.get("http://www.weather.com.cn/data/sk/101010100.html",(res)=>{
	res.on("data",(buffer)=>{
		console.log(buffer.toString());
	});
});