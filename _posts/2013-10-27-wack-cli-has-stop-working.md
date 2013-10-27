---
layout: post
title: Windows 应用认证工具包 “Command Line Interface 已经停止工作”
date: 2013-10-27 19:38:00
---
Visual Studio Ultimate 2012 Update 3 的 Windows 应用认证工具包(ACK) 2.2 无法正常工作。导致在提交应用时不能及时的发现问题。

问题的描述可以看这里：
http://social.msdn.microsoft.com/Forums/windowsapps/en-US/83ba195e-86f1-4dc3-a07a-697536b3ae05/windows-app-certification-kit-command-line-interface-has-stopped-working

没有找到解决的办法，但是可以通过升级到 Windows 应用认证工具包 3.1 绕过这一问题。

适用于 Windows 8.1 的 Windows 软件开发工具包 (SDK)
http://msdn.microsoft.com/zh-cn/library/windows/desktop/bg162891.aspx

可以只安装其中的 Windows ACK 即可。

安装完毕后，Visual Studio 创建应用程序包时就可以使用最新版本的 Windows ACK 了。
