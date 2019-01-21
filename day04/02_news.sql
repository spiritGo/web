-- 02_news.sql
SET NAMES UTF8;
DROP DATABASE IF EXISTS sina;

CREATE DATABASE sina CHARSET=UTF8;
USE sina;
CREATE TABLE news(
	nid INT,
	title VARCHAR(11),
	author VARCHAR(7),
	addTime VARCHAR(12),
	content VARCHAR(50)
);

INSERT INTO news VALUES("1","TITLE1","AUTHOR1","2019-1-1","CONTENT1");
INSERT INTO news VALUES("2","TITLE2","AUTHOR2","2019-1-1","CONTENT2");
INSERT INTO news VALUES("3","TITLE3","AUTHOR3","2019-1-1","CONTENT3");
INSERT INTO news VALUES("4","TITLE4","AUTHOR4","2019-1-1","CONTENT4");
INSERT INTO news VALUES("5","TITLE5","AUTHOR5","2019-1-1","CONTENT5");

UPDATE news SET title="TITLE6" WHERE nid=1;
UPDATE news SET title="作者" WHERE nid=2;

DELETE FROM news WHERE nid=3;
DELETE FROM news WHERE nid=4;
DELETE FROM news WHERE nid=5;