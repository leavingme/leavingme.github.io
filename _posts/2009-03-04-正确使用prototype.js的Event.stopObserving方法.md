---
layout: post
title: 正确使用prototype.js的Event.stopObserving方法
---
最近在网上看到《[正确使用prototype.js的Event.stopObserving方法](http://my.donews.com/digitalghost/2006/07/25/sihgiowppuclsdzhpvgsbgghlrusqycjxmam/)》文章，[http://my.donews.com/digitalghost/2006/07/25/sihgiowppuclsdzhpvgsbgghlrusqycjxmam/](http://my.donews.com/digitalghost/2006/07/25/sihgiowppuclsdzhpvgsbgghlrusqycjxmam/)
原文 ：

<span style="background-color: #7fffd4;">今天使用时发现Event.stopObserving的一些问题，其实是使用得方法不当造成的。</span>

<span style="background-color: #7fffd4;">对于以下代码：</span>&nbsp;

<div class="cnblogs_code">![](http://www.cnblogs.com/images/OutliningIndicators/ContractedBlock.gif)![](http://www.cnblogs.com/images/OutliningIndicators/ExpandedBlockStart.gif)<span id="Code_Closed_Text_103324" class="cnblogs_code_Collapse">Code</span><span id="Code_Open_Text_103324">
<!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">var</span><span style="color: #000000;">&nbsp;ClassA&nbsp;</span><span style="color: #000000;">=</span><span style="color: #000000;">&nbsp;Class.create();
ClassA.prototype&nbsp;</span><span style="color: #000000;">=</span><span style="color: #000000;">&nbsp;{
initialize&nbsp;:&nbsp;</span><span style="color: #0000FF;">function</span><span style="color: #000000;">(){},
observe&nbsp;:&nbsp;</span><span style="color: #0000FF;">function</span><span style="color: #000000;">(){
　　Event.observe($(’span’),’click’,</span><span style="color: #0000FF;">this</span><span style="color: #000000;">._handlerA.bind(</span><span style="color: #0000FF;">this</span><span style="color: #000000;">));
　　Event.observe($(’span’),’click’,</span><span style="color: #0000FF;">this</span><span style="color: #000000;">._handlerB);
},
_handlerA&nbsp;:&nbsp;</span><span style="color: #0000FF;">function</span><span style="color: #000000;">(){
　　alert(’observer&nbsp;a’);
},
_handlerB&nbsp;:&nbsp;</span><span style="color: #0000FF;">function</span><span style="color: #000000;">(){
　　alert(’observer&nbsp;b’);
},
stopObserving&nbsp;:&nbsp;</span><span style="color: #0000FF;">function</span><span style="color: #000000;">(){
　　Event.stopObserving($(’span’),’click’,</span><span style="color: #0000FF;">this</span><span style="color: #000000;">._handlerA.bind(</span><span style="color: #0000FF;">this</span><span style="color: #000000;">));
　　Event.stopObserving($(’span’),’click’,</span><span style="color: #0000FF;">this</span><span style="color: #000000;">._handlerB);
}
}</span></span></div>

<span style="background-color: #7fffd4;">正常使用时：</span>

<span style="background-color: #7fffd4;">var ins = new ClassA();</span>

<span style="background-color: #7fffd4;">ins.observe();</span>

<span style="background-color: #7fffd4;">之后点击id=”span”的标签之后会正常调用ins._handlerA/B两个方法，接着执行：</span>

<span style="background-color: #7fffd4;">ins.stopObserving()方法之后，奇怪的现象发生了，会发现ins._handlerA依旧执行，也就是说并没有将原本hook到span上面的onclick handler A给取消掉。</span>

<span style="background-color: #7fffd4;">原因是：对于</span>

<span style="background-color: #7fffd4;">Event.observe($(’span’),’click’,this._handlerA.bind(this));</span>

<span style="background-color: #7fffd4;">这一行来说，this._handlerA.bind(this)是一个anonymous function,并没有一个确定的pointer指向这个function,所以当执行</span>

<span style="background-color: #7fffd4;">Event.stopObserving($(’span’),’click’,this._handlerA.bind(this));</span>

<span style="background-color: #7fffd4;">这一行的时候，this._handlerA.bind(this)指向另一个位置，所以并没有unhook span onclick event.</span>

<span style="background-color: #7fffd4;">解决的办法就是对于一个需要unhook的event来说，不要使用一个anonymous function 作为其event handler.</span>

我在使用也遇到同样的问题，在另一个blog看到解决这个问题的方法&nbsp;<span style="background-color: #7fffd4;">
<div class="cnblogs_code">![](http://www.cnblogs.com/images/OutliningIndicators/ContractedBlock.gif)![](http://www.cnblogs.com/images/OutliningIndicators/ExpandedBlockStart.gif)<span id="Code_Closed_Text_103446" class="cnblogs_code_Collapse">Code</span><span id="Code_Open_Text_103446">
<!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">this</span><span style="color: #000000;">.handler</span><span style="color: #000000;">=</span><span style="color: #0000FF;">this</span><span style="color: #000000;">._handlerA.bind(</span><span style="color: #0000FF;">this</span><span style="color: #000000;">);&nbsp;</span><span style="color: #008000;">//</span><span style="color: #008000;">让一个变量指向他</span><span style="color: #008000;">
</span><span style="color: #000000;">Event.observe($(</span><span style="color: #000000;">'</span><span style="color: #000000;">span</span><span style="color: #000000;">'</span><span style="color: #000000;">),</span><span style="color: #000000;">'</span><span style="color: #000000;">click</span><span style="color: #000000;">'</span><span style="color: #000000;">,</span><span style="color: #0000FF;">this</span><span style="color: #000000;">.handler);
Event.stopObserving($(</span><span style="color: #000000;">'</span><span style="color: #000000;">span</span><span style="color: #000000;">'</span><span style="color: #000000;">),</span><span style="color: #000000;">'</span><span style="color: #000000;">click</span><span style="color: #000000;">'</span><span style="color: #000000;">,</span><span style="color: #0000FF;">this</span><span style="color: #000000;">.handler);</span></span></div>
<font style="BACKGROUND-COLOR: #7fffd4;">
<p>这样就没有问题了

</font></span></p>

&nbsp;
]]