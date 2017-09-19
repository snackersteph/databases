DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  /* Describe your table here.*/
  'id' INTEGER PRIMARY KEY,
  'user' INTEGER,
  'roomname' INTEGER,
  'createdAt' DATETIME,
  'text' TEXT NOT NULL
  -- FOREIGN KEY(user) REFERENCES users(id),
  -- FOREIGN KEY(roomname) REFERENCES roomnames(id)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  'id' INTEGER PRIMARY KEY,
  'username' TEXT NOT NULL
);

DROP TABLE IF EXISTS roomnames;
CREATE TABLE roomnames (
  'id' INTEGER PRIMARY KEY,
  'roomname' TEXT NOT NULL
);

ALTER TABLE messages ADD FOREIGN KEY (user) REFERENCES users (id);
ALTER TABLE messages ADD FOREIGN KEY (roomname) REFERENCES roomnames (id);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



