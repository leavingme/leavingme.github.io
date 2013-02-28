最近在网上看到《正确使用prototype.js的Event.stopObserving方法》文章，http://my.donews.com/digitalghost/2006/07/25/sihgiowppuclsdzhpvgsbgghlrusqycjxmam/原文 ：
今天使用时发现Event.stopObserving的一些问题，其实是使用得方法不当造成的。
对于以下代码： 
Code<br /><br />Code highlighting produced by Actipro CodeHighlighter (freeware)<br />http://www.CodeHighlighter.com/<br /><br />var ClassA = Class.create();ClassA.prototype = {initialize : function(){},observe : function(){　　Event.observe($(’span’),’click’,this._handlerA.bind(this));　　Event.observe($(’span’),’click’,this._handlerB);},_handlerA : function(){　　alert(’observer a’);},_handlerB : function(){　　alert(’observer b’);},stopObserving : function(){　　Event.stopObserving($(’span’),’click’,this._handlerA.bind(this));　　Event.stopObserving($(’span’),’click’,this._handlerB);}}
正常使用时：
var ins = new ClassA();
ins.observe();
之后点击id=”span”的标签之后会正常调用ins._handlerA/B两个方法，接着执行：
ins.stopObserving()方法之后，奇怪的现象发生了，会发现ins._handlerA依旧执行，也就是说并没有将原本hook到span上面的onclick handler A给取消掉。
原因是：对于
Event.observe($(’span’),’click’,this._handlerA.bind(this));
这一行来说，this._handlerA.bind(this)是一个anonymous function,并没有一个确定的pointer指向这个function,所以当执行
Event.stopObserving($(’span’),’click’,this._handlerA.bind(this));
这一行的时候，this._handlerA.bind(this)指向另一个位置，所以并没有unhook span onclick event.
解决的办法就是对于一个需要unhook的event来说，不要使用一个anonymous function 作为其event handler.我在使用也遇到同样的问题，在另一个blog看到解决这个问题的方法 
Code<br /><br />Code highlighting produced by Actipro CodeHighlighter (freeware)<br />http://www.CodeHighlighter.com/<br /><br />this.handler=this._handlerA.bind(this); //让一个变量指向他Event.observe($('span'),'click',this.handler);Event.stopObserving($('span'),'click',this.handler);

这样就没有问题了

 ]]