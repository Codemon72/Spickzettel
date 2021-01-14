a child of mySQL

MariaDB's basic commands: https://mariadb.com/kb/en/basic-sql-statements/
Mike Dane's Overview: https://www.mikedane.com/databases/sql/

#### install

`brew install mariadb`


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


