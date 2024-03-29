is an API framework for a server-side node application to create a REST API

Getting started: http://expressjs.com/en/starter/installing.html
Brad Traversy: [Crash Course](https://youtu.be/L72fhGm1tfE)

Express.js is a framework to assist in building web apps. Basically it makes it easier to build web apps and APIs using Node.js.

- most popular web framework for Node by far (2019)
- fast, unopinionated, minimalist
- server-side or backend framework
- makes building web applications with Node.js _much_ easier
- full control of request and response
- all in Javascript

Prerequisites:

- JavaScript Fundamentals
- Basics of Node.js and NPM

#### install express

`npm i express`

#### Most basic bare bone server with express

```js
const express = require(‘express’);

// Init express
const app = express();

const port = 3000

app.use(express.static(‘public’));

// Create your endpoints/ route handlers
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen on port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

#### Basic Route Handling

```js
app.get("/", function (req, res) {
  // Fetch from database
  // Load pages
  // Return JSON
  // Full access to request and response
});
```

- Handling requests/ routes is simple
- app.get(), app.post(), app.put(), app.delete(), etc
- Access to params, query strings, url parts, etc
- Express has a router so we can store routes in separate files and export
- We can parse incoming data with the Body Parser

#### Express Middleware

Middleware functions are just functions that have access to the **request** and **response** object.
Express has built in middleware but middleware can also come from 3rd party packages. Or you can write it your own custom middleware.

- execute any code
- make changes to the request/ response object
- end response cycle
- call next middleware in the stack

**Syntax**
Custom Middleware needs 3 Parameters: `req, res, next`

```js
const customMiddleware = (req, res, next) => {
  // custom code
  next();
};

// Init Middleware - gets hit on _every_ URL request
app.use(customMiddleware);
```

Example:

```js
const logger = (req, res, next) => {
  // to log the full URL
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}
```

#### Body Parser

Docs: https://github.com/expressjs/body-parser

When you submit form data with a POST request, that form data can be encoded in many ways. The default type for HTML forms is application/x-www-urlencoded, but you can also submit data as JSON or any other arbitrary format.

The body-parser module also provides middleware for parsing JSON, plain text, or just returning a raw Buffer object for you to deal with as needed.

#### Installation

`npm install express`

#### Methods

- `app.get()` - basic creation of a route
  Example:
  ```js
  const express = require("express");
  const app = express();
  app.get("/", (req, res) => {
    res.send("INDEX");
  });
  ```
- `app.use()` - for whenever we want to include middleware
  Examples:

  ```js
  const express = require("express");
  const app = express();

  // Body Parser Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Set a Static Folder:
  app.use(express.static(path.join(__dirname, "public")));

  // Courses Routes
  app.use("/courses", require("./routes/courses"));
  ```

- `app.listen()` - TODO
  Example:
  ```js
  const express = require("express");
  const app = express();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, console.log(`Server started on ${PORT}`));
  ```
- `app.engine()` - TODO
  Example:
  ```js
  const express = require("express");
  const app = express();
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  ```
- `app.set()` - TODO
  Example:

  ```js
  const express = require("express");
  const app = express();
  app.set("view engine", "handlebars");
  ```

  #### Methods on the `res` Object

  - res.send() - to send text or HTML to the browser (not used too much)
    ```js
    res.send("hello world"); // or
    res.send("<h1>hello world</h1>");
    ```
  - res.sendFile() - sends a file
    ```js
    res.sendFile(path.join(__dirname, "public", "index.html"));
    ```
  - res.json() - to send a JSON file. No JSON.stringify or anything needed because Express takes care of it.
  - res.render() - when using a template engine (like Handlebars)
  - res.status() - sends HTTP status
    ```js
    res.status(400).json({ msg: 'Member not found' });
    ```
