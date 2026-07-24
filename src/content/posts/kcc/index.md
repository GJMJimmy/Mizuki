---
title: Kindle Comic Creator使用教程
published: 2026-07-10
pinned: false
description: 使用Kindle Comic Creator制作mobi格式的漫画
tags:
  - 教程
category: 教程
draft: false
image: ./cover.png
---
- [一、下载&安装](#一下载安装)
- [二、创建漫画](#二创建漫画)
- [三、添加图像](#三添加图像)
- [四、构建漫画](#四构建漫画)
- [五、创建目录](#五创建目录)
- [六、精简压缩](#六精简压缩)
Kindle Comic Creator 是亚马逊推出的一款将漫画转换为电子书的工具。它的使用简单方便，可以设置翻页方向（从左到右或从右到左）、页面形式（双跨页或面对页）等，且所有操作都可以在设计视图中即时预览。它支持导入PDF和多种图片格式（JPG、TIFF、PNG 、PPM等）。

# 一、下载&安装

可以[点击此处](http://kc2.s3.amazonaws.com/KPR/KindleComicCreatorInstall.exe "http://kc2.s3.amazonaws.com/KPR/KindleComicCreatorInstall.exe")直接下载，也可以自行访问[官网](https://kdp.amazon.com/en_US/how-to-publish-comics-graphic-novels "https://kdp.amazon.com/en_US/how-to-publish-comics-graphic-novels")下载

![](image/1.jpg)

如果之前已安装过Kindle Previewer可以取消勾选此项

![](image/3.jpg)

# 二、创建漫画

点击创建新图书

![](image/4.jpg)

先选择漫画样式

注：正常漫画基本都不需要创建Kindle面板视图

![](image/5.jpg)

输入漫画信息\
这里我以TYPE-MOON Ace杂志为例

![](image/6.png)

# 三、添加图像
选中所有需要添加的图像\
封面图不需要再次添加
![](image/7.png)
添加完成后可以预览效果
![](image/8.png)
如果需要再次添加图片，右键选中图片添加，新添加的图片会添加在选中的图片后面
![](image/9.png)
# 四、构建漫画
如果需要重新修改漫画信息，点击`图书设置`->`MetaData`，或者`Ctrl+T`
![](image/10.png)
确认无误后，点击`构建`->`构建并预览`，或`F5`即可
![](image/11.png)
如果选择创建Kindle平板视图，此处会加载比较久
![](image/12.png)
构建完成后，会自动打开Kindle Previewer
![](image/13.png)
打开创建图书时选择的目录，mobi文件保存在此处
![](image/14.png)
# 五、创建目录
打开创建图书时选择的目录，找到目录文件，打开进行编辑
![](image/15.png)
找到`<navMap>`标签
![](image/16.png)
把`<navMap>`标签内的内容全删掉
![](image/17.png)
然后在`<navMap>`标签内按照以下格式添加目录
```
<navPoint playOrder="x" id="toc-x">
	<navLabel>
		<text>目录名</text>
	</navLabel>
	<content src="html/Page-x.html"/>
</navPoint>
```
`playOrder="x"`		用于定义目录顺序，必须从1开始连续递增，不能重复、跳号或乱序。\
`id="toc-x"`			每个目录的id，不可重复，可随意命名，但只能包含字母、数字、下划线、连字符（不能以数字开头）\
`<text>目录名</text>`	在Kindle中显示的目录名\
`html/Page-x.html`	该目录对应书中的页数\
通过嵌套`<navPoint>`标签可以实现n级目录

点击`NCX查看`或`Ctrl+N`即可查看Page-x，**Page-0对应添加图片的第一页而非封面**
![](image/18.png)
双击Page-x可跳转到对应图片，确认Page-x是否正确
![](image/19.png)
完成后，将`content.opf`拖入Kindle Previewer中
![](image/20.png)
Kindle Previewer会自动开始编译目录，等待完成即可
![](image/21.png)
编译好的mobi文件会保存在该文件夹中
![](image/22.png)
# 六、精简压缩
编译出来的mobi文件内含源文件存档，如果是个人使用，而不是上传发布到 KDP（Kindle出版服务）包含一份源文件是没有必要的，属于冗余文件。\
我们可以使用python脚本精简压缩mobi文件的体积：<a href="/files/kindlestrip_v136.py" download="kindlestrip_v136.py">点击下载</a>\
**此脚本只能用python2执行，python3会报错**
```
py -2 kindlestrip_v136.py <待转换的输入文件路径> <输出文件路径>
```
可以看到，文件大小减少了一半左右
![](image/23.png)