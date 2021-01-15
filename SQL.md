Structured Query Language

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

#### Most Common Data Types

- INT  - Whole Number
- DECIMAL(M,N) - Decimal Numbers - Exact Value  
Example: DECIMAL(10,4) would have 10 digits in total, with 4 of those comming after the decimal place
- VARCHAR(1)  - String of text of length 1
- BLOB - Binary Large Object
- DATE - 'YYYY-MM-DD'
- TIMESTAMP - 'YYYY-MM-DD HH:MM:SS' - used for recording
- 