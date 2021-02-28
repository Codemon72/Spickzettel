const path = require('path');

// Base file name
console.log(path.basename(__filename)); // -> path_demo.js

// Directory name
console.log(path.dirname(__filename)); // -> /Users/Codemon72/Spickzettel/Node.js/reference

// File extension
console.log(path.extname(__filename)); // -> .js

// Create path object
console.log(path.parse(__filename));    // path object with root, dir, base, ext...
console.log(path.parse(__filename).base); // -> path_demo.js

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); // ->  /Users/Codemon72/Spickzettel/Node.js/reference/test/hello.html
// Note: this is not the JS array join() method but Node.js path.join()
// source: https://www.w3schools.com/nodejs/met_path_join.asp



// More examples


// get the path delimiter base on the current OS Environment
const platSpec = path.delimiter;

console.log(platSpec);


// ge the path format on POSIX : / and Windows : \
// more info : https://nodejs.org/dist/latest-v11.x/docs/api/path.html#path_path_format_pathobject
const pathformat = path.format({
  dir: pathjoin,
  root: pathjoin,
  base: pathjoin,
  name: pathjoin,
  ext: pathjoin,
});

console.log(pathformat);


// get the parent folder director
const parentDir = path.dirname(__dirname);

console.log(parentDir);