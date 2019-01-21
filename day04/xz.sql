-- xz.sql
SET NAMES UTF8;
DROP DATABASE IF EXISTS xz;
CREATE DATABASE xz CHARSET=UTF8;
USE xz;
CREATE TABLE laptop_family(
	fid INT PRIMARY KEY,
	fname VARCHAR(16) UNIQUE,
	laptopCount SMALLINT DEFAULT "5"
);

INSERT INTO laptop_family VALUES(10, "联想", DEFAULT );
INSERT INTO laptop_family VALUES(20, "戴尔", 2 );
INSERT INTO laptop_family VALUES(30, "苹果", 1 );

CREATE TABLE laptop(
	lid INT PRIMARY KEY,
	title VARCHAR(16),
	price DECIMAL(7,2),
	spedc VARCHAR(60),
	datail VARCHAR(100),
	shelfTime DATE,
	family_id TINYINT
);

INSERT INTO laptop VALUES(
	1,
	"ThinkPadE470 c",
	4699.00,
	"分辨率：标准屏(1366×768)",
	"联想(ThinkPad)轻薄系列E470c(20H3A004CD)14英寸笔记本电脑(i5-6200U 8G 500G 2G独显 Win10)黑色",
	"2018-9-10",
	10
);

INSERT INTO laptop VALUES(
	2,
	"ThinkPadE470 c",
	5499.00,
	"分辨率：标准屏(1366×768)",
	"联想(ThinkPad)轻薄系列E470c(20H3A001CD)14英寸笔记本电脑(i5-6200U 8G 256G SSD 2G独显 Win10)黑色",
	"2018-9-10",
	10
);

INSERT INTO laptop VALUES(
	3,
	"AppleMacBook Air",
	6988.00,
	"分辨率：1920*1080",
	"Apple MacBook Air 13.3英寸笔记本 银色(Core i5 处理器/8GB内存/128GB SSD闪存 MMGF2CH/A)",
	"2018-9-10",
	30
);

INSERT INTO laptop VALUES(
	4,
	"AppleMacBook Air",
	7488.00,
	"分辨率：1920*1080",
	"Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i7 处理器/8GB内存/128GB SSD闪存 Z0TA0002L)",
	"2018-9-10",
	30
);

INSERT INTO laptop VALUES(
	5,
	"戴尔灵越游匣15PR-5645B",
	5999.00,
	"分辨率：全高清屏(1920×1080)",
	"戴尔DELL灵越游匣15PR-5645B 15.6英寸游戏笔记本电脑(i5-7300HQ 8G 128GSSD+1T GTX1050 4G独显 FHD)黑",
	"2018-9-10",
	20
);

