---
layout: post
title: Microsoft Visual Studio .NET 2003 安装问题 - 安装程序检测到另一个程序要求计算机重新启动
---
Microsoft Visual Studio .NET 2003,安装程序检测到另一个程序要求计算机重新启动...

首先要安装第1步Visual Studio.net系统必备,其它点不了.可点第1步安装就弹出"安装程序检测到另一个程序要求计算机重新启动.必须重新启动计算机后才能安装visual studio.net系统必备.系统重新启动后,你需要重新启动安装程序.单击"确定"重新启动,单击"取消"退出安装程序,以后再安装."对话框.重启n次都弹出此对话框,无法安装.

解决办法：

在注册表删除HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\pendingfilerenameoperations 

******************************************************************

前天没装上SQLServer，就装.net，没想到也出现了没法装的问题，第二天上网搜了一下，和SQLServer一样的解决办法，也是把PendingFileRenameOperations删除，就可以了。这个错误在微软的知识库中也查得到。

查到的知识库中的地址：[http://support.microsoft.com/kb/830608/zh-cn](http://support.microsoft.com/kb/830608/zh-cn)

  ![](http://www.cnblogs.com/leavingme/aggbug/547632.html)

<div align="right">[陈源](http://leavingme.cnblogs.com/) 2006-11-02 11:11 [发表评论](http://www.cnblogs.com/leavingme/archive/2006/11/02/547632.html#Feedback)</div>