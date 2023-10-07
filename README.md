# Portfolio

This is my portfolio!

It is my second take on a portfolio design, and it's built using NextJS, ChakraUI and Phosphor Icons.

## Projects

### Up

Projects already adapted and running
- **Pomodoro timer app** v1
- A **music theory quiz app** about elementary stuff

### To be adapted into the new portfolio from the old one
- A **word search puzzle maker**
- Ordis, a **Discord bot** for making wishlists and things related to the game Warframe

## Installation

So as to have each project on their own repository, the portfolio projects (present on the `projects/` folder) are [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules), so they refer to snapshots of other repos. This means a few things must be kept in mind to work with this repo.

### Cloning this repo
To properly clone it containing its submodules you'll need to run `git clone --recurse-submodules [repo_url]`.

### Updating submodules
To properly update submodules to their latest branch, you can run `git submodule update --remote`.

### Setup caveats

- To prevent *dependency redundancy* and keep project files separate, the subapps are installed as a folder (see npm [install](https://docs.npmjs.com/cli/v9/commands/npm-install) docs, under `npm install <folder>`). Every time a subapp is installed for the first time or re-installed to update its dependencies, NPM is gonna create a new entry in the main `package.json` with an arbitrary name (usually `app`). If it's a new subapp, rename it to fit what it is, and if it's not new, remove the unnecessary added line and keep the old one. Run `npm i` in the project root to fix NPM's lockfile naming of the subapp folder dependencies.

- As NextJS strictly serves files from its `public/` folder and does not support importing files on the JS bundle out of the box, subapp's project files must be included on its `public/` folder separately from the submodules.
