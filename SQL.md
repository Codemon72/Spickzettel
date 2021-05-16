Structured Query Language

good general source:
- https://www.w3schools.com/sql/default.asp
- https://www.sqltutorial.org/

official docs: https://www.sqltutorial.org/ 

youtube: 
- [Series by Mike Dane](https://www.youtube.com/watch?v=xmwI6VB_wUM&list=PLLAZ4kZ9dFpMGXTKXsBM_ZNpJwowfsP49)
- [Web Dev Simplified](https://www.youtube.com/watch?v=p3qvj9hO_Bo)


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



```sql
CREATE TABLE example_table_name (
  example_id INT NOT NULL AUTO_INCREMENT,
  example_name VARCHAR(30),
  example_value VARCHAR(20),
  PRIMARY KEY(example_id)
);
```

The PRIMARY KEY could also be set like this:  

```sql
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

#### Comments
- Single line comments start with `--`.
  Any text between `--` and the end of the line will be ignored (will not be executed).
- Multi-line comments start with `/*` and end with `*/`.

#### Statements

- SELECT - extracts data from a database
  - `SELECT * FROM example_table` 
  - ORDER BY keyword:
  ```sql
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
  ```sql
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
  ```sql
  SELECT COUNT (customer_id), country
  FROM customers
  GROUP BY country;
  ```

#### Operators

list of operators: https://www.w3schools.com/sql/sql_operators.asp

- UNION - The UNION operator is used to combine the result-set of two or more SELECT statements.
  - Each SELECT statement within UNION must have the same number of columns
  - The columns must also have similar data types
  - The columns in each SELECT statement must also be in the same order
  - https://www.w3schools.com/sql/sql_union.asp


#### Keywords

list of keywords: https://www.w3schools.com/sql/sql_ref_keywords.asp

- FOREIGN KEY - The FOREIGN KEY constraint is a key used to link two tables together.
  - ON DELETE SET NULL - to be used, when in this table, it is still functioning without this key.
  - ON DELETE CASCADE - deletes the whole row it was in. For example if it was a component of a primary key.



#### Clauses

- WHERE - 
  - WHERE clause can be combined with AND, OR, and NOT operators:
  - `WHERE name = "Tom" AND city = "Boston";`
  - `WHERE NOT country = "Germany" AND NOT country = "USA";`
  - `WWHERE country IN ('Germany', 'Hungary') AND age > 25;`
- JOIN - used to combine rows from two or more tables, based on a related column between them.
  - LEFT JOIN returns also all (selected) data that is not connected with the right table
  - RIGHT JOIN returns all (selected) data that is not connected with the left table
  - FULL JOIN returns all (selected) data even if not connected to the other table
  Example:
  ```sql
  SELECT teachers.name, courses.name
  FROM courses
  LEFT JOIN teachers 
  ON courses.teacher_id = teachers.teacher_id;
  ```
  This would also show all courses who don't have a teacher_id yet (null) and therefore are not connected with the teachers table.
  A RIGHT JOIN would also show all teachers that are not registered yet for a course.
  A normal (INNER) JOIN only shows the courses who have that connection.
- USING
  when columns (foreign and primary key) in both tables are named exactly the same we can shorten our code a bit:
  instead of:
  ```sql
  SELECT teachers.name, courses.name
  FROM teachers
  JOIN courses 
  ON teachers.teacher_id = courses.teacher_id;
  ```
  we can go like this:
  ```sql
  SELECT teachers.name, courses.name
  FROM teachers
  JOIN courses 
  USING(teacher_id);
  ```


#### Functions

- COUNT() - returns the number of rows that matches a specified criterion.
  ```sql
  SELECT COUNT (student_id)
  FROM students
  WHERE gender = 'f' AND birth_date > 1980-01-01;
  ```
- AVG() - returns the average value of a numeric column.
  ```sql
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

#### Nested Queries

What is in the innermost parenthesis gets calculated first.
It is easier to read when you replace `IN` with 'equals'. You *can* use `=` instead of `IN` but will get errors if the embedded query returns more than one value (which than could be prevented by limiting your results to 1: `LIMIT 1`).

```sql
-- show all courses Clemens has taken
SELECT courses.name
FROM courses
WHERE courses.course_id IN (
	SELECT bookings.course_id
	FROM bookings
	WHERE bookings.student_id = 1
);


-- who were Clemens' teachers?
SELECT teachers.name
FROM teachers
WHERE teachers.teacher_id IN (
	SELECT courses.teacher_id
	FROM courses
	WHERE courses.course_id IN (
		SELECT bookings.course_id
		FROM bookings
		WHERE bookings.student_id = 1
	)
)
GROUP BY name DESC;
```

--- 



#### Some Best Practices for SQL Schema
source: https://www.sisense.com/blog/better-sql-schema/
- Only Use Lowercase Letters, Numbers, and Underscores
- Use Simple, Descriptive Column Names
- Use Simple, Descriptive Table Names
  We recommend using pluralized names for tables (e.g. packages), and pluralizing both words in the name of a join table (e.g. packages_users). Singular table names are more likely to accidentally collide with reserved keywords and are generally less readable in queries.
- Have an Integer Primary Key
  Avoid multi-column primary keys. They can be difficult to reason about when trying to write efficient queries, and very difficult to change. Use an integer primary key, a multi-column unique constraint, and several single-column indexes instead.
- Be Consistent with Foreign Keys
  There are many styles for naming primary and foreign keys. Our recommendation, and the most popular, is to have a primary key called id for any table foo, and have all foreign keys be named foo_id.


#### Examples

Code snippets of what I used for Hamburg Coding School LMS project:
```sql
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

-- add a column to a table

ALTER TABLE students ADD alumni BOOL DEFAULT '0';

ALTER TABLE teachers ADD createdAt TIMESTAMP NOT NULL
DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE courses ADD updatedAt TIMESTAMP NOT NULL
DEFAULT CURRENT_TIMESTAMP
ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE courses ADD FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id);

ALTER TABLE courses ADD name VARCHAR (20);

-- rename column
ALTER TABLE TableName
RENAME COLUMN OldColumnName TO NewColumnName;

-- modify a column
ALTER TABLE courses MODIFY COLUMN name VARCHAR(40);
ALTER TABLE courses MODIFY COLUMN createdAt TIMESTAMP NOT NULL
DEFAULT CURRENT_TIMESTAMP;

-- delete a table
DROP TABLE bookings;

-- delete a column from a table
ALTER TABLE courses DROP COLUMN createdAt;

-- delete a row from a table
DELETE FROM courses WHERE course_id = 3;

UPDATE students
SET fullstack = '1';


UPDATE courses SET teacher_id = 1 WHERE course_id = 2;
UPDATE students SET alumni = '1' WHERE NOT student_id = 6;
UPDATE courses SET hours = 24 WHERE course_id = 2;
UPDATE teachers SET teacher_id = 15 WHERE name = 'Teresa Holfeld';

-- show complete table content
SELECT * FROM students;
SELECT * FROM courses;
SELECT * FROM bookings;
-- show table schema 
DESCRIBE courses;

-- queries
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
-- solution with nesting
SELECT teachers.name
FROM teachers
WHERE teachers.teacher_id IN (
	SELECT courses.teacher_id
	FROM courses
	WHERE courses.course_id IN (
		SELECT bookings.course_id
		FROM bookings
		WHERE bookings.student_id = 1
	)
)
GROUP BY name DESC;

-- something with JOIN
-- show all courses and the names of their teachers
SELECT teachers.name, courses.name
FROM teachers
JOIN courses 
ON teachers.teacher_id = courses.teacher_id;

-- show everything from courses and the related teacher name
SELECT c.*, t.name 
FROM courses AS c
JOIN teachers AS t
ON t.teacher_id = c.teacher_id;

-- all Clemens' teachers with JOIN
SELECT teachers.name
FROM teachers
JOIN courses 
ON teachers.teacher_id = courses.teacher_id
JOIN bookings 
ON courses.course_id = bookings.course_id
WHERE bookings.student_id = 1
GROUP BY name DESC;

-- give me all students of 'learn to code'?
SELECT students.name
FROM students
JOIN bookings 
ON students.student_id = bookings.student_id
JOIN courses 
ON bookings.course_id = courses.course_id
WHERE courses.name = "Learn To Code"
GROUP BY NAME ASC;
``` 