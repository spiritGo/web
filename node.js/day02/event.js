// event.js

//引入模块
var event = require("events");

//创建对象
var eventEmitter = new event.EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
	console.log("连接成功");
	eventEmitter.emit("data_received");
}

eventEmitter.on("connection",connectHandler);

eventEmitter.on("data_received",function(){
	console.log("数据接收成功");
});

eventEmitter.emit("connection");
console.log("执行结束");
