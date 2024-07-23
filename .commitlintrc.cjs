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
*/

module.exports = { extends: ["gitmoji"] };
