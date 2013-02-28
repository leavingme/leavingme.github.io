---
layout: post
title: JavaScript 的 replace() 方法
---
<p><span style="font-family: Verdana;" face="Verdana">在JavaScript中，String的函数replace()简直太让人喜爱了。它灵活而强大的字符替换处理能力，让我不禁想向大家介绍它。</span></p>
<p><span style="font-family: Verdana;" face="Verdana">replace()最简单的算是能力就是简单的字符替换。示例代码如下：</span></p>
<p>
<div class="cnblogs_Highlighter">
<pre class="brush:javascript;gutter:true;">var str = "javascript is a good script language";
// 在此我想将字母a替换成字母A
alert(str.replace("a","A"));
// jAvascript is a good script language</pre>
</div>
</p>
<p><span style="font-family: Verdana;">我想大家运行后可以看到结果，它只替换了首字母。但如果加上正则表达式结果就不一样了！呵呵，没错。replace()支持正则表达式，它可以按照正则表达式的规则匹配字符或字符串，然后给予替换！</span></p>

<div class="cnblogs_Highlighter">
<pre class="brush:javascript;gutter:true;">var str = "javascript is a good script language";
// 在此我想将字母a替换成字母A
alert(str.replace(/a/,"A"));
// jAvascript is a good script language
</pre>
</div>

<p><span style="font-family: Verdana;">呵呵，您一定发现了。这样还是只替换了第一个字母a。如果您熟悉正则，那这就难不住您。稍加修改就OK了。</span></p>

<div class="cnblogs_Highlighter">
<pre class="brush:javascript;gutter:true;">var str = "javascript is a good script language";
// 在此我想将字母a替换成字母A
alert(str.replace(/a/g,"A"));
// jAvAscript is A good script lAnguAge</pre>
</div>

<p><span style="font-family: Verdana;">还可以这样，看看效果！</span></p>
<p><span style="font-family: Verdana;">
<div class="cnblogs_Highlighter">
<pre class="brush:javascript;gutter:true;">var str = "javascript is a good script language";
alert(str.replace(/(javascript)\s*(is)/g,"$1 $2 fun. it $2"));
// javascript is fun. it is a good script language
</pre>
</div>
<br /></span></p>
<p><span style="font-family: Verdana;" face="Verdana">我这儿举的例子都是很简单的应用，replace()在此点上与您使用正则表达式的能力成正比。您正则表达式越强，呵呵，那您就会越疯狂的爱上它。</span></p>
<p><span style="font-family: Verdana;" face="Verdana">当然，我这儿推荐replace()的原因并不因为它能与正则表达式合作，而在于它还能与函数进行合作，发挥出强大的功能。</span></p>
<p><span style="font-family: Verdana;" face="Verdana">先看看简单例子：将所有单词首字母换成大写。</span></p>
<p><span face="Verdana" style="font-family: Verdana;">
</span></p>
<div class="cnblogs_Highlighter">
<pre class="brush:javascript">&lt;script language="javascript"&gt;
var strM = "javascript is a good script language";
function change(word) {
　return word.indexOf(0).toUpperCase()+word.substring(1);
}
alert(strM.replace(/\b\w+\b/g,change));
&lt;/script&gt;
</pre>
</div>
<br />
<p><span style="font-family: Verdana;" face="Verdana">　　由上可知，当正则表达式有"g"标志时，代表将处理整个字符串，即函数change的变换将应用于所有匹配的对象。而该函数有三个或更多参数，具体个数视正则表达式而定。</span></p>
<p><span style="font-family: Verdana;" face="Verdana">　　有了函数与正则表达式的配合，replace()处理字符串的功能空前强大起来了！</span></p>
<p><span style="font-family: Verdana;" face="Verdana">　　最后还举个例子，将字符串所有单词倒序，用replace()处理是如此简单。</span></p>
<p><span style="font-family: Verdana;" face="Verdana">
</span></p>
<div class="cnblogs_Highlighter">
<pre class="brush:javascript">&lt;script language="javascript"&gt;
var strM = "javascript is a good script language";
function change(word) {
	var result = word.match(/(\w)/g);
	if(result) {
		var str = "";
		for(var i=result.length-1; i&gt;=0; i-- ) {
　　 str += result;
　}
　return str;
}
else
{
　 return "null";
}
}
alert(strM.replace(/\b(\w)+\b/g,change));
&lt;/script&gt; 
 
</pre>
</div>
<br />]]