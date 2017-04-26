CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps 
(
id int NOT NULL AUTO_INCREMENT,
author varchar(50) NOT NULL,
	chirp varchar(500) NOT NULL,
	time DATETIME NOT NULL,
	PRIMARY KEY (id)
);