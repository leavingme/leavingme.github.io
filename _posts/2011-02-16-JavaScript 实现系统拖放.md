除了Opera，目前的浏览器均已经支持系统拖放了。拖放事件
1.拖动项事件
dragstart; drag; dragend;
点击查看Demo2. 放置目标事件
dragenter; dragover; dragleave; drop;
点击查看Demo
一般来说，拖动项的事件总是先发生，除了 drop 事件要比 dragend 先触发。
点击查看Demo
默认情况下，文本框（<input/>或者<textarea/>是网页上唯一有效的放置目标），不过通过改变 dragover 和dragenter 事件的行为，可以在任何对象创建放置目标。
不允许放置，点击查看Demo
允许放置，点击查看Demo数据传输对象 dataTransfer
1. 方法
getDate 和 setData()
可以设置两种类型的数据：普通文本和URL

oEvent.dataTransfer.setData("Text", "some text");
var sData = oEvent.dataTransfer.getData("text");
oEvent.dataTransfer.setData("URL", "http://leavingme.net");
var sURL = oEvent.dataTransfer.getData("URL");



存储在 dataTransfer 对象中的数据在 drop 事件发生前可用。如果在 ondrop 事件处理函数中没有去获取其中的数据，那么 dataTransfer 就会被销毁，数据丢失。
在写Demo的时候发现，IE9下无法正常看到结果，而IE7是正常的。经过比对 MSDN IE9 提供的示例发现，应该使用 window.event 对象而不是使用 DOM 的 event 对象。

function handleDragDropEvent(oEvent) {
	oEvent = window.event || oEvent;
	// todo
};

Text数据，点击查看Demo
URL数据，点击查看Demo2. dropEffect 和 effectAllowed
点击查看DemodragDrop方法
dragDrop方法可以用于几乎所有的HTML元素。通过调用dragDrop()来初始化系统拖动事件，可让一般情况下不能拖动的项触发dragstart、drag和dragend事件。

oElement.onmousemove = function(oEvent) {
	if(oEvent.button == 1) {
		oElement.dragDrop();
	}
}

IE drag & drop 删除元素 Demo
张鑫旭同学写了个 HTML5 drag & drop 删除元素 Demo，那我就写个 IE 下的吧。
HTML 代码

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>IE drag & drop 拖拽与拖放测试</title>
</head>
<body>
<div class="dustbin" ondragenter="handleDragDropEvent(event)" ondragover="handleDragDropEvent(event)" ondragleave="handleDragDropEvent(event)" ondrop="handleDragDropEvent(event)"><br />
  垃<br />
  圾<br />
  箱</div>
<div class="dragbox">
  <div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)">列表1</div>
  <div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)">列表2</div>
  <div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)">列表3</div>
  <div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)">列表4</div>
  <div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)">列表5</div>
  <div class="draglist" title="拖拽我" onMouseMove="handleMouseMove(event)" ondragstart="handleDragDropEvent(event)">列表6</div>
</div>
<div id="dragremind"></div>
</body>
</html>

CSS 代码

<style type="text/css">
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
</style>

JavaScript 代码

<script type="text/javascript">
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
			dragremind.innerHTML = '<strong>' + text + '</strong>被扔进了垃圾箱';
			if(currentDom) {
				currentDom.parentNode.removeChild(currentDom);
			}
			break;
	}
}
</script>

点击查看Demo （仅支持IE）
相关资料
1. JavaScript高级程序设计
2. HTML5 drag & drop 拖拽与拖放简介 http://www.zhangxinxu.com/wordpress/?p=1419
3. MSDN: dataTransfer Object http://msdn.microsoft.com/en-us/library/ms535861(v=VS.85).aspx]]