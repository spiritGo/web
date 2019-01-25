// product.js
const express = require("express");
var router = express.Router();
const pool = require("../pool.js");

//添加路由
// 1.商品列表
router.get("/list", (req, res) => {
	var obj = req.query;
	var pno = parseInt(obj.pno);
	var count = parseInt(obj.count);

	if (!pno) pno = 1;
	if (!count) count = 5;

	var start = (pno - 1) * count;
	pool.query("SELECT * FROM xz_laptop LIMIT ?,?", [start, count], (err, data) => {
		if (err) throw err;
		if (data.length > 0) res.send(data);
		else res.send("查询出错！！！");
	});
});
// 2.检索商品（商品详情）
// 3.商品添加
router.post("/add", (req, res) => {
	var obj = req.body;
	var i = 400;
	for (var key in obj) {
		i++;
		if (!obj[key]) {
			res.send({
				code: i,
				msg: key + " required"
			});
			return;
		}
	}
	pool.query("INSERT INTO xz_laptop SET ?", [obj], (err, data) => {
		if (err) throw err;
		if (data.affectedRows > 0) res.send("<h1>添加商品成功</h1>");
		else res.send("添加商品失败");
	});
});
// 4.修改商品
// 5.删除商品

module.exports = router;