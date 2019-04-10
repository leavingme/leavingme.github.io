---
layout: post
title: HTML5: The New Minimum for Mobile Web Devices
date: 2010-10-25 23:20:00
---
<span style="font-family: Courier;">原文链接：</span>[<span style="font-family: Courier;">http://www.sencha.com/blog/2010/10/15/html5-the-new-minimum-for-mobile-web-devices/</span>](http://www.sencha.com/blog/2010/10/15/html5-the-new-minimum-for-mobile-web-devices/)

<span style="font-family: Courier;">October 15, 2010 by Michael Mullany</span>

![](http://images.cnblogs.com/cnblogs_com/leavingme/ios-android.jpg)&nbsp;

<span style="font-family: Courier;">我们为在支持HTML5的移动设备上建立丰富的应用设计了 Sencha Touch 框架。我们早在2009年就开始我们的开发，那时是Google Android 2+ 和 Apple iOS 2 + 设备。从那时起，这些设备已经加入了Apple iPad，Blackberry Torch，Blackberry Playbook tablet，Google Android tablet，和即将到来的基于WebOS的的惠普平板和诺基亚的 Meego 手机。</span>

<span style="font-family: Courier;">当然，我们可以做一些事情使其能工作在更多的早期设备上，但我们选择不这样做有多重因素。其中最大因素的是用户体验和性能。你不能在只有基础的浏览器和有缺陷的并且不完整的 JavaScript 的老设备上构建一个富网络应用程序。丰富的应用体验是在移动设备上用户的差异最小。</span>

<span style="font-family: Courier;">为此，我们责怪 iPhone 和 Android。 
iPhone 和 Android 原生软件已设定的移动性能和体验的新标准。iPhone 和 Android 的原生应用已为移动设备的性能和体验建立一个新的标准。人们喜欢使用这些应用程序。现在它取决于移动网络，以满足新的，更高的期望。这意味着要提供优雅的，有活力和高性能的 Web 应用程序。而唯一的方法就是在没有 Flash，有 HTML5 相关技术的移动浏览器上。</span>

<span style="font-family: Courier;">“手机是一个不小的桌面”</span>

<span style="font-family: Courier;">移动设备不只是一个小桌面。将带鼠标/键盘的桌面浏览器和界面并且缩小它到移动设备上也于事无补。有什么不同？两点；有限且不会改变的屏幕，并且你的手指是你唯一的输入设备。这两件事情有很深的设计含义。</span>

<span style="font-family: Courier;">首先，在这个小屏幕，即使是最简单的应用程序都提供快速轻松的导航访问内容和数据。这意味着应用程序要预加载不属于当前视图的内容并且在需要的时候能够快速显示。在桌上我们对用 Ajax 干这件事情非常熟悉，但大多数传统手机缺乏对 Ajax 的支持。如果你真的打算在您的应用程序每次页面请求要显示新的内容时都让用户等待？</span>

<span style="font-family: Courier;">然后还有动画。当是个小屏幕时，动画导航行为变得非常重要。&nbsp;动画内容过渡告诉用户那里的新内容是相对位置在原来内容的“内容区域”的继承。没有动画，你将会使用面包屑和其他定位元素占用大量的屏幕空间。</span>

<span style="font-family: Courier;">最后，在触摸屏设备上的屏幕部件考虑到触摸控制必须非常大。Apple Human Interface Guidelines 推荐按钮最少有 42 像素高。这是导航采用的非常大的区域。如果触摸按钮是唯一的方式，以绕过你的应用程序，你就可以结束屏幕混乱：大量的用户界面部件和少量的内容。</span>

<span style="font-family: Courier;">不过，如果你有先进的手势，可以减少用户界面开发。Android 和 iOS 原生框架给你大量导航工具避免组件混乱：</span>

<span style="font-family: Courier;">Components like carousels, that let you gesture directly on content areas for navigation</span>

<span style="font-family: Courier;">让您的手势直接在内容区域导航的&nbsp;carousels 组件</span>

<span style="font-family: Courier;">Complex gestures such as pinch/spread on content to zoom in/out</span>

<span style="font-family: Courier;">复杂的手势，例如：捏/扩大让内容放大/缩小</span>

<span style="font-family: Courier;">Modal dialogs and action sheets to confirm/cancel actions</span>

<span style="font-family: Courier;">模态对话框和动作菜单来确认/取消操作&nbsp;</span>

<span style="font-family: Courier;">Pop-over menus that overlay the main content area</span>

<span style="font-family: Courier;">弹出菜单浮动在主要内容区域</span>

<span style="font-family: Courier;">Modal input widgets &nbsp;- e.g. date spinners</span>

<span style="font-family: Courier;">模态的输入组件 - 例如：日期旋转选择器&nbsp;</span>

<span style="font-family: Courier;">还有更多...</span>

<span style="font-family: Courier;">幸运的是，这些原生的功能也可以使用移动设备的浏览器，只要它有一个可靠的 Javascript 实现和良好的 CSS3 的支持。</span>

<span style="font-family: Courier;">让我们谈谈离线&nbsp;</span>

<span style="font-family: Courier;">然后我们甚至还没有提到网络应用程序，需要地理位置或离线支持。即使是在旧金山的3G网络，你也能够使用一个移动应用程序(aka offline)，意味着它需要有数据和应用程序的本地存储。同样，这需要HTML5。</span>

<span style="font-family: Courier;">到明年初，Apple, Android, RIM 和 Nokia 的新的智能手机都将支持 HTML5。在市场占有率方面，其中大部分将会是便宜的 Android 系统的 HTML5 移动设备。 他们已经在交付所有的主要运营商。这就是为什么我们选择我们要做的设计的策略。&nbsp;</span>
