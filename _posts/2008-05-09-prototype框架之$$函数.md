---
layout: post
title: Prototype框架之$$函数
---
*   元素标签(tag)。$$("li")
    <li>元素ID,id前要加#。$$("#div_test")
    <li>css类，类名前加.。$$(".style1")
    <li>元素是否具有某个属性。$$("a[class]")
    <li>元素的某个属性是否符合特定的条件。$$("a[class='style1']")
    <li>以上的css选择符可以自由组合，形成一个复合的css选择符,中间不要有空格。如下：$$("a#link[class='link']")表示id为"link",class为".link"的链接元素（A）。
    <li>不同的css选择符（以上所有）之间用空格分隔，就组成一个多层的css选择符。如：$$(div p[class='js'])

以上内容的参考：《征服Ajax--dojo、prototype、script.aculo.us框架解析与实例》

$$()函数是Prototype 1.5新增的一个快捷方式，它允许开发人员通过CSS样式选择页面中的元素。熟悉XPath的读者会发现，CSS选择符在语法形式上和XML文档的XPath十分类似，Prototype支持的CSS选择符包括以下几种类型：

l&nbsp; 元素标签名称，例如：$$(“li”)。

l&nbsp; 元素ID，例如：$$(“#fixtures”)。

l&nbsp; CSS类名，例如：$$(“.first”)。

l&nbsp; 元素是否具有某个属性，例如：$$(“h1[class]”)。

l&nbsp; 元素的某个属性是否符合特定的条件，例如：$$('a[href="#"]')、$$('a[class~="internal"]')、$$('a[href!=#]')。

l&nbsp; 上面所有这些CSS选择符的类型可以自由组合，形成一个复合的CSS选择符，例如：$$('li#item_3[class][href!="#"]')。

l&nbsp; 不同的CSS选择符（包括复合CSS选择符）之间用空格分隔，就组成了一个多层的CSS选择符，它通过指定目标元素的父节点甚至更多层父节点的CSS样式属性来定位目标元素。例如：$$('div[style] p[id] strong')。

例2-8给出了一个$$()函数的测试页面示例，读者可以在该页面中输入不同的CSS选择符表达式，测试结果。

例2-8&nbsp; $$()函数测试页面

<div style="border-right: #cccccc 1px solid; padding-right: 5px; border-top: #cccccc 1px solid; padding-left: 4px; font-size: 13px; padding-bottom: 4px; border-left: #cccccc 1px solid; width: 98%; word-break: break-all; padding-top: 4px; border-bottom: #cccccc 1px solid; background-color: #eeeeee;"><span style="color: #0000ff;">&lt;!</span><span style="color: #ff00ff;">DOCTYPE&nbsp;html&nbsp;PUBLIC&nbsp;"-//W3C//DTD&nbsp;XHTML&nbsp;1.0&nbsp;Transitional//EN"&nbsp;"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">html&nbsp;</span><span style="color: #ff0000;">xmlns</span><span style="color: #0000ff;">="http://www.w3.org/1999/xhtml"</span><span style="color: #ff0000;">&nbsp;xml:lang</span><span style="color: #0000ff;">="en"</span><span style="color: #ff0000;">&nbsp;lang</span><span style="color: #0000ff;">="en"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">head</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">title</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">chapter&nbsp;3</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">title</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">style&nbsp;</span><span style="color: #ff0000;">type</span><span style="color: #0000ff;">="text/css"</span><span style="color: #ff0000;">&nbsp;media</span><span style="color: #0000ff;">="screen"</span><span style="color: #0000ff;">&gt;</span><span style="color: #800000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #008000; background-color: #f5f5f5;">/*</span><span style="color: #008000; background-color: #f5f5f5;">&nbsp;&lt;![CDATA[&nbsp;</span><span style="color: #008000; background-color: #f5f5f5;">*/</span><span style="color: #800000; background-color: #f5f5f5;">#testcss1

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #000000; background-color: #f5f5f5;">{</span><span style="color: #ff0000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size</span><span style="color: #000000; background-color: #f5f5f5;">:</span><span style="color: #0000ff; background-color: #f5f5f5;">&nbsp;11px</span><span style="color: #000000; background-color: #f5f5f5;">;</span><span style="color: #ff0000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color</span><span style="color: #000000; background-color: #f5f5f5;">:</span><span style="color: #0000ff; background-color: #f5f5f5;">&nbsp;#f00</span><span style="color: #000000; background-color: #f5f5f5;">;</span><span style="color: #ff0000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #000000; background-color: #f5f5f5;">}</span><span style="color: #800000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#testcss2

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #000000; background-color: #f5f5f5;">{</span><span style="color: #ff0000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size</span><span style="color: #000000; background-color: #f5f5f5;">:</span><span style="color: #0000ff; background-color: #f5f5f5;">&nbsp;12px</span><span style="color: #000000; background-color: #f5f5f5;">;</span><span style="color: #ff0000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color</span><span style="color: #000000; background-color: #f5f5f5;">:</span><span style="color: #0000ff; background-color: #f5f5f5;">&nbsp;#0f0</span><span style="color: #000000; background-color: #f5f5f5;">;</span><span style="color: #ff0000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display</span><span style="color: #000000; background-color: #f5f5f5;">:</span><span style="color: #0000ff; background-color: #f5f5f5;">&nbsp;none</span><span style="color: #000000; background-color: #f5f5f5;">;</span><span style="color: #ff0000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #000000; background-color: #f5f5f5;">}</span><span style="color: #800000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #008000; background-color: #f5f5f5;">/*</span><span style="color: #008000; background-color: #f5f5f5;">&nbsp;]]&gt;&nbsp;</span><span style="color: #008000; background-color: #f5f5f5;">*/</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">style</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">script&nbsp;</span><span style="color: #ff0000;">type</span><span style="color: #0000ff;">="text/javascript"</span><span style="color: #ff0000;">&nbsp;language</span><span style="color: #0000ff;">="javascript"</span><span style="color: #ff0000;">&nbsp;src</span><span style="color: #0000ff;">="prototype.js"</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">script</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">script</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff; background-color: #f5f5f5;">function</span><span style="color: #000000; background-color: #f5f5f5;">&nbsp;test()&nbsp;{

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #008000; background-color: #f5f5f5;">//</span><span style="color: #008000; background-color: #f5f5f5;">&nbsp;根据输入的CSS选择符，切换相应元素的显示</span><span style="color: #008000; background-color: #f5f5f5;">

</span><span style="color: #000000; background-color: #f5f5f5;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$($F(</span><span style="color: #000000; background-color: #f5f5f5;">'</span><span style="color: #000000; background-color: #f5f5f5;">csspath</span><span style="color: #000000; background-color: #f5f5f5;">'</span><span style="color: #000000; background-color: #f5f5f5;">)).each(

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff; background-color: #f5f5f5;">function</span><span style="color: #000000; background-color: #f5f5f5;">(item)&nbsp;{

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Element.toggle(item);

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">script</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">head</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">body</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">form</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="fixtures"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">h1&nbsp;</span><span style="color: #ff0000;">class</span><span style="color: #0000ff;">="title"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some&nbsp;title&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">here</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">h1</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">p&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="p"</span><span style="color: #ff0000;">&nbsp;class</span><span style="color: #0000ff;">="first&nbsp;summary"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">strong&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="strong"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">This</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">strong</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">&nbsp;is&nbsp;a&nbsp;short&nbsp;blurb

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #008000;">&lt;!--</span><span style="color: #008000;">&nbsp;该页面元素具备&nbsp;first和internal两种CSS样式</span><span style="color: #008000;">--&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">a&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="link_1"</span><span style="color: #ff0000;">&nbsp;class</span><span style="color: #0000ff;">="first&nbsp;internal"</span><span style="color: #ff0000;">&nbsp;href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">with&nbsp;a&nbsp;link</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">&nbsp;or&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">a&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="link_2"</span><span style="color: #ff0000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class</span><span style="color: #0000ff;">="internal&nbsp;highlight"</span><span style="color: #ff0000;">&nbsp;href</span><span style="color: #0000ff;">="#"</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">em&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="em"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">two</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">em</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">&nbsp;</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">p</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">ul&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="list"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="item_1"</span><span style="color: #ff0000;">&nbsp;class</span><span style="color: #0000ff;">="first"</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">a&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="link_3"</span><span style="color: #ff0000;">&nbsp;href</span><span style="color: #0000ff;">="#"</span><span style="color: #ff0000;">&nbsp;class</span><span style="color: #0000ff;">="external"</span><span style="color: #0000ff;">&gt;&lt;</span><span style="color: #800000;">span&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="span"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Another&nbsp;link</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">span</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">&nbsp;</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">a</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="item_2"</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">Some&nbsp;text</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">li&nbsp;</span><span style="color: #ff0000;">id</span><span style="color: #0000ff;">="item_3"</span><span style="color: #ff0000;">&nbsp;xml:lang</span><span style="color: #0000ff;">="es-us"</span><span style="color: #ff0000;">&nbsp;class</span><span style="color: #0000ff;">=""</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">Otra&nbsp;cosa</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">li</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">ul</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">input&nbsp;</span><span style="color: #ff0000;">type</span><span style="color: #0000ff;">="text"</span><span style="color: #ff0000;">&nbsp;value</span><span style="color: #0000ff;">=""</span><span style="color: #ff0000;">&nbsp;id</span><span style="color: #0000ff;">="csspath"</span><span style="color: #ff0000;">&nbsp;</span><span style="color: #0000ff;">/&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">input&nbsp;</span><span style="color: #ff0000;">type</span><span style="color: #0000ff;">="button"</span><span style="color: #ff0000;">&nbsp;value</span><span style="color: #0000ff;">="click"</span><span style="color: #ff0000;">&nbsp;onclick</span><span style="color: #0000ff;">="test()"</span><span style="color: #ff0000;">&nbsp;</span><span style="color: #0000ff;">/&gt;</span><span style="color: #000000;">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">form</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">body</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

</span><span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">html</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">

</span></div>

例2-8的运行页面如图2-2所示，在文本输入框中输入一个CSS选择符（例如“.title”），点击“click”按钮即可切换相应的页面元素（即Some title here）的显示/隐藏状态。

![](http://book.csdn.net/BookFiles/286/img/image002.jpg)&nbsp;&nbsp;&nbsp; ![](http://book.csdn.net/BookFiles/286/img/image003.jpg)

&nbsp;(a)&nbsp; 在文本输入框中输入CSS选择符“.title”&nbsp;(b)&nbsp; 页面元素“Some title here”隐藏

图2-2&nbsp; $$函数应用示例