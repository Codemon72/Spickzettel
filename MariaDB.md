a child of mySQL

MariaDB's basic commands: https://mariadb.com/kb/en/basic-sql-statements/
Mike Dane's Overview: https://www.mikedane.com/databases/sql/




#### start and stop and info if it is running:

first it needs to be running in the background.  
check with: 
- `brew services list`
start and stop with:
- `brew services start mariadb`
- `brew services stop mariadb`

To start it in the terminal:
- `mariadb``
To stop:
- `\q` or CTRL + C


#### absolute BASICS
- write in ALLCAPS
- end line with a `;`


#### frequent commands:

- `CREATE DATABASE example_name;` creates a database with that name
- `SHOW DATABASES;` shows all created databases

#### standard port
3306



#### installation

`brew install mariadb`

and then also go through some config process: https://mariadb.com/resources/blog/installing-mariadb-10-1-16-on-mac-os-x-with-homebrew/

2021-01-15: didn't work for me (when I tried to connect Sequel Ace with it) and Simon had to help bigtime; got it running with `sudo mysql_secure_installation` but Simon said there was still something broken (localhost).


#### GUI

Helder recommended: Sequel Ace (downloaded with homebrew)

2021-01-15: very hard to connect it to the MariaDB and Simon had to help bigtime; got it running with `sudo mysql_secure_installation` but Simon said there was still something broken (localhost).

Login: TCP/IP: 
- Name: localhost
- Host: 127.0.0.1
- Username: clemens
- Port: 3306



## Examples / SimonSays

`select user,host from mysql.user;`  

`grant all privileges on *.* to 'clemens'@'%';`  

`flush privileges;` 

`create user clemens identified by 'foobar';` 
`create user root@127.0.0.1;`  
`create user root;` 
`create user clemens;`

`grant all privileges on *.* to root@127.0.0.1;` 