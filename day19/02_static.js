// 02_static.js

const express = require("express");
var server = express();
server.listen(8080);

//托管静态资源（html,css,js,img...）到指定的目录
//如果浏览器请求静态资源文件，则会自动到该目录下寻找，无需再单独添加路由
//使用内置中间件static
server.use(express.static("public"));

server.use(express.static("files"));