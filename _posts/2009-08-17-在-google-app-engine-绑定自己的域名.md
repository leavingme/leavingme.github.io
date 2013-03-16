---
layout: post
title: 在 Google App Engine 绑定自己的域名
date: 2009-08-17 20:04:00
---
<span style="font-family: Verdana, Simsun; font-size: 13px; line-height: 22px; color: #333333;">

如果你成功[申请了 Google App Engine 的服务](http://donauya.spaces.live.com/blog/cns!F53B4DB2F7D1A8A1!124.entry "Google App Engine 申请注册指南")，并创建了自己的应用(Application)，你会自动获得一个形如 your-application-id.appspot.com 的 URL 地址，用于你的应用程序的发布。

如果你不喜欢这样的地址，完全可以把&nbsp;[Google App Engine](http://code.google.com/appengine/ "Google App Engine")&nbsp;的服务绑定到自己的域名上。

途径有两条(殊途同归)：

**一、从 Google App Engine 的管理中心出发**

1. 登录 Google App Engine 的管理中心(Administration Console)。在 Versions 下面找到 Add Domain 的按钮。

![Google App Engine Admin Console: Add Domain](http://farm4.static.flickr.com/3144/2592260158_cabcff6627_o.png "在 Google App Engine 的管理中心里找到 Add Domain 选项")

2. 填写你的域名。此域名需要先申请 Google Apps 服务。.cn 域名很难(或说不能)“直接”申请 Google Apps 服务，你可以先通过诸如 .com/.org/.net 等域名申请到 Google Apps，然后再通过他们把 .cn 域名绑进去。

![Google App Engine Add Domain](http://farm4.static.flickr.com/3212/2592260198_f3cf5f60ff_o.png "添加自己的 Google Apps 域名")

3. 阅读并接受 Google App Engine 的条款。填写你要使用的 URL 地址。(期间会提示你登录 Google Apps 帐号)

![Google App Engine Terms and Conditions](http://farm4.static.flickr.com/3063/2591421677_e740e001b7_o.png "阅读 Google App Engine 条款，填写你要使用的 URL 地址")

……

**二、从 Google Apps 的控制面板出发**

1. 登录 Google Apps。在控制面板找到 Add more services。

![Google Apps Dashboard, Add more services](http://farm4.static.flickr.com/3219/2591421771_bc0703b938_o.png "在 Google Apps 控制面板找到 Add more services")

2. 在 Google App Engine 那里填写你的 Application ID。

![Google Apps. Google App Engine. Application ID](http://farm4.static.flickr.com/3028/2592260380_7ef2bf7ac0_o.png "填写 Application ID")

3. 跟方法一的一样。

最后就是要在域名注册商那里新建 CNAME 或 A 记录，指向 Google 的服务器了。

**使用 CNAME 的方法：**

如果你要用地址 app.your-domain.com 来访问你的应用，你就新建一个 app 的 CNAME 记录，内容填写 ghs.google.com。(但[野鸭](http://donau.spaces.live.com/ "多瑙河之野鸭")不推荐此方法，因为某防火墙封了 ghs.google.com 的部分 IP，国内用户不一定能访问到)

**使用 A 记录的方法：**([参考来源](http://www.google.com/support/a/bin/answer.py?answer=91080))

针对你要用地址(如 app.your-domain.com)，建一个 A 记录，ip 填写下面四个中的任意一个：

> 216.239.32.21&nbsp;
> 
> 216.239.34.21&nbsp;
> 
> 216.239.36.21&nbsp;
> 
> 216.239.38.21

根据[野鸭](http://donauya.spaces.live.com/ "多瑙河之野鸭")目前所了解到的情况，这四个 ip 都能在国内访问到。

另外，发现在 Google Apps 里面，可以为自己的那个 Application 添加多个地址。添加之后，发现原来的 app-id.appspot.com 仍然可以使用，而不是像 Blogger 绑定域名那样，会自动重定向至你绑定的那个地址。

相关文章：

[Google App Engine 申请注册指南](http://donauya.spaces.live.com/blog/cns!F53B4DB2F7D1A8A1!124.entry "Google App Engine 申请注册指南")

[在 Google App Engine 设置 Application Identifier 的规则](http://donauya.spaces.live.com/blog/cns!F53B4DB2F7D1A8A1!120.entry "在 Google App Engine 设置 Application Identifier 的规则")

[Google App Engine 添加 Favicon 和 robots.txt 的方法](http://donauya.spaces.live.com/blog/cns!F53B4DB2F7D1A8A1!127.entry "Google App Engine 添加 Favicon 和 robots.txt 的方法")

[Google App Engine 的配额限制](http://donauya.spaces.live.com/blog/cns!F53B4DB2F7D1A8A1!128.entry "Google App Engine 的配额限制")

</span>