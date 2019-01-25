// app.js

const express = require("express");
//路由器
const userRouter = require("./routers/user.js");
const productRouter = require("./routers/product.js");

const bodyParser = require("body-parser");

var server = express();
server.listen(8080);

server.use(express.static("public"));
server.use(bodyParser.urlencoded({
	extended:false
}));

//把路由器挂载到特定的前缀 /user
//访问形式  /user/detail
server.use("/user",userRouter);

server.use("/product",productRouter);