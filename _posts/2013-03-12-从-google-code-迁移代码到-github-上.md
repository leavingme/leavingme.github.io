---
layout: post
title: 从 Google Code 迁移代码到 GitHub 上
date: 2013-03-12 14:34:00
---
从Google Code迁移代码到github上的步骤:

首先访问 https://github.com/nirvdrum/svn2git 安装svn2git工具。
创建一个空白目录，进入该目录执行 svn2git http://xxxxx.googlecode.com/svn , 注意，以svn结尾，不要加/trunk
导出完毕后，在github上创建你需要的项目
回到之前工作目录， 执行 &gt;git remote add origin git_repo_url 添加远程repository，然后执行 git push origin master 即可。

&nbsp;

https://help.github.com/articles/importing-from-subversion