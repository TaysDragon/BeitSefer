/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database event_saver_db and specified it for use.
CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table events.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('A fun and good paying job.');
INSERT INTO wishes (wish) VALUES ('Good hralth and happiness for me and my loves ones.');
INSERT INTO wishes (wish) VALUES ('A wfh job.');
