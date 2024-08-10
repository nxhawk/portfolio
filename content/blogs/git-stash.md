---
title: Git Stash - Cách sử dụng lệnh Git stash
description: Git stash được sử dụng để tạm thời lưu trữ các thay đổi chưa commit.
date: 2024-08-08
cover: blog/10.png
tags:
  - blog
  - git
  - github
---

# Git Stash - Cách sử dụng lệnh Git stash

Bạn đang ở ngay giữa chừng trong task mới và có khá nhiều files changed nhưng leader báo "code ở pr trước đang có bug production, quay lại hot fix nhé!". Khi nói đến lệnh Git cơ bản, bạn có hai lựa chọn:

Chạy `git reset --hard` để loại bỏ những thay đổi đã được commit của bạn.<br/>
Ghi lại công việc chưa hoàn tất của bạn như là một commit mới.

Tùy chọn đầu tiên làm mất tất cả công việc của bạn, trong khi cái sau dẫn đến một phần commit không có ý nghĩa. Không có tình huống là được mong đợi cả.

Đây là lúc lệnh `git stash` phát huy tác dụng của nó. Hãy tưởng tượng nó giống như `git reset --hard`, nó cung cấp cho bạn một branch sạch sẽ, nhưng nó cũng ghi lại các thay đổi không đầy đủ bên trong. Sau khi khắc phục xong lỗi nghiêm trọng, bạn có thể tái áp dụng những thay đổi này và bắt đầu lại từ nơi bạn đang dở dang. Bạn có thể xem `git stash` như một nút "tạm dừng" cho tiến trình công việc của bạn.

:::callimage{img="/blog/10.png" alt="Git Stash"}
:::

## Dưới đây là những điều hữu ích mà git stash có:

- [1. Git stash save](#_1-git-stash-save)
- [2. Git stash list](#_2-git-stash-list)
- [3. Git stash apply](#_3-git-stash-apply)
- [4. Git stash pop](#_4-git-stash-pop)
- [5. Git stash show](#_5-git-stash-show)
- [6. Git stash branch \<name\>](#_6-git-stash-branch-name)
- [7. Git stash clear](#_7-git-stash-clear)
- [8. Git stash drop](#_8-git-stash-drop)

### 1. Git stash save
### 2. Git stash list
### 3. Git stash apply
### 4. Git stash pop
### 5. Git stash show
### 6. Git stash branch \<name\>
### 7. Git stash clear
### 8. Git stash drop