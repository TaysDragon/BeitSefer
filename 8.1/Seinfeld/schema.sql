-- Created the DB "seinfeld_db" (only works on local connections)
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "actors" 
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int NOT NULL,
  attitude varchar(30) NOT NULL,
  PRIMARY KEY(id)
);


-- Inserted a set of records into the table
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Name1", 90, "Relxed"), ("Name2", 60, "Uptight"), ("Name3", 20, "Aloof");
