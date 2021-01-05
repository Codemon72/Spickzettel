# Git and GitHub Cheatsheet

#### Gitignore file

###### How To

- create a file: '.gitignore' (no ending for file type)
- note every file and folder into it that you wish to not be recorded by git like this

```
# this is a comment
resources/_gen/ # this ignores the folder and everything in it
partials/structure/stylesheet.html # note the file with its whole path from the (git -) root directory
```


source: https://www.atlassian.com/git/tutorials/saving-changes/gitignore