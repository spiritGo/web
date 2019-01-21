-- 04-jd.sql
-- 丢弃指定的数据库，如果存在的话
DROP DATABASE IF EXISTS jd;
#创建新的数据库
CREATE DATABASE jd;

USE jd;

-- 创建保存数据的表
CREATE TABLE student(
	sid INT,#integer
	mame VARCHAR(6),#variable character
	sex VARCHAR(1),
	score INT
);


DROP DATABASE IF EXISTS tedu_oa;
CREATE DATABASE tedu_oa;

SHOW DATABASES;	

-- 进入该数据库
use tedu_oa;



show tables;

