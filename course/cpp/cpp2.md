---
sidebar_position: 11
---

# 跟我一起学C++第二季

## 简介

B站播放地址：https://www.bilibili.com/video/BV16b4y1J7Dp

## 章节
### 39类与类之间关系

UML介绍

StarUML工具使用

继承（泛化）

关联

聚合

组合

依赖

### 40表达式计算器实现（一）

表达式计算器设计

表达式树

类设计

### 41表达式计算器实现（二）

分清值语义与对象语义

表达式解析

### 42表达式计算器实现（三）

Scanner类实现

### 43表达式计算器实现（四）

Parser类实现

### 44表达式计算器实现（五）

更正设计缺陷

### 45表达式计算器实现（六）

SymbolTable实现

### 46表达式计算器实现（七）

Storage类实现

### 47表达式计算器实现（八）

让表达式计算器支持变量赋值

### 48表达式计算器实现（九）

解决一些BUG

### 49表达式计算器实现（十）

FunctionTable实现

表达式计算器支持函数调用

### 50异常（一）

C语言错误处理方法

C++异常处理方法

C++异常处理优点

### 51异常（二）

程序错误

异常语法

异常抛出

异常捕获

异常传播

栈展开

### 52异常（三）

异常与继承

异常与指针

异常规格说明

C++标准库异常层次

### 53表达式计算器实现（十一）

表达式计算器增加异常处理

### 54表达式计算器实现（十二）

内存泄露跟踪器

### 55表达式计算器实现（十三）

内存泄露跟踪器完善

表达式计算器加入内存泄露跟踪

### 56面向对象版计算器（十四）

表达式计算器内存泄露原因

资源管理

资源所有权

RAII

智能指针模拟NodePtr类实现

### 57面向对象版计算器（十五）

auto_ptr

表达式计算器加入auto_ptr来防止内存泄露

### 58单例模式与auto_ptr

auto_ptr在单例模式中的应用

### 59IO流类库（一）

什么是I/O

什么是流

流类库继承体系

标准输入/输出流

### 60IO流类库（二）

文件流

打开文件

读写文件

流状态

文件关闭

### 61IO流类库（三）

### 文件读写

二进制文件的读写

文件随机读写tellp、tellg、seekp、seekg

### 62IO流类库（四）

字符串流

istringstream

ostringstream

stringstream

### 63IO流类库（五）

输出流格式化

以操纵子方式格式化

以成员函数方式格式化

宽度控制

对齐控制

填充控制

精度控制

进制输出

### 64面向对象版计算器（十六）

调试一个BUG

Scanner类改进

Parser类改进

### 65面向对象版计算器（十七）

命令解析框架搭建

### 66面向对象版计算器（十八）

调试一个BUG

命令实现

!f 命令

!v 命令

### 67面向对象版计算器（十九）

序列化

Serializer类实现

DeSerializer类实现

### 68面向对象版计算器（二十）

实现命令

!s filename

!l filename

序列化

SymbolTable类序列化

Storage类序列化

Calc类序列化

### 69模板（一）

模板

函数模板

函数模板特化

重载函数模板

### 70模板（二）

类模板

非类型模板参数

### 71模板（三）

缺省模板参数

成员模板

关键字typename

派生类和模板

面向对象与泛型

### 72模板（四）

用模板实现单例模式

第36章的动态创建对象改为用模板方式来实现

### 73STL（一）

泛型程序设计

什么是STL

STL六大组件及其关系

### 74STL（二）

vector源码分析

Allocator

### 75STL（三）

vector源码分析

Allocator

### 76面向对象版计算器（二十一）

ptr_vector实现

通过ptr_vector来避免潜在的内存泄露

### 77STL（四）

迭代器

迭代器类型

迭代器源码剖析

### 78STL（五）

算法

算法分类

算法示例

for_each

min_element

max_element

find

find_if

search

### 79STL（六）

for_each

copy

copy_backward

transform

replace

replace_copy

replace_copy_if

### 80STL（七）

移除性算法 remove

变序性算法 rotate

排序算法 sort

已序区间算法 lower_bound、upper_bound

数值算法 accumulate

### 81STL（八）

用STL算法解决八皇后问题

### 82STL（九）

函数对象

函数对象与容器

函数对象与算法

表达式计算器中函数对象的应用

STL中内置的函数对象

### 83STL（十）

适配器

容器适配器

迭代器适配器

函数适配器

函数适配器

针对成员函数的函数适配器

针对一般函数的函数适配器

### 84STL（十一）

迭代器适配器

反向迭代器

插入迭代器

IO流迭代器

### 85STL（十二）

容器适配器

stack

queue

priority_queue

### 86面向泛型版计算器

面向泛型版表达式计算器

### 87boost智能指针（一）

boost智能指针

`scoped_ptr<T>`

`shared_ptr<T>`

`weak_ptr<T>`

`scoped_array<T>/shared_array<T>`

PIMPL技法

### 88boost智能指针（二）

boost智能指针

`scoped_ptr<T>`

`shared_ptr<T>`

`weak_ptr<T>`

`scoped_array<T>/shared_array<T>`

PIMPL技法
