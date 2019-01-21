-- 05_dangdang.sql
SET NAMES UTF8;
DROP DATABASE IF EXISTS dangdang;
CREATE DATABASE dangdang CHARSET=UTF8;
USE dangdang;
CREATE TABLE book(
	bid INT PRIMARY KEY,
	title VARCHAR(10) UNIQUE,
	author VARCHAR(20),
	pubTime DATE,
	publish VARCHAR(20),
	isOnsale BOOL
);

INSERT INTO book VALUES(1,"西游记","吴承恩","2018-10-22","北京出版社",true);
INSERT INTO book VALUES(2,"三国演义","罗贯中","2018-10-22","北京出版社",true);
INSERT INTO book VALUES(3,"红楼梦","曹雪芹","2018-10-22","北京出版社",true);
INSERT INTO book VALUES(4,"水浒传","施耐庵","2018-10-22","北京出版社",true);
