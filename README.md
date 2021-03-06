### 1. Environment Setup
* Install [Homebrew](https://docs.brew.sh/Installation)
* Install Node.js
  * Run command: `brew install node`
  * Verify version of the installed `node` and `npm`
    * Run command: `node --version` (Version should be greater than or equal to `v12.4.0`.)
    * Run command: `npm --version` (Version should be greater than or equal to `6.9.0`.)
* Install Git
  * If you use a Mac, you can skip this. Apple ships their own fork of `git`.
* Install Gatsby CLI
  * Run command: `npm install -g gatsby-cli`

### 2. Recommended Development Tools
* Terminal: [iTerm2](https://www.iterm2.com/)
* Shell: [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh)

### 3. Local Development
#### 3.1 Check package health
* Check if there are dependencies not declared in `package.json`
  * This checks if there are dependencies that are available on your machine but not declared in this package's dependency closure, e.g. dependencies that were installed via `npm install` without specifying the `--save` flag.
  * Run command: `npm prune`
* Check if there are upgradable dependencies
  * Run command: `npm outdated`
  * For each of the outstanding/outdated dependency
    * Run command: `npm install DEPENDENCY——NAME@latest --save`
    * e.g. `npm install gatsby@latest --save`
  * Reproduce the version lock of this package's dependency closure after any depdency upgrade
    * Run command: `npm shrinkwrap --dev`

#### 3.2 To run the website locally on your machine
* `cd` into the root directory of the website project.
* Run command: `npm install`
* Run command: `npm run develop`

#### 3.3 How to test changes locally
* Write tests in NightwatchJS in the `tst` folder.
* Run command: `npm run integ-test-local`

### 4. Publish to Beta Stage
GitHub Pages is used for beta testing, any manual testing or automated testing should be done against this stage before promoting changes to the next stage.

* Run command: `npm run deploy`
* Beta website can be reached at: https://travis-christian-assembly.github.io/overseas-chinese-homecoming-gathering-website/

#### 4.1 How to test against Beta stage
* Run command: `npm run integ-test-beta`

### 5. Publish to Prod Stage
Once testing (manual or automated) is done in Beta stage, do the following to deploy changes to the production website.

* Run command: `git push`

Note: Process for publishing to S3/CloudFront is still TBD.
