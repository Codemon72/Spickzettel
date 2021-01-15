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

2021-01-15: didn't work for me and Simon had to help bigtime; got it running with `sudo mysql_secure_installation` but Simon said there was still something broken (localhost).