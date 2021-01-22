and abbreviations

#### BLOB 
Binary Large Object

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

#### DBMS
Database Management System  
- a special software program that helps users create and maintain a database

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

#### NRDBMS
Non-Relational Database Management System

#### ORM
An **object-relational mapper** is a library for an object-oriented programming language which aids in translating between that language's memory objects and a relational database.

If you write your software well, you are going to package up all of your SQL calls into methods which take parameters in the language you are working with. You will want to save object instances as rows in your database (perhaps across several joined tables) and it shouldn't take too much information to store them there or retrieve them later. An ORM is simply a library which has done all of this work for you and creates a (hopefully) tidy API to do it with.

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