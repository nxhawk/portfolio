// test with cmd: echo "<message>" | npx commitlint

/*
Structure the Gitmoji Structure of commit styles is below
  :gitmoji: type(scope?): subject
  body?
  footer?

Example
  :sparkles: feat(changelog): support chinese title
  :bug: fix(config): fix a subject bug
  :memo: docs: update README.md
  :bulb: docs(plugin): update comments
  :recycle: refactor: refactor code
  :wrench: fix(config): add or update configuration files
  :truck: chore: move or rename resources (e.g.: files, path, routes, etc..)
  :bento: chore: add or update assets
  :hammmer: add or update development scripts
*/

module.exports = { extends: ["gitmoji"] };
