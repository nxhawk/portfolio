---
title: Git Flow - Giải Pháp Tối Ưu Cho Quản Lý Dự Án
description: Cách sử dụng git flow một cách hiệu quả cho dự án phần mềm
date: 2024-07-27
cover: blog/05.png
tags:
  - blog
  - setup
  - git
  - github
---

# Git Flow - Giải Pháp Tối Ưu Cho Quản Lý Dự Án Phần Mềm
## Commit 

Đặc tả commit là một định dạng chuẩn hóa cho các thông báo commit, giúp tạo ra lịch sử commit rõ ràng, dễ hiểu và tự động hóa các quy trình phát hành.

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

type là các loại tùy biến thay đổi trong thực tế như: `feat, fix, docs, style, refactor, perf, test, chore`.

Thông thường theo chuẩn [Angular Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary).
### Trong đó:
- `feat:` Tạo 1 nhánh feature mới hoàn toàn và code trong nhánh đó hoặc thêm một tính năng mới trong code.
- `fix:` Áp dụng khi bạn thay đổi code trên một đoạn code hay một file code đã tồn tại.
- `docs:` Thay đổi trong file liên quan đến đuôi `.md`.
- `style:` Thay đổi lại nhưng không ảnh hưởng đến code (vd : formatting).
- `refactor:` Là những thay đổi cấu trúc lại code và không thay đổi gì trong code hay thêm feature mới. (VD: cấu trúc lại 1 đoạn code có sẳn).
- `perf:` (Performance) Thay đổi mã giúp cải thiện hiệu suất. (VD: giảm thời gian query).
- `test:` Thêm các tính năng kiểm thử trong code.
- `chore:` Là những thay đổi không liên quan đến source code hay test.

Các thay đổi quan trong ảnh hưởng đến code một cách trực tiếp thì cần có `BREAKING CHANGE` trong phần body. Example :
```
feat: thêm tính năng đăng nhập bằng email
	BREAKING CHANGE: trường 'username' đã được thay thế bởi 'email' trong cấu trúc dữ liệu người dùng. 
```

## Branch
Về việc tạo nhánh và phân quyền để giải quyết một là một điều vô cùng quan trọng trong GitFlow nó sẽ ảnh hưởng đến tốc độ hoàn thành dự án vì được chia cụ thể tránh xảy ra xung đột với nhau.

### Main Branches
<b>1. Nhánh `main` (hoặc `master`)</b>
- Chứa mã nguồn đã phát hành.
- Luôn ở trạng thái ổn định.
![image](https://images.viblo.asia/f71e46bd-452f-48c1-b451-2f8a25fff458.png)

<b>2. Nhánh `dev`</b>
- Là nhánh phát triển chính.
- Chứa mã nguồn kết hợp tất cả các nhánh tính năng và sửa lỗi đã hoàn thiện.
![image](https://images.viblo.asia/6e91e85b-3152-4a04-a04d-160aa0bd5135.png)

### Supporting Branches
<b>1. Feature Branches</b>
- Được tạo trực tiếp từ nhánh `develop`.
- Được sử dụng để phát triển tính năng mới.
- Tên nhánh theo định dạng: `feature/<tên-tính-năng>`.
- Khi hoàn thành sẽ được hợp nhất vào nhánh `develop`.
![image](https://images.viblo.asia/e4f9e958-2d5e-4f9e-98bc-9c77453b5983.png)

<b>2. Release Branches</b>
- Được tạo từ `develop` khi chuẩn bị phát hành một phiên bản mới.
- Được sử dụng để hoàn thiện và kiểm tra phiên bản trước khi phát hành.
- Tên nhánh theo định dạng: `release/<số-phát-hành>`.
- Khi hoàn thành, hợp nhất vào cả `main` và `develop`.
![image](https://images.viblo.asia/7b05bf3e-e652-4ef5-817d-bef89314ef7c.png)

<b>3. Hotfix Branches</b>
- Được tạo từ `main` để sửa lỗi khẩn cấp trong phiên bản đã phát hành.
- Được sử dụng để giải quyết các vấn đề nghiêm trọng mà không cần chờ phát hành tiếp theo.
- Tên nhánh theo định dạng: `hotfix/<số-sửa-lỗi>`.
- Khi hoàn thành, hợp nhất vào cả `main` và `develop`.
![image](https://images.viblo.asia/9fab3a45-1282-4b45-9db9-f80dc7143ae5.png)

<b>4. Bugfix Branches</b>
- Được tạo từ develop để sửa lỗi phát sinh trong quá trình phát triển.
- Được sử dụng để giải quyết các vấn đề trong mã nguồn đang phát triển.
- Tên nhánh theo định dạng: `bugfix/<tên-sửa-lỗi>`.
- Khi hoàn thành, hợp nhất vào `develop`.

:::callimage{img="/blog/05-flow.png" alt="GitFlow"}
:::