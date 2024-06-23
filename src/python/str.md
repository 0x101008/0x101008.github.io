---
title: 字符串str
icon: python
date: 2024-06-17 20:50:30
author: sht
isOriginal: true
category: 
    - python
tag:
   - python
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

---

### 1.字符串的定义

字符串是由字母、数字、特殊字符来组成的序列。

![9729dcd0ddd280037420ba507a81e557](./str.assets/9729dcd0ddd280037420ba507a81e557.png)

### 2.如何创建字符串

如何创建字符串？

——使用**<span style='color:orange'>单引号、双引号</span>**或者**<span style='color:orange'>三引号</span>**。

```python
name = 'sht'
num = 31
para = '''hello world'''
para_two = """hello world"""
```

*为什么python同时支持三种创建字符串的方法？*

常见的：

```
string='I am sht.'
print(string)
```
但在英语中也可以这样表达：


```python
string='I'm sht.'
print(string)

#output

  File "C:\Users\s\Desktop\编程\代码\python\str.py", line 1
    string='I'm sht.'
              ^
SyntaxError: invalid syntax
```

##### 因为，开头是单引号，所以Python会寻找下一个第一次出现的单引号进行匹配。而第一个单引号不在字符串末尾，所以会导致整个字符串异常。

如果是长文本呢？

方法一

```python
string='我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。\
\
浅者见浅，深者见深\
\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\
\
先实现功能，再去优化，否则一切会很乱。\
\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西'
print(string)
```

但这样就会导致输出在一行当中，所以有了方法二——三引号

```python
string='''我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。

浅者见浅，深者见深

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西'''
print(string)

#output

我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。

浅者见浅，深者见深

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

可以从上面的输出可知，原本什么格式，输出就是什么格式「原样输出」「三个单引号的效果和前面一样」

- **<span style='color:orange'>三个单引号或者三个双引号，实现原样输出。</span>**
- **<span style='color:orange'>多行注释</span>**
- **<span style='color:orange'>单双三引号混用</span>**

## 3.字符串长度

如何获取一个字符串的长度呢？——`len()`

`len()`:返回字符串中字符长度或字符数。

```python
string='sht'
print(string)
#s
select=string[0]
print(select)
#t
select=string[2]
select1=string[-1]
select2=string[len(string)-1]
print(select,select1,select2)

#output
sht
s
t t t
```

### 3.2获取多个连续字符「子字符」

```python
string='sht'
select=string[1:3]
print(select)

#output
ht

'''
语法：
string='sht'
select=string[start:end]
end要减1
print(select)
'''
```

```python
string='sht114514'
select=string[3:10]
select1=string[0:3]
select2=string[-6:-1]
print(select,select1,select2)

#output
114514 sht 11451
```

### 3.3 获取多个不连续的字符

```python
#h141
string='sht114514'
select=string[1:10:2]
print(select)
#13579
string1='0123456789'
select1=string1[1:11:2]
print(select1)

#output
h141
13579
```

### 3.4优化

```python
string='0123456789'
#02468
select=string[::2]
print(select)
#13579
select1=string[1::2]
print(select1)

'''
output
02468
13579
'''
```

### 3.5字符串倒序

字符串的第三个位置，控制的是字符串提取的方向。默认为正数1，如果我们改为-1，就会变成反方向。

::: warning

正负控制方向，数字大小控制步长。

:::

```python
string='01234567891'
select=string[::-1]
print(select)

#output
19876543210
```

::: tip

思考一下，上面少了什么？

:::

想必你也发现了，没有结果也没有报错。

Why?

![6754f04d6a33d00f802d399f64ce5d73](./str.assets/6754f04d6a33d00f802d399f64ce5d73.png)

由上面分析，我们应该如何解决？

##### 解决方法

- 方法一：调换位置

    - 能否解决：可以

    - 存在什么问题：少了一个字符

    - ```python
        string='01234567891'
        select=string[11:0:-1]
        print(select)
        #1987654321
        ```

为什么少了一个字符？

——存在一个悖论，因为结束🔚是0，但是`0+1`时得到1，而1是从左到右的第二个字符。故而+1是无法实现和解决的。

但是我们可以利用不写结尾，得到最后一个缺失的字符：`string[11::-1]`。

虽然解决，但是我们偏离了一开始的问题：前两位省略了什么数字？「因为，又回到了一开始省略的状态了」

- 方法二：重写开始结尾

    - 想想字符串的有序性，从右到左。

    - 为什么要纠结前面两个空的数字是多少？——为了之后得到某一部分的字符倒序。

    - ```python
        string='01234567891'
        select=string[-1:12:-1]
        print(select)
        ```

![c5c6aa46eb6d9fe167d1913052450dad](./str.assets/c5c6aa46eb6d9fe167d1913052450dad.png)
