-- xz.sql
#创建数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS xz;

CREATE DATABASE xz CHARSET=UTF8;
#进入数据库
USE xz;

#创建表
CREATE TABLE user(
	uid INT,
	uname VARCHAR(5),
	upwd VARCHAR(11),
	phone VARCHAR(11),
	sex VARCHAR(1),
	user_name VARCHAR(5),
	rigister_time VARCHAR(9),
	is_online VARCHAR(1)
);

#往表里添加数据
INSERT INTO user VALUES("1","NAME1","PWD01","6523141","女","TOM01","2019.01.01","Y");
INSERT INTO user VALUES("2","NAME2","PWD02","6523142","MALE","TOM02","2019.01.01","N");
INSERT INTO user VALUES("3","NAME3","PWD03","6523143","FEMALE","TOM03","2019.01.01","Y");
INSERT INTO user VALUES("4","NAME4","PWD04","6523144","FEMALE","TOM04","2019.01.01","Y");
INSERT INTO user VALUES("5","NAME5","PWD05","6523145","MALE","TOM05","2019.01.01","N");

#删除数据
DELETE FROM user WHERE uid = 5;

#修改数据
UPDATE user SET uname = "NAME6" WHERE uid = 3;
UPDATE user SET uname = "NAME7" WHERE uid = 4;

#查询所有
SELECT * FROM user;
