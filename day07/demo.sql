-- demo.sql
DROP DATABASE IF EXISTS student;
CREATE DATABASE student;
USE student;
CREATE TABLE score(
	sid INT PRIMARY KEY,
	math SMALLINT,
	english SMALLINT
);

CREATE TABLE student_name(
	snId INT,
	snName VARCHAR(20),
	snAge TINYINT,
	foreign key(snId) references score(sid)

);