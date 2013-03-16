---
layout: post
title: 将 jQuery IntelliSense整合到Visual Studio
date: 2009-06-30 10:16:00
---
<p>上个月，我在博客里宣布了[微软将对jQuery提供支持](http://blog.joycode.com/scottgu/archive/2008/09/29/115287.aspx)。在过去的几个星期里，我们与jQuery开发团队合作，在Studio 2008 和 Visual Web Developer 2008 Express版本（免费的）中增加了很好的jQuery intellisense支持。现在这个支持可以下载使用了。

&nbsp;

### 在VS 2008中启用jQuery Intellisense的步骤

要在VS中启用jQuery的intellisense完成，你要遵循三个步骤：

<span style="text-decoration: underline;">**第一步： 安装VS 2008 SP1**</span>

VS 2008 SP1 在Visual Studio中加了更丰富的JavaScript intellisense支持，对很大部分的JavaScript库加了代码完成支持。

你可以在[这里](http://msdn.microsoft.com/en-us/vstudio/cc533448.aspx)下载VS 2008 SP1 和 Visual Web Developer 2008 Express SP1。

**<span style="text-decoration: underline;">第二步： 安装VS 2008 Patch KB958502以支持"-vsdoc.js"Intellisense文件</span>**

2 个星期前，我们发布了一个补丁，你可以将其运用到VS 2008 SP1 和 VWD 2008 Express SP1版本上，该补丁会导致Visual Studio在一个JavaScript库被引用时，查找是否存在一个可选的"-vsdoc.js"文件，如果存在的话，就用它来驱动 JavaScript intellisense引擎。

这些加了注释的"-vsdoc.js"文件可以包含对JavaScript方法提供了帮助文档的XML注释，以及对无法自动推断出的动态JavaScript签名的另外的代码intellisense提示。你可以在[这里](http://blogs.msdn.com/webdevtools/archive/2008/11/07/hotfix-to-enable-vsdoc-js-intellisense-doc-files-is-now-available.aspx)了解该补丁的详情。你可以在[这里](http://code.msdn.microsoft.com/KB958502/Release/ProjectReleases.aspx?ReleaseId=1736)免费下载该补丁。

**<span style="text-decoration: underline;">第三步： 下载jQuery-vsdoc.js文件</span>**

我们与jQuery开发团队合作编写了一个jQuery-vsdoc.js文件，该文件对串连的jQuery selector方法的JavaScript intellisense提供了帮助注释和支持。你可以在jQuery.com网站的[官方下载网页](http://docs.jquery.com/Downloading_jQuery#Download_jQuery)上下载jQuery和jQuery-vsdoc文件：

![](http://img.cnbeta.com/newsimg/081122/1936200461824615.png)

把jquery-vsdoc.js保存到你项目中jquery.js文件所在的同一个目录中（同时确认它的命名前缀与jquery文件名匹配）：

![](http://img.cnbeta.com/newsimg/081122/19362211885961045.png)

然后你可以象这样，通过一个html &lt;script/&gt;元素来引用标准的jquery文件：

![](http://img.cnbeta.com/newsimg/081122/19362321964932681.png)

或者也可以使用&lt;asp:scriptmanager/&gt; 控件来引用它，或者在一个单独的.js文件的顶部加 /// &lt;reference/&gt; 注释来引用它：

在完成之后，VS就会在你引用的脚本文件所在的同一个目录中寻找一个-vsdoc.js文件，如果找到的话，就会用它来做帮助和intellisense。

例如，我们可以使用jQuery来做一个基于JSON的get请求，得到该方法的intellisense（挂在$.之后）：

![](http://img.cnbeta.com/newsimg/081122/1936243307781580.png)

以及 $.getJSON()方法参数的帮助/intellisense：

![](http://img.cnbeta.com/newsimg/081122/19362542112046309.png)&nbsp;

如果你在方法调用中嵌套回调函数的话，intellisense依旧会工作。例如，我们也许想对从服务器返回的每个JSON对象进行迭代：

![](http://img.cnbeta.com/newsimg/081122/19362651075189461.png)

对每个项，我们可以执行另一个嵌套的回调函数：

![](http://img.cnbeta.com/newsimg/081122/19362761489733282.png)

我们可以使用each回调函数动态地往列表中附加一个新图片（图片的src属性将指向返回的JSON媒体图片的URL）：

![](http://img.cnbeta.com/newsimg/081122/1936287243086939.png)

然后在每个动态生成的图片上，我们可以连接一个点击事件处理函数，在点击时，会通过动画效果来消失：

![](http://img.cnbeta.com/newsimg/081122/19362981016181216.png)

注意jQuery intellisense在我们代码的每一个层次都很干净地做了提示。

### JavaScript Intellisense 技巧和诀窍

Web工具开发团队的Jeff King本星期早先时候[撰写了一个很棒的贴子](http://blogs.msdn.com/webdevtools/archive/2008/11/18/jscript-intellisense-faq.aspx)，对有关VS 2008中JavaScript intellisense工作原理的若干常见的问题做了回答，我高度推荐阅读该文。

他 谈到的一个诀窍（我要在这里做示范）是在你想要在用户控件/部分(.ascx文件)中使用JavaScript intellisense时可以使用的一个技术。经常地，你不想要在这些文件中包括对JavaScript库的&lt;script src=""/&gt; 引用，这些引用往往是存在于使用了用户控件的母版页或内容网页之上的。当然，问题是，你这么做的话，在默认情形下VS是无法知道用户控件中用到了这个脚 本，因此不会为你提供intellisense 。

启用intellisense的一个方法是，在你的用户控件中加&lt;script src=""/&gt;元素，但在其周围加一个服务器端的&lt;% if %&gt; 块，在运行时其值总是为false：

![](http://img.cnbeta.com/newsimg/081122/19363092015465121.png)

在运行时，ASP.NET不会显示这个脚本标识（因为是包含在一个总是为false的if块中的），但是，VS_却会_运算这个&lt;script/&gt;标识，在用户控件中为它提供intellisense。在象用户控件这样的场景下，这是个非常有用的技术。Jeff在他的[FAQ贴子](http://blogs.msdn.com/webdevtools/archive/2008/11/18/jscript-intellisense-faq.aspx)和[原先的jQuery intellisense贴子](http://blogs.msdn.com/webdevtools/archive/2008/10/28/rich-intellisense-for-jquery.aspx)里还有更多细节。Rick Strahl在[这里](http://www.west-wind.com/Weblog/posts/536756.aspx)也有一篇很好的贴子，是关于使用jQuery intellisense的。

### 更多信息

想进一步了解jQuery的话，我建议观看Stephen Walther在PDC大会上做的《[ASP.NET和jQuery](http://channel9.msdn.com/pdc2008/PC31/)》讲座。[点击这里](http://weblogs.asp.net/stephenwalther/archive/2008/10/29/jquery-and-asp-net-ajax-demo-code.aspx)下载他的代码例程和 powerpoint讲义。

Rick Strahl也有一篇非常棒的《[Introduction to jQuery](http://www.west-wind.com/presentations/jQuery/default.aspx)》文章，讨论如何在 ASP.NET使用jQuery。Karl Seguin 在[这里](http://dotnetslackers.com/articles/ajax/JQuery-Primer-Part-1.aspx)和[这里](http://dotnetslackers.com/articles/ajax/JQuery-Primer-Part-2.aspx)有2篇非常好的jQuery基础教程贴子，对如何使用jQuery的一些基本知识提供了比较简短的的概述。

我也高度推荐《&nbsp;[jQuery in Action](http://www.amazon.com/gp/product/1933988355/102-4745100-5076967?ie=UTF8&amp;tag=scoblo04-20&amp;linkCode=xm2&amp;camp=1789&amp;creativeASIN=1933988355)》一书。

希望本文对你有所帮助，

**Scott**

</p>