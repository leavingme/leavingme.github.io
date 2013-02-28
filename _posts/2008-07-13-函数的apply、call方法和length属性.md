---
layout: post
title: 函数的apply、call方法和length属性
---
<font face="Verdana"><font face="Verdana">JavaScript为函数对象定义了两个方法：apply和 call，它们的作用都是将函数绑定到另外一个对象上去运行，两者仅在定义参数的方式有所区别： <br />
Function.prototype.apply(thisArg,argArray); <br />
Function.prototype.call(thisArg[,arg1[,arg2…]]); <br />
从函数原型可以看到，第一个参数都被取名为 thisArg，也就是说，所有函数内部的 this 指针都会被赋值为 thisArg，这就达到了将函数作为另外一个对象的方法运行的目的。两个方法除了 thisArg 参数，都是为 Function 对象传递的参数。下面的代码说明了 apply 和 call 方法的工作方式： <br />
<div class="cnblogs_code"><span style="color: #008000;">//</span><span style="color: #008000;">定义一个函数func1，具有属性p和方法A&nbsp;</span><span style="color: #008000;"><br />
</span><span style="color: #0000ff;">function</span><span style="color: #000000;">&nbsp;func1(){&nbsp;<br />
&nbsp;&nbsp;</span><span style="color: #0000ff;">this</span><span style="color: #000000;">.p</span><span style="color: #000000;">=</span><span style="color: #000000;">"</span><span style="color: #000000;">func1-</span><span style="color: #000000;">"</span><span style="color: #000000;">;&nbsp;&nbsp;&nbsp;<br />
&nbsp;&nbsp;</span><span style="color: #0000ff;">this</span><span style="color: #000000;">.A</span><span style="color: #000000;">=</span><span style="color: #0000ff;">function</span><span style="color: #000000;">(arg){&nbsp;<br />
&nbsp;&nbsp;&nbsp;&nbsp;alert(</span><span style="color: #0000ff;">this</span><span style="color: #000000;">.p</span><span style="color: #000000;">+</span><span style="color: #000000;">arg);&nbsp;<br />
&nbsp;&nbsp;}&nbsp;<br />
}&nbsp;<br />
</span><span style="color: #008000;">//</span><span style="color: #008000;">定义一个函数func2，具有属性p和方法B&nbsp;</span><span style="color: #008000;"><br />
</span><span style="color: #0000ff;">function</span><span style="color: #000000;">&nbsp;func2(){&nbsp;<br />
&nbsp;&nbsp;</span><span style="color: #0000ff;">this</span><span style="color: #000000;">.p</span><span style="color: #000000;">=</span><span style="color: #000000;">"</span><span style="color: #000000;">func2-</span><span style="color: #000000;">"</span><span style="color: #000000;">;&nbsp;<br />
&nbsp;&nbsp;</span><span style="color: #0000ff;">this</span><span style="color: #000000;">.B</span><span style="color: #000000;">=</span><span style="color: #0000ff;">function</span><span style="color: #000000;">(arg){&nbsp;<br />
&nbsp;&nbsp;&nbsp;&nbsp;alert(</span><span style="color: #0000ff;">this</span><span style="color: #000000;">.p</span><span style="color: #000000;">+</span><span style="color: #000000;">arg);&nbsp;<br />
&nbsp;&nbsp;}&nbsp;<br />
}&nbsp;<br />
</span><span style="color: #0000ff;">var</span><span style="color: #000000;">&nbsp;obj1</span><span style="color: #000000;">=</span><span style="color: #0000ff;">new</span><span style="color: #000000;">&nbsp;func1();&nbsp;<br />
</span><span style="color: #0000ff;">var</span><span style="color: #000000;">&nbsp;obj2</span><span style="color: #000000;">=</span><span style="color: #0000ff;">new</span><span style="color: #000000;">&nbsp;func2();&nbsp;<br />
obj1.A(</span><span style="color: #000000;">"</span><span style="color: #000000;">byA</span><span style="color: #000000;">"</span><span style="color: #000000;">);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #008000;">//</span><span style="color: #008000;">显示func1-byA&nbsp;</span><span style="color: #008000;"><br />
</span><span style="color: #000000;">obj2.B(</span><span style="color: #000000;">"</span><span style="color: #000000;">byB</span><span style="color: #000000;">"</span><span style="color: #000000;">);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #008000;">//</span><span style="color: #008000;">显示func2-byB&nbsp;</span><span style="color: #008000;"><br />
</span><span style="color: #000000;">obj1.A.apply(obj2,[</span><span style="color: #000000;">"</span><span style="color: #000000;">byA</span><span style="color: #000000;">"</span><span style="color: #000000;">]);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #008000;">//</span><span style="color: #008000;">显示func2-byA，其中[“byA”]是仅有一个元素的数组，下同&nbsp;</span><span style="color: #008000;"><br />
</span><span style="color: #000000;">obj2.B.apply(obj1,[</span><span style="color: #000000;">"</span><span style="color: #000000;">byB</span><span style="color: #000000;">"</span><span style="color: #000000;">]);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #008000;">//</span><span style="color: #008000;">显示func1-byB&nbsp;</span><span style="color: #008000;"><br />
</span><span style="color: #000000;">obj1.A.call(obj2,</span><span style="color: #000000;">"</span><span style="color: #000000;">byA</span><span style="color: #000000;">"</span><span style="color: #000000;">);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #008000;">//</span><span style="color: #008000;">显示func2-byA&nbsp;</span><span style="color: #008000;"><br />
</span><span style="color: #000000;">obj2.B.call(obj1,</span><span style="color: #000000;">"</span><span style="color: #000000;">byB</span><span style="color: #000000;">"</span><span style="color: #000000;">);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #008000;">//</span><span style="color: #008000;">显示func1-byB&nbsp;</span></div>
<font face="Verdana">可以看出， obj1的方法A被绑定到obj2运行后， 整个函数A的运行环境就转移到了obj2，即this指针指向了obj2。同样obj2的函数 B也可以绑定到 obj1对象去运行。代码的最后 4 行显示了apply和call函数参数形式的区别。 <br />
与 arguments 的 length属性不同，函数对象的还有一个参数相关的属性 length，它表示函数定义时所指定参数的个数，而非调用时实际传递的参数个数。 例如下面的代码将显示2：&nbsp; <br />
<div class="cnblogs_code"><span style="color: #0000ff;">function</span><span style="color: #000000;">&nbsp;sum(a,b){&nbsp;<br />
&nbsp;&nbsp;</span><span style="color: #0000ff;">return</span><span style="color: #000000;">&nbsp;a</span><span style="color: #000000;">+</span><span style="color: #000000;">b;&nbsp;<br />
}&nbsp;<br />
alert(sum.length);&nbsp;</span></div>
</font></font></font>
]]