---
title: 列表list
icon: python
date: 2024-12-15 14:34:40
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

## 1.列表结构
•    利用 **<span style="color:orange">中括号</span>** 表示列表
•    列表内的元素用 **<span style="color:orange">逗号</span>** 隔开
•    注意是 **<span style="color:orange">英文输入法</span>** 下的逗号

```python
s1=['lilei',18,'c1',201901]
s2=['hmm',19,'c2',201902]
print(s1)
print(s2)

#output
['lilei', 18, 'c1', 201901]
['hmm', 19, 'c2', 201902]
```

字符串强制转换为列表

```python
s1='sht'
print(list(s1))

#output
['s', 'h', 't']
```

## 2.获取列表中的某个元素

#### 2.1 列表的下标组成

编程语言中通常**<span style="color:orange">第一个位置的编号是0</span>**

```python
grade=[98,99,95,80]
#98
print(grade[0])

#178
print(grade[0]+grade[-1])

#output
98
178
```

