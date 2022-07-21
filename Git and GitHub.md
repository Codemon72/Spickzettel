recommended article: [How to Make Your Code Reviewer Fall in Love with You](https://mtlynch.io/code-review-love/)

# Git and GitHub Cheatsheet

### Basics

`git init` - initialize git in folder

##### git add | commit | push
`git status` 
`git add -A` - to add all files that are currently untracked or we made changes to
`git add exampleFolder1/example-file` - to add a specific file
`git add .` - to add all files
`git commit -m "[message]"`
`git push -u origin example-branchName` - first push from new branch
or just `git push` - if the branch has been established before

`git checkout -- example.html` reverts all changes in example.html, that had not been added
`git checkout -- .` reverts **all** all changes, that have not been added

### Branches
branch anlegen
`git branch example-branchName`

zum branch wechseln
`git checkout example-branchName`

gleichzeitig neuen branch anlegen und hineinwechseln
`git checkout -b example-branchName`

alle branches anzeigen lassen
`git branch`

rename a branch (you are currently on)
`git branch -m new-name`
    - `-m` is for move

rename a branch (you are currently not on)
`git branch -m <old-name> <new-name>`

>Tipp: If you are on Windows or another case-insensitive filesystem, and there are any capitalization change in the name, you need to use -M, otherwise, git will throw branch already exists error: `git branch -M <newname>`

rename remote branch
If you need to rename a remote branch, simply rename your local branch, push it with the new name (and thereby create a new branch remotely) and delete the old branch.

renaming branches
good source: https://www.git-tower.com/learn/git/faq/git-rename-branch/

neuen branch auf github pushen
`git push -u origin example-branchName`

auf github bereits existierenden branch auf github pushen
`git push`

branch löschen
`git branch -d example-branchName`

`git pull --rebase`
ähnlich wie rebase master nur für den Fall, dass man mit einem anderen Teammitglied im **gleichen** branch arbeitet und sich beispielsweise die commits unter den eigenen ziehen will, die der andere schon vor einem committed hatte.

rebase branch
- to keep all commits from my branch, but get all the updates from the master branch. Like taking a branch from a lower part of the tree and and graft it back on the tree 2m higher

merge conflicting branches
if it can't be done on GitHub use the terminal:
- first: check for updated master
- go into feature branch
`git merge master` - merge the branch “master” into the branch you are currently on
it will then show you the conflicting files (you can just click on one of the files to get there). In larger files search for "<<<<" or "====" to find the conflicts
- solve all conflicts in one file
- in terminal add this one file: `git add example.md`
- `git status` to see all remaining, conflicted files
- repeat for all conflicting files
- if there is a deleted, conflicting file you wish to keep deleted: `git rm example.png`
- when all conflicts are solved run `git commit`
- `git push` normally
- `git merge --abort` to abort the merge

git rebase master:
- first make sure to update your local master
- go in to branch you want to rebase and `git rebase master`
- possible conflicts will be shown in the terminal 
- solve any conflicts in VSC (find them by searching for '======'): go into file, solve conflict and add them separately with `git add /complete.path.and.name.of.file.md` 
    - with `git status` you will be shown the rest of the conflicting files
- afterwards you need to `git push -f` to the remote!!

sometimes you might want to only rebase your last 3 commits or be in other ways more specific. Check out:
**rebase -i ....** (interactive)
**rebase onto**

Note: If you don't know what's going on and just want to go back to where the repo was, then just do:
`git rebase --abort`
___

### Vim Editor
(not: git terminal)
if you (for example) forget to add a message to a commit you will end up in the vim editor.

`i`        to insert/ write a message
`ESC`      when you are finished
`:wq!`     to exit the editor (try out: `:wq`)
–––


### clone / downloading from GitHub

`git clone [url] [where to clone]`

Example:  
`git clone https://github.com/CoreyMSchafer/remote_repo.git . `

- `.` indicates the current directory

or just go to the directory where you want to have it and just go
`git clone [git.url]`
___


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

- `git config --get-regexp alias` - List just aliases

- `git config --list` - List all config parameters

- `git log` - logs commit history

#### my favorite aliases
```shell
git config --global alias.co checkout
git config --global alias.s status
git config --global alias.acm '!git add -A && git commit -m'
git config --global alias.lg "log --color --graph 
--pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s 
%Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```
sources:
- https://www.git-scm.com/book/en/v2/Git-Basics-Git-Aliases
- https://stackoverflow.com/a/4299159/709467
- https://coderwall.com/p/euwpig/a-better-git-log
___


### View and Change Remote Address
`git config --list` - Einsehen, wohin commits gepushed werden. Angezeigt wird dann z.B.: remote.origin.url=https://github.com/appoll/git-rocks.git

`git remote remove origin` - deletes the current remote address

`git remote add origin https://github.com/appoll/git-rocks.git` - establishes the new address

Now `git push` might not work. Then set the upstream with specified branch:
`git push --set-upstream origin master` 
___


### Visual Studio Code
- restoring a deleted file: on the left click on the Source Control symbol, select deleted file and click the return symbol 'Discard Changes'

___


### Gitignore file

#### How To

- create a file: '.gitignore' (no ending for file type)
- note every file and folder into it that you wish to not be recorded by git like this

```
#                                         hashtag allows comments
resources/_gen/                         # this ignores the folder (wherever it is located) and everything in it
partials/structure/stylesheet.html      # note the file with its whole path from the (git -) root directory
```

Tip: `stylesheet.html` will ignore all matching files in any directory.

#### What is the `.DS_Store` file and why does it appear in my repository?
Navigating to a folder using the "Finder" on Mac generates a .DS_Store file holding metadata about the folder (e.g. thumbnails etc.). These files can pollute your git commits and are annoying.

Luckily, you can add files of this kind to their global gitignore file to never commit these to their git projects:
On terminal execute:
```shell
echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

#### Delete .DS_STORE files in current folder and all subfolders from command line on Mac
`find . -name ".DS_Store" -delete`

#### Remove remote files
If you have already accidentally committed it to your repository, use:
`git rm -r --cached .DS_Store`

##### good .gitignore boilerplate
```
.DS_Store
*/.DS_Store

project-notes.md
```
___

#### Rename Branch
to rename the branch you are currently on, simply do:

`git branch -m <newname>` - "-m" is for "move" (or mv), which is how you rename files.

If it is another local branch (you are not currently on):
`git branch -m <old-name> <new-name>`

If you are on Windows or another case-insensitive filesystem, and there are any capitalization change in the name, you need to use -M, otherwise, git will throw 'branch already exists' error:

git branch -M <newname>

If you need to rename a remote branch, simply rename your local branch, push it with the new name (and thereby create a new branch remotely) and delete the old branch.

source: https://www.git-tower.com/learn/git/faq/git-rename-branch/
___ 

## git reset
### delete last commit - locally and remote
`git reset --hard HEAD~1` to delete last commit locally, then
`git push --force origin HEAD` This takes the current HEAD commit in local and overwrites the HEAD in the remote, removing the last commit. Note: This isn't a secure way to delete secrets accidentally pushed to a remote. Assume all secrets are compromised then watch out for caveats concerning '--force'. (https://evilmartians.com/chronicles/git-push---force-and-how-to-deal-with-it)

`git reset HEAD <file>` - Removes a file from the stage
`git reset HEAD .` - Removes all files from the stage
`git reset --soft HEAD~1` - Undo the last commit by resetting it. 
    - The --soft flag has the effect that all changes of your last commit are not deleted, but they are now uncommitted modified files.
    The tilde ~ sign followed by a 1 means: take the HEAD (your current position in the git history) and reset one commit from there
___


### Setting up git on new machine
1. install git (it comes automatically with homebrew). If you use something else, look up how to install it.

2. Setting your Git username for *every* repository on your computer:
`git config --global user.name "Mona Lisa"`

3. Setting your commit email address
`git config --global user.email "email@example.com"`

4. Set up you SSH key to connect safely to your GitHub account

4. 1. Check for existing ssh key on your machine
`ls -al ~/.ssh`
if there are no files with stuff like

    id_rsa.pub
    id_ecdsa.pub
    id_ed25519.pub

go and:

4. 2. Generate a new ssh key for your machine
`ssh-keygen -t ed25519 -C "your_email@example.com"`
q: "enter file in which to enter..." - a: Enter
q: "enter passphrase..." - a: Enter


4. 3. Add the new SSH key to your SSH agent
- best follow the tutorial: https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent


4. 4. and add your public key to your GitHub account
copy your public key to your clipboard
`pbcopy < ~/.ssh/id_ed25519.pub`

and add it in your GitHub account
account > SSH & GGP keys > add new SSH key

Docs: https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh
___




source: https://code.likeagirl.io/how-to-get-rid-of-ds-store-and-node-modules-in-git-repositories-d37b8a391247

source: https://www.atlassian.com/git/tutorials/saving-changes/gitignore