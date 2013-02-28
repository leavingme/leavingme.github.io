 
最近做了下mysql的数据库操作，以前没用过，把我的方法写一下，mysql新手可以借鉴下。我这里是用的connector/net连接的。1.去http://dev.mysql.com/downloads/connector/net/5.0.html下载MySql Connector/Net 5.0，我用的是5.0.8.1，下载后安装2.到安装目录，如D:\Program Files\MySQL\MySQL Connector Net 5.0.8.1\Binaries\.NET 2.0拷贝MySql.Data.dll到你的项目bin下，或者直接引用它。3.添加using MySql.Data.MySqlClient;4.下面是我的程序：

<br /><br />Code highlighting produced by Actipro CodeHighlighter (freeware)<br />http://www.CodeHighlighter.com/<br /><br />string connStr = String.Format("server={0};user id={1}; password={2}; database={3}; pooling=false;port=3306", "127.0.0.1", "test", "test", "test");MySqlConnection myConn = new MySqlConnection(connStr);myConn.Open();MySqlCommand cmd = myConn.CreateCommand();string sql1 = "CREATE TEMPORARY TABLE tmp_table (maxonline int,srv_ip VARCHAR(30),fld_date datetime)";string sql2 = @"insert into tmp_table SELECT 33,'ip1','2007-5-5'";//测试数据string sql3 = "select sum(maxonline),DATE_FORMAT(fld_date, '%Y-%m-%d') from tmp_table group by fld_date";cmd.CommandText = sql1;cmd.ExecuteNonQuery();cmd.CommandText = sql2;cmd.ExecuteNonQuery();cmd.CommandText = sql3;MySqlDataReader rd = cmd.ExecuteReader();GridView1.DataSource = rd;GridView1.DataBind();myConn.Close();



因为这个MySql数据库用的是比较老的版本，不支持select的嵌套，所以用了临时表。

顺便推荐下http://www.connectionstrings.com/这个网站，可以生成连接字符串，比较全。 ]]