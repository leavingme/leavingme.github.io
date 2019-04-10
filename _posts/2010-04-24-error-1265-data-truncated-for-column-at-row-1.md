---
layout: post
title: Error: 1265, Data truncated for column '列名' at row 1
date: 2010-04-24 22:20:00
---
[<span style="font-family: Courier;">http://www.heidisql.com/forum.php?t=5205</span>](http://www.heidisql.com/forum.php?t=5205)&nbsp;

&nbsp;

<span class="Apple-style-span" style="line-height: normal; font-size: 12px; border-collapse: collapse; white-space: pre-wrap; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-family: Courier;">SHOW VARIABLES LIKE 'sql_mode'</span>

&nbsp;

<span class="Apple-style-span" style="line-height: normal; font-size: 13px; border-collapse: collapse; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px; font-family: Courier;">STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</span>&nbsp;

<span style="font-family: Courier;">解决方案：</span>

<span style="font-family: Courier;">set @@GLOBAL.sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'</span>

&nbsp;
<span class="Apple-style-span" style="line-height: 22px; color: #333333; font-family: Courier;">解释：
</span><span class="Apple-style-span" style="line-height: 22px; color: #333333; font-family: Courier;">&nbsp; STRICT_TRANS_TABLES
</span><span class="Apple-style-span" style="line-height: 22px; color: #333333; font-family: Courier;">&nbsp; 如果不能将给定的值插入到事务表中，则放弃该语句。对于非事务表，如果值出现在单行语句或多行语句的第1行，则放弃该语句。本节后面给出了更详细的描述。&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;
</span><span class="Apple-style-span" style="line-height: 22px; color: #333333; font-family: Courier;">&nbsp; NO_AUTO_CREATE_USER
</span><span class="Apple-style-span" style="line-height: 22px; color: #333333; font-family: Courier;">&nbsp; 防止GRANT自动创建新用户，除非还指定了密码。&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;
</span><span class="Apple-style-span" style="line-height: 22px; color: #333333; font-family: Courier;">&nbsp; NO_ENGINE_SUBSTITUTION
</span>

<span class="Apple-style-span" style="line-height: 22px; color: #333333; font-family: Courier;">&nbsp;&nbsp;如果需要的存储引擎被禁用或未编译，可以防止自动替换存储引擎。</span>&nbsp;
