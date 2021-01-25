const express = require('express');
const path = require('path');
const members = require('./Members');

const app = express();

// simple example for a middleware function:
const logger = (req, res, next) => {
  console.log('Testing');
  next(); 
};
// Init middleware
app.use(logger);

// Gets all Members from http://localhost:5000/api/members
app.get('/api/members', (req, res) => {
  res.json(members);
});

// in order not to define every route manually instead of this
// app.get('/', (req, res) => {
//   // res.send('<h1>Hello World</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// we'll use express to 
// Set a Static Folder:
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));