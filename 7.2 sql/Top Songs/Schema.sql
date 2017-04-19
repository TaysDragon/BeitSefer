CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top5000(
  id INT AUTO_INCREMENT,
  name VARCHAR(45),
  song VARCHAR(45),
  year INT(4),
  USAPopularity INT(4),
  UKPopularity INT(4),
  EuropePopularity INT(4),
  RestOfTheWorld INT(4),
  RawScore INT(4)
  );
