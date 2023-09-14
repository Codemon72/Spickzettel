also Terminal or Shell

best sources:
- https://explainshell.com/
- https://www.freecodecamp.org/news/the-linux-commands-handbook/


### Frequently used commands

`cat` - concatenate files and print on the standard output
  - `cat example.txt`

`cd` - change directory
  - `mkdir example-title && cd $_` - create repository with title 'example-title' and enter it

`chown` - change file owner and group
  - `sudo chown -R "$USER":admin /usr/local/*` - alles in /usr/local auf den aktuellen Benutzer übertragen (homebrew was not functioning - "unlinked kegs in the cellar" - see in "Examples / SimonSays" below)

`echo` - prints to the output the argument passed to it.
  - `echo $(pwd)/example_file` will print out full path of 'example_file'
  - `echo "hello" >> output.txt` - appends output to a file

`find` - search for files in a directory hierarchy
  - `find / -name "filename"` 
    - `/` specifies the starting directory for the search. In this case, `/` represents the root directory, which means the search will start from the root of your file system and search through all directories.
    - `-name` is an option for find that specifies that you want to search for a file based on its name.
    - `"filename"` is the name of the file you want to search for. 

`grep` - print lines matching a pattern ('global regular expression print')
  - `ls -a | grep .nvm` - list all directory content but filter them for names starting with `.nvm`

`chmod` - the 'change mode' command is used to manage file system access permissions on Unix and Unix-like systems. There are three basic file system permissions, or modes, to files and directories:
  - read (r)
  - write (w)
  - execute (x)
- https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-chmod-command

`code .` - open repo in Visual Studio Code

`curl` - call url and log it
  - `curl -i` - include header (-i: information)
  - `curl --head` or `curl -I` - only header
  - `curl -o filename.txt` - download output into file (output)
  - `curl -O http...` - download file, img directly (and make a file if necessary - for example of JSON data)
  - excellent Traversy walkthrough: https://www.youtube.com/watch?v=7XUibDYw4mc

`ls` - list directory contents
  - `ls -l /usr/local/` - list directory contents, using long listing format, information about the files (current directory by default) - also see in "Examples / SimonSays" below
  - `ls -a` - list all directory contents (also hidden files), (-a, --all)

`mdfind` - **only on mac** 
  - https://metaredux.com/posts/2019/12/22/mdfind.html
  - https://superuser.com/questions/51122/how-to-search-with-spotlight-more-effectively/412090

`mkdir` - make directories
  - `mkdire example_1 example_2` - create multiple directories
  - `mkdir example-title && cd $_` - create repository with title 'example-title' and enter it

`open .` - open repo in finder

`pwd` - print name of current/working directory

`openssl rand -base64 12 | tr -dc 'A-Za-z0-9!@#$%^&*()_+{}|:<>?='` - Generate a secure random password with 12 characters
  - `openssl`: This is the command for OpenSSL, a widely used cryptographic library.
  - `rand`: Specifies that we want to generate random data.
  - `-base64`: Specifies the encoding format for the random data as Base64, which includes letters (both uppercase and lowercase), numbers, and some special characters.
  - `12`: This number represents the desired length of the password. You can adjust it to your preference. In this example, it generates a 12-character password.
  - `tr -dc 'A-Za-z0-9!@#$%^&*()_+{}|:<>?='`: This command uses `tr` (a UNIX text manipulation utility) to delete all characters not in the specified set (A-Z, a-z, 0-9, and the listed special characters). This ensures the password only consists of the desired characters.

`which` - locate a command

`whoami` - print effective userid
  - can be used like this: `mysql -u $(whoami)`

`who` - displays the users logged in to the system.  
`who -aH` - displays more information, including the idle time and the process ID of the terminal

`rm` - remove

`realpath`- return the canonical (absolute) pathname. You have to know where it is, either being in the same repo as the file or give directions. For example, if you are currently in the "/home/user" directory and you want to know the full path of "myfile.txt" located in "/home/user/documents," you would run the command realpath documents/myfile.txt.

`uptime` - tells how long the system has been running


### Tipps & Tricks

- to get the full pathname of a file: drag and drop it into a terminal
- shortcut to look up ALL previous commands: `CTRL + R`; start writing command; if correct command is displayed: hit ENTER. 🤓
- whitespace - use backslash `\` or quotes `''`; `""`
  `mkdir example\ folder\ #1`
  `cd 'example folder #1'`
  `rm "example folder #1"`
 
## Fledgling Section / For Beginners

- whenever you see instructions what to write in your CLI (Command Line Interface) they start with an `$`. The “$” in the code just symbolizes the command prompt. It’s not actually part of the command you run.



## Examples / SimonSays

`brew info postgresql@15 | grep files` retrieve information about a softwar package called PostgreSQL version 15 using Homebrew and search for lines containing the word "files."
  - `brew info postgresql@15` retrieves information about the PostgreSQL version 15 software package using Homebrew
  - `|` the pipe redirects the output of the previous command to the next command.
  - `grep files` search for lines in the output that contain the word "files." grep is a command-line tool used for searching text patterns within files.

It fetches information about the PostgreSQL version 15 software package using Homebrew, and then it searches through that information for any lines that include the word "files." This can be useful for finding specific details about the PostgreSQL installation related to files, such as file locations or other relevant file-related information.
–––

`sudo rm -rf /usr/local/var/mysql/*` 
- execute as sudo
    - remove files or directories
        - -r, -R, --recursive
       remove directories and their contents recursively
          - -f, --force
          ignore nonexistent files, never prompt

---

`ls -l /tmp/mysql.sock` 
- list directory contents  
    - use a long listing format
      - List information about the FILEs (the current directory by default).  Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

--- 

`sudo chown -R "$USER":admin /usr/local/*` - alles in /usr/local auf den aktuellen Benutzer übertragen
  - homebrew was not functioning and gave warning: "unlinked kegs in the cellar"

Simon says:
"Die Permissions in /usr/local  waren kaputt. Das siehst du an dem 501 in der Liste. Die Verzeichnisse gehören einen Benutzer der nicht existiert. Das kann passieren wenn man z.B. ein Backup von einem Laptop auf einen anderen überträgt.
Wir haben einfach alles in /usr/local auf deinen aktuellen Benutzer übertragen."

```
codemon72@Midas-MBP ~ % ls -l /usr/local/
total 0
drwxrwxr-x   12 501             admin   384 Aug 16 19:09 Caskroom
drwxrwxr-x   43 501             admin  1376 Aug 16 16:23 Cellar
drwxrwxr-x    4 501             admin   128 Aug 16 16:23 Frameworks
drwxr-xr-x   21 clemensbruesch  admin   672 Aug 16 07:53 Homebrew
drwxrwxr-x  205 501             admin  6560 Aug 17 09:36 bin
drwxrwxr-x    9 501             admin   288 Aug 16 16:23 etc
...
```
