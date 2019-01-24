// app.js

const express = require("express");
const userRouter = require("./routers/user.js");
var server = express();
server.listen(8080);

server.use(express.static("public"));

//把路由器挂载到特定的前缀 /user
//访问形式  /user/detail
server.use("/user",userRouter);