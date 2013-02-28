http://groups.google.com/group/python-cn/browse_thread/thread/8ad925031a97b8b2/a782b13f321a1ff8?#a782b13f321a1ff8


<br />
<br />
Code highlighting produced by Actipro CodeHighlighter (freeware)<br />
http://www.CodeHighlighter.com/<br />
<br />
Traceback (most recent call last):
  File "E:\e.py", line 8, in <module>
    soup = BeautifulSoup(page.read())
  File "D:\Python25\lib\site-packages\BeautifulSoup.py", line 1499, in __init__
    BeautifulStoneSoup.__init__(self, *args, **kwargs)
  File "D:\Python25\lib\site-packages\BeautifulSoup.py", line 1230, in __init__
    self._feed(isHTML=isHTML)
  File "D:\Python25\lib\site-packages\BeautifulSoup.py", line 1263, in _feed
    self.builder.feed(markup)
  File "D:\Python25\lib\HTMLParser.py", line 108, in feed
    self.goahead(0)
  File "D:\Python25\lib\HTMLParser.py", line 148, in goahead
    k = self.parse_starttag(i)
  File "D:\Python25\lib\HTMLParser.py", line 263, in parse_starttag
    % (rawdata[k:endpos][:20],))
  File "D:\Python25\lib\HTMLParser.py", line 115, in error
    raise HTMLParseError(message, self.getpos())
HTMLParser.HTMLParseError: junk characters in start tag: u'\u767e\u5ea6\u4e00\u4
e0b id=sb>', at line 3, column 201




出错的 HTML 代码是： 


<input type=submit value=百度一下 id=sb> 



很常见的问题，标准的HTML应该是：


<input type="submit" value="百度一下" id="sb"> 



不知道是百度出于压缩考虑，还是它的技术人员偷懒 
应该用 tidy 之类的工具修补下，然后再用 BeautifulSoup 处理 
不过正如之前我那条不被人关注的帖子中所提到的，原有多个对 tidy 的 python 封装都不好用 
张教主推荐了个自己封装的 tidy ，可以试下 ]]