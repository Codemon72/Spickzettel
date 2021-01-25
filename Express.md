is an API framework for a node application to create a REST API



Getting started: http://expressjs.com/en/starter/installing.html

Express.js is a framework to assist in building web apps. Basically it makes it easier to build web apps and APIs using Node.js. 

```
const express = require(‘express’);
const app = express();
const port = 3000

app.use(express.static(‘public’));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

'/' is the path to the root or home.