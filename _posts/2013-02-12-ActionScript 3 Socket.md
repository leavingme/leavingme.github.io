---
layout: post
title: ActionScript 3 Socket
---
各个版本的 Flash Player 中针对套接字策略文件的要求：

在 Flash Player 9.0.124.0 及更高版本中，套接字策略文件对于任何 Socket 连接都是必需的。也就是说，无论连接到哪一个端口（即使连接到提供 SWF 文件的同一主机上的端口），目标主机上都需要套接字策略文件。
在 Flash Player 9.0.115.0 版及更低版本中，如果要连接到小于 1024 的端口号或连接到除提供 SWF 文件的主机之外的主机，则目标主机上必须具有套接字策略文件。
在 Flash Player 9.0.115.0 中，尽管套接字策略文件不是必需的，但如果目标主机未提供套接字策略文件，那么当使用 Flash Debug Player 时，也会显示警告。
但在 Adobe AIR 中，application 安全沙箱中的内容（使用 AIR 应用程序安装的内容）不受这些安全限制的约束。
]]