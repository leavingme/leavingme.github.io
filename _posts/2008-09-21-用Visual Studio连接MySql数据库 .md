---
layout: post
title: 用Visual Studio连接MySql数据库 
---
&nbsp;

最近做了下mysql的数据库操作，以前没用过，把我的方法写一下，mysql新手可以借鉴下。
我这里是用的connector/net连接的。

1.去<span style="font-family: Courier New;">[http://dev.mysql.com/downloads/connector/net/5.0.html](http://dev.mysql.com/downloads/connector/net/5.0.html)</span>下载MySql Connector/Net 5.0，我用的是5.0.8.1，下载后安装

2.到安装目录，如<span style="font-family: Courier New;">D:\Program Files\MySQL\MySQL Connector Net 5.0.8.1\Binaries\.NET 2.0拷贝<span style="font-family: Courier New;">MySql.Data.dll</span>到你的项目bin下，或者直接引用它。
</span><span style="font-family: Courier New;">
3.添加using MySql.Data.MySqlClient;

4.下面是我的程序：</span>

<span style="font-family: Courier New;">

<div class="cnblogs_code"><!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">string</span><span style="color: #000000;"> connStr </span><span style="color: #000000;">=</span><span style="color: #000000;"> String.Format(</span><span style="color: #800000;">"</span><span style="color: #800000;">server={0};user id={1}; password={2}; database={3}; pooling=false;port=3306</span><span style="color: #800000;">"</span><span style="color: #000000;">, </span><span style="color: #800000;">"</span><span style="color: #800000;">127.0.0.1</span><span style="color: #800000;">"</span><span style="color: #000000;">, </span><span style="color: #800000;">"</span><span style="color: #800000;">test</span><span style="color: #800000;">"</span><span style="color: #000000;">, </span><span style="color: #800000;">"</span><span style="color: #800000;">test</span><span style="color: #800000;">"</span><span style="color: #000000;">, </span><span style="color: #800000;">"</span><span style="color: #800000;">test</span><span style="color: #800000;">"</span><span style="color: #000000;">);
MySqlConnection myConn </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">new</span><span style="color: #000000;"> MySqlConnection(connStr);
myConn.Open();
MySqlCommand cmd </span><span style="color: #000000;">=</span><span style="color: #000000;"> myConn.CreateCommand();

</span><span style="color: #0000FF;">string</span><span style="color: #000000;"> sql1 </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #800000;">"</span><span style="color: #800000;">CREATE TEMPORARY TABLE tmp_table (maxonline int,srv_ip VARCHAR(30),fld_date datetime)</span><span style="color: #800000;">"</span><span style="color: #000000;">;

</span><span style="color: #0000FF;">string</span><span style="color: #000000;"> sql2 </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #800000;">@"</span><span style="color: #800000;">insert into tmp_table SELECT 33,'ip1','2007-5-5'</span><span style="color: #800000;">"</span><span style="color: #000000;">;</span><span style="color: #008000;">//</span><span style="color: #008000;">测试数据</span><span style="color: #008000;">
</span><span style="color: #000000;">
</span><span style="color: #0000FF;">string</span><span style="color: #000000;"> sql3 </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #800000;">"</span><span style="color: #800000;">select sum(maxonline),DATE_FORMAT(fld_date, '%Y-%m-%d') from tmp_table group by fld_date</span><span style="color: #800000;">"</span><span style="color: #000000;">;

cmd.CommandText </span><span style="color: #000000;">=</span><span style="color: #000000;"> sql1;
cmd.ExecuteNonQuery();

cmd.CommandText </span><span style="color: #000000;">=</span><span style="color: #000000;"> sql2;
cmd.ExecuteNonQuery();

cmd.CommandText </span><span style="color: #000000;">=</span><span style="color: #000000;"> sql3;
MySqlDataReader rd </span><span style="color: #000000;">=</span><span style="color: #000000;"> cmd.ExecuteReader();

GridView1.DataSource </span><span style="color: #000000;">=</span><span style="color: #000000;"> rd;
GridView1.DataBind();
myConn.Close();</span>
<pre></pre>
</div>
<span style="font-family: Courier New;">
<p>
因为这个MySql数据库用的是比较老的版本，不支持select的嵌套，所以用了临时表。

</span></span></p>

<span style="font-family: 宋体;">

顺便推荐下</span>[<span style="font-family: Courier New;">http://www.connectionstrings.com/</span>](http://www.connectionstrings.com/)<span style="font-family: 宋体;">这个网站，可以生成连接字符串，比较全。 </span>
]]