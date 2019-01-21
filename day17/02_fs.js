// 02_fs.js

const fs = require("fs");

//在当前目录下创建mydir目录，异步
// fs.mkdir("mydir", (err) => {
// 	if (err) throw err;
// 	console.log("目录创建成功");
// });

// fs.mkdirSync("mydir2");

// fs.rmdir("mydir2", (err) => {
// 	if (err) throw err;
// 	console.log("删除文件成功");
// });

// for (var i = 0, file = "mydir"; i < 10; i++) {
// 	fs.mkdir(file+i, (err) => {
// 		if (err) throw err;
// 		console.log("创建目录成功");
// 	});

// 	// file += "/" + "mydir";
// }
// for (var i = 0; i < 10; i++) {
// 	fs.readdir("fs", (err, files) => {
// 		if (err) throw err;

// 		fs.mkdir(files[0], (err) => {
// 			if (err) throw err;
// 			console.log("创建目录成功");
// 		});

// 	});
// }

// var d = fs.readdirSync("fs/mydir");
// console.log(d);

// 判断目录或者文件是否存在

// var isexists = fs.existsSync("fs");
// console.log(isexists);

// 创建文件，写入文件
// fs.writeFile("num.txt","helloadfsdfaf",(err) => {
// 	if (err) throw err;
// 	console.log("写入文件成功:");
// });

// for (var i = 0; i < 100; i++) {
// 	fs.appendFile("num.txt", "hello\n", (err) => {
// 		if (err) throw err;
// 		console.log("追加数据成功");
// 	});
// }

// var person = {
// 	eid: 1,
// 	ename: "tom",
// 	sex: "男"
// }
// console.log();
// fs.appendFileSync("data.txt","\nperson:{\n");
// for(var p in person){
// 	fs.appendFileSync("data.txt","\t"+p+":"+person[p]+"\n");
// }
// fs.appendFileSync("data.txt","}");

fs.appendFileSync("data.csv","Tom");
