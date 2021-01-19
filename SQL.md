Structured Query Language

good general source: https://www.w3schools.com/sql/default.asp
official docs: https://www.sqltutorial.org/ 


## frequent commands:

- CREATE
`CREATE DATABASE example_name;` creates a database with that name
- SHOW
`SHOW DATABASES;` shows all created databases
- DROP
`DROP TABLE example_name;` - deletes table  
`DROP table_name;` deletes table_name
- ALTER
- ADD
`ALTER TABLE table_name ADD colum_name DECIMAL(3,2);`
`ALTER TABLE table_name DROP colum_name;`



```
CREATE TABLE example_table_name (
  example_id INT NOT NULL AUTO_INCREMENT,
  example_name VARCHAR(30),
  example_value VARCHAR(20),
  PRIMARY KEY(example_id)
);
```

The PRIMARY KEY could also be set like this:  

```
example_id INT,
PRIMARY KEY(student_id)
```

---

SQL is actually a hybrid language, it's basically 4 types of languages in one:
- **Data Query Language (DQL)**
  - used to query the database for information
  - get information that is already stored there
- **Data Definition Language (DDL)**
  - used for defining database schemas
- **Data Control Language (DCL)**
  - used for controlling access to the data in the database
  - user & permission management
- **Data Manipulation Language (DML)**
  - used for inserting, updating and deleting data from the database.

#### Queries
- A query is a set of instructions given to the RDBMS (written in SQL) that tell the RDBMS what information you want it to retrieve for you.
  - goal is to only get the data you need
  - out of TONS of data in a DB
  - often hidden in a complex schema

#### Statements

- SELECT - extracts data from a database
  - `SELECT * FROM example_table` 
  - ORDER BY keyword:
  ``` 
  SELECT column1, column2, ...
  FROM table_name
  ORDER BY column1, column2, ... ASC|DESC;
  ```
- SELECT DISTINCT - statement is used to return only distinct (different) values
- UPDATE - updates data in a database
- DELETE - deletes data from a database
- INSERT INTO - inserts new data into a database
  `INSERT INTO teachers (name, email) VALUES ('Mary', 'mary@hcs.com');`
  - it is easy to do multiple entries:
  ```
  INSERT INTO teachers (name, email) VALUES 
  ('Mary', 'mary@hcs.com'),
  ('Klaus', 'klaus@hcs.com'),
  ('Lovejoy', 'lovejoy@hcs.com');
  ```
- CREATE DATABASE - creates a new database
- ALTER DATABASE - modifies a database
- CREATE TABLE - creates a new table
- ALTER TABLE - modifies a table
- DROP TABLE - deletes a table
- CREATE INDEX - creates an index (search key)
- DROP INDEX - deletes an index
- GROUP BY - groups rows that have the same values into summary rows, like "find the number of customers in each country".
  ```
  SELECT COUNT (customer_id), country
  FROM customers
  GROUP BY country;
  ```

#### Operators

- UNION - 
- loads more, look here



#### Clauses

- WHERE - 
  - WHERE clause can be combined with AND, OR, and NOT operators:
  - `WHERE name = "Tom" AND city = "Boston";`
  - `WHERE NOT country = "Germany" AND NOT country = "USA";`
  - `WWHERE country IN ('Germany', 'Hungary') AND age > 25;`
- JOIN - used to combine rows from two or more tables, based on a related column between them.




#### Functions

- COUNT() - returns the number of rows that matches a specified criterion.
  ```
  SELECT COUNT (student_id)
  FROM students
  WHERE gender = 'f' AND birth_date > 1980-01-01;
  ```
- AVG() - returns the average value of a numeric column.
  ```
  SELECT AVG (salary)
  FROM employees
  WHERE gender = 'f';
  ```
- SUM() - returns the total sum of a numeric column.

---

#### Wildcards

- `%`	  - Represents zero or more characters	bl% finds bl, black, blue, and blob
- `_`	  - Represents a single character	h_t finds hot, hat, and hit. Tipp: `__` represents exactly 2 characters.
- `[]`  - Represents any single character within the brackets	h[oa]t finds hot and hat, but not hit
- `^`	  - Represents any character not in the brackets	h[^oa]t finds hit, but not hot and hat
- `-`	  - Represents a range of characters	c[a-b]t finds cat and cbt

source and more examples: https://www.w3schools.com/sql/sql_wildcards.asp 

--- 

#### Most Common Data Types

- INT  - Whole Number
- DECIMAL(M,N) - Decimal Numbers - Exact Value  
Example: DECIMAL(10,4) would have 10 digits in total, with 4 of those comming after the decimal place
- VARCHAR(1)  - String of text of length 1
- BLOB - Binary Large Object
- DATE - 'YYYY-MM-DD'
- TIMESTAMP - 'YYYY-MM-DD HH:MM:SS' - used for recording
- 


#### Data Type Specifications
Some data types you can specify even further:

- UNSIGNED        - only positive numbers
- SIGNED          - can have a sign (can be negative numbers as well)
- NOT NULL        - cannot be null, is required
- AUTO_INCREMENT  - if not set, increment automatically (used for IDs)
- UNIQUE          - has to be unique for each entry
- PRIMARY KEY     - automatically NOT NULL and UNIQUE?


#### Constraints

- DEFAULT         - provides a default value for a column
  - to set:
  `city VARCHAR(255) DEFAULT 'Chicago';`  
  `orderdate DATE DEFAULT GETDATE();`  
  - to alter:
  `ALTER City SET DEFAULT 'Chicago';`


--- 



#### 10 Rules for a Better SQL Schema
- Only Use Lowercase Letters, Numbers, and Underscores
- Use Simple, Descriptive Column Names
- Use Simple, Descriptive Table Names
  We recommend using pluralized names for tables (e.g. packages), and pluralizing both words in the name of a join table (e.g. packages_users). Singular table names are more likely to accidentally collide with reserved keywords and are generally less readable in queries.
- Have an Integer Primary Key
  Avoid multi-column primary keys. They can be difficult to reason about when trying to write efficient queries, and very difficult to change. Use an integer primary key, a multi-column unique constraint, and several single-column indexes instead.
-

source: https://www.sisense.com/blog/better-sql-schema/



#### Examples

Code snippets of what I used for Hamburg Coding School LMS project:
```
CREATE TABLE bookings (
	bookings_id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (bookings_id),
	course_id INT,
	FOREIGN KEY (course_id) REFERENCES courses (course_id) ON DELETE SET NULL,
	student_id INT,
	FOREIGN KEY (student_id) REFERENCES students (student_id) ON DELETE SET NULL
);			

DESCRIBE teachers;	
DESCRIBE courses;


INSERT INTO students (name, email) VALUES ('Jakob Schörle', 'jakobschoerle@googlemail.com');

INSERT INTO teachers (name, email) VALUES ('Mary Vokicic', 'mary@hamburgcodingschool.com');

INSERT INTO courses (name, start_date, end_date, hours, teacher_id) VALUES ("Databases", '2020-04-18', '2020-04-19', 12, 1);

INSERT INTO bookings (course_id, student_id) VALUES 
(1,2),(2,2),(4,2),(5,2),(6,2),(7,2),(8,2),
(1,3),(2,3),(4,3),(5,3),(6,3),(7,3),
(1,4),(2,4),(4,4),(5,4),(6,4),(7,4),(8,4),
(1,5),(2,5),(4,5),(5,5),(6,5),(7,5),(8,5),
(1,6),(2,6),(4,6),(5,6);

ALTER TABLE students DROP COLUMN email;
ALTER TABLE students ADD alumni BOOL DEFAULT '0';
ALTER TABLE courses ADD end_date DATE;
ALTER TABLE courses ADD FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id);
ALTER TABLE courses ADD name VARCHAR (20);

ALTER TABLE courses MODIFY COLUMN name VARCHAR(40);

DROP TABLE bookings;
DELETE FROM courses WHERE course_id = 3;

UPDATE students
SET fullstack = '1';

UPDATE students SET alumni = '1' WHERE NOT student_id = 6;
UPDATE courses SET hours = 24 WHERE course_id = 2;
UPDATE teachers SET teacher_id = 15 WHERE name = 'Teresa Holfeld';

SELECT * FROM courses;
SELECT * FROM teachers;
DESCRIBE bookings;
SELECT * FROM bookings;

SELECT name AS Name, email AS Email 
FROM students 
WHERE alumni = 1
ORDER BY name
LIMIT 3;

SELECT DISTINCT teacher_id
FROM courses;

SELECT name, hours
FROM courses
GROUP BY hours, name;

SELECT * FROM students
WHERE name LIKE '%mann';

-- show all teachers and students
SELECT name FROM students
UNION
SELECT name FROM teachers;

-- Nested Query
-- show all courses Clemens has taken
SELECT courses.name
FROM courses
WHERE courses.course_id IN (
	SELECT bookings.course_id
	FROM bookings
	WHERE bookings.student_id = 1
);

-- who were Clemens' teachers?

```