---
title: Cách sử dụng Markdown đơn giản và dễ dàng
description: Cách viết markdown cơ bản mà lập trình viên nên biết
date: 2024-07-28
cover: blog/06-3.jpg
tags:
  - blog
  - setup
  - github
---

# Cách sử dụng Markdown đơn giản và dễ dàng

# Mục lục
- [1. Văn bản thuần](#_1-văn-bản-thuần)
  - [1. Tiêu đề - Heading](#_1-tiêu-đề-heading)
  - [2. Đoạn văn - Paragraph](#_2-đoạn-văn-paragraph)
  - [3. Chữ in nghiêng - Italic](#_3-chữ-in-nghiêng-italic)
  - [4. Chữ in đậm - Bold](#_4-chữ-in-đậm-bold)
  - [5. In đậm và in nghiêng](#_5-in-đậm-và-in-nghiêng)
  - [6. Chữ gạch giữa - Strikethrough](#_6-chữ-gạch-giữa-strikethrough)
  - [7. Code trong dòng - Inline Code](#_7-code-trong-dòng-inline-code)
  - [8. Subscript và Superscript](#_8-subscript-và-superscript)
- [2. Các khối](#_2-các-khối)
  - [1. Trích dẫn - Blockquote](#_1-trích-dẫn-blockquote)
  - [2. Danh sách có thứ tự - Ordered List](#_2-danh-sách-có-thứ-tự-ordered-list)
  - [3. Danh sách không có thứ tự - Unordered List](#_3-danh-sách-không-có-thứ-tự-unordered-list)
  - [4. Khối lệnh - Block Code](#_4-khối-lệnh-block-code)
  - [5. Bảng - Table](#_5-bảng-table)
- [3. Đặc biệt](#_3-đặc-biệt)
  - [1. Đường kẻ ngang - Horizonal rules](#_1-đường-kẻ-ngang-horizonal-rules)
  - [2. Liên kết - Link](#_2-liên-kết-link)
  - [3. Hình ảnh - Image](#_3-hình-ảnh-image)
  - [4. Biểu tượng cảm xúc - Icon](#_4-biểu-tượng-cảm-xúc-icon)
  - [5. Checkbox](#_5-checkbox)
  - [6. Escape markdown](#_6-escape-markdown)
  - [7. Footnotes](#_7-footnotes)
## 1. Văn bản thuần

### 1. Tiêu đề - Heading

Bạn có thể viết loại tiêu đề `<h1>, <h2>,... <h6>` bằng cách thêm các dấu # tương ứng vào đầu dòng.

Một dấu # tương đương với `<h1>`, hai dấu # tương đương với `<h2>` ...

Cú pháp:
```
# Tiêu đề loại 1
## Tiêu đề loại 2
### Tiêu đề loại 3
#### Tiêu đề loại 4
##### Tiêu đề loại 5
###### Tiêu đề loại 6
```
Kết quả:

# Tiêu đề loại 1
## Tiêu đề loại 2
### Tiêu đề loại 3
#### Tiêu đề loại 4
##### Tiêu đề loại 5
###### Tiêu đề loại 6

### 2. Đoạn văn - Paragraph

Để xuống dòng giữa các văn bản `<p>`, sử dụng một dòng trống để tách các dòng văn bản.

Cú pháp:
```
Đây là dòng 1

Đây là dòng 2
```
Kết quả:

Đây là dòng 1

Đây là dòng 2

### 3. Chữ in nghiêng - Italic

Để in nghiêng văn bản `<i>`, thêm một dấu * hoặc dấu _ trước và sau từ cần in nghiêng.

Cú pháp:
```
*Từ cần in nghiêng 1*

_Từ cần in nghiêng 2_
```
Kết quả:

*Từ cần in nghiêng 1*

_Từ cần in nghiêng 2_

### 4. Chữ in đậm - Bold

Để in đậm văn bản `<b>`, thêm hai dấu * hoặc dấu _ trước và sau từ cần in đậm.

Cú pháp:
```
**Từ cần in đậm 1**

__Từ cần in đậm 2__
```
Kết quả:

**Từ cần in đậm 1**

__Từ cần in đậm 2__

### 5. In đậm và in nghiêng

Đơn giản, bạn chỉ cần ba dấu * hoặc dấu _ trước và sau từ đó.

Cú pháp:
```
***Từ in đậm và in nghiêng 1***

___Từ in đậm và in nghiêng 2___
```
Kết quả:

***Từ in đậm và in nghiêng 1***

___Từ in đậm và in nghiêng 2___

### 6. Chữ gạch giữa - Strikethrough

Để tạo chữ gạch giữa, thêm 2 dấu ~ trước và sau từ đó.

Cú pháp:
```
~~Khuyến mại~~
```
Kết quả:

~~Khuyến mại~~

### 7. Code trong dòng - Inline Code

Để viết inline `<code>`, bạn dùng 2 dấu ` ở trước và sau từ đó.

Cú pháp:
```
`inline code`
```
Kết quả:

`inline code`

### 8. Subscript và Superscript

Để viết `Subscript` và `Superscript` dùng theo thẻ html.
Cú pháp:
```
<sub>Hello</sub>
Hello
<sup>Hello</sup>
```
Kết quả:

<sub>Hello</sub>
Hello
<sup>Hello</sup>

## 2. Các khối

### 1. Trích dẫn - Blockquote

Để tạo một `<blockquote>`, thêm dấu > vào trước mỗi dòng trích dẫn.

Cú pháp:
```
> Trích dẫn dòng 1
>
> Trích dẫn dòng 2
```
Kết quả:

> Trích dẫn dòng 1

> Trích dẫn dòng 2

### 2. Danh sách có thứ tự - Ordered List

Để tạo danh sách `<ol><li>`, bạn chỉ cần thêm các số, dấu chấm trước nội dung (dùng tab để phân cấp)

Cú pháp:
```
1. Mục thứ nhất
2. Mục thứ hai
3. Mục thứ ba
```
Kết quả:

1. Mục thứ nhất
2. Mục thứ hai
3. Mục thứ ba

### 3. Danh sách không có thứ tự - Unordered List

Để tạo danh sách `<ul><li>`, bạn chỉ cần thêm dấu * hoặc - hoặc + trước nội dung (dùng tab để phân cấp)

Cú pháp:
```
- Mục thứ nhất
- Mục thứ hai
- Mục thứ ba
```
Kết quả:

- Mục thứ nhất
- Mục thứ hai
- Mục thứ ba

### 4. Khối lệnh - Block Code

Để viết 1 đoạn `<code>`, bạn dùng 3 dấu ` ở trước và sau đoạn đó (có thể thêm format ngôn ngữ đó).

Cú pháp:

![image](https://user-images.githubusercontent.com/90561566/160242871-aad90ad1-bd8d-4e5c-9146-3349fb7c8c98.png)

Kết quả:

```python
print("hello world")
```

### 5. Bảng - Table

Để tạo bảng `<table><tbody><tr><th><th>`, bạn chỉ cần ngăn cách bởi dấu | và cách đầu bảng với thân bảng bằng :--- (số dấu - tuỳ ý)

Cú pháp:
```
| Cột 1 | Cột 2 | Cột 3 | Cột 4 |
| :--- | :--- | :--- | :--- |
| A | B | C | D |
| E | F | G | H |
| I | K | L | M |
```
Kết quả

| Cột 1 | Cột 2 | Cột 3 | Cột 4 |
| :--- | :--- | :--- | :--- |
| A | B | C | D |
| E | F | G | H |
| I | K | L | M |

## 3. Đặc biệt

### 1. Đường kẻ ngang - Horizonal rules

Để tạo đường kẻ ngang, sử dụng ba dấu * hoặc - hoặc _ trên một dòng.

Cú pháp:
```
---
***
___
```
Kết quả:

---
***
___

### 2. Liên kết - Link

Để chèn trực tiếp, bạn có thể paste thẳng nó như bình thường.

Để dẫn liên kết `<a href="https://github.com">Github</a>`, bạn dùng `[text](link)`.

Cú pháp:
```
Trực tiếp: https://github.com/nxhawk

Gián tiếp: [Github](https://github.com/nxhawk)
```
Kết quả:

Trực tiếp: https://github.com/nxhawk

Gián tiếp: [Github](https://github.com/nxhawk)

### 3. Hình ảnh - Image

Để chèn trực tiếp, bạn có thể paste thẳng nó như bình thường.

Để dẫn ảnh `<img src="https://avatars.githubusercontent.com/u/583231 alt="Github">`, bạn dùng `![text](link ảnh)`.

Hoặc `![](link ảnh)` nếu không cần chữ khi hover.

Cú pháp:
```
![](https://avatars.githubusercontent.com/u/583231)
```
Kết quả:

![](https://avatars.githubusercontent.com/u/583231)

Để chèn liên kết vào ảnh `<a href="link"><img src="link ảnh" alt="chữ"></a>` thì chỉ cần kết hợp đúng cú pháp là được.

```
[ ![chữ](link ảnh) ] (link)
```

### 4. Biểu tượng cảm xúc - Icon

Phần này tuỳ vào nền tảng (Github, Discord, ...) có icon đó không, bạn ghi dấu : và tên icon.

Cú pháp:
```
  :egg:
```
Kết quả:

:egg:

> More information: [the Emoji-Cheat-Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

### 5. Checkbox

Để chèn `checkbox/checked` (thường dùng cho to do list trên github) thì ta đánh dấu như list và thêm 1 cặp ngoặc vuông.

Cú pháp:

```
- [ ] Checkbox
- [x] Checked
```

Kết quả:

- [ ] Checkbox
- [x] Checked

### 6. Escape markdown

Đôi khi bạn sẽ cần những kí hiệu trùng với cú pháp của markdown. Để phân biệt, bạn chỉ cần thêm dấu \ trước những kí hiệu đó là được.

Cú pháp:
```
\`hai dấu nháy\`

\*\*\*ba dấu sao hai bên\*\*\*
```
Kết quả:

\`hai dấu nháy\`

\*\*\*ba dấu sao hai bên\*\*\*

### 7. Footnotes


```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.
```
Kết quả:

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.
  