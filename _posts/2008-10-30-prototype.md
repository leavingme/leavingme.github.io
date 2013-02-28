---
layout: post
title: prototype
---
<div class="cnblogs_code">
<pre>![](http://www.cnblogs.com/images/OutliningIndicators/ContractedBlock.gif)![](http://www.cnblogs.com/images/OutliningIndicators/ExpandedBlockStart.gif)<span id="Code_Closed_Text_171054" class="cnblogs_code_Collapse">Code</span><span id="Code_Open_Text_171054">
<!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #000000;">Shape </span><span style="color: #000000;">=</span><span style="color: #000000;"> Class.create(); 
Shape.prototype </span><span style="color: #000000;">=</span><span style="color: #000000;"> { 
    initialize:</span><span style="color: #0000FF;">function</span><span style="color: #000000;">(color){ 
        </span><span style="color: #0000FF;">this</span><span style="color: #000000;">.color </span><span style="color: #000000;">=</span><span style="color: #000000;"> color; 
        </span><span style="color: #008000;">//</span><span style="color: #008000;">alert('in initialize'); </span><span style="color: #008000;">
</span><span style="color: #000000;">    },
    draw:</span><span style="color: #0000FF;">function</span><span style="color: #000000;">(){ 
        alert(</span><span style="color: #000000;">"</span><span style="color: #000000;">in draw</span><span style="color: #000000;">"</span><span style="color: #000000;">); 
        alert(</span><span style="color: #0000FF;">this</span><span style="color: #000000;">.color); 
    }
}

Circle </span><span style="color: #000000;">=</span><span style="color: #000000;"> Class.create(); 
Circle.prototype </span><span style="color: #000000;">=</span><span style="color: #000000;"> Object.extend(</span><span style="color: #0000FF;">new</span><span style="color: #000000;"> Shape(),{ 
    initialize:</span><span style="color: #0000FF;">function</span><span style="color: #000000;">(color,radius){ 
        </span><span style="color: #008000;">//</span><span style="color: #008000;">alert('in Circle initialize'); </span><span style="color: #008000;">
</span><span style="color: #000000;">        </span><span style="color: #0000FF;">this</span><span style="color: #000000;">.color </span><span style="color: #000000;">=</span><span style="color: #000000;"> color; 
        </span><span style="color: #0000FF;">this</span><span style="color: #000000;">.radius </span><span style="color: #000000;">=</span><span style="color: #000000;"> radius; 
    }, 
    drawCircle:</span><span style="color: #0000FF;">function</span><span style="color: #000000;">(){ 
        alert(</span><span style="color: #000000;">"</span><span style="color: #000000;">in drawCircle</span><span style="color: #000000;">"</span><span style="color: #000000;">); 
        alert(</span><span style="color: #000000;">"</span><span style="color: #000000;">color:</span><span style="color: #000000;">"</span><span style="color: #000000;">+</span><span style="color: #0000FF;">this</span><span style="color: #000000;">.color); 
        alert(</span><span style="color: #000000;">"</span><span style="color: #000000;">radius:</span><span style="color: #000000;">"</span><span style="color: #000000;">+</span><span style="color: #0000FF;">this</span><span style="color: #000000;">.radius); 
    } 
})

</span><span style="color: #0000FF;">var</span><span style="color: #000000;"> circle </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">new</span><span style="color: #000000;"> Circle(</span><span style="color: #000000;">"</span><span style="color: #000000;">green</span><span style="color: #000000;">"</span><span style="color: #000000;">, </span><span style="color: #000000;">10</span><span style="color: #000000;">);
alert(circle </span><span style="color: #0000FF;">instanceof</span><span style="color: #000000;"> Shape);
alert(circle </span><span style="color: #0000FF;">instanceof</span><span style="color: #000000;"> Circle);

</span><span style="color: #0000FF;">var</span><span style="color: #000000;"> shape </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">new</span><span style="color: #000000;"> Shape(</span><span style="color: #000000;">"</span><span style="color: #000000;">red</span><span style="color: #000000;">"</span><span style="color: #000000;">);
alert(shape </span><span style="color: #0000FF;">instanceof</span><span style="color: #000000;"> Shape);
alert(shape </span><span style="color: #0000FF;">instanceof</span><span style="color: #000000;"> Circle);</span></span></pre>
</div>

&nbsp;

<div class="cnblogs_code">
<pre>![](http://www.cnblogs.com/images/OutliningIndicators/ContractedBlock.gif)![](http://www.cnblogs.com/images/OutliningIndicators/ExpandedBlockStart.gif)<span id="Code_Closed_Text_173845" class="cnblogs_code_Collapse">Code</span><span id="Code_Open_Text_173845">
<!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> class1(){
}

class1.prototype </span><span style="color: #000000;">=</span><span style="color: #000000;"> {
    m1 : </span><span style="color: #0000FF;">function</span><span style="color: #000000;">() {
        alert(</span><span style="color: #000000;">1</span><span style="color: #000000;">);
    }
}

</span><span style="color: #0000FF;">function</span><span style="color: #000000;"> class2(){
}

class2.prototype </span><span style="color: #000000;">=</span><span style="color: #000000;"> class1.prototype;
class2.prototype.method </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">function</span><span style="color: #000000;">(){
    alert(</span><span style="color: #000000;">2</span><span style="color: #000000;">);
}

</span><span style="color: #0000FF;">var</span><span style="color: #000000;"> obj1 </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">new</span><span style="color: #000000;"> class1();
</span><span style="color: #0000FF;">var</span><span style="color: #000000;"> obj2 </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">new</span><span style="color: #000000;"> class2();

obj1.method();
obj2.method();

obj1.m1();
obj2.m1();

class2.prototype.m1 </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">function</span><span style="color: #000000;">() {
    alert(</span><span style="color: #000000;">3</span><span style="color: #000000;">);
}

obj1.m1();
obj2.m1();</span></span></pre>
</div>]]