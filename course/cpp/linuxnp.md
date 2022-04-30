---
sidebar_position: 8
---

# Linux网络编程

## 简介

讲解Linux网络编程知识，分以下四个篇章。

Linux网络编程之TCP/IP基础篇

Linux网络编程之socket编程篇

Linux网络编程之进程间通信篇

Linux网络编程之线程篇

B站播放地址：https://www.bilibili.com/video/BV1HT4y1X71Q

## Linux网络编程之TCP/IP基础篇
### 01TCPIP基础（一）

ISO/OSI参考模型

TCP/IP四层模型

基本概念（对等通信、封装、分用、端口）

### 02TCPIP基础（二）

最大传输单元（MTU）/路径MTU

以太网帧格式

ICMP

ARP

RARP
### 03TCPIP基础（三）

IP数据报格式

网际校验和

路由

### 04TCPIP基础（四）

TCP特点

TCP报文格式

连接建立三次握手

连接终止四次握手

TCP如何保证可靠性

### 05TCPIP基础（五）

滑动窗口协议

UDP特点

UDP报文格式

## Linux网络编程之socket编程篇
### 06socket编程（一）

什么是socket

IPv4套接口地址结构

网络字节序

字节序转换函数

地址转换函数

套接字类型

### 07socket编程（二）

TCP客户/服务器模型

回射客户/服务器

socket、bind、listen、accept、connect

08socket编程（三）

SO_REUSEADDR

处理多客户连接（process-per-conection）

点对点聊天程序实现
### 09socket编程（四）

流协议与粘包

粘包产生的原因

粘包处理方案

readn writen

回射客户/服务器
### 10socket编程（五）

read、write与recv、send

readline实现

用readline实现回射客户/服务器

getsockname、getpeername

gethostname、gethostbyname、gethostbyaddr

### 11socket编程（六）

TCP回射客户/服务器

TCP是个流协议


僵进程与SIGCHLD信号

### 12socket编程（七）

TCP 11种状态

连接建立三次握手、连接终止四次握手

TIME_WAIT与SO_REUSEADDR

SIGPIPE

### 13socket编程（八）

五种I/O模型

select

用select改进回射客户端程序

### 14socket编程（九）

select

读、写、异常事件发生条件

用select改进回射服务器程序。

15socket编程（十）

用select改进第八章点对点聊天程序

### 16socket编程（十一）

套接字I/O超时设置方法

用select实现超时

read_timeout函数封装

write_timeout函数封装

accept_timeout函数封装

connect_timeout函数封装

### 17socket编程（十二）

select限制

poll

### 18socket编程（十三）

epoll使用

epoll与select、poll区别

epoll LT/ET模式

### 19socket编程（十四）

UDP特点

UDP客户/服务基本模型

UDP回射客户/服务器

UDP注意点

### 20socket编程（十五）

udp聊天室实现

### 21socket编程（十六）

UNIX域协议特点

UNIX域地址结构

UNIX域字节流回射客户/服务

UNIX域套接字编程注意点

### 22socket编程（十七）

socketpair

sendmsg/recvmsg

UNIX域套接字传递描述符字

## Linux网络编程之进程间通信篇

### 23进程间通信介绍（一）

进程同步与进程互斥

进程间通信目的

进程间通信发展

进程间通信分类

进程间共享信息的三种方式

IPC对象的持续性

### 24进程间通信介绍（二）

死锁

信号量

PV原语

用PV原语解决司机与售票员问题

用PV原语解决民航售票问题

用PV原语解决汽车租赁问题
### 25System V消息队列（一）

消息队列


IPC对象数据结构

消息队列结构

消息队列在内核中的表示

消息队列函数
### 26System V消息队列（二）

msgsnd函数

msgrcv函数
### 27System V消息队列（三）

消息队列实现回射客户/服务器

### 28共享内存介绍

共享内存

共享内存示意图

管道、消息队列与共享内存传递数据对比

mmap函数

munmap函数

msync函数

### 29System V共享内存

共享内存数据结构

共享内存函数

共享内存示例

### 30System V信号量（一）

信号量


信号量集结构

信号量集函数

信号量示例

### 31System V信号量（二）

用信号量实现进程互斥示例

### 32System V信号量（三）

用信号集解决哲学家就餐问题

### 33System V共享内存与信号量综合

用信号量解决生产者消费者问题

实现shmfifo

### 34POSIX消息队列

POSIX消息队列相关函数

POSIX消息队列示例

### 35POSIX共享内存

POSIX共享内存相关函数

POSIX共享内存示例

## Linux网络编程之线程篇
### 36线程介绍

什么是线程

进程与线程

线程优缺点

线程模型

N:1用户线程模型

1:1核心线程模型

N:M混合线程模型

### 37POSIX线程（一）

POSIX线程库相关函数

用线程实现回射客户/服务器

### 38POSIX线程（二）

线程属性

线程特定数据

### 39POSIX信号量与互斥锁

POSIX信号量相关函数

POSIX互斥锁相关函数

生产者消费者问题

自旋锁与读写锁介绍

### 40POSIX条件变量

条件变量

条件变量函数

条件变量使用规范

使用条件变量解决生产者消费者问题

### 41一个简单的线程池实现

线程池性能分析

线程池实现
