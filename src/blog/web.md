---
title: 为什么前期做静态
icon: web
date: 2024-03-30 21:59:50
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

## 1.网站的维护性

动态网站：需要长期维护，出现图片问题，某些代码问题等，需要自己会独立网站代码[当然可以自己写代码，问题：我们用的是现成的，不是自己写的怎么会改呢？]

1.跟容易被DDOS，要花时间维护

2.后期可以再改动态

3.发文章：马上发，马上有

4.用户管理

5.服务器：1.核心，8Gb(wordpress:2)

6.费用高：1k+/年，CDN

一.静态的好处

1.好维护

2.稳定

3.费用低

### 1.1. 静态网站

- 域名：35元
- 直接托管 GitHub，如果后期文章多的话，你可以考虑租便宜的服务器。
- Question: 网站速度，对对对，你说的对。

- 前期文章少，访问人少：速度慢不慢无所谓。
- 前期中心在于：写文章积累；
- GitHub：

- 服务器：网站数据存放到服务器，然后使用域名解析服务器「网站部署服务器」
- CDN：还是部署在 GitHub，但是我们使用 CDN 缓存加速；「缺点：1. 钱，2. 缓存更新需要时间（能接受）」
- 服务器+CDN：网站部署在服务器并且使用 CDN 加速；「最优策略」「CDN + 流量」800元」「还不包含：服务器的钱」

## 2.自建服务器

1. 公网 IP：2k～3k
2. 公安备案
3. 自建的服务器还是需要维护；
4. 个人不好购买公网 IP，公司申请；