---
layout: post
title: Beautiful Soup 解析 Baidu 首页失败
---
<span style="font-family: 微软雅黑; font-size: 12px; line-height: normal; white-space: pre;">http://groups.google.com/group/python-cn/browse_thread/thread/8ad925031a97b8b2/a782b13f321a1ff8?#a782b13f321a1ff8</span>
<div>
<div><span style="font-family: 微软雅黑, 'courier new'; font-size: small;" size="3" face="微软雅黑, 'courier new'"><span style="font-size: 12px; line-height: normal; white-space: pre;">
<div class="cnblogs_code"><!--

Code highlighting produced by Actipro CodeHighlighter (freeware)

http://www.CodeHighlighter.com/

--><span style="color: #000000;">Traceback&nbsp;(most&nbsp;recent&nbsp;call&nbsp;last):

&nbsp;&nbsp;File&nbsp;</span><span style="color: #800000;">"</span><span style="color: #800000;">E:\e.py</span><span style="color: #800000;">"</span><span style="color: #000000;">,&nbsp;line&nbsp;</span><span style="color: #000000;">8</span><span style="color: #000000;">,&nbsp;</span><span style="color: #0000ff;">in</span><span style="color: #000000;">&nbsp;&lt;module</span><span style="color: #000000;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;soup&nbsp;</span><span style="color: #000000;">=</span><span style="color: #000000;">&nbsp;BeautifulSoup(page.read())

&nbsp;&nbsp;File&nbsp;</span><span style="color: #800000;">"</span><span style="color: #800000;">D:\Python25\lib\site-packages\BeautifulSoup.py</span><span style="color: #800000;">"</span><span style="color: #000000;">,&nbsp;line&nbsp;</span><span style="color: #000000;">1499</span><span style="color: #000000;">,&nbsp;</span><span style="color: #0000ff;">in</span><span style="color: #000000;">&nbsp;__init__

&nbsp;&nbsp;&nbsp;&nbsp;BeautifulStoneSoup.__init__(self,&nbsp;</span><span style="color: #000000;">*</span><span style="color: #000000;">args,&nbsp;</span><span style="color: #000000;">**</span><span style="color: #000000;">kwargs)

&nbsp;&nbsp;File&nbsp;</span><span style="color: #800000;">"</span><span style="color: #800000;">D:\Python25\lib\site-packages\BeautifulSoup.py</span><span style="color: #800000;">"</span><span style="color: #000000;">,&nbsp;line&nbsp;</span><span style="color: #000000;">1230</span><span style="color: #000000;">,&nbsp;</span><span style="color: #0000ff;">in</span><span style="color: #000000;">&nbsp;__init__

&nbsp;&nbsp;&nbsp;&nbsp;self._feed(isHTML</span><span style="color: #000000;">=</span><span style="color: #000000;">isHTML)

&nbsp;&nbsp;File&nbsp;</span><span style="color: #800000;">"</span><span style="color: #800000;">D:\Python25\lib\site-packages\BeautifulSoup.py</span><span style="color: #800000;">"</span><span style="color: #000000;">,&nbsp;line&nbsp;</span><span style="color: #000000;">1263</span><span style="color: #000000;">,&nbsp;</span><span style="color: #0000ff;">in</span><span style="color: #000000;">&nbsp;_feed

&nbsp;&nbsp;&nbsp;&nbsp;self.builder.feed(markup)

&nbsp;&nbsp;File&nbsp;</span><span style="color: #800000;">"</span><span style="color: #800000;">D:\Python25\lib\HTMLParser.py</span><span style="color: #800000;">"</span><span style="color: #000000;">,&nbsp;line&nbsp;</span><span style="color: #000000;">108</span><span style="color: #000000;">,&nbsp;</span><span style="color: #0000ff;">in</span><span style="color: #000000;">&nbsp;feed

&nbsp;&nbsp;&nbsp;&nbsp;self.goahead(</span><span style="color: #000000;">0</span><span style="color: #000000;">)

&nbsp;&nbsp;File&nbsp;</span><span style="color: #800000;">"</span><span style="color: #800000;">D:\Python25\lib\HTMLParser.py</span><span style="color: #800000;">"</span><span style="color: #000000;">,&nbsp;line&nbsp;</span><span style="color: #000000;">148</span><span style="color: #000000;">,&nbsp;</span><span style="color: #0000ff;">in</span><span style="color: #000000;">&nbsp;goahead

&nbsp;&nbsp;&nbsp;&nbsp;k&nbsp;</span><span style="color: #000000;">=</span><span style="color: #000000;">&nbsp;self.parse_starttag(i)

&nbsp;&nbsp;File&nbsp;</span><span style="color: #800000;">"</span><span style="color: #800000;">D:\Python25\lib\HTMLParser.py</span><span style="color: #800000;">"</span><span style="color: #000000;">,&nbsp;line&nbsp;</span><span style="color: #000000;">263</span><span style="color: #000000;">,&nbsp;</span><span style="color: #0000ff;">in</span><span style="color: #000000;">&nbsp;parse_starttag

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #000000;">%</span><span style="color: #000000;">&nbsp;(rawdata[k:endpos][:</span><span style="color: #000000;">20</span><span style="color: #000000;">],))

&nbsp;&nbsp;File&nbsp;</span><span style="color: #800000;">"</span><span style="color: #800000;">D:\Python25\lib\HTMLParser.py</span><span style="color: #800000;">"</span><span style="color: #000000;">,&nbsp;line&nbsp;</span><span style="color: #000000;">115</span><span style="color: #000000;">,&nbsp;</span><span style="color: #0000ff;">in</span><span style="color: #000000;">&nbsp;error

&nbsp;&nbsp;&nbsp;&nbsp;raise&nbsp;HTMLParseError(message,&nbsp;self.getpos())

HTMLParser.HTMLParseError:&nbsp;junk&nbsp;characters&nbsp;</span><span style="color: #0000ff;">in</span><span style="color: #000000;">&nbsp;start&nbsp;tag:&nbsp;u'\u767e\u5ea6\u4e00\u4

e0b&nbsp;id</span><span style="color: #000000;">=</span><span style="color: #000000;">sb</span><span style="color: #000000;">&gt;</span><span style="color: #000000;">',&nbsp;at&nbsp;line&nbsp;</span><span style="color: #000000;">3</span><span style="color: #000000;">,&nbsp;column&nbsp;</span><span style="color: #000000;">201</span></div>
</span></span></div>
<div><span style="font-family: fixed-width, monospace; font-size: x-small;" size="2" face="fixed-width, monospace"><span style="font-size: 10px; line-height: normal;">

</span></span></div>
</div>
<div>出错的 HTML 代码是：&nbsp;</div>
<div>
<div class="cnblogs_Highlighter">
<pre class="brush:html">&lt;input type=submit value=百度一下 id=sb&gt; 
</pre>
</div>
</div>
<div>很常见的问题，标准的HTML应该是：</div>
<div>
<div class="cnblogs_Highlighter">
<pre class="brush:html">&lt;input type="submit" value="百度一下" id="sb"&gt; 
</pre>
</div>
</div>
<div>不知道是百度出于压缩考虑，还是它的技术人员偷懒&nbsp;</div>
<div>应该用 tidy 之类的工具修补下，然后再用 BeautifulSoup 处理&nbsp;</div>
<div>不过正如之前我那条不被人关注的帖子中所提到的，原有多个对 tidy 的 python 封装都不好用&nbsp;</div>
<div>张教主推荐了个自己封装的 tidy ，可以试下&nbsp;</div>]]