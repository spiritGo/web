// eventEmitter.js

// var eventEmitter = require("events").EventEmitter;
// var event = new EventEmitter();

// event.on("some_events",function(){
// 	console.log("some events");

// });

// setTimeout(function(){
// 	event.emit("some_events");
// },1000);

var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 1000); 

