---
title: Commitlint Gitmoji - Commit code theo gitmoji
description: Cách commit code theo gitmoji và một số commit thông dụng
date: 2024-08-10
cover: blog/11.png
tags:
  - blog
  - setup
  - git
  - github
---

# Commitlint Gitmoji - Commit code theo gitmoji

## Mục lục
- [Setup Commintlint - Angular Conventional Commit has gitmoji](#setup-commintlint---angular-conventional-commit-has-gitmoji)
- [Type theo conventional commit](#type-theo-conventional-commit)
- [Các lệnh commit thông dụng](#các-lệnh-commit-thông-dụng)
  - [Thêm tính năng mới](#thêm-tính-năng-mới)
  - [Fix bug](#fix-bug)
  - [Thực hiện hotfix bug](#thực-hiện-hotfix-bug)
  - [Thêm, thay đổi file cấu hình CI/CD](#thêm-thay-đổi-file-cấu-hình-cicd)
  - [Thực hiện sửa css/ui](#thực-hiện-sửa-cssui)
  - [Thực hiện refactor code](#thực-hiện-refactor-code)
  - [Thực hiện merge branch, pull request review](#thực-hiện-merge-branch-pull-request-review)
  - [Thực hiện thêm, thay đổi failing testcase](#thực-hiện-thêm-thay-đổi-failing-testcase)
  - [Thêm, thay đổi hay pass testcase](#thêm-thay-đổi-hay-pass-testcase)
  - [Cập nhật file README.md, documentation](#cập-nhật-file-readmemd-documentation)
  - [Thêm/thay đổi ảnh trong folder assets (files, paths, routes, etc)](#thêmthay-đổi-ảnh-trong-folder-assets-files-paths-routes-etc)
  - [Thay đổi resources (files, paths, routes, etc)](#thay-đổi-resources-files-paths-routes-etc)
  - [Update file ignore (.gitignore, .dockerignore, etc)](#update-file-ignore-gitignore-dockerignore-etc)
  - [Thực hiện thay đổi metadata (SEO)](#thực-hiện-thay-đổi-metadata-seo)
  - [Xóa file code](#xóa-file-code)
  - [Cập nhật hiệu suất mã nguồn](#cập-nhật-hiệu-suất-mã-nguồn)
  - [Thay đổi file config](#thay-đổi-file-config)
  - [Cập nhật package, dependency](#cập-nhật-package-dependency)

## Setup Commintlint - Angular Conventional Commit has gitmoji

Install dependencies

```bash
npm i -D commitlint-config-gitmoji commitlint
# or
yarn add -D commitlint-config-gitmoji commitlint
```

Add commitlint config for Gitmoji (file `.commitlintrc.cjs`)
```javascript
module.exports = { extends: ["gitmoji"] };
```
The Gitmoji Structure of commit styles is below
```bash
:gitmoji: type(scope?): subject
body?
footer?
```
You can see Gitmoji [here](https://gitmoji.dev/)

## Type theo conventional commit
Một số type phổ biến được khuyên sử dụng bao gồm:

`feat:` thêm một tính năng mới. <br/>
`fix:` fix bug cho hệ thống, vá lỗi trong codebase. <br/>
`refactor:` sửa code nhưng không fix bug cũng không thêm feature hoặc đôi khi bug cũng được fix từ việc refactor. <br/>
`docs:` thêm/thay đổi document, file `.md`. <br/>
`chore:` những sửa đổi nhỏ nhặt không liên quan tới code. Nó không nên thay đổi bất kỳ tệp nào liên quan đến **src**, **test**, **build** hoặc **docs**. <br/>
`style:` những thay đổi không làm thay đổi ý nghĩa của code như thay đổi css/ui, format (lint, prettier) chẳng hạn. <br/>
`perf:` code cải tiến về mặt hiệu năng xử lý. <br/>
`test:` thêm/thay đổi file testcase, thực hiện test và pass 100% <br/>
`build:` thực hiện build project.<br/>
`ci:` thêm/thay đổi các file cấu hình ci/cd (`.yml`).<br/>
`revert:` thực hiện revert hay reset code commit với git<br/>

## Các lệnh commit thông dụng

### Thêm tính năng mới
```bash
echo ":sparkles: feat: new feature" | npx commitlint
```

### Fix bug
```bash
echo ":bug: fix: fix a subject bug" | npx commitlint
```

### Thực hiện hotfix bug
```bash
echo ":ambulance: fix: hotfix a subject bug" | npx commitlint
```

### Thêm, thay đổi file cấu hình CI/CD
```bash
echo ":green_heart: ci: update file ci" | npx commitlint
```

### Thực hiện sửa css/ui
```bash
echo ":hammer: refactor: refactor code" | npx commitlint
```

### Thực hiện refactor code
```bash
echo ":recycle: refactor: refactor code" | npx commitlint
```

### Thực hiện merge branch, pull request review
```bash
echo ":twisted_rightwards_arrows: feat: merge feat" | npx commitlint
```

### Thực hiện thêm, thay đổi failing testcase
```bash
echo ":test_tube: test: update testcase" | npx commitlint
```

### Thêm, thay đổi hay pass testcase
```bash
echo ":white_check_mark: test: testcase" | npx commitlint
```

### Cập nhật file README.md, documentation
```bash
echo ":memo: docs: update README.md" | npx commitlint
```

### Thêm/thay đổi ảnh trong folder assets (files, paths, routes, etc)
```bash
echo ":bento: chore: update file position" | npx commitlint
```

### Thay đổi resources (files, paths, routes, etc)
```bash
echo ":truck: chore: update file position" | npx commitlint
```

### Update file ignore (.gitignore, .dockerignore, etc)
```bash
echo ":see_no_evil: chore: update gitignore" | npx commitlint
```

### Thực hiện thay đổi metadata (SEO)
```bash
echo ":mag: perf: update metadata" | npx commitlint
```


### Xóa file code
```bash
echo ":fire: docs: update README.md" | npx commitlint
```

### Cập nhật hiệu suất mã nguồn
```bash
echo ":zap: perf: update" | npx commitlint
```

### Thay đổi file config
```bash
echo ":wrench: ci: add file config" | npx commitlint
```

### Cập nhật package, dependency
```bash
echo ":package: chore: update version package" | npx commitlint
```
