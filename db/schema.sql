DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  calories INTEGER(10),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

