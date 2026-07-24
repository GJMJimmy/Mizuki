---
title: 超简单的FGO抓包教程(有无电脑都可)
published: 2026-04-26
pinned: false
description: 使用Reqable抓取FGO账号数据
tags:
  - 教程
  - 游戏
category: 教程
draft: false
image: ./cover.webp
---
- [简介](#简介)
- [一、原理介绍](#一原理介绍)
- [二、准备工作](#二准备工作)
- [三、安装证书](#三安装证书)
  - [1、Magisk模块法(最快)](#1magisk模块法最快)
  - [2、直接安装法(简单)](#2直接安装法简单)
- [四、抓包](#四抓包)
- [五、导入数据](#五导入数据)
- [总结](#总结)
# 简介
本教程使用的软件是[Reqable](https://reqable.com/)，不同于Chaldea推荐的mitmproxy和Charles，不需要同时使用手机和电脑或用电脑调试模拟器，只需要在安卓系统或模拟器内操作即可。
# 一、原理介绍
在安卓手机上可以使用Reqable直接抓包，但由于Android 7.0及以上版本默认**不信任用户证书**，仅信任**系统证书**，所以需要将Reqable的证书安装至**系统证书目录**。\
将证书安装至系统证书目录需要root权限，如果手机没有root权限，可以使用模拟器。

# 二、准备工作
安装好[Reqable](https://reqable.com/)和[FGO](https://game.bilibili.com/fgo/)，打开`Reqable`\
选择`独立模式`
![](image/1.webp)
打开`证书管理`->`安装根证书到本机`
![](image/2.webp)

![](image/3.webp)
可以看到有三种安装证书的方式，第二种`开发者`只能将证书安装至用户证书目录，所以不适用。只能使用另外两种方式。
![](image/4.webp)

# 三、安装证书
## 1、Magisk模块法(最快)
**注意：仅在安装了Magisk、狐狸面具、Alpha等面具或KernelSU的情况下可以使用该方法**\
点击超链接下载模块，文件会保存至`/storage/emulated/0/Download/Reqable`目录下
![](image/5.webp)
安装至Magisk后重启即可
![](image/7.webp)
如果安装成功Reqable会显示**证书已安装**
![](image/8.webp)
## 2、直接安装法(简单)
点击超链接下载证书文件，文件会保存至`/storage/emulated/0/Download/Reqable`目录下\
**注意：证书不能改名字和格式**
![](image/9.webp)
将证书文件`复制/移动`到`/system/etc/security/cacerts`文件夹内，推荐使用mt管理器\
**注意：该文件夹在系统根目录，而非平常使用的内部存储目录，读写系统根目录需要授予文件管理器root权限**
![](image/10.webp)
复制完成后，我们会发现该证书文件的**权限**与其他文件不同，应改至与其他证书文件相同
![](image/10.5.webp)
在属性中将**文件权限**修改为`644`
![](image/11.webp)
![](image/12.webp)
![](image/13.webp)
**注意：如果Android版本>=14，还需要额外复制到/apex/com.android.conscrypt/cacerts目录，文件权限同样修改为644**\
最后重启即可，如果安装成功Reqable会显示**证书已安装**
![](image/8.webp)

# 四、抓包
点击右下角按钮开始`调试`，然后打开FGO，进入`游戏主页面`(出现公告)即可退出游戏、暂停调试
![](image/14.webp)
点击`右上角三点`->`搜索`->在搜索栏输入`key=toplogin`->长按搜索结果
![](image/15.webp)
点击`保存`->`响应体`，即可将账号数据保存至`/storage/emulated/0/Download/Reqable`目录下
![](image/16.webp)
![](image/17.webp)
# 五、导入数据
打开Chaldea，点击`导入`->`Https抓包`
![](image/18.webp)
点击右上角按钮导入，选择`从文件`导入，选择刚刚导出的响应体即可
![](image/19.webp)

# 总结
本教程适用于全平台，在没有root权限的情况下，可以使用模拟器。比如安卓上的VMOS、光速虚拟机，Win可以使用MuMu、雷电等模拟器。\
如果是安卓14及以上，推荐使用Magisk模块安装。\
如果是模拟器，推荐直接将证书复制进系统证书目录。\
iOS上Reqable和Stream操作差不多，都不需要考虑系统证书的问题，直接抓包即可，比安卓更加简单。