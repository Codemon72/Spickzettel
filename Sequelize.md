is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

ORM = opject-relational mapper

Docs: 
- Tutorials and Guidelines: https://sequelize.org/master/
- https://github.com/sequelize/sequelize
- youtube tutorial: https://www.youtube.com/watch?v=pxo7L5nd1gA
- Brad Traversy: [Build a Node.js App With Sequelize](https://www.youtube.com/watch?v=bOHysWYMZM0&list=PLillGF-RfqbZyLc9sMQ72_u3FW9fVxo1p)
- looks like an in-depth tutorial: [Learn Sequelize ORM on Node.js with MySQL From Scratch in One Video](https://www.youtube.com/watch?v=pxo7L5nd1gA)



By default, Sequelize automatically adds the fields `createdAt` and `updatedAt` to every model, using the data type DataTypes.DATE. Apparently that causes errors if Sequelize is applied to a table without these fields.
Remedy: 
```sql
ALTER TABLE courses ADD createdAt TIMESTAMP NOT NULL
DEFAULT CURRENT_TIMESTAMP;

---and:
ALTER TABLE courses ADD updatedAt TIMESTAMP NOT NULL
DEFAULT CURRENT_TIMESTAMP
ON UPDATE CURRENT_TIMESTAMP;
```


Might come in handy: https://grokonez.com/node-js/sequelize/sequelize-crud-mariadb-example-build-crud-node-js-express-restapis-example