-- 05_tedu.sql
USE tedu_oa;

-- CREATE TABLE emp(
-- 	eid INT,
-- 	ename VARCHAR(6),
-- 	addr VARCHAR(50),
-- 	tel VARCHAR(11)
-- );

-- INSERT INTO emp values('1','Tom','london','13515154645');
-- INSERT INTO emp values('2','lucy','paris','13565154645');
-- INSERT INTO emp values('3','Tony','iceland','13615154645');

#删除编号为3的数据

-- delete from emp where eid = 1;
-- INSERT INTO emp values('1','Tom','london','13515154645');

#修改编号为3的数据
-- update emp set ename ="Tom",eid = 1 where tel="13515154645";

# 删除编号为1的数据
-- delete from emp where eid = 1;
-- update emp set eid =6 where eid =3;

update emp set eid =1 where eid = 2;
update emp set eid =2 where eid =6;
insert into emp values("3","Tom","beijing","17545463225");

select * from emp;