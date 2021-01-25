// following Brad Traversy's Express JS Crash Course until about 45:.. 
// https://youtu.be/L72fhGm1tfE

const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')

const app = express();


// Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// in order not to define every route manually instead of this
// app.get('/', (req, res) => {
//   // res.send('<h1>Hello World</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// we'll use express to 
// Set a Static Folder:
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));