---
layout: post
title: Relearn jQuery
---
<p>好久都没有关注jQuery了，趁着这次 1.7.2 的发布，学点新东西</p>
<p>http://api.jquery.com/category/version/1.7/</p>
<p>1.7 带来的改变</p>
<p>Event APIs: .on() and .off()</p>
<p>统一并代替了.bind() 和 .delegate() 方法，下面是新老API的比较</p>
<div class="cnblogs_Highlighter">
<pre class="brush:javascript;gutter:true;">$('a').bind('click', myHandler);
$('a').on('click', myHandler);

$('form').bind('submit', { val: 42 }, fn);
$('form').on('submit', { val: 42 }, fn);

$(window).unbind('scroll.myPlugin');
$(window).off('scroll.myPlugin');

$('.comment').delegate('a.add', 'click', addNew);
$('.comment').on('click', 'a.add', addNew);

$('.dialog').undelegate('a', 'click.myDlg');
$('.dialog').off('click.myDlg', 'a');

$('a').live('click', fn);
$(document).on('click', 'a', fn);

$('a').die('click');
$(document).off('click', 'a');
</pre>
</div>
<p>　　</p>
<p>Better Support for HTML5 in IE6/7/8<br />jQuery.Callbacks()<br />Toggling Animations Work Intuitively</p>]]