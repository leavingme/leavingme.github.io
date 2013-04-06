---
layout: post
title: HTML5 History API
date: 2013-04-06 23:21:00
---
对于浏览器的前进后退按钮一直都没有好好的研究过，对如下的这个场景相当困惑：

1. 依次访问index.html -> 1.html -> 1-1.html -> 1-1-1.html，此时history.length === 4。

2. 这时如果点击浏览器的后退按钮返回到1-1.html，再去访问1-1-2.html，此时history.length等于几呢？

