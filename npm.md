is a package manager for JavaScript - not the only one but the most popular one.

npm - node package manager

### workflow
- create empty folder 
  (without special characters like hyphen? 🤔 - had a problem when running npm init -y)
- `cd` into it
- `npm init -y`

**package.json** [npm docs](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)

**package-lock.json** is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

`npm -v` - which version is installed?  (same: `npm --version`)
`npm init -y` - will simply generate an empty npm project without going through an interactive process. The -y stands for yes. It creates nothing but a **package.json**.
From stackoverflow: It stores an exact, versioned dependency tree rather than using starred versioning like package.json itself (e.g. 1.0.*). This means you can guarantee the dependencies for other developers or prod releases, etc. It also has a mechanism to lock the tree but generally will regenerate if package.json changes.

`npm install example-package --save-dev ` - `--save-dev` tells npm to add the third-party package to the package's development dependencies (in package.json).

### install multiple packages
`npm install express body-parser sequelize`

### uninstall package
`npm uninstall example-package`

Can also be done globally, without removing it from package.json, etc.

Docs: https://docs.npmjs.com/cli/v7/commands/npm-uninstall

**Tipp**: run `npm docs example_package_name` to visit the official README file in the browser.

### '--save' flag
As of npm 5.0.0, installed modules are added as a dependency by default, so the --save option is no longer needed. The other save options still exist and are listed in the documentation for npm install.

Before version 5, NPM simply installed a package under node_modules by default. When you were trying to install dependencies for your app/module, you would need to first install them, and then add them (along with the appropriate version number) to the dependencies section of your package.json.

The --save option instructed NPM to include the package inside of the dependencies section of your package.json automatically, thus saving you an additional step.

In addition, there are the complementary options --save-dev and --save-optional which save the package under devDependencies and optionalDependencies, respectively. This is useful when installing development-only packages, like grunt or your testing library.


### dependencies listed in package.json
npm uses the tilde `~` and caret `^` to designate which patch and minor versions to use respectively.

The version number is in semver syntax which designates each section with different meaning. semver is broken into three sections separated by a dot.
```json
major.minor.patch

1.0.2
```
Major, minor and patch represent the different releases of a package.

- `^` - caret
  - If you see ^1.0.2 it means to install version 1.0.2 or the latest _minor or patch_ version such as 1.1.0.
- `~` - tilde - 
  - So if you see ~1.0.2 it means to install version 1.0.2 or the _latest patch version_ such as 1.0.4.

source: https://michaelsoolee.com/npm-package-tilde-caret/
___


