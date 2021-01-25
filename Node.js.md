a runtime environment for executing JavaScript code

( not a framework - not a language)

Until 2009, JavaScript could only run inside a browser. In 2009, Ryan Dahl took the V8 JavaScript engine of the Chrome browser and embedded it in a C++ program to be able to run JS outside of a browser and called it Node. 

single threaded!

#### After installation: 
add **node_modules/** to your **.gitignore** file.


#### Basics
- `node` startet node und wartet, dass ich etwas sage. Wird zu einem repl.
- `node example-file.js` to run example-file.js in node
- `node -v` zeig mir die installierte Node-Version (same: `node --version`)
- `node -h` show me all commands 
- `npm init` initialisiert node.js im entsprechenden Ordner. Wegschmeißen des Ordners löscht das Projekt. 👍
  - mit der Initialisierung wird man im Terminal durch die Anlage des package.json. geführt. (just click 'enter' all the time or instead run: `npm init -y`)
- `node index.js`  startet node server mit entsprechender (in diesem Fall: index.js) Datei. 
- `CRTL + C` um den Server zu beenden.
- `npm install express --save` Paket 'Express' installieren
- `killall node` - kills all running node servers
- `npm install -g nodemon` installiert nodemon (bewirkt automatisches Neustarten des node servers). Hat bei mir nicht funktioniert - mit sudo ... ging es dann.
- `nodemon index.js` startet den node server mit index.js, allerdings mit nodemon, der bewirkt, dass sich der server nach jeder Änderung neu startet. (sollte das mal nicht klappen, try: `rs`).
- `ngrok http 80` - expose a web server running on your local machine to the internet on port 80. https://ngrok.com/docs

---

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
