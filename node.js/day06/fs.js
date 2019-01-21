// fs.js
var fs = require("fs");
var path = require("path");

var dir_file = path.join(__dirname);
console.log(dir_file);

// fs.watch(dir_file,{encoding:"buffer"},function(eventType,filename){
// 	console.log(eventType,filename);

// });

// fs.readdir(dir_file,function(err,files){
// 	console.log(files);
// });

// console.log(path.dirname("/day05/d"));
console.log(dir_file);