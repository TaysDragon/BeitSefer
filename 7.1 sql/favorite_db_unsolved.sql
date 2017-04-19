CREATE DATABASE favorite_db;
-- Make it so all of the following code will affect favorite_db
use favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
name food varchar (30) not null,

-- Make an numeric column called "score" --
id score INTEGER (11) auto_increment not null,

);


CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  name song varchar (30) not null,
  -- Make a string column called "artist" --
  name artist varchar (30),
  -- Make an integer column called "score" --
  id score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER (11) auto_increment not null,
  -- Create a string column called "movie" which cannot be null --
  name movie varchar (30) not null,
  -- Create a boolean column called "five_times" that sets the default value to FALSE if nothing is entered --
  five_times boolean not null,
  -- Make an integer column called "score" --
  id score INTEGER (11),
  -- Set the primary key of the table to id --
  
);
