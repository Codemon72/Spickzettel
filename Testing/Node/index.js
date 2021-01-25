const express = require('express');
const path = require('path');

const app = express();

// in order not to define every route manually instead of this
// app.get('/', (req, res) => {
//   // res.send('<h1>Hello World</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// we'll use express to "Set a Static Folder":
app




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));