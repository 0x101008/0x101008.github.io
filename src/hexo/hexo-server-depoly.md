---
title: Hexo 实现服务器部署
icon: blog
date: 2024-08-11 09:54:55
author: sht
isOriginal: true
category: 
    - hexo
tag:
   - hexo
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

## 1. 准备

在准备部署到服务器时，需要提前准备好：

1. 服务器；
    1. 备案好的服务器；
    2. 安装好 git；
2. 本地电脑：
    1. 安装 git；
    2. 生成好 SSH，可以参考：[[Git 配置 SSH-Key (yuque.com)](https://www.yuque.com/aiyuechuang/bfitms/gg9442?singleDoc#)]

## 2. 配置本地与服务器的 SSH 通信

1. 正常情况下我们登录服务器需要如下命令：

```bash
ssh root@47.92.238.44
```

不仅仅需要输入命令，紧接的还需要输入密码，可是我们经常部署总不能老是输入密码。

2. 读取本地的 SSH 公钥：`cat ~/.ssh/id_rsa.pub`

3. 配置到服务器的 SSH：

    ```bash
    # 进入用户主目录
    cd ~
    
    # 创建 .ssh 目录
    mkdir .ssh && cd .ssh
    
    # 创建 authorized_keys 文件
    touch authorized_keys
    
    # 在本地起一个终端，获取本地公钥
    cat ~/.ssh/id_rsa.pub
    
    # 登陆服务器，将获取的公钥写入服务器的 authorized_keys
    echo "这里修改为你的公钥内容" >> ~/.ssh/authorized_keys
    
    # 给相关文件添加执行权限
    chmod 600 ~/.ssh/authorized_keys
    chmod 700 ~/.ssh
    ```

4. 这样就可以不需要密码直接登录了；

## 3. 在服务器上设置 Git 仓库

1. **创建一个裸仓库**：

    在服务器上创建一个裸仓库（bare repository），这个仓库将用于接收你的推送。

    ```bash
    mkdir -p ~/hexo-deploy.git
    cd ~/hexo-deploy.git
    git init --bare
    ```

2. 这里我们使用 `git init --bare` 初始化仓库，它与我们常使用的 `git init` 初始化的仓库不一样，你可以理解为它专门用来创建远程仓库，这种仓库只包括 git 版本控制相关的文件，不含项目源文件，所以我们需要借助一个 hooks，在有代码提交到该仓库的时候，将提交的代码迁移到其他目录，这里我们在 `hexo-deploy.git` 同级目录下创建了一个 `blog.bornforthis.cn` 文件夹，用于存放提交的源代码文件：

    ::: tabs

    @tab Code1

    ```bash
    # 进入 hooks 目录
    cd hooks
    
    # 创建并编辑 post-receive 文件
    vim post-receive
    
    # 这里是 post-receive 写入的内容
    
    #!/bin/bash
    git --work-tree=~/blog.bornforthis.cn checkout -f
    
    # 赋予执行权限
    chmod +x post-receive
    
    # 退出目录到 hexo-deploy.git 同级目录并创建文件
    # 在哪里新建文件夹都可以，自己要把上面👆第10行的代码中路径改成你自己新建文件夹的路径
    cd ../../ && mkdir blog.bornforthis.cn
    ```

    @tab Code2

    ```bash
    # 进入 hooks 目录
    cd hooks
    
    # 创建并编辑 post-receive 文件
    vim post-receive
    
    # 这里是 post-receive 写入的内容
    
    #!/bin/bash
    GIT_WORK_TREE=/var/www/hexo git checkout -f
    cd /var/www/hexo
    npm install
    hexo generate
    ```

    - `GIT_WORK_TREE=/var/www/hexo`：指定工作目录。
    - `git checkout -f`：强制检出推送的内容。
    - `npm install` 和 `hexo generate`：在推送完成后，安装依赖并生成静态文件。

    保存并关闭文件后，赋予该文件执行权限：

    ```bash
    chmod +x post-receive
    ```

    :::

## 4. 本地设置远程仓库

### 4.1 常规部署

1. **添加远程仓库**： 在本地 Hexo 项目中，添加服务器上的 Git 仓库作为远程仓库：

    ```bash
    git remote add deploy user@your-server-ip:~/hexo-deploy.git
    ```

    请将 `user` 替换为你的服务器用户名，`your-server-ip` 替换为你的服务器 IP 地址。

2. **推送代码**： 当你准备好部署时，可以推送代码到服务器：

    ```bash
    git add .
    git commit -m "Deploy to server"
    git push deploy master
    ```

### 4.2 使用 hexo d 部署

只需要在配置文件中如下编写即可：

```bash
deploy:
  type: git
  repo: ssh://user@your-server-ip:/path/to/repository.git
  branch: master
```
