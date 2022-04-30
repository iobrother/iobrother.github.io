---
sidebar_position: 9
---

# Miniftpd实战

## 简介

运用Linux系统编程与网络编程所学的知识，带领大家用C语言动手打造一款小型的ftp服务器miniftpd。整个项目代码都是纯手工一行一行敲写出来的，代码量3000多行。

B站播放地址：https://www.bilibili.com/video/BV11Y4y1i7bi

### 01FTP协议－miniftpd项目实战

FTP协议

FTP基本工作原理

### 02FTP两种工作模式－miniftpd项目实战

FTP两种工作模式

主动模式

被动模式

NAT与防火墙对主被动模式的影响

### 03miniftpd项目需求－miniftpd项目实战

miniftpd项目需求

miniftpd逻辑结构分析

### 04miniftpd框架搭建－miniftpd项目实战

miniftpd框架搭建

### 05字符串工具模块封装－miniftpd项目实战

字符串工具模块封装

### 06配置文件模块实现－miniftpd项目实战
配置文件模块实现

### 07登录验证的实现－miniftpd项目实战

登录验证

do_user

do_pass

### 08命令映射的实现－miniftpd项目实战

命令映射实现

do_syst

do_feat

do_type

do_pwd

### 09获取目录详细列表的实现－miniftpd项目实战

获取目录详细列表的实现

### 10主动模式实现列表传输－miniftpd项目实战

主动模式实现列表传输

### 11被动模式实现列表传输－miniftpd项目实战
被动模式实现列表传输

### 12内部进程间通信模块封装－miniftpd项目实战

内部进程间通信模块封装

### 13主动模式实现列表传输（nobody进程辅助）－miniftpd项目实战
主动模式实现列表传输（nobody进程辅助）

### 14被动模式实现列表传输（nobody进程辅助）－miniftpd项目实战
被动模式实现列表传输（nobody进程辅助）

### 15几个命令的实现－miniftpd项目实战

do_cwd

do_cdup

do_mkd

do_rmd

do_dele

do_rest

do_size

do_rnfr

do_rnto

### 16文件下载的实现－miniftpd项目实战

文件下载的实现

断点续载

do_retr

### 17文件上传的实现－miniftpd项目实战

文件上传的实现

断点续传

do_stor

do_appe

### 18限速的实现－miniftpd项目实战

上传下载限速

### 19空闲断开的实现－miniftpd项目实战

控制连接通道空闲断开

数据连接通道空闲断开

### 20ABOR实现－miniftpd项目实战

do_noop

do_quit

ABOR实现

紧急模式数据传输

### 21散列表－miniftpd项目实战

散列表概念

### 22散列表－miniftpd项目实战

链地址法解决冲突

### 23散列表－miniftpd项目实战

链地址法解决冲突 

### 24散列表－miniftpd项目实战

线性探测法

二次探测法

伪随机探测法

双散列法

### 25散列表－miniftpd项目实战

散列法性能分析

### 26最大连接数限制－miniftpd项目实战

最大连接数限制

### 27单ip连接数限制－miniftpd项目实战

单ip连接数限制

### 28总结－miniftpd项目实战

do_help

do_stat

do_site

总结
