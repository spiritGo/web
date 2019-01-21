SET NAMES UTF8;
DROP DATABASE IF EXISTS student;
CREATE DATABASE student CHARSET=UTF8;
USE student;
CREATE TABLE score(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	class TINYINT,
	math SMALLINT,
	english SMALLINT
);

INSERT INTO score VALUES(NULL,2,123,100);
INSERT INTO score VALUES(NULL,2,122,100);
INSERT INTO score VALUES(NULL,2,121,100);

create table student_info(siId SMALLINT,sname VARCHAR(20),sage TINYINT);
INSERT INTO student_info values(1,"tom",16);
INSERT INTO student_info values(2,"lucy",18);
INSERT INTO student_info values(3,"lili",19);