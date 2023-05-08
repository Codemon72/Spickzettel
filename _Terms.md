
### API
An API (Application Programming Interface) is a way for two different applications to communicate. For example you want to build an application that shows the current weather, you will use the API of an online weather service to request the current weather for a given city, and you might request this say every 15 minutes.

___

### API Proxy
An API proxy is your interface to developers that want to use your backend services. Rather than having them consume those services directly, they access an Edge API proxy that you create.
API proxies decouple the app-facing API from your backend services, shielding those apps from backend code changes. As you make backend changes to your services, apps continue to call the same API without any interruption.

___


### BLOB 
Binary Large Object
___


### Brand SERP
SERP = Search Engine Results Page
A Brand SERP is the result Google returns for a search on your exact match brand name. 
Basically a digital business card.
The Google Knowledge Graph is a part of that.
––––


### CLI Command Line Interface
Abbreviated as CLI, a Command Line Interface connects a user to a computer program or operating system. Through the CLI, users interact with a system or application by typing in text (commands). The command is typed on a specific line following a visual prompt from the computer.
___

### Client Side Validation

With Client Side Validation you can provide a better user experience by responding quickly at the browser level. When you perform a Client Side Validation, all the user inputs are validated in the user's browser itself. Client Side validation does not require a round trip to the server. This type of validation is done on the browser side using script languages such as JavaScript, VBScript or HTML5 attributes.

Example: if the user enters an invalid email format, you can show an error message immediately before the user moves to the next field. The user can then correct every field before they submit the form.

Mostly the Client Side Validation depends on the JavaScript language, so if users turn JavaScript off, it can easily bypass and submit dangerous input to the server. Client Side Validation can not protect your application from malicious attacks on your server resources and databases.

- Built-in form validation uses `HTML5` form validation features (for exmple: the `required` attribute in input fields). It has better performance than JavaScript, but it is not as customizable as JavaScript validation.
- `JavaScript` validation is coded using JavaScript. This validation is completely customizable, but you need to create it all (or use a library).

JS form validation can be simple or complex:
- Super basic: 'the field is not empty => ok'
- Bit more nifty: 'check for valid email adress with a Regular Expression'
- Depending on the form: 'compare start and end date of entered course and give useful hints'

JS form validation can be blunt or enhance the UX
- blunt: 'Err... wrong'
- nice: checking during input (onChange) and responding immediately when entry is correct + giving valid hints from the start

- https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- https://www.makeuseof.com/implement-form-validation-javascript/
___

### Connection Pooling
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
___

### CORS
CORS stands for Cross-Origin Resource Sharing. It's a mechanism that restricts requests coming from a different origin (domain). A request coming from a different origin is known as a cross-origin request. Cross-origin requests are vital for when your site needs to load data from other services.

CORS allows servers to specify who can access their resources and how. Browsers follow the servers' policies by sending a test request (preflight) to the server and checking whether it's allowed.
sources: 
https://blog.tecladocode.com/what-is-cors-and-how-to-fix-it/
https://youtu.be/4KHiSt0oLJ0
–––

### Deep Link
Deep links are a type of link that send users directly to an app instead of a website or a store.
–––


### Google Knowledge Graph
Googles understanding of the world. 'Where' all of google's knowledge is stored. The Google Knowledge Panel is a result of that.
–––


### Google Knowledge Panel
Panel on the right side in a google search generated from Google Knowledge Graph
–––


##### More in-depth and ELI5 
source: https://dev.to/dougblackjr/cors-in-a-way-i-can-understand-501d
**My Imperfect Metaphor**
My wife and I need to step out of the house and we leave our 10 year old daughter in charge.

**Why You Need CORS**
We don't give our daughter any instructions on who to let in and what they can do. Stranger knocks on door, daughter lets stranger in. Stranger invites more strangers, robs our house, spray paints the cat, and steals our personal information.

CORS gives a framework of who is allowed in and allowed to call whom.

**Setting the Access-Control-Allow-Origin**
We tell our daughter, "Don't allow anyone in except for Miss Patty (our neighbor)." A knock at the door happens, and our daughter asks who it is. She then can make a decision based on who we told her to allow in.

This allows you to tell the browser which sites you will allow in.

**Setting the Access-Control-Allow-Credentials**
We tell our daughter, "Don't allow anyone in except for Miss Patty, or anyone who knows our secret code word."

Typically CORS doesn't include cookies or other authentication in its requests. Setting this to true throws cookies in the request as well.

**Setting the Access-Control-Allow-Methods**
We tell our daughter, "You can invite one friend over, but they can't paint the wall."

This tells the CORS request to allow which methods of request: GET, POST, PUT, DELETE. So, if you wanted a site to do a GET, but not to update anything, you can do that.

**Setting the Access-Control-Max-Age**
We tell our daughter, "You can invite one friend over, but they have to leave at 6 PM."

This one is really imperfect. This sets the value in seconds to cache preflight request results, such as the data in Access-Control-Allow-Headers and Access-Control-Allow-Methods headers.
___


### DevOps
tldr: Task of DevOps: Make software development and deployment as easy as possible for the dev team, make deployments and modifications to systems seamless and hands off.
difference betweens Devs and Ops: they're both programmers - but one is focused on writing the software, one is focused on deploying it and keeping it running.
--- 
Traditionally, an IT company had two fully separate departments and processes. Development, and operations. Dev was responsible for writing, testing, debugging and maintaining the software. Dev was staffed by programmers and software engineers. Ops, in turn, was responsible for taking Dev's finished product, the completed software, and setting it up on servers to run it. They would take care of the server's operating system, and any networking services it depends on, and they would be responsible for stuff like capacity and load management. Ops was mostly staffed by sysadmins and networking/infrastructure engineers.

This way of doing things worked well for a long time because these were quite different problem domains requiring different expertise. The role divisions were clean: Dev produces the software, Ops runs it. If a bug in the software was found in production, Ops would report it back to Dev and they would address the bug in their next version release, which Ops would then install.

But nowadays, the stuff which Ops engineers are responsible for, has started to look more and more like what the Dev engineers work with. Instead of physical servers, they're dealing with virtual machines. And starting/stopping those virtual machines is done using automated, programmed API calls. And the code to do all that stuff is increasingly being treated just like the software that Dev is writing. The connectivity between servers and their storage backends is no longer described by a wiring diagram, but by a structured document which tells the VM host how to hook it up. They call this type of thing 'infrastructure as code'.

So: Devops. It's a management and workflow philosophy in IT where 'ops', the process of getting the software hosted and running on a server, or a cluster of servers with load balancing or whatever, is treated as continuous with the software development process, instead of distinct from it.
---
DevOp's has become a buzzword and means different things to different people.

At it's most basic; it aligns with the "Agile" practices. One of the big issues with most companies is that there are distinct engineering departments all with separate goals.

In this case; we are concerned with the almost polar opposite goals of development and operations. Developers want to make new features, improve the product; fix bugs, etc. Operations wants to get everything up and running and never change; since changes cause new errors, bugs, performance problems, etc.

DevOps goal is to ease the tension between these two camps. Having operations people in the dev trenches is the main way this is achieved. Their job is to make it as easy as possible for developers and operations to do what they need to do. Providing identical dev, test, staging and QA environments; setting up automatic testing and deployment pipelines, while also being involved in the development process so they are more equipped to handle production errors. Traditionally, operations is almost oblivious to the code base since they only care about their infastructure.

The goal is to make the entire process so seemless that you can do thousands of production deployments per day; as opposed to traditional methods of setting out a deployment window once every quarter or however long.
---
practical example:
Suppose you've got a small software company with a popular web app. The company comes up with an idea for a feature.

Both the software engineer and the DevOps engineer have similar education - maybe a degree in C.S. or E.E. - but they have different specialties.

The software engineer is the one who writes the code for the feature and creates a new version of the server software. She tests it carefully to make sure it does what it's supposed to do, but she can't be sure if it will work perfectly until it's deployed to millions of users.

The DevOps engineer maintains the servers. She takes the new server software and installs it on just one server first, so only about 5% of the customers get the new software. She monitors the logs and system load for a few hours and everything seems fine, so she slowly ramps up to 95%, but leaving one server running the old software just in case.

The next day two servers run out of memory and restart. Luckily the DevOps engineer designed a really fault-tolerant system, so everything keeps running, but she notices that other servers are also leaking memory too, while the one holdout running the old software is using much less memory and seems stable.

Now that she's confirmed there's a memory leak, the DevOps engineer carefully rolls back all of the servers to the previous working version and files a ticket with the software engineer to fix the memory leak. The software engineer fixes the bug, writes a new test to prevent future regressions, and then releases a new version of the server software to try again the next day.

Meanwhile, the DevOps engineer writes some scripts to automatically detect memory leaks and trigger an auto-rollback script, so that if something similar were to happen over the weekend, she wouldn't even have to necessarily do anything.

So they're both programmers - but one is focused on writing the software, one is focused on deploying it and keeping it running.
___


### DBMS
Database Management System  
- a special software program that helps users create and maintain a database
___


### Design Patterns
are about designing elegant solutions to repeating problems in object-oriented software. How you structure your classes and how they should collaborate. They should be _reusable_ and _extensible_. 
- recommended read: Design Patterns by GoF (Gang of Four) 
  - 23 design patterns in 3 categories
    - creational: different ways to create objects
    - structural: relationships between these objects
    - behavioural: interaction/ communication between these objects
    
Freecodecamp Introduction: https://www.freecodecamp.org/news/an-introduction-to-software-architecture-patterns/
___


### Dynamic (Server Rendered) vs Static (Pre-Rendered) Sites
- dynamic sites use server side languages to process requests at the time the request is made and generate a page and its contents in real-time. 
- static pages are pre-rendered, cached, and delivered to the user.
- but:
  - Sites can be dynamically generated, cached, and served statically. 
  - Static sites can have dynamic components. 
- nice deep dive: https://www.zesty.io/mindshare/marketing-technology/dynamic-vs-static-websites/
___


### Error Messages
- `ENOENT` - "No such file or directory",  abbreviation of Error NO ENTry or Error NO ENTity
___


### ERD - Entity Relationship Diagram
Useful to map out all relations in a relational database.
___

### Event Loop
![Event Loop](/images/Event_Loop.png)
In depth: https://www.youtube.com/watch?v=8aGhZQkoFbQ
___


### FOUT - Flash Of Unstyled Text
for example: the text shows up and only half a second later it changes to the correct font-style
___


### GUI
Graphic User Interface
___


### GREP
Grep is used to find patterns inside of files.

Grep is one among the system administrator’s “Swiss Army knife” set of tools, and is extremely useful to search for strings and patterns in a group of files, or even sub-folders.

In the simplest terms, grep (global regular expression print) is a small family of commands that search input files for a search string, and print the lines that match it. Although this may not seem like a terribly useful command at first, grep is considered one of the most useful commands in any Unix system.

article: https://www.opensourceforu.com/2012/06/beginners-guide-gnu-grep-basics/
–––


### [HMR] Waiting for update signal from WDS... 
... is not an error. 
**HMR**: Hot Module Reload. 
**WDS**: Webpack Dev Server. This is just saying it's ready to refresh when you save a file so you don't need to manually refresh.
___


### Heap
The heap is used for data allocated dynamically, for anything that needs to persist across function calls.
The heap grows when you allocate memory in your program, and shrinks when you deallocate it. In languages like C and C++, you must manually deallocate memory or use objects that keep track of heap allocation for you.
___


### MERN Stack
The MERN Stack is a popular stack of technologies for building a modern, single-page application.
- MongoDB is document based open source data base.
- Express is a web application framework that makes it simpler to code a web server in JS
- React is a JS frontend library for building user interfaces
- Node.js allows JS to run outside of a browser, in places like a web server.
___


### Open Source vs Proprietary Software
- Proprietary: Software mit eingeschränkten Rechten zur Wiederverwendung, Verbreitung und Veränderung durch Dritte.
- Open Source Software: Quelloffene Software, deren Code von Dritten eingesehen, genutzt und verändert werden darf.

Digitale Souveränität: 
- IT-Infrastrukturen sichern (z.B. Hosting in Deutschland)
- Abhängigkeiten vermeiden
___


### Kernel
- A Kernel is the core of an OS (operating system).
- It manages all applications as well as hardware resources (like memory and CPU).
- Every OS has it's own Kernel (or engine) and these kernels have different APIs.
  - that's why we cannot run a Windows application on Linux: the app needs to talk to the kernel and can't
  - (on a Windows machine we can now both run Windows and Linux containers, because since Windows10 they added a custom built Linux kernel)
___


### KPI
Key Performance Indicator
- used for apps and App Store Optimization

### MVP

minimal viable product
___

### MVC
stands for Model, View, Controller
- Model is the data of your application.
- View is the presentation of the data.
- Controller is the brains/logic of your application.
ELI5: For instance, you're a car dealership, with many different cars in your inventory (model). When a customer asks to see a car, you (controller) look in the inventory (model), retrieve the car and present it to the customer (view).

___

### NFC - Near Field Communication
A set of communication protocols that enables communication between two electronic devices over a distance of 4 cm (11⁄2 in) or less.
For example: credit cards

___

### NRDBMS
Non-Relational Database Management System

___

### ORM
An **object-relational mapper** is a library for an object-oriented programming language which aids in translating between that language's memory objects and a relational database.

If you write your software well, you are going to package up all of your SQL calls into methods which take parameters in the language you are working with. You will want to save object instances as rows in your database (perhaps across several joined tables) and it shouldn't take too much information to store them there or retrieve them later. An ORM is simply a library which has done all of this work for you and creates a (hopefully) tidy API to do it with.

___

### Parsing
ELI5: Ifyoureadthisstreamoflettersyoucanprobablystillunderstandwhatiamsaying.

Your brain is parsing that long string of letters. It breaks it apart in to words, then as it assigns meaning to the words to form complete sentences.

Parsing in computer syntax analysis works much the same way. You have some data that the computer can't really use in its current form: takes it in using some specified method, and assigns some meaning or arranges the data in to some structure it can utilize.

___

### REST API
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

source: https://www.reddit.com/r/learnprogramming/comments/40lfkn/eli5_rest_api/
Docs: https://www.restapitutorial.com/
___

### REPL
A read–eval–print loop (REPL), also termed an interactive toplevel or language shell, is a simple interactive computer programming environment that takes single user inputs, executes them, and returns the result to the user; a program written in a REPL environment is executed piecewise. The term is usually used to refer to programming interfaces similar to the classic Lisp machine interactive environment. Common examples include command line shells and similar environments for programming languages, and the technique is very characteristic of scripting languages.

___

### RDBMS
Relational Database Management System

___

### Runtime
There are multiple uses for the word "runtime", and each one is slightly different. Here are some definitions:

**At runtime**: Things that happen when the program executes are said to happen "at runtime".

**Runtime system**: Think of this as the "behind-the-scenes" of a language. One might think that only VM and interpreted languages do things "behind-the-scenes", but this is not the case. For example: A C compiler adding instructions to create and manipulate the stack is an aspect of the C runtime system.

**Runtime environment**: The environment in which a program runs, and interacts with by means of the runtime system. Java has a lot of things to interact with in its environment, and that's why people talk about the "Java Runtime Environment" all the time. However, contrary to what /u/lukasRS said, a C program also has a runtime environment, simply because it interacts with an OS. For example, if you query the state of a keyboard in C, your compiler will add instructions to perform a system call.

**Runtime library**: A library which is used by the compiler to invoke interactions with the runtime environment.

___


### SaaS
Software as a Service
___


### Semver Syntax
it is used i.g. in package.json for version numbers, like `1.2.1`

The number stands for MAJOR.MINOR.PATCH:

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards compatible manner, and
- PATCH version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

source: https://semver.org/
___


### Server
A **server is a computer, a device or a program** that is dedicated to managing network resources. They are called that because they “serve” another computer, device, or program called “client” to which they provide functionality.

**dedicated hosting** [Dedicated hosting is an Internet hosting option in which an organization leases an entire server.](https://www.techopedia.com/definition/23354/dedicated-hosting)
**shared hosting** [Shared hosting is a type of Web hosting service that allows multiple websites to share a physical Web server and its resources among the hosted websites.](https://www.techopedia.com/definition/15726/shared-hosting)

Go here for a: [really good ELI5 answer](https://www.reddit.com/r/explainlikeimfive/comments/650bre/eli5_what_exactly_is_a_server_how_does_a_server/)

___

### Server Side Validation
With Server Side Validation, the input submitted by the user is being sent to the server and validated using one of the server side scripting languages such as ASP.Net, PHP etc. After the validation process on the Server Side, the feedback is sent back to the client by a new dynamically generated web page. It is better to validate user input on the server side because you can protect against malicious users, who can easily bypass your Client Side scripting language and submit dangerous input to the server.

___

### SRS - Software Requirements Specification
A software requirements specification is a description of a software system to be developed. It is modeled after business requirements specification.

–––

### SSL
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

___

### Stack
The stack grows with the depth of function calls, and shrinks with function exits.   
A stack overflow happens when you've made too many function calls without exits.
In depth: https://www.youtube.com/watch?v=8aGhZQkoFbQ
___


### Template Language
A template language is used to build webpages that combine static content, which is the same on multiple pages, and dynamic content, which changes from one page to the next. 
A template language makes it possible to re-use the static elements that define the layout of a webpage, while dynamically populating the page with data from a content directory or a Shopify store. The static elements are written in HTML, and the dynamic elements are written in the template language. The template elements in a file act as placeholders: when the code in the file is compiled and sent to the browser, the Liquid is replaced by data from the Shopify store where the theme is installed.

Examples: Liquid in Shopify, Go Template Language for Hugo
___


### TDD - Test Driven Development
is a method in which you constantly test your code while you write it.
You can do TDD alone or with a peer.
In TDD, you first write a failing test, then implement the function so that the test turns green. You then write another test that fails, and then improve the function. You go in this cycle until you reach a state where you tested all possible scenarios.
  
If you are working together with a peer, one of you writes the failing tests, and the other improves the implementation to get the test to turn green. This is also called Ping-Pong Pairing.

- why?
  - to prevent bugs
  - safer refactoring
  - for security reasons - pen-testing - 'pen' for 'penetration'
  - can be a form of documentation (the tests tell you exactly what your code was meant to do)

- Types of Testing:
● Manual testing
● Unit testing
● Integration testing
(and some we didn't cover:)
● Robustness testing
● Scalability testing
● UI testing

- CI - Continuous Integration e.g. with GitHub Actions
- Unit testing - A method for testing only single units, mainly functions, of code in a separated, isolated way.
- Integration testing - A method for testing applications with all components, including databases, for example. The opposite of unit testing.
- Jest - a library for unit testing JavaScript code (installed with npm)
___


### TSL
Transport Layer Security protocol  
TLS/SSL allows for transfer encryption, and can optionally use identity validation for the server and client.

The term SSL (Secure Sockets Layer) is often used interchangeably with TLS, although strictly-speaking the SSL protocol is the predecessor of TLS, and is not implemented as it is now considered insecure.
___


### Virtual Machine
- A virtual machine is an abstract of a machine (or physical hardware). 
- For this we need a Hypervisor: a tool to create and manage virtual machines. 
  - Examples are VirtualBox, VMware (which are both cross-platform (running on Mac, Linux and Windows)) and Hyper-v (Windows only)
- Problems
  - each VM needs a full-blown OS (that needs to be licensed, patched and monitored)
  - slow to start (because entire OS has to be loaded)
  - resource intensive (CPU, Memory, Disk Space)