// 05_router.js
const userRouter = require("./user.js");
const productRouter = require("./product.js");
const express = require("express");
var server = express();
server.listen(8080);

// 把商品路由器挂载到/product下
server.use("/product",productRouter)
server.use("/user",userRouter);