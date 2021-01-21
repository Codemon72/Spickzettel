and abbreviations

#### BLOB 
Binary Large Object

#### DBMS
Database Management System  
- a special software program that helps users create and maintain a database

#### GUI
Graphic User Interface


#### MVP

minimal viable product

#### NRDBMS
Non-Relational Database Management System

#### RDBMS
Relational Database Management System

#### SSL
Secure Sockets Layer
ELI5: If you want to pass a note from you all the way across the room to Suzy. Normally, you just pass the note and say "get it to suzy" and the kids in the room will keep pushing it towards her until she gets it. The problem is, the teacher or anyone who gets the note can just open it up and read it.

SSL is a type of certificate used to make sure the contents of a packet (note) don't get read. It's like putting your note in a lockbox and you've given Suzy the key ahead of time. She's the only one who can see what's in the box, because she has the key (the SSL certificate). HTTPS is an altered version of the HTTP protocol which makes sure whoever tries to open the box has the key. If anyone tries to read the note and they don't have the key, all they'll see is garbled (encrypted) data, which will most likely just look like random characters. it's like they took the box and just tried smashing it on the floor, but it ripped the note apart in the process.

Specifically, this lockbox is a very special lockbox. It is designed so you can give every girl in the class a key, and still ensure that both you and Suzy can send notes without anyone else knowing what your saying. Additionally, you can talk to Sandy without Suzy finding your messages.

The way this special box works is it has two keys. If you lock the box with one key, you can only unlock the box with the other key. Additionally, you can store a normal lock box inside. You work this system by keeping one key (the private key) only to yourself and making copies of the other key (the public key) to distribute to all the girls.

If Suzy wants to talk to you she will ask you for the box and inside that box she will put a normal lock box with a key, then lock it with her copy of the public key. Since you have the only copy of the private key, you are the only one that can open this. You open the special box, take out the key, put the message in the normal box, and lock it. You then lock the special box with your private key and send it to Suzy. At this point, any girl can open the special box since they all have the public key, but only Suzy can open the box inside the special box.

The only final piece of the puzzle is the verification that Suzy receives the real special box when she initially asks for this. She does this by asking the manufacturer of the special box (i.e. Verisign) if its real and comes from you.

Unfortunately, none of this prevents Sandy from coming up to Suzy, punching her in the face, and taking the note after she unlocks everything.