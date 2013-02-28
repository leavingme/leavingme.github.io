---
layout: post
title: Microsoft Visual Studio 2008 打开网站没反应
---
<p>Microsoft Visual Studio 2008 打开网站没反应</p>
<p>重装，打SP1，卸载......搞了一天，把人都搞疯了，用Windows Install Clean Up清除了相关程序，再重新安装还是不行。</p>
<p>无意识的使用了下快捷键Ctrl + Alt + O</p>
<p>输出窗口提示：</p>
<p><strong>Visual Web Developer Project System Package ({39C9C826-8EF8-4079-8C95-428F5B1C323F})未加载 .........................</strong></p>
<p>心中一喜，可算是找到原因了~赶紧去google了一把，结果大失所望，没看到有用的信息。</p>
<p>没办法，又多番尝试快捷键，看到输出窗口的信息没看完，提示使用命令</p>
<p>devenv /resetskippkgs</p>
<p>OK，终于搞定了~</p>]]