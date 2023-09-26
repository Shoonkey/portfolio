# Portfolio

This is my portfolio!

It is my second take on a portfolio design with new takes on the projects as well!

## Projects

### Up

Projects already adapted and running
- **Pomodoro timer app** v1

### To be adapted into the new portfolio from the old one
- A **music theory quiz app** about elementary stuff
- A **word search puzzle maker**
- Ordis, a **Discord bot** for making wishlists and things related to the game Warframe

### Being made since the new portfolio design
- **Pomodoro timer app** v2

## Installation

So as to have each project on their own repository, the portfolio projects (present on the `projects/` folder) are [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules), so they refer to snapshots of other repos. This means a few things must be kept in mind to work with this repo.

### Cloning this repo
To properly clone it containing its submodules you'll need to run `git clone --recurse-submodules [repo_url]`.

### Updating submodules
To properly update submodules to their latest branch, you can run `git submodule update --remote`.

### Setup caveat

To prevent dependency redundancy and keep project files separate, the subapps are installed as a folder (see npm [install](https://docs.npmjs.com/cli/v9/commands/npm-install) docs, under `npm install <folder>`). Every time a subapp is installed for the first time or re-installed to update its dependencies, NPM is gonna create a new entry in the main `package.json` with an arbitrary name (usually `app`).

If it's a new subapp, rename it to fit what it is, and if it's not new, remove the unnecessary added line and keep the old one. Run `npm i` in the project root to fix NPM's lockfile naming of the subapp folder dependencies.