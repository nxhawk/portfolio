---
title: Semantic Versioning - Quy ước đặt tên version
description: Tìm hiểu về chuẩn đặt tên version trong triển khai phiên bản phần mềm.
date: 2024-07-28
cover: blog/06.jpg
tags:
  - blog
  - setup
---

# Semantic Versioning - Quy ước đặt tên Version trong phần mềm
Semantic Versioning (SemVer) là một quy ước quốc tế cho việc đặt tên và quản lý phiên bản phần mềm. SemVer giúp các nhà phát triển và người dùng dễ dàng hiểu và kiểm soát thay đổi trong phiên bản phần mềm một cách cụ thể. Nó được đặt ra bởi Tom Preston-Werner (co-founder github) và có nguồn gốc từ việc quản lý phiên bản trong mã nguồn mở.


:::callimage{img="/blog/06.jpg" alt="Semantic Versioning"}
:::

## Cấu Trúc Phiên Bản SemVer
Một phiên bản <b>SemVer</b> được biểu thị bằng ba số nguyên tăng dần, theo thứ tự sau:

- <b>Major</b> (Số đầu tiên): Đây là số đầu tiên trong phiên bản và tăng lên mỗi khi có thay đổi không tương thích ngược với phiên bản trước đó. Khi số này tăng, có thể xuất hiện sự thay đổi lớn trong tính năng hoặc cấu trúc của phần mềm.

- <b>Minor</b> (Số giữa): Số thứ hai thể hiện phiên bản có thay đổi tính năng hoặc bổ sung tính năng mà không làm hỏng tính tương thích ngược.

- <b>Patch</b> (Số cuối): Số thứ ba tăng khi có bản vá lỗi hoặc các sửa đổi nhỏ không làm thay đổi tính năng hoặc tương thích ngược.

Một phiên bản <b>SemVer</b> có cấu trúc như sau: `Major.Minor.Patch`.

## Dấu gạch ngang và ký tự đặc biệt
<b>SemVer</b> cũng cho phép sử dụng dấu gạch ngang và ký tự đặc biệt để mô tả thêm thông tin:

- <b>Dấu gạch ngang:</b> Sử dụng dấu gạch ngang (-) để thêm thông tin thêm sau số phiên bản. Ví dụ: `1.0.0-alpha`, `2.0.0-beta.3`.

- <b>Ký tự đặc biệt:</b> Sử dụng ký tự đặc biệt (+) để thêm thông tin bổ sung, thường liên quan đến sửa đổi trong mã nguồn. Ví dụ: `1.0.0+build123`.

## Ý Nghĩa và Ưu Điểm
Semantic Versioning có một số ưu điểm quan trọng:

- <b>Dễ đọc hiểu:</b> SemVer cho phép người dùng và nhà phát triển dễ dàng hiểu được tính năng và thay đổi trong phiên bản phần mềm chỉ từ số phiên bản.

- <b>Tính tương thích:</b> Các phiên bản có số `Minor` hoặc `Patch` tăng chỉ đề xuất thay đổi không làm hỏng tính tương thích ngược, giúp người dùng nâng cấp phần mềm mà không cần lo lắng về sự cố.

- <b>Quản lý phiên bản dễ dàng:</b> SemVer giúp nhà phát triển quản lý và theo dõi phiên bản phần mềm một cách hiệu quả.

- <b>Hỗ trợ tự động:</b> Nhiều công cụ và hệ thống quản lý gói tự động hỗ trợ SemVer, giúp việc quản lý phiên bản tự động và đáng tin cậy hơn.

SemVer đã trở thành một tiêu chuẩn quan trọng trong ngành phát triển phần mềm và là một công cụ hữu ích để quản lý phiên bản và tăng cường tính tương thích trong phát triển phần mềm mã nguồn mở và thương mại.