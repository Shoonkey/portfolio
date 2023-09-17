# Portfolio

This is my portfolio!

It is my second take on a portfolio design with new takes on the projects as well!

## Projects

### To be adapted into the new portfolio from the old one
- **Pomodoro timer app** v1
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