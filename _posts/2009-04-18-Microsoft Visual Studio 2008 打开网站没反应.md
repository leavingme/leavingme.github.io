Microsoft Visual Studio 2008 打开网站没反应
重装，打SP1，卸载......搞了一天，把人都搞疯了，用Windows Install Clean Up清除了相关程序，再重新安装还是不行。
无意识的使用了下快捷键Ctrl + Alt + O
输出窗口提示：
Visual Web Developer Project System Package ({39C9C826-8EF8-4079-8C95-428F5B1C323F})未加载 .........................
心中一喜，可算是找到原因了~赶紧去google了一把，结果大失所望，没看到有用的信息。
没办法，又多番尝试快捷键，看到输出窗口的信息没看完，提示使用命令
devenv /resetskippkgs
OK，终于搞定了~]]