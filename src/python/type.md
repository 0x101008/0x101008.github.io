---
title: type
icon: python
date: 2024-05-05 10:36:55
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

## 1.数字型[int、float]

#### 1.1代码示例

1.整型

```python
int_num=1
t= type(int_num)
print(int_num)
print('int num type is:>>>',t)
print('直接检测输出：>>>',type(int_num))

#output
1
int num type is:>>> <class 'int'>
直接检测输出：>>> <class 'int'>
```

2.浮点数

```python
float_num=1.5
t=type(float_num)
print(float_num)
print('float num type is:>>>',t)
print('直接检测数据类型：>>>',type(float_num))

#output
1.5
float num type is:>>> <class 'float'>
直接检测数据类型：>>> <class 'float'>
```

## 2.字符串

#### 2.1 代码示例

```python
string='hello sht!'
t=type(string)
print(string)
print('sting type:>>>',t)
print('直接检测数据类型：>>>',type(string))

#output
hello sht!
sting type:>>> <class 'str'>
直接检测数据类型：>>> <class 'str'>
```

#### 2.2 字符串三大特性

1. 有序性
    1. ⌈从左到右，下标是从0开始⌋。
    2. ⌈从右到左，下标是从-1开始⌋。

2. 不可变性
    1. 字符串被创建出来后，就不能被改变。
    2. 注意⚠️：我们说的不可变，是在代码运行过程当中，不能对字符串修改、添加、删除之类的操作。

3. 任意字符
    1. 键盘⌨️上可以输入的字符，都可以是字符串的元素。
    2. 字符放到字符串中，都将转换成字符串类型。⌈也就是说：里面每一个元素都可以称为：子符串⌋

## 3.列表⌈list⌋

#### 3.1 代码示例

```python
lst=["hello",1,1.1,('look','at','me'),[12,'hamburger'],True,False]
t=type(lst)

print(lst)
print(t)

print('直接检测数据类型>>>',type(lst))

#output
['hello', 1, 1.1, ('look', 'at', 'me'), [12, 'hamburger'], True, False]
<class 'list'>
直接检测数据类型>>> <class 'list'>
```

#### 3.2 列表三大特性

1. 有序性
    1. ⌈从左到右，下标从0开始⌋
    2. ⌈从右到左，下标从-1开始⌋
    3. 列表里的每个元素算一个；
        1. 比如：`lst=['sht',12]`
        2. 上面👆lst有两个元素，下标分别是：
            1. `sht`是下标0（从左到右），也是-2（从右到左）
            2. `12`是下标1（从左到右），也是-1（从右到左）

2.可变性：在程序运行过程中，列表是可以改变⌈添加、删除、修改⌋

3.任意数据类型：注意，这里所说的任意数据类型，指的是Python中所拥有的数据类型。

---

## 4.元组⌈tuple⌋

#### 4.1 代码示例

```python
tup=(1,2,3,4,'hello','world',1.1,[1,2,3,4])
t=type(tup)
print(tup)
print('tup type is:>>>',t)
print('直接检测数据类型：>>>',type(tup))

#output
(1, 2, 3, 4, 'hello', 'world', 1.1, [1, 2, 3, 4])
tup type is:>>> <class 'tuple'>
直接检测数据类型：>>> <class 'tuple'>
```

#### 4.2 元组的三大特性

1. 有序性
    1. ⌈从左到右，下标从0开始⌋
    2. ⌈从右到左，下标从-1开始⌋
    3. 元组里每个元素算一个
        1. 比如：`tup=('sht',12)`
        2. 上面👆tup有两个元素，下标分别是：
            1. `sht`是下标0（从左到右），也是-2（从右到左）
            2. `12`是下标1（从左到右），也是-1（从右到左）

2.不可变性

1. 元组被创建出来后就不能被改变
2. 注意：我们说的不可变，是在代码运行过程中，不能有对元组有添加、删除、修改之类的操作

3.任意数据类型：注意，这里所说的任意数据类型，指的是Python中所拥有的数据类型。

---

## 5.探究⌈列表＆元组⌋

1. 存储的数据或数量是可变的，比如社交平台上的一个日志功能，是统计一个用户在一周内看了哪些用户的帖子，那么则用列表比较合适。
2. 如果存储的数据和数量不变，比如你有一个系统需要返回的是一个地点的
    经纬度，然后直接传给用户查看，那么选用元组更合适。

- 假设

    - 假设1：现在有一个仓库，你需要向仓库添加物品，仓库很大，现有的物品也很多，你不知道还有没有位置可以存放。此时我们是不是需要聘请一个仓库管理员，这样我们就可以直接问仓库管理员：里面还有哪个位置（是否有位置？）仓库管理员会告诉你，并且你可以直接把你的物品添加进去。

        问题来了，仓库管理员为什么知道仓库是否有位置？——因为仓库管理员会一直跟踪这个仓库的状态。

    - 假设2：现在有一个原子弹的仓库，仓库创建之后只能存放一个原子弹。那么，我们需要设立一个专门的人员跟踪原子弹的仓库的状态吗？不需要，此时再聘请一个就显得浪费了。

- Why?

    - 用户日志，是不是一直会变动？我们是不是需要一个类似仓库管理员的‘’人‘’，来跟踪和知道：是否有位置，（是否有空间/内存），还需要知道在哪里添加。——列表更合适。因为列表可变。⌈可变意味着：添加、删除、修改⌋
        - 元组为什么不合适？——因为你每当需要添加数据的时候，你就得重新创建一个新的元组。（就类似于你创建原子弹仓库，肯定是刚刚好可以存放一个。那么你想存放两个的时候，只能重新再创建一个仓库。）

    - 经纬度会改变吗？显然是不会的，那么就不需要一个多余的人去跟踪状态。——用列表可以吗？可以，但是没必要，⌈因为我们不需要仓库管理员⌋，用列表就有点浪费资源了，选组的功能刚刚好够用。
    - **<span style='color:orange'>我们讲究：不浪费，合适就好。</span>**

---

##  6.字典⌈dict⌋

#### 6.1 代码示例

```python
d = {"name": "sht", "age": 18, 1: "int", 1.1: 1, "tup": (1, 2, 3)}
t = type(d)
print(d)
print("d type is:>>>", t)
print("直接检测数据类型，并输出:>>>", type(d))

# output
{'name': 'sht', 'age': 18, 1: 'int', 1.1: 1, 'tup': (1, 2, 3)}
d type is:>>> <class 'dict'>
直接检测数据类型，并输出:>>> <class 'dict'>
```

#### 6.2 字典的特性

1. 无序性「Python 3.6+ 之后有序」 
    1. 先以无序理解即可；
    2. 有些前期基本用不到；
2. 字典的组成：是由一系列的 key 和 value 组成。`d = {"key1": "value1", "key2": "value2".....}`
3. key： 
    1. 不可变的数据类型，才可以当作字典的 key；
    2. 比如：字符串、数字、布尔、元组；
4. value：任意数据类型，Python 所拥有的数据类型；
5. 可变性：可以添加、修改、删除键对值；

---

## 7.集合⌈set⌋

#### 7.1代码示例

```python
set={1,2,'sht',1.1,(1,2,3),False}
t=type(set)
print(set)
print('set type is:>>>',t)
print('直接检测数据类型并输出：>>>',type(set))

#output
{False, 1, 2, 'sht', 1.1, (1, 2, 3)}
set type is:>>> <class 'set'>
直接检测数据类型并输出：>>> <class 'set'>
```

#### 7.2集合的特性

1. 无序性：集合是没有顺序的，也就是：没有下标。

    ::: warning
   
   如果你运行集合很多次，或者其中某一次集合顺序没有改变，我们也不能说集合是有序的。Why?你掷骰子500次都是6点，你能说掷骰子是确定性事件吗？——显然是不行的。
   
   :::

2. 确定性：

    1. 集合的每一个值都是确定的，⌈也就是需要不可变的数据类型⌋

    2. 比如：数字型、布尔，元组、字符串。

    3. 举个例子🌰：列表为什么不行？——列表可变，所以造成不确定性，故：不行。

        ::: code-tabs

        @tab 不可变测试

        ```python
        set={1,2,'sht',1.1,(1,2,3),False}
        print(set)
        
        #ouput
        {False, 1, 2, 1.1, 'sht', (1, 2, 3)}
        ```

        @tab2 可变测试

        ```python
        set={1,2,[1,2,3]}
        print(set)
        
        #ouput
        Traceback (most recent call last):
          File "C:\Users\s\Desktop\编程\代码\python\type.py", line 1, in <module>
            set={1,2,[1,2,3]}
        TypeError: unhashable type: 'list'
        ```

        :::

3. 互异性：出现重复的不会报错，会自动去掉重复的。

    ```python
    set={1,2,1,1,2,1,1,2,1}
    print(set)
    
    #output
    {1,2}
    ```

4. 可变性：可以对集合添加、删除数据，但是不能修改输出⌈注意：删除是无法指定下标删除的元素⌋

---

## 8.布尔型⌈bool⌋

```python
condition=True
print(condition)
print(type(condition))

# output:
True
<class 'bool'>
```

