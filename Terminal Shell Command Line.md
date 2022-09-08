also Terminal or Shell

best sources:
- https://explainshell.com/
- https://www.freecodecamp.org/news/the-linux-commands-handbook/


# Frequently used commands

### Info

`cat` - concatenate files and print on the standard output
  - `cat example.txt`

`cd` - change directory
  - `mkdir example-title && cd $_` - create repository with title 'example-title' and enter it

`chown` - change file owner and group
  - `sudo chown -R "$USER":admin /usr/local/*` - alles in /usr/local auf den aktuellen Benutzer übertragen (homebrew was not functioning - "unlinked kegs in the cellar" - see in "Examples / SimonSays" below)

`echo` - prints to the output the argument passed to it.
  - `echo $(pwd)/example_file` will print out full path of 'example_file'
  - `echo "hello" >> output.txt` - appends output to a file

`grep` - print lines matching a pattern ('global regular expression print')
  - `ls -a | grep .nvm` - list all directory content but filter them for names starting with `.nvm`

`chmod` - the 'change mode' command is used to manage file system access permissions on Unix and Unix-like systems. There are three basic file system permissions, or modes, to files and directories:
  - read (r)
  - write (w)
  - execute (x)
- https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-chmod-command

`curl` - call url and log it
  - `curl -i` - include header (-i: information)
  - `curl --head` or `curl -I` - only header
  - `curl -o filename.txt` - download output into file (output)
  - `curl -O http...` - download file, img directly (and make a file if necessary - for example of JSON data)
  - excellent Traversy walkthrough: https://www.youtube.com/watch?v=7XUibDYw4mc

`ls` - list directory contents
  - `ls -l /usr/local/` - list directory contents, using long listing format, information about the files (current directory by default) - also see in "Examples / SimonSays" below
  - `ls -a` - list all directory contents (also hidden files), (-a, --all)

`mkdir` - make directories
  - `mkdire example_1 example_2` - create multiple directories
  - `mkdir example-title && cd $_` - create repository with title 'example-title' and enter it

`pwd` - print name of current/working directory

`whoami` - print effective userid
  - can be used like this: `mysql -u $(whoami)`

`who` - displays the users logged in to the system.  
`who -aH` - displays more information, including the idle time and the process ID of the terminal

`rm` - remove

`uptime` - tells how long the system has been running


### Tipps & Tricks

- shortcut to look up ALL previous commands: `CTRL + R`; start writing command; if correct command is displayed: hit ENTER. 🤓
- whitespace - use backslash `\` or quotes `''`; `""`
  `mkdir example\ folder\ #1`
  `cd 'example folder #1'`
  `rm "example folder #1"`
 
## Fledgling Section / For Beginners

- whenever you see instructions what to write in your CLI (Command Line Interface) they start with an `$`. The “$” in the code just symbolizes the command prompt. It’s not actually part of the command you run.



## Examples / SimonSays

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
