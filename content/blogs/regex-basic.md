---
title: Regex - Cú pháp và cách viết Regex chi tiết
description: Cách sử dụng Regular Expression, một số đoạn Regex thường dùng
date: 2024-08-03
cover: blog/07.jpg
tags:
  - blog
  - regex
---

# Regex - Cú pháp và cách viết Regex chi tiết
## Mục lục

- [Regex là gì?](#regex-là-gì)
- [Regular Expression Characters](#regular-expression-characters)
  - [1. Metacharacters](#_1-metacharacters)
  - [2. Quantifier](#_2-quantifier)
  - [3. Groups and Ranges](#_3-groups-and-ranges)
  - [4. Escape Characters or character classes](#_4-escape-characters-or-character-classes)
- [Một số đoạn Regex thường dùng](#một-số-đoạn-regex-thường-dùng)
  - [1. Là chuỗi số](#_1-là-chuỗi-số)
  - [2. Kiểm tra ký tự](#_2-kiểm-tra-ký-tự)
  - [3. Kiểm tra Email](#_3-kiểm-tra-email)
  - [4. Kiểm tra độ mạnh của password](#_4-kiểm-tra-độ-mạnh-của-password)
  - [5. Kiểm tra username](#_5-kiểm-tra-username)
  - [6. Kiểm tra URL](#_6-kiểm-tra-url)
  - [7. Kiểm tra ngày](#_7-kiểm-tra-ngày)
  - [8. Kiểm tra Slug](#_8-kiểm-tra-slug)
  - [9. Số điện thoại](#_9-số-điện-thoại)
 
## Regex là gì?
`Regex` (hay `RegExp` hay `RegExr`) là cụm từ viết tắt của `Regular Expression` có nghĩa là **biểu thức chính quy**. Đây là một chuỗi các ký tự đặc biệt được định nghĩa để tạo nên các mẫu (`pattern`). Chúng được sử dụng để phân tích cú pháp, sự trùng khớp, tìm kiếm, thay thế trong các chuỗi và đoạn ký tự.

## Regular Expression Characters
### 1. Metacharacters

| Metacharacters | Description | Example |
| :--- | :--- | :--- |
| **^** | Khớp các kí tự đứng đầu một chuỗi |  `/^a/` sẽ không khớp được với 'a' trong "bcd a" vì 'a' lúc này không đứng đầu chuỗi, nhưng nó sẽ khớp "abc d" vì lúc này 'a' đã đứng đầu chuỗi. `/^a\n^bg/` sẽ khớp với agg\nbgsd. |
| **$** | So khớp ở cuối chuỗi. Nếu có \n (multiline) thì nó sẽ so khớp với kí tự nằm ngay trước kí tự xuống dòng. | `/r$/` sẽ khớp với "aaabr", "r", không khớp với "ra". |
| **.** | Khớp với bất kì kí tự đơn nào ngoại trừ kí tự xuống dòng. | `/b.x/` khớp với "bax", "b9x", không khớp với "b9hx" |
| **\|** | Khớp với một ký tự cụ thể hoặc một nhóm ký tự ở hai bên. Nếu ký tự ở bên trái trùng khớp thì ký tự ở bên phải sẽ bị bỏ qua. | `/cb\|a\|de/` tương đương với (cb) or (a) or (de), `/c\[b\|a\|d\]e/` khớp với cde|
| **\\** | Một dấu gạch chéo sẽ biến một kí tự thường liền kế phía sau thành một kí tự đặc biệt . |  |
| **A** | Khớp với ký tự 'A' trong chuỗi. | Có thể là các chuỗi có ít nhất một kí tự 'A' như "gffsA", "ahgAdh" |
| **Ab** | Khớp với cụm 'Ab' trong chuỗi. | Có thể là các chuỗi có ít nhất một cụm "Ab" như "Abcx", "mnAb", "mnopAbx4" |

### 2. Quantifier
| Characters | Description | Example |
| :--- | :--- | :--- |
| **+** | Cho phép kí tự trước nó lặp lại 1 lần hoặc nhiều lần. | `/s+/` là một biểu thức cho ra "s", "ss", "sss", v.v. |
| **?** | Cho phép kí tự trước nó lặp lại 0 lần hoặc 1 lần duy nhất. Nếu sử dụng kí tự này ngay sau bất kì kí tự định lượng nào trong số ,+,? hay {} thì nó sẽ dừng so khớp sau ngay khi tìm được kí tự phù hợp | `/as?/` là một biểu thức cho "a" hoặc "as", nhưng không cho "ass". |
| __*__ | Cho phép kí tự trước nó lặp lại 0 lần hoặc nhiều lần. | `/bo*/` khớp với 'boooo' trong chuỗi "A ghost booooed" và khớp với các kí tự 'b' trong chuỗi "A birth warbled" |
| **\{n\}** | Kí tự đứng trước phải xuất hiện n lần. n phải là một số nguyên dương |  `/a{2}/` không khớp với 'a' trong "candy", nhưng nó khớp với 'aa' trong "caandy", và khớp với 2 kí tự 'a' đầu tiên trong "caaandy". |
| **\{n,\}** | Kí tự đứng trước phải xuất hiện ít nhất n lần. n phải là một số nguyên dương | `/Xb{3,}/` là một biểu thức cung cấp nhiều chuỗi khác nhau chứa ít nhất 3 kí tự 'b'. Các chuỗi như vậy là "Xbbb", "Xbbbb", v.v. |
| **\{n,m\}** | Kí tự đứng trước phải xuất hiện ít nhất n lần và nhiều nhất m lần | `/Xb{3,6}c/` là một biểu thức cung cấp nhiều chuỗi khác nhau chứa ít nhất 3 kí tự 'b' và nhiều nhất 6 kí tự 'b'. Các chuỗi như vậy là "Xbbbc", "Xbbbbbbc", v.v. |

### 3. Groups and Ranges

| Characters | Description | Example |
| :--- | :--- | :--- |
| **()** | Khớp 'x' và nhớ kết quả so khớp này. Các dấu ngoặc tròn được gọi là các dấu ngoặc có nhớ. | `/A(xy)/` là một biểu thức khớp với chuỗi sau: "Axy" |
| **\[\]** | Khớp với bất kỳ ký tự nào trong một dãy ký tự được xác định trong dấu ngoặc "[]". | `/xz[atp]r/` là một biểu thức khớp với các chuỗi sau: "xzar", "xztr" và "xzpr", không khớp với "xzatr" |
| **\[pqr\]** | Khớp với p, q hoặc r (riêng lẻ). | Khớp với "px", "qx", "rx", "py", "qy", và "ry". |
| **\[pqr\]\[xy\]** | Khớp với p, q hoặc r, theo sau là x hoặc y. | Khớp với "px", "qx", và "rx", "py", "qy", và "ry". |
| **(?:x)** | Khớp 'x' nhưng không nhớ kết quả so khớp (không tạo group). | `/A(?:nt\|pple)/` là một biểu thức khớp với chuỗi sau: "Apple" |
| **x(?=y)** | Chỉ khớp 'x' nếu 'x' theo sau bởi 'y'. | `/Jack(?=Sprat)/` chỉ khớp với 'Jack' nếu đằng sau nó là 'Sprat'. |
| **x(?!y)** | Chỉ khớp 'x' nếu 'x' không được theo sau bởi 'y'. | `/\d+(?!.)/` chỉ khớp với số không có dấu '.' đằng sau. |
| **\[^x\]** | Khớp với một ký tự không được xác định trong dấu ngoặc vuông. | `/Ab[^pqr]/` khớp với chuỗi sau: "Abc", không khớp với "Ab", "Abr". |
| **\[a-z\]** | Khớp với 1 chữ cái a-z |  |
| **\[A-Z\]** | Khớp với 1 chữ cái A-Z |  |
| **^\[a-zA-Z\]** | Khớp với chuỗi bắt đầu bằng chữ thường hoặc chữ in hoa. | |
| **\[0-9\]** | Khớp với một chữ số từ 0 đến 9. | |
| **\[aeiou\]** | Dấu ngoặc vuông này chỉ khớp với các nguyên âm viết thường. | |
| **ab\[^4-9\]** | Khớp với những chữ số hoặc ký tự không được xác định trong dấu ngoặc vuông. | Biểu thức này khớp với các chuỗi không chứa 5, 6, 7 và 8. |

### 4. Escape Characters or character classes

| Characters | Description |
| :--- | :--- |
| **\s** | Khớp với một ký tự khoảng trắng. |
| **\S** | Khớp với một ký tự không phải khoảng trắng. |
| **\0** | Khớp với ký tự NULL. |
| **\d** | Khớp với một chữ số thập phân, có nghĩa là từ 0 đến 9. |
| **\D** | Khớp với bất kỳ kí tự không thập phân nào. |
| **\w** | Khớp với chữ và số \[0-9a-zA-Z\] ký tự. |
| **\W** | Khớp với bất kỳ kí tự không phải chữ và số \[^0-9a-zA-Z\]. |

## Một số đoạn Regex thường dùng
### 1. Là chuỗi số
```javascript
// chuỗi số (string): 034, 23
/^\d+$/

// số nguyên dương: 1893 
/^[1-9]\d+$/

// số nguyên: 0, -12, 12, +12
/(^[-+]*[1-9]\d+$)|(^0$)/

// Số thập phân (dương): 1.2, 45.78, .567
/^\d*\.\d+$/
/^\d+\.\d+$/

// Số nguyên và số thập phân
/^\d*(\.\d+)?$/

// Số âm, số nguyên dương và số thập phân
/^-?\d*(\.\d+)?$/

// Số nguyên, số thập phân và phân số
/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/
```

### 2. Kiểm tra ký tự
```javascript
// Chữ cái và số không bao gồm khoảng trắng
/^[a-zA-Z0-9]*$/
/^\w*$/

// Chữ cái và số có bao gồm khoảng trắng
/^[a-zA-Z0-9 ]*$/
```

### 3. Kiểm tra Email
```javascript
/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/

/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
```

### 4. Kiểm tra độ mạnh của password
```javascript
// Bao gồm cả chữ hoa, chữ thường, số, ký tự đặc biệt và ít nhất 8 kỹ tự
/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ 
```

### 5. Kiểm tra username
```javascript
// Gồm chuỗi và số từ 3 đến 16 ký tự
/^[a-z0-9_-]{3,16}$/
```

### 6. Kiểm tra URL
```javascript
// Bao gồm Http(s) Protocol
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/ 

// có hoặc không có Http(s) Protocol đều được
/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ 
```

### 7. Kiểm tra ngày
```javascript
/* Format YYYY-MM-dd */
/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
 
/* Format dd-MM-YYYY hoặc dd.MM.YYYY hoặc dd/MM/YYYY và kiểm tra năm nhuận */
/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
 
/* Format dd-mmm-YYYY hoặc dd/mmm/YYYY hoặc dd.mmm.YYYY */
/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
```

### 8. Kiểm tra Slug
```javascript
// sd09-vn09-lk
/^[a-z0-9]+(?:-[a-z0-9]+)*$/
```

### 9. Số điện thoại
```javascript
// Số điện thoại Việt Nam
/(84|0[3|5|7|8|9])+([0-9]{8})\b/

// Số quốc tế
/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/
```
