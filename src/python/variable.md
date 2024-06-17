---
title: variable
icon: python
date: 2024-04-06 12:51:41
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

#### 变量

1. 理解变量

    字面理解：变：变化

    ​		量：大小

2. 举个例子🌰

    假如，你是班级当中的课代表，每个月需要统计班级中每个学生的月考成绩。月考成绩会每个月一张纸，每张纸上都会依次记录每个学生的月考成绩，例如：

    1. 李雷 98分
    2. 马冬梅 89分
    3. 刘奕彤 96分
    ......

某一天，老师要看刘奕彤 1月、2月、3月的成绩，这个时候作为课代表的你需要怎么办。——总不能直接把每个月的月考成绩单直接给老师，显然是不合适的。

我们应该把刘奕彤 1月、2月、3月的成绩抄写到单独的一张纸上，接着给老师。

那么，我们为什么不一开始直接为每一个学生分配一个信封呢？（也可以是档案袋）信封在一开始是扁的，当我们放东西（数据）进去之后，是不是鼓起来了？——是不是变化了？是不是有大小了呢？显然是的。

信封，是不是在我们当前所处的空间当中开辟空间，来存放数据并且说这是信封。类似的有：冰箱，不也是在我们当前所处的空间中，开辟空间。

所以，变量不就是在计算机的内存中开辟空间，来存储数据

特点:会覆盖

#### 如何创建变量--赋值语句

​	1. 变量：通过变量名代表会引用某个值。

​		女娲捏了泥人，泥人没有生命。女娲挥了挥手柳条，赋予给泥人生命。此时泥人可以代表说是女娲的后人。[变量：泥人，值：女娲 ]   `泥人 = 女娲`	

​		全国人民代表大会中的人大代表，是由广大人民群众投票选举出来的。他们的权利不是自己获取的，所以他们可以说：我们代表的是广大人民群众的意志。[变量：人大代表，值：群众] `人大代表 = 人名群众`

 2. 初始化赋值语句：变量名=表达式[`=`叫做：赋值运算符]

 3. 变量名：就是这个空间，我们叫它什么名字；

    表达式：类似数学表达；

 4. 程序的运行逻辑: 从上到下，从右到左，最后才是赋值.

 5. 代码实例

    ```python
    x=1 #1赋值给了x,x代表1
    x=x+10 #x+10等价于1+10,最后赋值11给x
    print(x) #打印x
    ```

```python
name1='leilei'
name2=name1
print(name2)

#覆盖
name1='leilei'
name2='hanmeimei'
print(name1)
```

### 探究print

#### 3.1 同时输出多个数据

```python
a=1
b=2
c=3
print(a,b,c)

#---output
1 2 3
```

从输出的结果可以看出，print同时输出多个变量，每个变量之间默认以空格间隔。

那么，我们修改这个默认空格吗？——答案是可以的。

使用 sep。

#### 3.2 sep 修改多个变量同时输出的间隔

```python
a=1
b=2
c=3
print(a,b,c,sep=' 间隔 ')

#---output
1 间隔 2 间隔 3
```

#### 3.3 end 修改print输出结尾方式

原本

```python
a=1
b=2
c=3
print(a)
print(b)
print(c)

#---output
1
2
3
```

修改结尾1

```python
a=1
b=2
c=3
print(a)
print(b,end="\n\n")
print(c)

#---output
1
2

3
```

修改结尾2

```python
a=1
b=2
c=3
print(a)
print(b,end=" 114514 ")
print(c)

#---output
1
2 114514 3
```

#### 3.4 end和sep可同时使用

```python
a=1
b=2
c=3
print(a,b,c,sep='~',end='love python')

#---output
1~2~3love python
```

### 进阶赋值方法

---

#### 4.1多个变量同时赋予相同的值

```python
a=b=c=1
print(a,b,c)

#---output
1 1 1
```

#### 4.2 多个变量赋予不同值

```python
a,b,c=1,2,3
print(a,b,c)

#---output
1 2 3
```

::: info

### 1. 交换果汁

假如你有两个小孩，哥哥叫：Austin，弟弟叫：Jaden。

Austin 想喝**果汁**，Jaden 想喝**可乐**。**哥哥和弟弟都有专属的杯子，不喜欢用对方的杯子。**

家中仅剩一杯果汁、一杯可乐，你不小心把哥哥的杯子装了可乐，弟弟的杯子装了果汁。

**问：如何交换哥哥与弟弟杯中的果汁？**

------

::: code-tabs

@tab1 题目

```python
Austin = "Coke"  # 该赋值可以理解为倒果汁的过程
Jaden = "juice"  # 该赋值可以理解为倒果汁的过程
print("Austin", Austin)
print("Jaden", Jaden)
print("Austin", Austin)
print("Jaden", Jaden)
```

@tab2 方法1：引入一个空杯子

```python
Austin = "Coke"  # 该赋值可以理解为倒果汁的过程
Jaden = "juice"  # 该赋值可以理解为倒果汁的过程
print("Austin", Austin)
print("Jaden", Jaden)
print("Austin", Austin)
print("Jaden", Jaden)
```

@tab3 方法2：python特有方法

```python
Austin = "Coke"  # 该赋值可以理解为倒果汁的过程
Jaden = "juice"  # 该赋值可以理解为倒果汁的过程
print("Austin", Austin)
print("Jaden", Jaden)
Austin, Jaden = Jaden, Austin
print("Austin", Austin)
print("Jaden", Jaden)
```

:::

:::

### 变量命名则

- 大小写英文、数字和`_`的组合，且不能用数字开头。

- 系统关键词不能作为变量使用⌈获取关键字列表：`help('keywords')`⌋

- ```python
    Here is a list of the Python keywords.  Enter any keyword to get more help.
    
    False               class               from                or
    None                continue            global              pass
    True                def                 if                  raise
    and                 del                 import              return
    as                  elif                in                  try
    assert              else                is                  while
    async               except              lambda              with
    await               finally             nonlocal            yield
    break               for                 not
    ```

- Python中的变量名区分大小写

- 变量名不能包含空格，但是可以使用下划线来分割其中的单词

- 不要使用python的内置函数名作变量

    

### 练习

1. 在 Python 中，变量名可以以数字开始。
    - [ ] 对
    - [ ] 错

2. 在 Python 中，以下哪个变量名是有效的？
    - [ ] 2myVar
    - [ ] myVar2
    - [ ] my-var
    - [ ] my var

3. 在 Python 中，变量名区分大小写。
    - [ ] 对
    - [ ] 错

4. 在 Python 中，`my_var` 和 `myVar` 是同一个变量。
    - [ ] 对
    - [ ] 错

5. 变量名可以是 Python 中的关键字。
    - [ ] 对
    - [ ] 错

6. `None` 是 Python 中的特殊类型，表示没有值或空值。
    - [ ] 对
    - [ ] 错

7. 在 Python 中，以下哪个是有效的变量赋值？
    - [ ] 123abc = "hello"
    - [ ] for = "world"
    - [ ] _hidden = "secret"
    - [ ] import = 123

8. 在 Python 中，一个变量可以同时被赋予多个值。
    - [ ] 对
    - [ ] 错

9. 在 Python 中，以下哪个是多变量赋值？
    - [ ] a, b, c = 1, 2, 3
    - [ ] a = 1, b = 2, c = 3
    - [ ] a; b; c = 1; 2; 3
    - [ ] a = 1; b = 2; c = 3;

10. 变量在使用之前必须被赋值。
    - [ ] 对
    - [ ] 错

11. Python 中变量的类型是静态的，一旦赋值就不能改变。
    - [ ] 对
    - [ ] 错

12. 在 Python 中，以下哪个表示全局变量？
    - [ ] var = "hello"
    - [ ] global var
    - [ ] var(global)
    - [ ] def var():

13. 以下哪个表示删除变量？
    - [ ] delete x
    - [ ] del x
    - [ ] remove x
    - [ ] destroy x

14. `x = 5` 之后 `y = x`，现在改变 `y` 的值，`x` 的值也会改变。
    - [ ] 对
    - [ ] 错

15. `x = [1, 2, 3]` 之后 `y = x`，现在改变 `y` 的列表内容，`x` 的内容也会改变。
    - [ ] 对
    - [ ] 错

16. 在 Python 中，变量只能存储基本数据类型的值，如整数或字符串。
    - [ ] 对
    - [ ] 错

---

## answer

1. 在 Python 中，变量名可以以数字开始。
    - [ ] 对
    - [x] 错

2. 在 Python 中，以下哪个变量名是有效的？
    - [ ] 2myVar
    - [x] myVar2
    - [ ] my-var
    - [ ] my var

3. 在 Python 中，变量名区分大小写。
    - [x] 对
    - [ ] 错

4. 在 Python 中，`my_var` 和 `myVar` 是同一个变量。
    - [ ] 对
    - [x] 错

5. 变量名可以是 Python 中的关键字。
    - [ ] 对
    - [x] 错

6. `None` 是 Python 中的特殊类型，表示没有值或空值。
    - [x] 对
    - [ ] 错

7. 在 Python 中，以下哪个是有效的变量赋值？
    - [ ] 123abc = "hello"
    - [ ] for = "world"
    - [x] _hidden = "secret"
    - [ ] import = 123

8. 在 Python 中，一个变量可以同时被赋予多个值。
    - [ ] 对
    - [x] 错

9. 在 Python 中，以下哪个是多变量赋值？
    - [x] a, b, c = 1, 2, 3
    - [ ] a = 1, b = 2, c = 3
    - [ ] a; b; c = 1; 2; 3
    - [ ] a = 1; b = 2; c = 3;

10. 变量在使用之前必须被赋值。
    - [x] 对
    - [ ] 错

11. Python 中变量的类型是静态的，一旦赋值就不能改变。
    - [ ] 对
    - [x] 错

12. 在 Python 中，以下哪个表示全局变量？
    - [ ] var = "hello"
    - [x] global var
    - [ ] var(global)
    - [ ] def var():

13. 以下哪个表示删除变量？
    - [ ] delete x
    - [x] del x
    - [ ] remove x
    - [ ] destroy x

14. `x = 5` 之后 `y = x`，现在改变 `y` 的值，`x` 的值也会改变。
    - [ ] 对
    - [x] 错

15. `x = [1, 2, 3]` 之后 `y = x`，现在改变 `y` 的列表内容，`x` 的内容也会改变。
    - [x] 对
    - [ ] 错

16. 在 Python 中，变量只能存储基本数据类型的值，如整数或字符串。
    - [ ] 对
    - [x] 错
