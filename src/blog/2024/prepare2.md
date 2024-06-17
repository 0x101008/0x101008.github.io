---
title: 网站搭建
icon: web
date: 2024-03-30 22:04:24
author: sht
isOriginal: true
category: 
    - Web
tag:
    - Web
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

## 1. 个人网站搭建

### 1.1. 升级网站

#### 1.1.1. 怎么看网站有没有发布更新

1. 方法一：访问主题官方文档 https://theme-hope.vuejs.press/changelog.html
2. 怎么看自己网站当前版本？package.json

![img](./prepare2.assets/1711108118071-3febb75e-4bb8-4ee3-93e4-3fe98a9ed2c4.png)

1. 升级命令：`pnpm dlx vp-update`
2. 方法二：鼠标直接放在上面：

![img](./prepare2.assets/1711108239348-624ca6b1-f471-45f4-9511-c4d06945f159.png)

#### 1.1.2. 添加图标

![img](./prepare2.assets/1711111410284-7948cc43-67e4-4821-982d-5a8502632368.png)

![img](./prepare2.assets/1711111461735-3b8420dd-41ef-4add-8657-fb41b1b1a425.png)

![img](./prepare2.assets/1711111495832-490107bf-48b2-4614-860f-77697edfba54.png)

![img](./prepare2.assets/1711111521400-4d835cfa-0bd4-47bd-917d-b1506411d039.png)

## 2. 文章创建步骤

### 2.1. 创建文件夹

使用文件夹对文章进行分类，文件里面还可以有文件夹，不限层级。`.md`文件

**文件命名规则:**不管是文件夹或者文章文件，文件名称都不能有空格、中文。只能使用英文，如果想要空格就使用减号代替。

**文章文件头部:**文章前面输入三个减号，回车 Enter 就可以出现如下：

![img](./prepare2.assets/1711112097849-a9d8d311-3bbb-4990-b864-23305c767114.png)

**头部内容：**

```plain
title: Markdown
icon: web
date: 2024-03-30 20:50:34
author: sht
isOriginal: true
category: 
    - Web
tag:
    - Web
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
```

时间生成链接：https://bornforthis.cn/python/#/