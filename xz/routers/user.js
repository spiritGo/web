// user.js

const express = require("express");
const pool = require("../pool.js");
var router = express.Router();

// 1.检索用户
router.get("/detail", (req, res) => {
	var obj = req.query;
	//验证uid是否为空
	var $uid = obj.uid;
	if (!$uid) {
		res.send({
			code: 401,
			msg: "uid required"
		});
		return;
	}

	pool.query("SELECT * FROM xz_user WHERE uid=?", [$uid], (err, data) => {
		if (err) throw err;
		if (data.length > 0) res.send(data)
		else res.send({
			cede: 301,
			mes: "not found"
		});
	});
	// res.send("这是用户的详情");
});

// 2.用户注册
router.post("/reg", (req, res) => {
	var obj = req.body;
	if (!obj.uname) {
		res.send({
			code: 402,
			msg: "uname required"
		});
		return;
	}
	if (!obj.upwd) {
		res.send({
			code: 402,
			msg: "upwd required"
		});
		return;
	}
	if (!obj.email) {
		res.send({
			code: 402,
			msg: "email required"
		});
		return;
	}
	if (!obj.phone) {
		res.send({
			code: 402,
			msg: "phone required"
		});
		return;
	}

	pool.query("INSERT INTO xz_user SET ?", [obj], (err, data) => {
		if (err) throw err;
		if (data.affectedRows > 0) res.send(`<h1>恭喜您注册成功!</h1>`);
	});
	// res.send("ok");
});

// 3.用户登陆
router.post("/login", (req, res) => {
	var obj = req.body;
	if (!obj.uname) {
		res.send("uname is required");
		return;
	}

	if (!obj.upwd) {
		res.send("upwd is required");
		return;
	}

	pool.query("SELECT * FROM xz_user WHERE uname=? and upwd=?", [obj.uname, obj.upwd], (err, data) => {
		if (err) throw err;
		if (data.length > 0) res.send("<h1>恭喜您登陆成功！</h1>");
		else res.send("sorry,this uname is not defined");
	});
});

// 4.修改用户资料
router.post("/update", (req, res) => {
	var obj = req.body
	for (var key in obj) {
		if (!obj[key]) {
			res.send(key + " is required");
			return;
		}
	}

	pool.query("UPDATE xz_user SET email=?,phone=?,uname=?,gender=? WHERE uid=?", [obj.email, obj.phone, obj.uname, obj.gender, obj.uid], (err, data) => {
		if (err) throw err;
		console.log(data)
		if (data.affectedRows > 0) res.send("<h1>恭喜您修改数据成功</h1>");
		else res.send({
			code: 404,
			msg: "not found"
		});
	});

	// console.log(obj);
});

// 5.分页查询
router.get("/list", (req, res) => {
	var obj = req.query;
	obj.pno = parseInt(obj.pno);
	obj.count = parseInt(obj.count);
	if (!obj.pno) obj.pno = 1;
	if (!obj.count) obj.count = 5;
	var start = (obj.pno - 1) * obj.count;
	pool.query("SELECT * FROM xz_user LIMIT ?,?", [start, obj.count], (err, data) => {
		if (err) throw err;
		if (data.length > 0) res.send(data);
		else res.send("您好，见到我说明您的查询出错了");
	});
});

// 6.删除用户
router.get("/delete",(req,res)=>{
	var obj = req.query;
	pool.query("DELETE FROM xz_user WHERE uid=?",[obj.uid],(err,data)=>{
		if (err) throw err;
		if (data.affectedRows>0) res.send("呜呜呜呜，怎么就把我给删了！！");
		else res.send("我是超级vip，你删不掉，有本事打我呀");
	});
});

module.exports = router;