a child of mySQL

MariaDB's basic commands: https://mariadb.com/kb/en/basic-sql-statements/
Mike Dane's Overview: https://www.mikedane.com/databases/sql/


####  info:

first it needs to be running in the background.  
check with: 
- `brew services list` - check if mariadb is running
- `brew info mariadb` - to check for version 

### start and stop 
start and stop with:
- `brew services start mariadb`
- `brew services stop mariadb`

To start it in the terminal:
- `mariadb`
To stop:
- `\q` or CTRL + C


## frequent commands:

- `CREATE DATABASE example_name;` - creates a database with that name  
- `SHOW DATABASES;` - shows all created databases  
- `DESCRIBE table_name;` - 
- `DROP TABLE example_name;` - deletes table  
- `ALTER TABLE example_name ...` - to make changes in a table https://mariadb.com/kb/en/alter-table/

```
CREATE TABLE example_table_name (
  example_id INT PRIMARY KEY,
  example_name VARCHAR(30),
  example_value VARCHAR(20)
);
```



#### standard port
3306



#### installation

`brew install mariadb`

and then also go through some config process: https://mariadb.com/resources/blog/installing-mariadb-10-1-16-on-mac-os-x-with-homebrew/

2021-01-15: didn't work for me (when I tried to connect Sequel Ace with it) and Simon had to help bigtime; got it running with `sudo mysql_secure_installation` but Simon said there was still something broken (localhost).
___


### GUI : Sequel Ace
(recommended by Helder)
Docs: https://sequel-ace.com/get-started/

##### installation with homebrew
- https://formulae.brew.sh/cask/sequel-ace

##### set up
- start sequel ace (have mariadb running in background)
- enter:
  - Host: 127.0.0.1
  - Username: exampleName
  ... and connect


2021-01-15: very hard to connect it to the MariaDB and Simon had to help bigtime; got it running with `sudo mysql_secure_installation` but Simon said there was still something broken (localhost).

## Examples / SimonSays

`select user,host from mysql.user;`  

`grant all privileges on *.* to 'clemens'@'%';`  

`flush privileges;` 

`create user clemens identified by 'foobar';` 
`create user root@127.0.0.1;`  
`create user root;` 
`create user clemens;`

`grant all privileges on *.* to root@127.0.0.1;` 
___


#### fledgling section / absolute BASICS

- end every line with a `;`
