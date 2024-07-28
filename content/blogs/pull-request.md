---
title: Cách để tạo một pull request (PR) chuyên nghiệp.
description: Làm thế nào để tạo pull request một cách thật chuyên nghiệp.
date: 2024-07-28
cover: blog/06-2.png
tags:
  - blog
  - github
---

# Cách để tạo một pull request (PR) chuyên nghiệp.
## Viết mô tả 
Một PR bắt đầu bằng một tiêu đề. Làm cho tiêu đề rõ ràng. Nó phải ngắn gọn và bao quát. Một người mới tham gia dự án nên hiểu được PR là gì.

Ví dụ: `Fixed navigation panel not being visible on a user’s profile page` là một tiêu đề hay. Tuy nhiên, nhiều lúc nó lại như thế này:
`Fix: UI1-123`,
`UI Fixes`,
`Profile fix`,
`Navigation fix`.

Bên cạnh một tiêu đề, một mô tả đầy đủ cũng rất quan trong. Mục đích của mô tả là để hỗ trợ người đánh giá. Với tư cách là người đánh giá, tôi muốn biết nội dung của PR là gì, tại sao bạn gửi nó và cách nó thực hiện những gì nó phải làm. Vì vậy, tôi có thể hiểu ý nghĩa của việc merge PR này và cách xác minh xem nó có hoạt động như mong đợi hay không.

Vì vậy, một mô tả cần có đủ các yếu tố sau:
- <b>what:</b> PR nói về cái gì
- <b>why:</b> tại sao bạn làm nó
- <b>how:</b> cách nó thực hiện những gì nó phải làm, nêu chi tiết về thiết kế, cách nó có thể được kiểm tra hoặc xác minh.

Xem chi tiết hơn về <b>what</b>, <b>why</b> và <b>how</b> ở bên dưới.

## What, Why and How
Trong phần <b>What</b>, chúng ta có thể chỉ định PR làm gì. Nó không cần phải quá chi tiết nhưng phải cho biết đây có phải là một tính năng mới, sửa lỗi, refactor hay thứ gì khác hay không.

Việc cung cấp tổng quan chung về phạm vi thay đổi cũng rất hữu ích. Những thứ như phần nào của giao diện người dùng mà nó thay đổi, nó có thay đổi logic nghiệp vụ theo bất kỳ cách nào không, giới thiệu các API hoặc cấu trúc dữ liệu mới.

Phần <b>Why</b> phải giải thích lý do tại sao bạn thực hiện PR này. Nếu đó là một bản sửa lỗi thì rất có thể đó là điều hiển nhiên, nhưng sẽ không có hại gì khi đề cập đến cách điều này phù hợp với một bức tranh lớn hơn. Ví dụ: cải tiến hiệu suất hoặc thay đổi cấu trúc có thể làm cho một tính năng mới khả thi hoặc giúp giải quyết các lỗi khác.

<b>How</b> là tất cả các chi tiết rõ ràng trong PR của bạn. Về cơ bản, bất cứ điều gì có thể giúp người đọc hiểu quá trình suy nghĩ của bạn khi thực hiện một thay đổi cụ thể đều hữu ích. Điều này bao gồm giải thích về bất kỳ quyết định hoặc thỏa hiệp nào mà bạn đã thực hiện, cũng như bất kỳ điều gì giúp người đánh giá xác minh xem thay đổi đã được thực hiện đúng hay chưa hoặc thậm chí kiểm tra thủ công PR của bạn nếu cần. Vì lý do tương tự, khi thực hiện các thay đổi có ảnh hưởng đến giao diện người dùng, sẽ hữu ích khi bao gồm ảnh chụp màn hình “trước” và “sau”.

Lý thuyết vậy là đủ! Bây giờ chúng ta đã biết những gì chúng ta có thể viết trong mỗi PR. Hãy tạo một mẫu cho nó để có thể sử dụng lại mỗi khi chúng ta gửi PR mới.

## Tạo mẫu pull request
Để giúp công việc của mọi người trở nên dễ dàng hơn, hãy cố gắng tạo một mẫu pull request. Chúng ta sẽ viết mẫu của mình trong tệp `Markdown` và đưa vào kho lưu trữ. Để tạo một pull request template bạn có thể tạo file template bằng một trong các hình thức sau:
- Tạo file **pull_request_template.md** ở thư mục gốc của project.
- Tạo thư mục __docs__ ở thư mục gốc của project và tạo file template __pull_request_template.md__ trong thư mục docs đó.
- Tạo thư mục ẩn **.github** ở thư mục gốc của project và tạo file template **pull_request_template.md** trong thư mục **.github** đó.

```bash
├── .github
│   └── pull_request_template.md
└── ...
```
## Tạo nhiều pull request template
Với trường hợp repo của bạn cần nhiều hơn một pull request template thì sao? Cách làm tương tự như trên. Bạn cũng có thể tạo template trong thư mục __docs__ hoặc thư mục __.github__.

Tạo thư mục docs ở thư mục gốc của project và tạo thư mục con trong đó có tên __PULL_REQUEST_TEMPLATE/.__ Bên trong thư mục con này bạn thêm các file template bạn muốn ví dụ `templateA.md`, `templateB.md`.

Tạo thư mục ẩn __.github__ ở thư mục gốc của project và tạo thư mục con trong đó __PULL_REQUEST_TEMPLATE/.__ Bên trong thư mục con này bạn thêm các file template bạn muốn ví dụ `templateA.md`, `templateB.md`.

Tuy vậy hiện tại để có thể sử dụng nhiều template cùng lúc, ta sẽ gặp một chút phiền hà. Ví dụ khi bạn tạo pull request bạn sẽ được chuyển đến trang để điền các thông tin liên quan đến pull request. Tại trang này, GitHub hiện chưa có chức năng để bạn chọn template cần dùng mà bạn phải điền tay query parameter có dạng là `template=<ten_template.md>` trên URL của trang đó. Ví dụ để tự động fill phần pull request body với `templateA.md` bạn sẽ sửa URL như sau: `https://url_cua_pull_request?template=templateA.md`. Nhìn chung vẫn hơi bất tiện.
## Ví dụ một mẫu pull request
```markdown
## What

What does the PR do?
Is it a bug fix, new feature, refactor, or something else?

## Why

Why this PR is needed?

## How

How is it doing what it does?
How to test, how to integrate, any relevant compromises, etc.?

### Changes details

- Detail one
- Detail two
  ...

## Missed anything?

- [ ] Explained the purpose of this PR.
- [ ] Self reviewed the PR.
- [ ] Added or updated test cases.
- [ ] Informed of breaking changes, testing and migrations (if applicable).
- [ ] Updated documentation (if applicable).
- [ ] Attached screenshots (if applicable).
```