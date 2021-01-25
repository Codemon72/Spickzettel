const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')
const members = require('./Members');

const app = express();


// Init middleware
// app.use(logger);


// Gets all Members from http://localhost:5000/api/members
app.get('/api/members', (req, res) => {
  res.json(members);
});

// Get Single Member
app.get('/api/members/:id', (req, res) => {
  // to simply return what was asked for after '..members/'
  // res.send(req.params.id)

  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the ID of ${req.params.id}.` });
  }
})

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