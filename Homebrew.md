installs stuff / package manager for macOS (or Linux)

--- 

#### Docs
https://docs.brew.sh/

#### Get Info

`brew services list` 

---

#### Commands often used

`brew update`

Simon says: "run this every day":  
`brew update && brew upgrade && brew cleanup --prune 0`

-> updates brew, updates everything installed with brew and throws everything redundant away.

-------

#### How to Uninstall & Remove Homebrew Packages
The proper way to remove a Homebrew package is with the uninstall or remove command.  
The uninstall Homebrew package command looks like this:

`brew uninstall packageName`

The remove Homebrew package command looks like this:

`brew remove packageName`

As you may have guessed by now, the remove and uninstall commands are exactly the same, and get the same result; the removal of the Homebrew package.

For example, to remove and uninstall Telnet (assuming you installed telnet on the Mac with Homebrew anyway), you would use the following command string:

`brew uninstall telnet`

Or you can use the remove command for the same effect:

`brew remove telnet`

Removing a package from Homebrew is quick, as there is no need to download anything, it just deletes the Homebrew package from the Mac.

You can confirm the package was removed by trying to run the command again, or by checking where Homebrew packages are installed to and you will find the package you removed is no longer there.

source: https://osxdaily.com/2018/07/29/uninstall-packages-homebrew-mac/

---

sources: 
- working with Simon

interesting: 
- https://thoughtbot.com/blog/starting-and-stopping-background-services-with-homebrew
