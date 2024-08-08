---
title: Hiểu cơ bản về GIT RESET, GIT REVERT, GIT REBASE
description: Hiểu cơ bản về GIT RESET, GIT REVERT, GIT REBASE
date: 2024-08-08
cover: blog/09.png
tags:
  - blog
  - git
  - github
---

# GIT RESET, GIT REVERT, GIT REBASE

## 1. GIT RESET
### a. Định ngĩa
Git reset được sử dụng để di chuyển HEAD (con trỏ chỉ đến commit hiện tại) trỏ đến một commit cụ thể.

### b. Cú pháp
**Tổng quát:**
```bash
git reset <commit>
```
trong đó `<commit>` là mã của 1 commit bất kỳ.

**Hay dùng:**
```bash
git reset     --hard|soft HEAD     -> Di chuyển con trỏ đến commit hiện tại.
git reset     --hard|soft HEAD^    -> Quay về trước 1 commit so với HEAD.
git reset     --hard|soft HEAD~1   -> Quay về trước 1 commit so với HEAD.
git reset     --hard|soft HEAD~2   -> Quay về trước 2 commit so với HEAD.
git reset     --hard|soft HEAD~n   -> Quay về trước n commit so với HEAD.
```

Trong đó hard, soft là các tùy chọn được sử dụng nhiều ở câu lệnh git reset.

Câu lệnh git reset có 2 tùy chọn đó là: `git reset --hard` và `git reset --soft`.

*Với option*: `--hard`: Di chuyển HEAD trỏ đến commit đã chỉ định và đặt lại trạng thái làm việc (working directory) để trạng thái của bạn trở về trạng thái của commit đã chỉ định. Các thay đổi chưa được commit sẽ mất.

*Với option*: `--soft`: Di chuyển HEAD trỏ đến commit đã chỉ định, nhưng không thay đổi trạng thái làm việc (working directory).

*Khi nào nên dùng tùy chọn `--hard` hay `--soft`?*

1. Khi bạn muốn xóa các thay đổi chưa được commit trong trạng thái làm việc thì hãy dùng --hard. (xóa code, commit và di chuyển đến commit mong muốn)

2. Trong khi --soft để duy trì các thay đổi chưa được commit trong trạng thái làm việc và chỉ đặt lại chỉ số. Ngoài ra, có thể gộp các commit bằng tùy chọn --soft vì tùy chọn này giữ lại các thay đổi chưa được commit trong các trạng thái làm việc của các commit sau nó. (giữ code nhưng xóa commit)

### c. Ví dụ

Trước tiên ta cần dùng lệnh git log để xem lịch sử commit của một repository (có thể thêm tùy chọn --oneline để xem các commit trên 1 dòng, hiển thị gọn nhẹ hơn). Sau đó sử dụng câu lệnh git reset để quay về commit mà bạn muốn.

```bash
git log --oneline
```
![image](https://images.viblo.asia/d7cb5aa8-d89d-4b59-bec4-f8325396b3fd.png)

Ở đây, mình thấy 3 commit với mã commit và message khi commit hiển thị trên 3 dòng khác nhau sau khi sử dụng câu lệnh trên.

Tiếp theo, ví dụ như ta muốn quay về trước đó 1 commit thì dùng lệnh:
```bash
git reset --hard HEAD^
```

![image](https://images.viblo.asia/008f14ce-6e7f-43f0-a5de-2d62ad9e762e.png)
Sau khi thực hiện câu lệnh trên thì ta đã quay về commit có mã a8796ce là commit ta cần.

## 2. GIT REVERT
### a. Định nghĩa
Git revert được sử dụng để tạo một commit mới, loại bỏ các thay đổi đã được thực hiện trong một hoặc nhiều commit trước đó, và áp dụng các thay đổi đó vào nhánh hiện tại.
### b. Cú pháp
```bash
git revert [<commit>]
```
### c. Ví dụ
Đầu tiên, sử dụng câu lệnh:
```bash
git log --oneline
```
Ta xem được lịch sử các commit như sau:
![image](https://images.viblo.asia/24980280-d819-4a7c-92c7-5e9b9a8727b5.png)
Tiếp theo, sử dụng câu lệnh:
```bash
git revert HEAD^
```
để quay về commit trước đó, kết quả như sau:
![image](https://images.viblo.asia/4b5dca0a-2234-4417-ad48-deb02df52206.png)
Ở đây ta thấy, câu lệnh revert này sẽ tạo thêm 1 commit mới để quay về commit có message là Add the route trước đó và vẫn giữ nguyên lịch sử commit. Như hình sau:
![image](https://images.viblo.asia/af65ef57-c4ae-4a95-b65b-025b2aa375fd.png)

**Chú ý:** Git revert sẽ tạo ra một commit mới chứa các thay đổi để hoàn tác các thay đổi của commit đã chỉ định và giữ lại lịch sử commit trước đó. Trong khi đó git reset thì xóa lịch sử commit đi.

*Vậy khi nào nên dùng git reset, khi nào nên dùng git revert?*

1. Sử dụng git reset khi bạn muốn xóa các commit và thay đổi liên quan khỏi lịch sử commit và không quan tâm đến lịch sử commit ban đầu.
2. Sử dụng git revert khi bạn muốn hoàn tác các thay đổi của một hoặc nhiều commit trong lịch sử commit và duy trì lịch sử commit chính xác của dự án để mọi người tiện theo dõi

## 3. GIT REBASE
### a. Định ngĩa
Git rebase được sử dụng để điều chỉnh lịch sử commit bằng cách di chuyển, sắp xếp các commit từ một nhánh vào nhánh khác.
### b. Cú pháp
```bash
git rebase <branch>
```
Trong đó `<branch>` là nhánh mà bạn muốn lấy các commit từ nó và áp dụng lên nhánh hiện tại.

Quá trình rebase sẽ di chuyển các commit trên nhánh hiện tại và đặt chúng lên đầu của nhánh `<branch>`.

### c. Cách hoạt động
1. Git tìm các commit trên nhánh hiện tại mà không có trên nhánh `<branch>`.
2. Git tạo 1 chuỗi tạm thời các commit đó.
3. Git đặt nhánh hiện tại ở commit cuối cùng của `<branch>`.

**Minh họa**

Giả sử rằng ta có lịch sử commit của 2 nhánh main và topic như hình dưới. nhánh topic được checkout từ commit B của nhánh main.
![image](https://images.viblo.asia/3478c3a8-9c4b-4cd9-a89c-e4beaf0e9f5d.png)
Sau khi ta rebase nhánh main vào nhánh topic thì lịch sử commit sẽ thay đổi như sau:
![image](https://images.viblo.asia/281eaef8-2e6e-4a47-a5d3-a455b0990eb4.png)
Nếu xảy ra conflicts giữa các commit, bạn phải xử lý chúng trong quá trình rebase.

### d. Ví dụ
Ta có các commit ở trên nhánh hiện tại như hình dưới:
![image](https://images.viblo.asia/c835e283-7439-4340-812a-4885f2caf19d.png)
Ta có các commt ở trên nhánh `main` như hình dưới:
![image](https://images.viblo.asia/ecff1d38-8da5-42e7-abe0-317bc62edb1f.png)
Giờ ta sẽ rebase nhánh main vào nhánh này bằng:
```bash
git rebase main
```

![image](https://images.viblo.asia/b903c45c-f0dc-4e77-b5ca-a1692cc15fb9.png)
Ta thấy 1 commit với message là **Add the view** ở main đã được thêm vào danh sách các commit ở nhánh này. Giải thích thứ tự

**Chú ý:** Lệnh git rebase có thể gây ra xung đột và thay đổi lịch sử commit Vì vậy khi sử dụng git rebase, hãy cẩn thận và hiểu rõ tác động của nó đối với dự án.

Tham khảo thêm tại:<br/>
https://git-scm.com/docs/git-resetcommit.<br/>
https://git-scm.com/docs/git-revert.<br/>
https://git-scm.com/docs/git-rebase.
