DROP TABLE IF EXISTS tbluser;
DROP TABLE IF EXISTS tblpost;

CREATE TABLE tbluser (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE tblpost (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author_id INTEGER NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  CONSTRAINT fk_post_author FOREIGN KEY (author_id) 
  REFERENCES tbluser (id) 
  ON DELETE CASCADE 
  ON UPDATE CASCADE
  -- ca marche
);

--ALTER TABLE tblpost 
--ADD CONSTRAINT fk_post_author FOREIGN KEY (author_id) 
--REFERENCES tbluser (id) 
--ON DELETE CASCADE 
--ON UPDATE CASCADE;

INSERT INTO tbluser (id, username, password) VALUES (1, 'Simon', 'sesame'),(2, 'Fressancourt', 'secret');  -- ca marche