const express = require('express');
const router = express.Router(); 
const members = require('../../Members');

// Gets all Members from http://localhost:5000/api/members
// 'api/members' is not in the url anymore because it is set in index.js with: app.use('/api/members', require('./routes/api/members'));
router.get('/', (req, res) => {
  res.json(members);
});

// Get Single Member
router.get('/:id', (req, res) => {
  // to simply return what was asked for instead of 'id'
  // res.send(req.params.id)

  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the ID of ${req.params.id}.` });
  }
});

// Create Member
router.post('/', (req, res) => {
  res.send(req.body);

});

module.exports = router; 