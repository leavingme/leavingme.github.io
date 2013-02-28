
如果你成功申请了 Google App Engine 的服务，并创建了自己的应用(Application)，你会自动获得一个形如 your-application-id.appspot.com 的 URL 地址，用于你的应用程序的发布。
如果你不喜欢这样的地址，完全可以把 Google App Engine 的服务绑定到自己的域名上。
途径有两条(殊途同归)：
一、从 Google App Engine 的管理中心出发
1. 登录 Google App Engine 的管理中心(Administration Console)。在 Versions 下面找到 Add Domain 的按钮。

2. 填写你的域名。此域名需要先申请 Google Apps 服务。.cn 域名很难(或说不能)“直接”申请 Google Apps 服务，你可以先通过诸如 .com/.org/.net 等域名申请到 Google Apps，然后再通过他们把 .cn 域名绑进去。

3. 阅读并接受 Google App Engine 的条款。填写你要使用的 URL 地址。(期间会提示你登录 Google Apps 帐号)

……
二、从 Google Apps 的控制面板出发
1. 登录 Google Apps。在控制面板找到 Add more services。

2. 在 Google App Engine 那里填写你的 Application ID。

3. 跟方法一的一样。
最后就是要在域名注册商那里新建 CNAME 或 A 记录，指向 Google 的服务器了。
使用 CNAME 的方法：
如果你要用地址 app.your-domain.com 来访问你的应用，你就新建一个 app 的 CNAME 记录，内容填写 ghs.google.com。(但野鸭不推荐此方法，因为某防火墙封了 ghs.google.com 的部分 IP，国内用户不一定能访问到)
使用 A 记录的方法：(参考来源)
针对你要用地址(如 app.your-domain.com)，建一个 A 记录，ip 填写下面四个中的任意一个：

216.239.32.21 
216.239.34.21 
216.239.36.21 
216.239.38.21

根据野鸭目前所了解到的情况，这四个 ip 都能在国内访问到。
另外，发现在 Google Apps 里面，可以为自己的那个 Application 添加多个地址。添加之后，发现原来的 app-id.appspot.com 仍然可以使用，而不是像 Blogger 绑定域名那样，会自动重定向至你绑定的那个地址。
相关文章：
Google App Engine 申请注册指南
在 Google App Engine 设置 Application Identifier 的规则
Google App Engine 添加 Favicon 和 robots.txt 的方法
Google App Engine 的配额限制
]]