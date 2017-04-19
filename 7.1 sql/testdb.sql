create database test_db;
use test_db;
create table people (
id INTEGER (11) auto_increment not null,
name varchar (30) not null,
has_pet boolean not null,
pet_name varchar(30),
pet_age integer (10),
primary key (id)
);