---
layout: post
title: 移动网页点击反馈时的Highlight区域问题
date: 2013-10-24 20:10:00
---
产品在体验产品时发现了这样一个问题：明明点击的是“洲际豪华大床房”（图中红色区域），但为什么感觉像是点击了整个房型列表（图中蓝色区域）呢？ 

这个问题不是第一次出现了，偷懒的解决方案就是使用这个样式：
* { -webkit-tap-highlight-color: rgba(0,0,0,0); } 
所有的点击区域的反馈都舍弃掉，但引入的问题就是用户无法感知到底点的是什么地方，这个按钮究竟有没有被点中。 

进一步的解决方案就是为需要点击反馈的元素指定新的样式： 
button { -webkit-tap-highlight-color:rgba(200,0,0,0.4); } 
这样基本就完美了，但困惑依然没有解决。

为什么点击反馈时的Highlight区域会变的这么大？ 
是因为HTML结构写的不好，整片区域是写在A标签里的么？
难道是因为CSS没写好？以上原因统统不是。 

终于在 Safari Web Content Guide 的 Customizing Style Sheets 章中的 Highlighting Elements 节找到了答案： 
https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html 
默认情况下，当用户点击链接或JavaScript可点击元素，在iOS上的Safari会使用半透明的灰色突出显示这块区域。使用-webkit-tap-highlight-color CSS属性，你可以修改或禁用此默认行为。 

那么什么是JavaScript可点击元素呢？

在 Handling Events 章中找到了它的定义。 
https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html 
可点击元素有链接，表单元素，图像映射区域，或任何其他具有mousemove，mousedown，mouseup，或onclick事件处理元素。 

看到这里我终于明白了为什么Highlight区域会这么大了。

这里的房型列表使用的UL，每一个房型是LI，因为每个房型都需要响应点击事件，所以这里采用了事件委托。 
$('ul').on('click', 'li', function() { // todo sth. }); 

根据事件委托的原理可知为啥点击反馈的highlight区域为什么这么大了。
