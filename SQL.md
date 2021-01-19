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

#### Operators



#### Clauses

- WHERE - 
  - WHERE clause can be combined with AND, OR, and NOT operators:
  - `WHERE name = "Tom" AND city = "Boston";`
  - `WHERE NOT country = "Germany" AND NOT country = "USA";`
  - `WWHERE country IN ('Germany', 'Hungary') AND age > 25;`


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