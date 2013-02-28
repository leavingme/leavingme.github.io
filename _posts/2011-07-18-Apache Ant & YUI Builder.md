<p>一直想要找到合并，压缩JavaScript的最佳办法。在看过＃百度泛用户体验＃＃tangram开发中使用的开源工具介绍＃ http://www.baiduux.com/blog/2011/04/15/tangram-dev-tools/ 这篇文章，了解到“tangram每次发布新版本时提供下载的各种源代码都是通过Apache Ant生成。在tangram的release目录下就可以看到对于该工具的配置”。</p>
<p><strong>了解Ant</strong></p>
<p>Apache Ant，是一个将软件编译、测试、部署等步骤联系在一起加以自动化的一个工具，大多用于Java环境中的软件开发。由Apache软件基金会所提供。默认情况下，XML文件名为build.xml 。</p>
<p></p>
<p><strong>获取tangram</strong></p>
<p>git clone https://github.com/BaiduFE/Tangram-base.git</p>
<p><strong>查看build.xml</strong></p>
<p>在Tangram-base/release/目录下找到了build_release.xml，发现了YUI字样。这个和YUI还有点关系？通过搜索找到另外一个好东西。</p>
<p><strong>YUI Builder</strong></p>
<div>在可军老师的Blog中有这篇文章＃YUI Builder使用入门＃http://hikejun.com/blog/?p=10</div>
<p></p>]]