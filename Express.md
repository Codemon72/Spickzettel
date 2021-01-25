is an API framework for a node application to create a REST API


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


Basic server with express:
```
const express = require(‘express’);

// Init express
const app = express();

const port = 3000

app.use(express.static(‘public’));

// Create your endpoints/ route handlers
app.get('/', (req, res) => res.send('Hello World!'))

// Listen on port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

'/' is the path to the root or home.

#### Basic Route Handling
```js
app.get('/', function(req, res){
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
Middleware functions are functions that have access to the **request** and **response** object. Express has built in middleware but middleware can also come from 3rd party packages as well as custom middleware.
- execute any code
- make changes to the request/ response object
- end response cycle
- call next middleware in the stack

#### Installation
`npm install express`

#### Methods
- `app.use()` - for whenever we want to include middleware
- `app.listen() - 
- `app.get()` - 