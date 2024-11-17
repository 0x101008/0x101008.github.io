---
title: 通过VNC搭建Ubuntu 18.04和20.04图形界面
icon: #
date: 2024-11-17 13:54:15
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

## 通过VNC搭建Ubuntu 18.04和20.04图形界面

轻量应用服务器提供的Linux系统均为命令行界面。如果您希望通过图形界面管理操作系统，可以使用VNC（Virtual Network Console）实现。本文介绍如何在Ubuntu系统中搭建图形界面。

#### 前提条件

- 已创建Ubuntu 18.04和Ubuntu 20.04系统的轻量应用服务器。
- 已在Ubuntu服务器的防火墙中放行了VNC服务所需的5900和5901端口。

#### 背景信息

本文将以Ubuntu 18.04和Ubuntu 20.04操作系统为例，通过VNC搭建图形界面，并在本地的Windows系统中，使用VNC Viewer工具测试访问。如果您想通过VNC搭建Ubuntu 16.04图形界面。

### 步骤一：搭建图形界面

1. 使用`root`用户远程连接Ubuntu服务器。

2. 安装软件包。

   a. 运行以下命令，更新软件源。

   ```shell
   apt-get update
   ```

   b. 运行以下命令，安装桌面环境所需的软件包。软件包包括系统面板、窗口管理器、文件浏览器、终端等桌面应用程序。

   ```shell
   apt install -y gnome-panel gnome-settings-daemon metacity nautilus gnome-terminal ubuntu-desktop
   ```

3. 配置VNC。
    a.执行以下命令，安装VNC

  ```shell
  apt-get install tightvncserver
  ```

  安装过程中出现以下提示，输入Y，并按Enter

  ![1258](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7729225361/p343193.png)

​	b. 运行以下命令，启动VNC。

	vncserver

​	第一次启动需要设置VNC的登录密码，输入VNC登录密码和确认密码，并在以下提示中输入n，并按Enter。

![2558](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7729225361/p343311.png)

:::warning

如果您自定义的密码位数大于8位，系统默认只截取前8位作为您的VNC登录密码。

:::

命令行回显如下图所示的信息时，表示VNC启动成功。

![启动VNC](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1805159161/p268814.png)

izbp166dsac66tx****:1表示在服务器上启动的VNC的端口号，其中izbp166dsac66tx****为主机名。

4. 重新启动VNC。

   运行以下命令，关闭已启动的VNC。

```shell
vncserver -kill :1
```

运行以下命令，启动一个新的VNC。VNC的端口号仍为1。

```shell
vncserver -geometry 1920x1080 :1
```

## 步骤二：使用VNC Viewer工具测试访问

1. 在本地的Windows系统中，下载并安装VNC Viewer。

   您可以访问[VNC Viewer官网](https://www.realvnc.com/en/connect/download/viewer/)获取下载链接以及安装方式。

2. 打开VNC Viewer，在顶部菜单栏，选择***\*File\** > \**New connection...\****。

   ![VNC Viewer](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3180070261/p268884.png)

3. 在**Properties**对话框，配置Ubuntu桌面的登录信息，然后单击**OK**。

   必须的配置项说明：

   - **VNC Server**：输入<Ubuntu服务器公网IP>:<VNC的端口号>，例如：`114.55.XX.XX:5901`。
   - **Name**：输入自定义的Ubuntu桌面的名称。例如：`test001`。

4. 双击Ubuntu桌面的卡片。

   本示例中，双击Ubuntu桌面名称为`test001`的卡片。

5. 在**Authentication**对话框的**Password**文本框中，输入VNC登录密码，然后单击**OK**。

   ![password](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8836159161/p268947.png)

   如下图所示，成功登录后，您可以查看Ubuntu的图形界面。如果您需要在Ubuntu的图形界面打开终端，可在Ubuntu的图形界面右键单击**Open Terminal**即可。![2588](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8729225361/p343199.png)

   如果出现无法通过VNC Viewer工具进行远程登录，请参考以下方法排查：![dasad](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5542496361/p351346.png)

   - 排查Ubuntu服务器的防火墙中放行了VNC服务所需的5900和5901端口。排查本地电脑是否设置了防火墙。
   - 排查本地电脑是否能ping通Ubuntu服务器的公网IP。

# 参考

1. 通过VNC搭建Ubuntu 18.04和20.04图形界面, https://help.aliyun.com/document_detail/59330.html
