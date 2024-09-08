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

### 小试牛刀：提取`6543`

```python
string='01234567891'
select=string[-5:-9:-1]
print(select)
```

---

### 4.字符串内置方法

#### 4.1 upper()

大写字符串

```python
string='shtnb'
up_string=string.upper()
print(up_string)
print(string)
#output
SHTNB
shtnb
```

#### 4.2 lower()

小写字符串

```python
string='SHTNB'
lower_string=string.lower()
print(lower_string)
print(string)

#output
shtnb
SHTNB
```

#### 4.3 capitalize()

首字母大写

```python
string='shtnb To Hp'
capitalize_string=string.capitalize()
print(capitalize_string)
print(string)

#output
Shtnb to hp
shtnb to hp
```

#### 4.4 title()

将每个词首字母大写

`不论什么间隔，都会转为首字母大写。其余字符都转为小写。`

```python
string='shtnb to hp'
title_string=string.title()
print(title_string）

string='shtnb-to-hp'
title_string=string.title()
print(title_string)

#output
Shtnb To Hp
Shtnb-To-Hp
```

#### 4.5 startswith()

检测字符串开头是否为特定字符开头，返回布尔值。

```python
string='shtnb'
startswith_string=string.startswith('s')
print(startswith_string)

string='shtnb'
startswith_string=string.startswith('h')
print(startswith_string)

#output
True
False
```

#### 4.6 endswith()

检测字符串开头是否为特定字符开头，返回布尔值。

```python
string='shtnb'
endswith_string=string.endswith('b')
print(endswith_string)

string='shtnb'
endswith_string=string.endswith('h')
print(endswith_string)

#output
True
False
```

#### 4.7 count()

计算特定字符或单词在目标字符串中存在的次数。

```python
string='luoyebusui'
count=string.count('u')
print(count)

#output
3
```

#### 4.8 find()

寻找目标字符或单词在特定字符串中第一次出现的下标。「及时重复出现也只返回第一次的」如果是查找单词，则它会返回目标单词的第一个字符的下标。

如果查询的字符不存在则返回`-1`。

```python
string='luoyebusui'
print(string.find('u'))

string='luoyebusui'
print(string.find('ye'))

string='luoyebusui'
print(string.find('z'))

#output
1
3
-1
```

#### 4.9 index()

寻找目标字符或单词在特定字符串中第一次出现的下标。如果是查找单词，那么就返回目标的第一个字符的下标。

如果不存在，则报错。

```python
string='luoyebusui'
print(string.index('u'))

string='luoyebusui'
print(string.index('ye'))

string='luoyebusui'
print(string.index('z'))

#output
1
3
Traceback (most recent call last):
  File "C:\Users\s\Desktop\编程\代码\python\str.py", line 8, in <module>
    print(string.index('z'))
ValueError: substring not found
```

#### 4.10 isalpha()

判断字符串是不是纯字母字符串，字符串中但凡有一个字符是非字母，则返回false

```python
string = 'luoyebusui'
isalpha = string.isalpha()
print(isalpha)

string = 'luoye busui'
isalpha = string.isalpha()
print(isalpha)

#output
True
False
```

#### 4.11 isdigit()

判断字符串是不是纯数字字符串，字符串中但凡有一个字符是非数字，则返回false

```python
string = '12345678'
isdigit = string.isdigit()
print(isdigit)

string = '1234 5678'
isdigit = string.isdigit()
print(isdigit)

#output
True
False
```

#### 4.12 isalnum()

判断字符串是不是纯数字、纯字母或纯数字字母字符串，字符串中但凡有一个字符是非数字、字母元素，则返回false

```python
string = 'luoyebusui'
isalnum= string.isalnum()
print(isalnum)

string = '888'
isalnum= string.isalnum()
print(isalnum)

string = 'luoyebusui888'
isalnum= string.isalnum()
print(isalnum)

string = 'luoyebusui 888'
isalnum= string.isalnum()
print(isalnum)
#output
True
True
True
False
```

#### 4.13 isupper()

判断字符串中的字母是否全是大写，全大写返回true，负责返回false

```python
string = "LUOYEBUSUI"
isupper = string.isupper()
print(isupper)

string = 'LUOYEBUSUI111-'
isupper = string.isupper()
print(isupper)

string = "LUOYEbusui"
isupper = string.isupper()
print(isupper)

string = "luoyebusui"
isupper = string.isupper()
print(isupper)
# output
True
True
False
False
```

#### 4.14 islower()

判断字符串中的字母是否全是小写，全小写返回true，负责返回false

```python
string='luoyebusui'
islower=string.islower()
print(islower)

string='luoyebusui111-'
islower=string.islower()
print(islower)

string='luoyebusuiA111-'
islower=string.islower()
print(islower)
# output
True
True
False
```

#### 4.15 isspace()

判断字符串是不是纯空格，多少个空格都可以。纯空格返回True,负责返回False

```python
string = '     '
isspace = string.isspace()
print(isspace)

string = ''
isspace = string.isspace()
print(isspace)

string = 'aaa'
isspace = string.isspace()
print(isspace)
#output
True
False
False
```

#### 4.16 strip()

默认去掉目标字符串的前后空白字符，如果指定参数，则去掉指定字符。

```python
string ='   luoyebusui   '
strip = string.strip()
print(string)
print(strip)

string ='---luoyebusui---'
strip = string.strip('-')
print(string)
print(strip)

string ='-- ---luoyebusui--- ---'
strip = string.strip('-')
print(string)
print(strip)

string ='-- ---luoyebusui--- ---'
strip = string.strip('- ')
print(string)
print(strip)

string ='-- ---luoyebusui--- ---'
strip = string.strip(' -')
print(string)
print(strip)

#output
   luoyebusui   
luoyebusui
---luoyebusui---
luoyebusui
-- ---luoyebusui--- ---
 ---luoyebusui--- 
-- ---luoyebusui--- ---
luoyebusui
-- ---luoyebusui--- ---
luoyebusui
```

#### 4.18 rstrip()

默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。

```python
string ='   luoyebusui   '
rstrip = string.rstrip()
print(string)
print(rstrip)

string ='---luoyebusui---'
rstrip = string.rstrip('-')
print(string)
print(rstrip)

string ='-- ---luoyebusui--- ---'
rstrip = string.rstrip('-')
print(string)
print(rstrip)

string ='-- ---luoyebusui--- ---'
rstrip = string.rstrip('- ')
print(string)
print(rstrip)

string ='-- ---luoyebusui--- ---'
rstrip = string.rstrip(' -')
print(string)
print(rstrip)

#output
   luoyebusui   
   luoyebusui
---luoyebusui---
---luoyebusui
-- ---luoyebusui--- ---
-- ---luoyebusui--- 
-- ---luoyebusui--- ---
-- ---luoyebusui
-- ---luoyebusui--- ---
-- ---luoyebusui
```

#### 4.19 replace()

`.replace(old,new,count)`第一个位置传入待替换的旧「old」字符，将第二个位置传入要替换的新字符「new」，默认替换全部，count控制次数。

```python
string ='   luoyebusui   '
replace_string=string.replace(' ','*')
print(string)
print(replace_string)

#output
   luoyebusui   
***luoyebusui***


string ='ai-luoyebusui-ai'
replaced_string = string.replace('ai', 'love')
print(string)
print(replaced_string)

#output
ai-luoyebusui-ai
love-luoyebusui-love


string ='ai-luoyebusui-ai'
replaced_string = string.replace('ai', 'love',1)
print(string)
print(replaced_string)

#output
ai-luoyebusui-ai
love-luoyebusui-ai
```

#### 4.20 split()

`.split(sep,maxsplit)`以特定字符进行分割，默认空格分割。如果传入参数「sep」，则以参数进行分割。返回分割后的列表。maxsplit用于控制分割几次。

```python
string ='ai luoyebusui ai'
split_string = string.split()
print(string)
print(split_string)

#output
ai luoyebusui ai
['ai', 'luoyebusui','ai']


string ='ai-luoyebusuiai-ai'
split_string = string.split('-')
print(string)
print(split_string)

#output
ai-luoyebusuiai-ai
['ai', 'luoyebusuiai', 'ai']


string ='ai-luoyebusuiai-love'
split_string = string.split('-',1)
print(string)
print(split_string)

#output
ai-luoyebusuiai-love
['ai', 'luoyebusuiai-love']
```

::: warning 

注意⚠️：使用split分割时，不管每个字符之间有几个空格都会正常分割出来。

```python
string ='ai         luoyebusuiai         love'
split_string = string.split()
print(split_string)

#output
['ai', 'luoyebusuiai', 'love']
```

当我们指定split的间隔时，split会严格按照我们指定的分割符号来分割。

```python
string ='ai         luoyebusuiai         love'
split_string = string.split(' ')
print(split_string)

#output
['ai', '', '', '', '', '', '', '', '', 'luoyebusuiai', '', '', '', '', '', '', '', '', 'love']
```

上面多输出的结果空字符串，就是证明。

其实，在学习过程中，还是需要经常举一反三的。如果是其他的连续字符串会不会有这种情况？——答案是肯定的，也会有这样的情况。

:::

#### 5.21 rsplit()

`.rsplit(sep,maxsplit)`从字符串右边进行分割，也可以传入参数「sep」，进行指定分割。返回分割后的列表。maxsplit指定分割次数。

```python
string ='ai-luoyebusuiai-love'
split_string = string.split('-')
print(string)
print(split_string)

#output
ai-luoyebusuiai-love
['ai', 'luoyebusuiai', 'love']


string ='ai-luoyebusuiai-love'
split_string = string.split('-',1)
print(string)
print(split_string)

#output
ai-luoyebusuiai-love
['ai', 'luoyebusuiai-love']
```
