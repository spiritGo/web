-- 03_xuezi.sql
SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE laptop(
	lid INT,
	title VARCHAR(50),
	price DECIMAL(6,2),
	stockCount SMALLINT(6),
	shelfTime DATE,
	isindex BOOL
);

INSERT INTO laptop VALUES("1","Apple MacBook Air系列","6988.00","200000","2019-10-06",false);
INSERT INTO laptop VALUES("2","小米Air 金属超轻薄","3488.00","180000","2019-10-06",true);
INSERT INTO laptop VALUES("3","联想E480C 轻薄系列","5399.00","200000","2019-10-06",true);
INSERT INTO laptop VALUES("4","华硕RX310 金属超极本","4966.00","200000","2019-10-06",true);

SELECT * FROM laptop;
