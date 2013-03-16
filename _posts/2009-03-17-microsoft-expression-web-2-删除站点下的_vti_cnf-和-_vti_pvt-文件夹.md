---
layout: post
title: Microsoft Expression Web 2 删除站点下的_vti_cnf 和 _vti_pvt 文件夹
---
Adobe Dreamweaver CS3 最近老崩溃，换Microsoft Expression Web 2 试试，发现还真不错。最起码占用内存小，速度快。

Microsoft Expression Web 2 应该算是Frontpage的后续产品，有着和Frontpage一样让人不爽的地方。著名的_vti_cnf 和&nbsp;_vti_pvt 文件夹。

删除办法如下

菜单栏 - 网站 -&nbsp;网站设置 - 使用隐藏元数据文件管理网站（不勾选）

![](http://pic002.cnblogs.com/img/leavingme/200903/2009032217185144.png)

Microsoft Expression Web 使用元数据来管理跨网页的依赖项，某些 Expression Web 功能（如超链接管理功能、动态 Web 模板和某些网站报表）需要这些依赖项。如果您的网站没有元数据，“网站设置”和“属性”对话框中的某些选项也不可用。为了使用这些功能，需要将元数据添加到您的网站。

&nbsp;

![](http://pic002.cnblogs.com/img/leavingme/200903/2009031715105775.png)

&nbsp;