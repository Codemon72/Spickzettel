and abbreviations

#### API
An API (Application Programming Interface) is a way for two different applications to communicate. For example you want to build an application which shows the current weather, you will use the API of an online weather service to request the current weather for a given city, and you might request this say every 15 minutes.

#### API Proxy
An API proxy is your interface to developers that want to use your backend services. Rather than having them consume those services directly, they access an Edge API proxy that you create.
API proxies decouple the app-facing API from your backend services, shielding those apps from backend code changes. As you make backend changes to your services, apps continue to call the same API without any interruption.

#### BLOB 
Binary Large Object

#### Client Side Validation

With Client Side Validation you can provide a better user experience by responding quickly at the browser level. When you perform a Client Side Validation, all the user inputs are validated in the user's browser itself. Client Side validation does not require a round trip to the server. This type of validation is done on the browser side using script languages such as JavaScript, VBScript or HTML5 attributes.

Example: if the user enters an invalid email format, you can show an error message immediately before the user moves to the next field. The user can then correct every field before they submit the form.

Mostly the Client Side Validation depends on the JavaScript Language, so if users turn JavaScript off, it can easily bypass and submit dangerous input to the server. Client Side Validation can not protect your application from malicious attacks on your server resources and databases.

#### Connection Pooling
You create a number of connections (for example to a database) which are always on and ready to use. If one of your functions needs to connect to the database, it can grab one out of the pool and as soon as the function is done the connection gets returned to the pool and is available again.

ELI5: Think of it like a library: you take out a book when you need it and return it to the library when you are done with it. 

Example:
```
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: '127.0.0.1',
     port: '3306',
     user: 'Codemon72', 
     database: 'codingschool',
     password: '',
     connectionLimit: 5 // see 🤓: pool of 5
});
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
  const courses = await conn.query("SELECT name FROM courses;")
  console.log(courses);
  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
};
```
#### CORS
CORS stands for Cross-Origin Resource Sharing. It's a mechanism that restricts requests coming from a different origin (domain). A request coming from a different origin is known as a cross-origin request. Cross-origin requests are vital for when your site needs to load data from other services.

CORS allows servers to specify who can access their resources and how. Browsers follow the servers' policies by sending a test request (preflight) to the server and checking whether it's allowed.
source: https://blog.tecladocode.com/what-is-cors-and-how-to-fix-it/

#### DBMS
Database Management System  
- a special software program that helps users create and maintain a database

### ERD - Entity Relationship Diagram
Useful to map out all relations in a relational database.

#### Event Loop
![Event Loop](/images/Event_Loop.png)
In depth: https://www.youtube.com/watch?v=8aGhZQkoFbQ

#### GUI
Graphic User Interface

#### Heap
The heap is used for data allocated dynamically, for anything that needs to persist across function calls.
The heap grows when you allocate memory in your program, and shrinks when you deallocate it. In languages like C and C++, you must manually deallocate memory or use objects that keep track of heap allocation for you.

#### MVP

minimal viable product

#### MVC
stands for Model, View, Controller
- Model is the data of your application.
- View is the presentation of the data.
- Controller is the brains/logic of your application.
ELI5: For instance, you're a car dealership, with many different cars in your inventory (model). When a customer asks to see a car, you (controller) look in the inventory (model), retrieve the car and present it to the customer (view).

#### NRDBMS
Non-Relational Database Management System

#### ORM
An **object-relational mapper** is a library for an object-oriented programming language which aids in translating between that language's memory objects and a relational database.

If you write your software well, you are going to package up all of your SQL calls into methods which take parameters in the language you are working with. You will want to save object instances as rows in your database (perhaps across several joined tables) and it shouldn't take too much information to store them there or retrieve them later. An ORM is simply a library which has done all of this work for you and creates a (hopefully) tidy API to do it with.

#### Parsing
ELI5: Ifyoureadthisstreamoflettersyoucanprobablystillunderstandwhatiamsaying.

Your brain is parsing that long string of letters. It breaks it apart in to words, then as it assigns meaning to the words to form complete sentences.

Parsing in computer syntax analysis works much the same way. You have some data that the computer can't really use in its current form: takes it in using some specified method, and assigns some meaning or arranges the data in to some structure it can utilize.

#### REST API
A restful API is just any API that obeys the REST standard. 
Representational State Transfer (REST) is a set of commands commonly used with web transactions.

Compare to standard web browsing: You will make an http request to http://fluffybunnies.com/picturesofbunnies, this will return you an html page that your browser will display.

In REST you will send a read, write or delete command to such a place, i.e. http://fluffybunnies.com/picturesofbunnies?picture=pinkbunny if the other end has defined this point as some place from which you can 'GET'.

You can't directly put in the read and write into a browser line, you have to use a tool that will create an http request with a payload of things to read or write.

Where you will see this most often is between frontend and backend, i.e. you load a webpage into your browser. This webpage then wants to show you a value, so it sends a REST GET back to a point on the server it came from and loads a value.

An API (Application Programming Interface) is a way for two different applications to communicate. For example you want to build an application which shows the current weather, you will use the API of an online weather service to request the current weather for a given city, and you might request this say every 15 minutes.

REST (**RE**presentation **S**tate **T**ransfer) is a protocol, or 'language', that applications can use for their APIs. Basically it allows a developer to perform commands or exchange data with a service over a network (eg. the Internet).

RESTful simply means a service provides a REST interface that a developer can communicate with.

How does it work? REST uses standard HTTP commands. While your web browser might use the GET command to retrieve a file or web page, or the POST command to submit the contents of a form, REST uses GET to retrieve data, POST to update data, PUT to create data, and DELETE to remove data. Usually what happens is the application makes a connection with the web server, sends the HTTP command (with any parameters or data required), and receives the result in the response, doing whatever it needs to with the result. HTTP is a text-based protocol, so the response is always text; but it could be plain text, base64-encoded binary, JSON, XML or another format, so the developer using the REST interface needs to read the interface documentation to know what commands are available, required parameters, format of the result data etc.

Restful Apis describe a pattern for building Apis that are highly ordered and maintainable.

You take advantage of http verbs, GET, POST, PUT, DELETE to reduce complexity of your Apis.

For example. A bad api might be like: App.com/api/getadog/<id>/ App.com/api/update-a-dog/<id> App.com/api/addnewdog

This is a bad design pattern, it leads to confusion on how to alter a dog object, relies on highly specific urls that must be remembered and might cause collisions with other endpoints

Now a restful api would be just 2 urls to describe 4 endpoints App.com/api/dog/<id>/ App.com/api/dog/

Here we would include GET, POST, PUT, DELETE In our queries to acheive the same thing. Want to get dog #345? Easy, just use GET on app.com/api/dog/345/

Want to create a new dog object? POST to App.com/api/dog/

Want to update dog 223 from sparky to Bowie? PUT to App.com/api/dog/223/

Now, I'm leaving out the Json payloads, you'd send up a dog object to the post and put endpoints, To create an object and edit an object respectively.

Tipp: You can test an API in 'Postman' or in 'Rested' (extension in Chrome)

Tipp from reddit (untested): the easiest way to create a REST message is to use something called cUrl.

#### REPL
A read–eval–print loop (REPL), also termed an interactive toplevel or language shell, is a simple interactive computer programming environment that takes single user inputs, executes them, and returns the result to the user; a program written in a REPL environment is executed piecewise. The term is usually used to refer to programming interfaces similar to the classic Lisp machine interactive environment. Common examples include command line shells and similar environments for programming languages, and the technique is very characteristic of scripting languages.

#### RDBMS
Relational Database Management System

#### Runtime
There are multiple uses for the word "runtime", and each one is slightly different. Here are some definitions:

**At runtime**: Things that happen when the program executes are said to happen "at runtime".

**Runtime system**: Think of this as the "behind-the-scenes" of a language. One might think that only VM and interpreted languages do things "behind-the-scenes", but this is not the case. For example: A C compiler adding instructions to create and manipulate the stack is an aspect of the C runtime system.

**Runtime environment**: The environment in which a program runs, and interacts with by means of the runtime system. Java has a lot of things to interact with in its environment, and that's why people talk about the "Java Runtime Environment" all the time. However, contrary to what /u/lukasRS said, a C program also has a runtime environment, simply because it interacts with an OS. For example, if you query the state of a keyboard in C, your compiler will add instructions to perform a system call.

**Runtime library**: A library which is used by the compiler to invoke interactions with the runtime environment.


#### Server
A **server is a computer, a device or a program** that is dedicated to managing network resources. They are called that because they “serve” another computer, device, or program called “client” to which they provide functionality.

**dedicated hosting** [Dedicated hosting is an Internet hosting option in which an organization leases an entire server.](https://www.techopedia.com/definition/23354/dedicated-hosting)
**shared hosting** [Shared hosting is a type of Web hosting service that allows multiple websites to share a physical Web server and its resources among the hosted websites.](https://www.techopedia.com/definition/15726/shared-hosting)

Go here for a: [really good ELI5 answer](https://www.reddit.com/r/explainlikeimfive/comments/650bre/eli5_what_exactly_is_a_server_how_does_a_server/)

#### Server Side Validation
With Server Side Validation, the input submitted by the user is being sent to the server and validated using one of the server side scripting languages such as ASP.Net, PHP etc. After the validation process on the Server Side, the feedback is sent back to the client by a new dynamically generated web page. It is better to validate user input on the server side because you can protect against malicious users, who can easily bypass your Client Side scripting language and submit dangerous input to the server.

#### SSL
Secure Sockets Layer
ELI5: If you want to pass a note from you all the way across the room to Suzy. Normally, you just pass the note and say "get it to suzy" and the kids in the room will keep pushing it towards her until she gets it. The problem is, the teacher or anyone who gets the note can just open it up and read it.

SSL is a type of certificate used to make sure the contents of a packet (note) don't get read. It's like putting your note in a lockbox and you've given Suzy the key ahead of time. She's the only one who can see what's in the box, because she has the key (the SSL certificate). HTTPS is an altered version of the HTTP protocol which makes sure whoever tries to open the box has the key. If anyone tries to read the note and they don't have the key, all they'll see is garbled (encrypted) data, which will most likely just look like random characters. it's like they took the box and just tried smashing it on the floor, but it ripped the note apart in the process.

Specifically, this lockbox is a very special lockbox. It is designed so you can give every girl in the class a key, and still ensure that both you and Suzy can send notes without anyone else knowing what your saying. Additionally, you can talk to Sandy without Suzy finding your messages.

The way this special box works is it has two keys. If you lock the box with one key, you can only unlock the box with the other key. Additionally, you can store a normal lock box inside. You work this system by keeping one key (the private key) only to yourself and making copies of the other key (the public key) to distribute to all the girls.

If Suzy wants to talk to you she will ask you for the box and inside that box she will put a normal lock box with a key, then lock it with her copy of the public key. Since you have the only copy of the private key, you are the only one that can open this. You open the special box, take out the key, put the message in the normal box, and lock it. You then lock the special box with your private key and send it to Suzy. At this point, any girl can open the special box since they all have the public key, but only Suzy can open the box inside the special box.

The only final piece of the puzzle is the verification that Suzy receives the real special box when she initially asks for this. She does this by asking the manufacturer of the special box (i.e. Verisign) if its real and comes from you.

Unfortunately, none of this prevents Sandy from coming up to Suzy, punching her in the face, and taking the note after she unlocks everything.

There are two different kinds of SSL authentication:

- One-Way SSL Authentication: The client verifies the certificate of the server. This allows you to encrypt all exchanges and make sure that you are connecting to the expected server (to avoid a man-in-the-middle attack).
- Two-Way SSL Authentication The client verifies the certificate of the server, the server verifies the certificate of the client. This is also called mutual authentication or client authentication. When using this system, the client also requires a dedicated certificate.

#### Stack
The stack grows with the depth of function calls, and shrinks with function exits.   
A stack overflow happens when you've made too many function calls without exits.
In depth: https://www.youtube.com/watch?v=8aGhZQkoFbQ


#### TSL
Transport Layer Security protocol  
TLS/SSL allows for transfer encryption, and can optionally use identity validation for the server and client.

The term SSL (Secure Sockets Layer) is often used interchangeably with TLS, although strictly-speaking the SSL protocol is the predecessor of TLS, and is not implemented as it is now considered insecure.