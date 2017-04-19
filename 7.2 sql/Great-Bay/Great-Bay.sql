CREATE DATABASE GreatBay;

USE GreatBay;

CREATE TABLE Items(
Product VARCHAR(20),
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  Price DECIMAL(11,2),
  nowBid DECIMAL(7,2),
  HighestBid DECIMAL(7,2),
  id integer(20) AUTO_INCREMENT NOT NULL,
PRIMARY KEY (id)
);