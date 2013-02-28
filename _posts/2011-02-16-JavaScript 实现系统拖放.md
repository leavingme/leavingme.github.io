---
layout: post
title: JavaScript 实现系统拖放
---
除了Opera，目前的浏览器均已经支持系统拖放了。

**拖放事件**

1.拖动项事件

dragstart; drag; dragend;

[点击查看Demo

](http://leavingme.net/cnblogs/draganddrop/systemdrag.html)2. 放置目标事件

dragenter; dragover; dragleave; drop;

[点击查看Demo](http://leavingme.net/cnblogs/draganddrop/systemdrag1.html)

一般来说，拖动项的事件总是先发生，除了 drop 事件要比 dragend 先触发。

[点击查看Demo](http://leavingme.net/cnblogs/draganddrop/systemdrag2.html)

默认情况下，文本框（&lt;input/&gt;或者&lt;textarea/&gt;是网页上唯一有效的放置目标），不过通过改变 dragover 和dragenter 事件的行为，可以在任何对象创建放置目标。

[不允许放置，点击查看Demo](http://leavingme.net/cnblogs/draganddrop/systemdrag3.html)

[允许放置，点击查看Demo](http://leavingme.net/cnblogs/draganddrop/systemdrag4.html)

**数据传输对象 dataTransfer**

1. 方法

getDate 和 setData()

可以设置两种类型的数据：普通文本和URL

<div class="cnblogs_Highlighter">
<pre class="brush:javascript">oEvent.dataTransfer.setData("Text", "some text");
var sData = oEvent.dataTransfer.getData("text");
oEvent.dataTransfer.setData("URL", "http://leavingme.net");
var sURL = oEvent.dataTransfer.getData("URL");
</pre>
</div>

存储在 dataTransfer 对象中的数据在 drop 事件发生前可用。如果在 ondrop 事件处理函数中没有去获取其中的数据，那么 dataTransfer 就会被销毁，数据丢失。

在写Demo的时候发现，IE9下无法正常看到结果，而IE7是正常的。经过比对 MSDN IE9 提供的示例发现，应该使用 window.event 对象而不是使用 DOM 的 event 对象。

<div class="cnblogs_Highlighter">
<pre class="brush:javascript">function handleDragDropEvent(oEvent) {
	oEvent = window.event || oEvent;
	// todo
};</pre>
</div>

[Text数据，点击查看Demo](http://leavingme.net/cnblogs/draganddrop/systemdrag5.html)

[URL数据，点击查看Demo

](http://leavingme.net/cnblogs/draganddrop/systemdrag6.html)2. dropEffect 和 effectAllowed

[点击查看Demo

](http://leavingme.net/cnblogs/draganddrop/systemdrag7.html)**dragDrop方法**

dragDrop方法可以用于几乎所有的HTML元素。通过调用dragDrop()来初始化系统拖动事件，可让一般情况下不能拖动的项触发dragstart、drag和dragend事件。

<div class="cnblogs_Highlighter">
<pre class="brush:javascript">oElement.onmousemove = function(oEvent) {
	if(oEvent.button == 1) {
		oElement.dragDrop();
	}
}</pre>
</div>

**
IE drag &amp; drop 删除元素 Demo**

张鑫旭同学写了个 HTML5 drag &amp; drop 删除元素 Demo，那我就写个 IE 下的吧。

HTML 代码

<div class="cnblogs_Highlighter">
<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" /&gt;
&lt;title&gt;IE drag &amp; drop 拖拽与拖放测试&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="dustbin" ondragenter="handleDragDropEvent(event)" ondragover="handleDragDropEvent(event)" ondragleave="handleDragDropEvent(event)" ondrop="handleDragDropEvent(event)"&gt;&lt;br /&gt;
  垃&lt;br /&gt;
  圾&lt;br /&gt;
  箱&lt;/div&gt;
&lt;div class="dragbox"&gt;
  &lt;div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)"&gt;列表1&lt;/div&gt;
  &lt;div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)"&gt;列表2&lt;/div&gt;
  &lt;div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)"&gt;列表3&lt;/div&gt;
  &lt;div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)"&gt;列表4&lt;/div&gt;
  &lt;div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)"&gt;列表5&lt;/div&gt;
  &lt;div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)"&gt;列表6&lt;/div&gt;
&lt;/div&gt;
&lt;div id="dragremind"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
</div>

CSS 代码

<div class="cnblogs_Highlighter">
<pre class="brush:css">&lt;style type="text/css"&gt;
body {
	font-size:84%;
}
.dustbin {
	width:100px;
	height:260px;
	line-height:1.4;
	background-color:gray;
	font-size:36px;
	font-family:"微软雅黑", "Yahei Mono";
	text-align:center;
	text-shadow:-1px -1px #bbb;
	float:left;
}
.dragbox {
	width:500px;
	padding-left:20px;
	float:left;
}
.draglist {
	padding:10px;
	margin-bottom:5px;
	border:2px dashed #ccc;
	background-color:#eee;
	cursor:move;
}
.draglist:hover {
	border-color:#cad5eb;
	background-color:#f0f3f9;
}
#dragremind {
	padding-top:2em;
	clear:both;
}
&lt;/style&gt;</pre>
</div>

JavaScript 代码

<div class="cnblogs_Highlighter">
<pre class="brush:javascript">&lt;script type="text/javascript"&gt;
var currentDom = null;

function handleMouseMove(oEvent) {
	oEvent = window.event || oEvent;
	if(oEvent.button == 1) {
		oEvent.srcElement.dragDrop();
	}
}

function handleDragDropEvent(event) {
	oEvent = window.event || oEvent;

	switch(oEvent.type) {
		case 'dragstart':
			oEvent.dataTransfer.setData('Text', oEvent.srcElement.innerHTML);
			currentDom = oEvent.srcElement;
			break;
		case 'dragenter':
			break;
		case 'dragover':
			oEvent.srcElement.style.color = "#ffffff";
			oEvent.returnValue = false;
			break;
		case 'dragleave':
			oEvent.srcElement.style.color = "#000000";
			break;
		case 'drop':
			oEvent.srcElement.style.color = "#000000";
			var text = oEvent.dataTransfer.getData('Text');
			var dragremind = document.getElementById('dragremind')
			dragremind.innerHTML = '&lt;strong&gt;' + text + '&lt;/strong&gt;被扔进了垃圾箱';
			if(currentDom) {
				currentDom.parentNode.removeChild(currentDom);
			}
			break;
	}
}
&lt;/script&gt;</pre>
</div>

[点击查看Demo](http://leavingme.net/cnblogs/draganddrop/systemdemo.html)&nbsp;（仅支持IE）

**
相关资料**

1. JavaScript高级程序设计

2. HTML5 drag &amp; drop 拖拽与拖放简介&nbsp;[http://www.zhangxinxu.com/wordpress/?p=1419](http://www.zhangxinxu.com/wordpress/?p=1419)

3. MSDN: dataTransfer Object&nbsp;[http://msdn.microsoft.com/en-us/library/ms535861(v=VS.85).aspx](http://msdn.microsoft.com/en-us/library/ms535861(v=VS.85).aspx)
]]