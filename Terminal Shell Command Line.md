also Terminal or Shell

best sources:
- https://explainshell.com/
- https://www.freecodecamp.org/news/the-linux-commands-handbook/


# Frequently used commands

### Info

`cat` - concatenate files and print on the standard output
  - `cat example.txt`

`curl` - call url and log it
  - `curl -i` - include header (-i: information)
  - `curl --head` or `curl -I` - only header
  - `curl -o filename.txt` - download output into file (output)
  - `curl -O http...` - download file, img directly (and make a file if necessary - for example of JSON data)
  - excellent Traversy walkthrough: https://www.youtube.com/watch?v=7XUibDYw4mc

`ls` - list directory contents

`whoami` - print effective userid

`who` - displays the users logged in to the system.  
`who -aH` - displays more information, including the idle time and the process ID of the terminal

`rm` - remove


### Tipps & Tricks

shortcut to look up ALL previous commands: `CTRL + R`; start writing command; if correct command is displayed: hit ENTER. 🤓
 
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

