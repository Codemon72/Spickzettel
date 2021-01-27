for version control

recommended article: [How to Make Your Code Reviewer Fall in Love with You](https://mtlynch.io/code-review-love/)

# Git and GitHub Cheatsheet

Set new alias
`git config --global alias.co checkout` 
or (probably for more complex ones):
`git config --global alias.acm '!git add -A && git commit -m'`

sources: 
- https://www.git-scm.com/book/en/v2/Git-Basics-Git-Aliases
- https://stackoverflow.com/a/4299159/709467

List just aliases
`git config --get-regexp alias`

List all config parameters
`git config --list`

#### Gitignore file

###### How To

- create a file: '.gitignore' (no ending for file type)
- note every file and folder into it that you wish to not be recorded by git like this

```
#                                         hashtag allows comments
resources/_gen/                         # this ignores the folder and everything in it
partials/structure/stylesheet.html      # note the file with its whole path from the (git -) root directory
```

Tip: `stylesheet.html` will ignore all matching files in any directory.

source: https://www.atlassian.com/git/tutorials/saving-changes/gitignore