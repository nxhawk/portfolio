---
title: How to setup Typescript project with Husky
description: Helps you initialize typescript projects effectively!
date: 2024-07-26
cover: blog/04.jpg
tags:
  - blog
  - typescript
  - setup
---

# How to setup Typescript project with Husky

:::callimage{img="/blog/04.jpg" alt="Setup typescript project"}
:::

## Table of contents

- [How to setup Typescript project with Husky](#how-to-setup-typescript-project-with-husky)
  - [Table of contents](#table-of-contents)
  - [Project description](#project-description)
  - [Setting up ESLint](#setting-up-eslint)
    - [eslint-config-google](#eslint-config-google)
  - [Setting up Prettier](#setting-up-prettier)
    - [Installation Prettier](#installation-prettier)
    - [Customize Prettier](#customize-prettier)
    - [Ignore Prettier](#ignore-prettier)
  - [Setting up Husky](#setting-up-husky)
    - [Install Husky](#install-husky)
    - [Update package.json](#update-packagejson)
    - [Editing the pre-commit hook](#editing-the-pre-commit-hook)
  - [Bonus: configure vs code to format on save](#bonus-configure-vs-code-to-format-on-save)
  - [Setup Commintlint](#setup-commintlint)
    - [Angular Conventional Commit](#angular-conventional-commit)
    - [Angular Conventional Commit has gitmoji](#angular-conventional-commit-has-gitmoji)
  - [Setup Webhooks Notifications with Discord Chat](#setup-webhooks-notifications-with-discord-chat)

## Project description

How to set up ESLint, Prettier, and Husky to consistently write and style your code using Typescript. In bonus part, we will setup **vs code** configuration to enable `auto-format` and `auto-style`.

## Setting up ESLint

```bash
# Configure
npx eslint --init
```

### eslint-config

We choose eslint to enforce code style, it looks like that:

````md
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
````

It installs thoses packages: `eslint-plugin-react@latest`, `@typescript-eslint/eslint-plugin@latest`, `@typescript-eslint/parser@latest`

## Setting up Prettier

Codes formatter ⇒ It removes all original styling and ensures that all outputted code conforms to a consistent style.

### Installation Prettier

```bash
#Install Prettier
npm install --save-dev --save-exact prettier

#To avoid format conflicts between ESLint and Prettierr.
# It turns off all ESLint rules that are unnecessary or might conflict with Prettier.
npm install --save-dev eslint-config-prettier

#To make Prettier cooperate with ESLint; add "prettier" to the extends array in your eslintrc.js file.
# So it now should look like this:
extends: ["prettier", "eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"]
```

### Customize Prettier

To customize Prettier, create a `.prettierrc` file in the root of your directory

```JSON
{
  "trailingComma": "all",
  "tabWidth": 2,
  "arrowParens": "always",
  "semi": true,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": false,
  "printWidth": 120,
  "jsxSingleQuote": false,
  "proseWrap": "always"
}
```

You can also add them to your eslint configuration (rules).
### Ignore Prettier

Create `.prettierignore` and `.eslintignore`. Configure both _ESLint_ and _Prettier_ to ignore formatting or linting certain files or directories.

```bash
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

.output
.nuxt
.next
next-env.d.ts
node_modules
dist
*.local
public

# Editor directories and files
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
*.md
```

## Setting up Husky

We are going to be using husky to perform the following whenever a git commit is made:

-   Check there are no Prettier errors on our code.
-   Check there are no ESLint errors on our code.
-   Check there are no errors compiling our code from TypeScript.
-   Check we can build our project using next build

### Install Husky

```bash
npm install husky --save-dev
npx husky-init
```

### Update package.json

```json
"scripts": {
    "lint": "yarn lint:eslint && yarn lint:prettier",
    "lint:eslint": "eslint .",
    "lint:prettier": "prettier . --check",
    "lintfix": "eslint . --fix && prettier --write --list-different .",
    "prepare": "husky install"
  },
```

-   `lint:prettier` asks Prettier to check all of our files (excluding the ones in .prettierignore) for formatting issues.
-   `lint:eslint` asks ESLint to check for any linting warnings/errors on an .ts, .tsx, .js or .vue files.
-   `lintfix` tells prettier to automatically re-write all of our files with proper formatting
-   `lint` runs a number of the above commands in sequence.

### Editing the pre-commit hook

It runs prior to executing a git commit. It is fully customable [Example](https://github.com/jarrodwatts/code-like-google/blob/main/.husky/pre-commit)

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint
```

## Bonus: configure vs code to format on save

1. Create a `.vscode` folder at the root of your directory
2. Within that folder, create a `settings.json` file.
3. Change your `settings.json` to:

```JSON
{
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.format": true
    }
}
```

## Setup Commintlint
### Angular Conventional Commit

Install dependencies
```bash
npm i @commitlint/cli @commitlint/config-conventional --save-dev
# or
yarn add @commitlint/cli @commitlint/config-conventional --save-dev
```

Create a `commitlint.config.js` or `.commitlintrc.cjs` (follow [commitlint](https://commitlint.js.org/reference/configuration.html)) file at the root of the project.
```bash
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

In the `.husky` folder, add `commit-msg` file
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```
### Angular Conventional Commit has gitmoji
Install dependencies
```bash
npm i -D commitlint-config-gitmoji commitlint
# or
yarn add -D commitlint-config-gitmoji commitlint
```

Add commitlint config for Gitmoji (file `.commitlintrc.cjs`)
```bash
module.exports = { extends: ["gitmoji"] };
```

The Gitmoji Structure of commit styles is below
```bash
:gitmoji: type(scope?): subject
body?
footer?
```
 
You can see Gitmoji [here](https://gitmoji.dev/)

## Setup Webhooks Notifications with Discord Chat
You can setup follow this [video](https://www.youtube.com/watch?v=-KDQqWNK3Tw)