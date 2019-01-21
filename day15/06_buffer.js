// 06_buffer.js

var buf = Buffer.alloc(5, "abcde");
console.log(buf.toString().split("").join("-"));

var buf = Buffer.alloc(10,"abc");
console.log(buf.toString())