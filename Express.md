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