// 05_string_api.js
"use stict"
var str = "javascript";
console.log(str.length);
//获取字符串下的某一个字符
console.log(str.charAt(4));
console.log(str[4]);
for (var s in str) {
	console.log(str[s]);
}

console.log(/OPkfjalfj/ == /opkfjalfj/);

console.log(str.lastIndexOf("a"));

function isEmail(email) {
	return email.indexOf("@") != -1;
}

if (-1) { //ture 如果为0 则返回false
	console.log("I'm -1");
}

console.log(isEmail("sadljasdklfjaklfj@fkajfkl"));

// 将英文字母转大写或者小写
var str = "How Are You";
console.log(str.toUpperCase());

console.log(str.toLowerCase());

var verification_code = "4K2p";
var youCode = "4k2p";
console.log(verification_code.toUpperCase() == youCode.toUpperCase());

console.log("-------------------------------------");

var str = "javascript";
console.log(str.slice(1, 2));

console.log(str.substr(4));

console.log(str.substr(4, 3));

var email = "tom123@sina.com";
var username = email.slice(0, email.indexOf("@"));
var password = email.slice(email.indexOf("@") + 1);
console.log(username, password);

var identity = "110482199511203789";
var year = identity.substr(6, 4);
var month = identity.substr(10, 2);
var day = identity.substr(12, 2);
var sex = identity.substr(-2, 1);

console.log(year + "年" + month + "月" + day + "日" + (sex % 2 == 0 ? "女" : "男"));

var wel = "wElCome";
wel1 = wel.substr(0, 1).toUpperCase();
wel2 = wel.substr(1).toLowerCase();
wel = wel1 + wel2;
console.log(wel);

var wel = "wElCome";
wel = wel.toLowerCase().replace(wel.substr(0, 1), wel.substr(0, 1).toUpperCase());
console.log(wel);

function toUpperCaseIndex(s) {
	return s.toLowerCase().replace(s.substr(0, 1), s.substr(0, 1).toUpperCase());
}
console.log(toUpperCaseIndex("hellow"));

function toUpperCaseIndex(s) {
	return s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase();
}
console.log(toUpperCaseIndex("country"));

var arr = ["how", "are", "you"];
var str = arr.join("-");
var arr = str.split("-");
console.log(arr);

// 使用split截取邮箱中的用户名和域名
var str = "tom123@163.comn";
var email = str.split("@");
console.log(email);

var word = "how are you";
word = word.split(" ");
for (var w in word) {
	word[w] = word[w].substr(0, 1).toUpperCase() + word[w].substr(1).toLowerCase();
}
console.log(word.join(" "));