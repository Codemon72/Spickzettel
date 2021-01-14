in general

#### what is a database?

In general:  
- any collection of related information  
- can be stored on paper, in your mind, as a phone book, on your computer

#### Database Management System  
is not the actual database but the software program that helps users create and maintain a database.  
Tasks:  
- manage large amounts of informations
- handle security
- backups
- importing/ exporting data
- concurrency (DE: Nebenläufigkeit)
- interacts with software applications

#### C.R.U.D.

4 main operations a DBMS has to perform

- C - Create
- R - Read / Retreave
- U - Update
- D - Delete


#### 2 Types of Databases

- Relational DB (SQL)
  - organize data into one or more tables
    - each table has columns and rows
    - a unique key identifies each row
  - Examples: mySQL, Oracle, postgreSQL, mariaDB, etc
- Non-Relational DB (noSQL)
  - everything that is **not** a traditional table
    - key - value stores
    - documents (JSON, XML, etc)
    - Graphs
    - Flexible Tables
  Examples: MongoDB, dynamoDB, apache cassandra, firebase, etc


#### RDBMS
Relational Database Management System

#### SQL
Structured Query Language
- standardized language for interacting with RDBMS
- used to perform C.R.U.D.  operations, as well as other administrative tasks (user management, security, backup, etc)
- used to define tables and structures
- SQL code used on one RDBMS is not always portable to another without modification 

#### Non-Relational Databases 
- document based
- graph
- key-value hash

![non relational databases](/images/non-relational-databases.png)

#### NRDBMS
Non-Relational Database Management System
- to create and maintain a non-relational database
- 'implementation specific'; meaning: no standardized language


## Core Concepts

#### Database Queries






source: https://www.mikedane.com/databases/