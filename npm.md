is package manager for JavaScript - not the only one but the most popular one.

**package.json** [npm docs](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)

**package-lock.json** is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

`npm -v` - which version is installed?  (same: `npm --version`)
`npm init -y` - will simply generate an empty npm project without going through an interactive process. The -y stands for yes. It creates nothing but a **package.json**.
From stackoverflow: It stores an exact, versioned dependency tree rather than using starred versioning like package.json itself (e.g. 1.0.*). This means you can guarantee the dependencies for other developers or prod releases, etc. It also has a mechanism to lock the tree but generally will regenerate if package.json changes.

`npm install example-package --save-dev ` - `--save-dev` tells npm to add the third-party package to the package's development dependencies (in package.json).

**Tipp**: run `npm docs example_package_name` to visit the official README file in the browser.