拖放（Drag-and-Drop）是网页中经常出现的效果，比如：iGoogle里的gadget、QZone里的模块、cnblogs里的插入代码对话框等。咋一看对于实现该效果毫无头绪，实际上理清思路就比较好实现了。问：把大象放冰箱里分几步？
答：分三步。1. 打开冰箱门；2. 把大象放进去；3. 关上冰箱门。那拖放效果分几步呢？
1. 按下鼠标mousedown；2. 移动鼠标mousemove；3. 松开鼠标mouseup。一、简单实现
根据上面的思路开始编码。HTML 代码：#box是拖放的对象


<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>drag & drop</title>
</head>
<body>
<div id="box">BOX</div>
<div id="debug"></div>
</body>
</html>




CSS 代码：#box 绝对定位


<style type="text/css">
body {
	margin: 0;
	padding: 0;
}
#box {
	position: absolute;
	cursor: default;
	width: 100px;
	height: 100px;
	border: 1px solid red;
}
</style>



JavaScript 代码：为 box 对象绑定了 4 个事件。在鼠标按下时设置全局标志 mousedown = true，鼠标移动时判断全局标志 mousedown，为 true 就设置 box 对象的样式，松开鼠标时设置全部标志 mousedown = false


<script type="text/javascript">
window.onload = function() {
	var box = document.getElementById("box");
	var debug = document.getElementById("debug");
	
	box.addEventListener('selectstart', function(event) {
		event.returnValue = false;
	});
	
	box.addEventListener('mousedown', function(event) {
		mousedown = true;
	});
	
	box.addEventListener('mouseup', function() {
		mousedown = false;
	});
	
	box.addEventListener('mousemove', function(event) {
		if(mousedown) {
			//改变 box 对象的样式
		}
	});
};
</script>


JavaScript 代码：移动鼠标时改变box对象的样式


box.addEventListener('mousemove', function(event) {
	if(mousedown) {
		box.style.left = (event.clientX - 50) + 'px';
		box.style.top = (event.clientY - 50) + 'px';
	}
});



拖放效果基本实现了，点击查看Demo（请使用 Chrome、Safari 或 Firefox）
通过运行 Demo 会发现存在着一些问题：
1. 当鼠标移动过快，BOX会被甩掉；
2. 当鼠标移动到浏览器外部，再移动到内部时，松开鼠标，BOX会继续移动；
3. 移动时鼠标相对BOX的位置不是鼠标第一次点击时相对BOX的位置。二、后续完善
针对上面的问题，改进方案如下：
JavaScript代码：当按下鼠标时获取鼠标指针和 box 对象的间距，移动鼠标修改 box 对象样式时减去该间距。同时移动鼠标事件和松开鼠标事件的绑定对象修改为document


<script type="text/javascript">
window.onload = function() {
	var box = document.getElementById("box");
	var debug = document.getElementById("debug");
	
	var mousedown = false;
	var offsetX = 0, offsetY = 0;
	
	box.addEventListener('selectstart', function(event) {
		event.returnValue = false;
	});
	
	box.addEventListener('mousedown', function(event) {
		mousedown = true;
		offsetX = event.layerX;
		offsetY = event.layerY;
	});
	
	document.addEventListener('mouseup', function() {
		mousedown = false;
	});
	
	document.addEventListener('mousemove', function(event) {
		if(mousedown) {
			//改变 box 对象的样式
			box.style.left = (event.clientX - offsetX) + 'px';
			box.style.top = (event.clientY - offsetY) + 'px';
		}
	});
};
</script>




点击查看Demo（请使用 Chrome、Safari 或 Firefox）三、jQuery 插件
为了方便使用该功能包装成jQuery的插件。
jQuery 插件：


(function($) {
	var data = {
		currentObj : null,
		offsetX : 0,
		offsetY : 0,
		flag : false
	};
	
	$(document).mouseup(function() {
		data.current = null;
		data.flag = false;
	});
	
	$(document).mousemove(function(event) {
		if(data.flag && data.currentObj) {
			data.currentObj.css({
				left : (event.clientX - data.offsetX) + 'px',
				top : (event.clientY - data.offsetY) + 'px'
			});
		}
	});
	
	$.fn.extend({
		draggable : function() {
			return this.each(function() {
				var $this = $(this);
				$this.bind('selectstart', function() {
					return false;
				}).mousedown(function(event) {
					data.currentObj = $this;
					data.offsetX = event.layerX;
					data.offsetY = event.layerY;
					data.flag = true;
				});
			});
		}
	});
})(jQuery);


使用方法：


$(function() {
	$('#box, #otherBox').draggable();
});



点击查看Demo（请使用 Chrome、Safari 或 Firefox）四、未来跟进
1. IE兼容性问题
2. 多个元素拖放时z-index的问题五、参考资料
JavaScript实现最简单的拖拽效果：http://www.zhangxinxu.com/wordpress/?p=683
jQuery 插件创作：http://docs.jquery.com/Plugins/Authoring]]