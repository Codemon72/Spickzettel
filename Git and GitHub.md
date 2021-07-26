recommended article: [How to Make Your Code Reviewer Fall in Love with You](https://mtlynch.io/code-review-love/)

# Git and GitHub Cheatsheet

### Basics

##### git add | commit | push
`git status` 
`git add -A` - to add all files that are currently untracked or we made changes to
`git add .` - 
`git commit -m "[message]"`
`git push -u origin example-branchName` - first push from new branch
or just `git push` - if the branch has been established before

### branches
branch anlegen
`git branch example-branchName`

zum branch wechseln
`git checkout example-branchName`

gleichzeitig neuen branch anlegen und hineinwechseln
`git checkout -b example-branchName`

alle branches anzeigen lassen
`git branch`

neuen branch auf github pushen
`git push -u origin example-branchName`

auf github bereits existierenden branch auf github pushen
`git push`

branch löschen
`git branch -d example-branchName`

`git pull --rebase`
ähnlich wie rebase master nur für den Fall, dass man mit einem anderen Teammitglied im **gleichen** branch arbeitet und sich beispielsweise die commits unter den eigenen ziehen will, die der andere schon vor einem committed hatte.


### workflow on GitHub
- check your code thorougly
to request review:
- click "pull request"
- top right: 'reviews': choose reviewer 
- wait for approval
- "squash and merge"
- delete branch


### Set new alias
`git config --global alias.co checkout` 
or (probably for more complex ones):
`git config --global alias.acm '!git add -A && git commit -m'`

sources: 
- https://www.git-scm.com/book/en/v2/Git-Basics-Git-Aliases
- https://stackoverflow.com/a/4299159/709467

- `git config --get-regexp alias` - List just aliases

- `git config --list` - List all config parameters

- `git log` - logs commit history
___


### View and Change Remote Address
`git config --list` - Einsehen, wohin commits gepushed werden. Angezeigt wird dann z.B.: remote.origin.url=https://github.com/appoll/git-rocks.git

`git remote remove origin` - deletes the current remote address

`git remote add origin https://github.com/appoll/git-rocks.git` - establishes the new address

Now `git push` might not work. Then set the upstream with specified branch:
`git push --set-upstream origin master` 
___


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

###### What is the `.DS_Store` file and why does it appear in my repository?
Navigating to a folder using the "Finder" on Mac generates a .DS_Store file holding metadata about the folder (e.g. thumbnails etc.). These files can pollute your git commits and are annoying.

Luckily, you can add files of this kind to their global gitignore file to never commit these to their git projects:
On terminal execute:
```shell
echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```
###### Remove remote files
If you have already accidentally committed it to your repository, use:
`git rm -r --cached .DS_Store`
___

#### Rename Branch
to rename the branch you are currently on, simply do:

`git branch -m <newname>` - to remember this is -m is for "move" (or mv), which is how you rename files.

If it is another local branch (you are not currently on):
`git branch -m <old-name> <new-name>`

If you are on Windows or another case-insensitive filesystem, and there are any capitalization change in the name, you need to use -M, otherwise, git will throw 'branch already exists' error:

git branch -M <newname>

If you need to rename a remote branch, simply rename your local branch, push it with the new name (and thereby create a new branch remotely) and delete the old branch.

---

source: https://www.git-tower.com/learn/git/faq/git-rename-branch/


source: https://code.likeagirl.io/how-to-get-rid-of-ds-store-and-node-modules-in-git-repositories-d37b8a391247

source: https://www.atlassian.com/git/tutorials/saving-changes/gitignore