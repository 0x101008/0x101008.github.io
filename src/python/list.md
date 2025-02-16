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

```python
grade=[0,1,2,3,4,5,6,7,8,9]
print(grade[2:6])
#output
[2, 3, 4, 5]
```

```python
grade=[0,1,2,3,4,5,6,7,8,9]
print(grade[2:9:2])
#output
[2, 4, 6, 8]
```

#### 2.2 列表的切边赋值

```python
In [3]: list('python')
Out[3]: ['p', 'y', 't', 'h', 'o', 'n']

In [4]: name = list('python')

In [5]: name
Out[5]: ['p', 'y', 't', 'h', 'o', 'n']

In [6]: name[2:]
Out[6]: ['t', 'h', 'o', 'n']

In [7]: name[2:]=list('abc')

In [8]: name
Out[8]: ['p', 'y', 'a', 'b', 'c']


```

`````python
In [1]: num=[1,5]

In [2]: num[1:1]
Out[2]: []

In [3]: num[1:1]=[2,3,4]

In [4]: num
Out[4]: [1, 2, 3, 4, 5]

In [6]: num[1:4]=[]

In [7]: num
Out[7]: [1, 5]
`````

### 4. 小试牛刀

```python
a,b=int(input('>>>')),int(input('>>>'))
num=[1,2,3,5,6]
print(num[:a]+[b]+num[a:])

#output
>>>3
>>>4
[1, 2, 3, 4, 5, 6]
```

### 5.在列表中的特定位置插入元素「`.insert(index,element)`」

`.insert(index,element)`是列表的一个基本方法，用于在列表的指定位置插入一个元素。

它的基本语法是：

```python
list.insert(index,element)
```

- index: 指定要插入元素的位置。索引从 0 开始。如果指定的索引超出了列表的当前长度「不会报错」，则元素将被添加到列表的末尾。
- element: 这是你想要插入列表的元素。

```python
num=[1,3]
num.insert(1,2)
print(num)
#output
[1, 2, 3]
```

#### 5.2 len()

```python
num=[1,3]
print(len(num))
#output
2
```

#### 5.3 修改列表元素

```python
name=['lilei','madongmei']
print('before:',name)

name[0]='hanmeimei'
print('after:',name)

#output
before: ['lilei', 'madongmei']
after: ['hanmeimei', 'madongmei']
```

#### 5.4 多个元素一起修改

```python
num=[0,1,2,3,4,5,6,7,8,9,10]
print('b:',num)

num[1:5]=['a','b','c','d']
print('a:',num)

#output
b: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a: [0, 'a', 'b', 'c', 'd', 5, 6, 7, 8, 9, 10]
```

```python
num=[0,1,2,3,4,5,6,7,8,9,10]
print('b:',num)

num[1:5]=['a','b']
print('a:',num)

#output
b: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a: [0, 'a', 'b', 5, 6, 7, 8, 9, 10]
```

```python
num=[0,1,2,3,4,5,6,7,8,9,10]
print('b:',num)

num[1:5]='luoyebusui'
print('a:',num)

#output
b: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a: [0, 'l', 'u', 'o', 'y', 'e', 'b', 'u', 's', 'u', 'i', 5, 6, 7, 8, 9, 10]
```

- 多个元素修改的情况下，可以使用对象：
  - 列表
  - 元组
  - 集合「不按集合原本的顺序」
  - 字符串
  - 字典「放进去的是key」

```python
num=[0,1,2,3,4,5,6,7,8,9,10]
print('b:',num)

num[1:5]={'a':1,'b':2}
print('a:',num)

num=[0,1,2,3,4,5,6,7,8,9,10]
print('b:',num)

num[1:3]={'luoye','aaa','bbb'}
print('a:',num)

#output
b: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a: [0, 'a', 'b', 5, 6, 7, 8, 9, 10]
b: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a: [0, 'bbb', 'aaa', 'luoye', 3, 4, 5, 6, 7, 8, 9, 10]
```

#### 5.5 append()

```python
lst=['钥匙','毒药']
print('before:',lst)
lst.append('解药')
print('after:',list)

#output
before: ['钥匙', '毒药']
after: <class 'list'>
```