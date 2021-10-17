a child of mySQL
MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system, intended to remain free and open-source software under the GNU General Public License.

MariaDB's basic commands: https://mariadb.com/kb/en/basic-sql-statements/
Mike Dane's Overview: https://www.mikedane.com/databases/sql/


### get info:

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
- `exit;` or `\q` or CTRL + C


### frequent commands:

- `SHOW DATABASES;` - shows all created databases  
- `CREATE DATABASE example_name;` - creates a database with that name  
- `USE exampleDBname;` - log into db
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
___


### standard port
3306
___


### installation
`brew install mariadb`

and then also go through some config process: https://mariadb.com/resources/blog/installing-mariadb-10-1-16-on-mac-os-x-with-homebrew/

2021-01-15: didn't work for me (when I tried to connect Sequel Ace with it) and Simon had to help bigtime; got it running with `sudo mysql_secure_installation` but Simon said there was still something broken (localhost).
___


### DB backup / dump via terminal
- open terminal
- cd into directory where you want your backup
- `mysqldump exampleDB > exampleDBdumpName.sql` (yeah, it's that simple)
  - in case you need username and password: `mysqldump -u exampleUser -p exampleDB > exampleDBdumpName.sql` 
    - this will open up a request for your password
  - in case you want a dump of the structure without data use the `--no-data` flag
    `mysqldump --no-data exampleDB > exampleDBdumpName.sql`
___


### restore DB from dump / backup
- inside SQL editor: create db: `CREATE DATABASE example_name;`
- in Terminal: `mysqldump example_name < exampleDBdumpName.sql`
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
___


#### fledgling section / absolute BASICS

- end every line with a `;`



## ARCHIVE

### GUI Sequel Ace
2021-01-15: very hard to connect it to the MariaDB and Simon had to help bigtime; got it running with `sudo mysql_secure_installation` but Simon said there was still something broken (localhost).
---


## Troublshooting grants (SimonSays)

`select user,host from mysql.user;`  - list all users and host in your installation

`SELECT User, Host, plugin FROM mysql.user;` - list users, hosts and potential (auth) plugins

`grant all privileges on *.* to 'clemens'@'%';` - grant all privileges to user 'clemens' on _any_ network
  - this grants all privileges BUT the privilege to grant grants

`flush privileges;` - when we grant some privileges for a user, running the command `flush privileges` reloads the grant tables in the mysql database enabling the changes to take effect without reloading or restarting mysql service

`create user clemens identified by 'foobar';` 
`create user root@127.0.0.1;`  
`create user root;` 
`create user clemens;`

`grant all privileges on *.* to root@127.0.0.1;` 

`drop user 'david'@'localhost';` - delete a user
___