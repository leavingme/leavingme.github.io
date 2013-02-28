---
layout: post
title: 放心使用 Google Libraries API
---
<p>Google 在2008年发布了 <a href="http://code.google.com/apis/libraries/" target="_blank">Google Libraries API</a>。Google 将优秀的 JavaScript 框架部署在其 CDN 上，在我们的网站上使用 Google Libraries API&nbsp;可以加速 JavaScript 框架的加载速度。</p>
<p>可是由于 Google 有时会被不稳定，所以一直也不敢使用&nbsp;Google Libraries API。今天在 jQuery.com 的源代码中看到了非常棒的使用方法，可以避免&nbsp;Google Libraries API 没有正确加载时造成的影响。</p>
<div class="cnblogs_Highlighter">
<pre class="brush:javascript">&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"&gt;&lt;/script&gt; 
&lt;script&gt;!window.jQuery &amp;&amp; document.write('&lt;script src="http://code.jquery.com/jquery-1.4.2.min.js"&gt;&lt;\/script&gt;');&lt;/script&gt; 
</pre>
</div>
判断 window.jQuery 对象是否存在，不存在则使用由网站自己提供的 jQuery。]]