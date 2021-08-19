a runtime environment for executing JavaScript code

potentially good tutorial(?): https://www.tutorialsteacher.com/nodejs/nodejs-tutorials

# Node.js is a runtime environment for executing JavaScript code.

( not a framework - not a language)

Until 2009, JavaScript could only run inside a browser. In 2009, Ryan Dahl took the V8 JavaScript engine of the Chrome browser and embedded it in a C++ program to be able to run JS outside of a browser and called it Node. 

single threaded!

#### After installation: 
add **node_modules/** to your **.gitignore** file.


#### Basics
- `node` starts Node.js and listens in the terminal. Becomes a REPL.
- `node example-file.js` to run example-file.js in node
- `node -v` zeig mir die installierte Node-Version (same: `node --version`)
- `node -h` show me all commands 
- `npm init` initialisiert node.js im entsprechenden Ordner. Wegschmeißen des Ordners löscht das Projekt. 👍
  - mit der Initialisierung wird man im Terminal durch die Anlage des package.json. geführt. (just click 'enter' all the time or instead run: `npm init -y`)
- `node index.js`  startet node server mit entsprechender (in diesem Fall: index.js) Datei. 
- `CRTL + C` um den Server zu beenden.
- `npm install express` Paket 'Express' installieren
- `killall node` - kills all running node servers
- `npm install -g nodemon` installiert nodemon (bewirkt automatisches Neustarten des node servers). Hat bei mir nicht funktioniert - mit sudo ... ging es dann.
- `nodemon index.js` startet den node server mit index.js, allerdings mit nodemon, der bewirkt, dass sich der server nach jeder Änderung neu startet. (sollte das mal nicht klappen, try: `rs`).
- `ngrok http 80` - expose a web server running on your local machine to the internet on port 80. https://ngrok.com/docs

## Modules
Consider modules to be the same as JavaScript libraries: A set of functions you want to include in your application.

**Built-In or Core Modules**
Node.js has a set of built-in modules which you can use without any further installation.
- fs	- To handle the file system
- http	- To make Node.js act as an HTTP server
- https	- To make Node.js act as an HTTPS server.
- path	- To handle file paths
Overview: https://www.w3schools.com/nodejs/ref_modules.asp
All core modules have documentation here: https://nodejs.org/dist/latest-v15.x/docs/api/


**Include Modules**
To include a module, use the require() function with the name of the module:
`const http = require('http');`
**Note**: This is CommonJS. ES6 would be: `import Person from './Person'` but is not yet supported by Node.js. Can be made possible by importing Babble.

**Create Your Own Modules**
Use the `exports` keyword to make properties and methods available outside the module file.
Every JS file you create as a module will automatically (and invisibly) have **Module Wrapper Function** wrapped around it.
```js
(function (exports, require, module, __filename, __dirname){

})
```

#### Middleware
A middleware is a part of your node.js software that gets executed for every incoming request.
You frequently use third-party packages for your middleware (most often Express) but you can also write it yourself.
It is integrated with `app.use()`.
Example:
```
const bodyParser = require(‘body-parser’);
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

In this example, we created two middlewares: the first is parsing the body in a url-encoded way, and the second is parsing the body as json content.
You can add as many middlewares as you like. They are put on the **middleware stack**.

💡 **Note**: Because a middleware is called for every incoming request, you need to make sure that your middleware does not do any long or expensive operations.
___


### NVM - Switch Node Environments
- node version manager

- check which versions are available
`nvm ls-remote`
- in the relevant directory:
`nvm install 11.15.0`

- source: https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b
- Doku: https://github.com/nvm-sh/nvm#installation-and-update
___


### Examples
##### A couple of most basic servers:
Create a file app.js:
```
const http = require('http');

let server = http.createServer((request, response) => {
  response.write('Hallo!');
  response.end();
});

server.listen(3000);
```
Dann im Terminal:
`node app.js`
`curl localhost:3000`

---

Create a file app.js:
```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log('Server started on port: ' + port) 
});
```
Dann im Terminal:
`node app.js`

There it will log 'Server started on port: 3000'
and in the browser on '127.0.0.1:3000' it will say: 'Hello World!'.

source: https://www.youtube.com/watch?v=U8XF6AFGqlc

---

To serve a file:
Create a file app.js:
```
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }

  let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.write(html);
  res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port: ' + port) 
  });
})
```
Create a file index.html with the basics of a page.

Dann im Terminal:
`node app.js`

There it will log 'Server started on port: 3000'
and in the browser on '127.0.0.1:3000' it will show whatever you put into the html file.

source: https://www.youtube.com/watch?v=U8XF6AFGqlc
