-- fruit_info.sql

USE fruit;
CREATE TABLE info(
	iid INT PRIMARY KEY AUTO_INCREMENT,
	iname VARCHAR(16),
	ipic VARCHAR(128),
	idesc VARCHAR(3000),
	iplace VARCHAR(50)
);