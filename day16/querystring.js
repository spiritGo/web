// querystring.js

var str = "lid=5&name=戴尔"
const qs = require("querystring");
//使用查询字符串模块解析
str = qs.parse(str);
console.log(str.lid,str.name);

str = qs.parse("refpid=mm_26632258_3504122_32538762&keyword=&clk1=e95536446e3b0789910f33307ccab5b8&upsid=e95536446e3b0789910f33307ccab5b8");
console.log(str);
str = qs.stringify(str);
console.log(str);

console.log("------------------呦呦呦-分割线--------------------");

str = "price=5000&pid=17&name=手机";
str = qs.parse(str);
console.log(str);
str = qs.stringify(str);
console.log(str);
str =qs.parse(str);
console.log(str);
