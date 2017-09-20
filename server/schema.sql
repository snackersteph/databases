DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200),
  roomid int NOT NULL,
  PRIMARY KEY(ID)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  PRIMARY KEY(ID)
);

DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(20) NOT NULL,
  PRIMARY KEY(ID)
);

-- ALTER TABLE messages ADD FOREIGN KEY (user) REFERENCES users (id);
-- ALTER TABLE messages ADD FOREIGN KEY (roomname) REFERENCES roomnames (id);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



