---
layout: post
title: 理解使用 JavaScript 构建 Metro 应用
---
<p>从 Windows 7 升级到 Windows 8&nbsp;Consumer Preview 后，会导致&nbsp;Microsoft Visual Studio 11 Express Beta for Windows 8 无法申请开发者证书。</p>
<p>Upgrade from Windows 7 can cause the “We couldn’t get your developer license” error&nbsp;</p>
<p>解决方法在这里：http://t.cn/zOVOlmS 其实就是重装</p>
<p>&nbsp;</p>
<p>这里是中文教程</p>
<p>使用 JavaScript 创建你的第一个 Metro 风格应用：http://msdn.microsoft.com/zh-cn/library/windows/apps/br211385</p>
<p>&nbsp;</p>
<p>每个 HTML 都需要引用 WinJS和样式</p>
<p>&lt;link href="//Microsoft.WinJS.0.6/css/ui-dark.css" rel="stylesheet"&gt;<br /> &lt;script src="//Microsoft.WinJS.0.6/js/base.js"&gt;&lt;/script&gt;<br /> &lt;script src="//Microsoft.WinJS.0.6/js/ui.js"&gt;&lt;/script&gt;</p>
<p>适用于 Metro 风格应用的 JavaScript 项目模板</p>
<p><a href="http://msdn.microsoft.com/zh-cn/library/windows/apps/hh758331.aspx">http://msdn.microsoft.com/zh-cn/library/windows/apps/hh758331.aspx</a></p>
<p>&nbsp;</p>
<p>default.html　　该文件最先加载，并为内容主体（其中每个页面都加载进主窗体）提供标记。</p>
<p>default.css 为内容主体页面和应用整体指定 CSS 样式</p>
<p>default.js 指定当启动应用时的应用的行为</p>
<div class="cnblogs_Highlighter">
<pre class="brush:javascript;gutter:true;">// For an introduction to the Split template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=232447
(function () {
    "use strict";

    var app = WinJS.Application;

    app.onactivated = function (eventObject) {
        if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            if (eventObject.detail.previousExecutionState !== Windows.ApplicationModel.Activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize 
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension. 
                // Restore application state here.
            }
            WinJS.UI.processAll();
        }
    };

    app.oncheckpoint = function (eventObject) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the 
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // eventObject.setPromise(). 
    };

    app.start();
})();
</pre>
</div>
<p>　　</p>
<p>Metro应用的生命周期</p>
<p>应用的生命周期在应用启动时开始，并在应用关闭时结束。项目模板包还一个用于管理应用生命周期的通用模式。</p>
<p>&nbsp;</p>
<p>default.html文件被设置为每个模板的起始页面。default.html对应的JavaScript文件包含以下对WinJS.Application.start的调用，该调用会启动应用事件的分发。</p>
<p>&nbsp;</p>
<p><a href="http://www.infoq.com/cn/news/2009/12/ecmascript5">http://www.infoq.com/cn/news/2009/12/ecmascript5</a></p>
<p>严格模式的引入，目的在于避免ECMAScript应用中通常的代码问题。这是通过在单元（脚本或函数）上指定一句话来达到的：</p>
<p>"use strict;"<br />这句话不会对已有的运行时产生什么影响，但版本是5的新运行时就会为整个脚本（如果这句话定义在脚本开头）或者单个函数（如果定义在函数的开头）打开严格模式。这样就允许计划中的既有代码对严格模式和非严格模式的混合使用。那么，严格模式意味着什么呢？</p>
<p>变量在使用前必须声明。换句话说，i=3这下就是个运行时错误了；需要var i=3（如果i在做作用域里面没有定义过）<br />eval变成保留字，而从eval引入的新变量不再有效，因此eval("var i=3"); print(i);现在会抛出错误。<br />不再使用八进制；所以010就是十，不再是八。<br />如果configurable被设置成false，delete就不能使用在参数、函数、变量或者其他属性上。<br />一般会带来错误的with语句，将不再使用，会被认为是语法错误。<br />函数不再能使用具有相同名称的重复参数。<br />对象不再能使用具有相同名称的重复属性。<br />arguments和caller变量不再可变。<br />对全局对象的访问将会是运行时错误。</p>
<p>&nbsp;</p>
<p>右侧博客园的文章一直不能正常显示，一直在找代码的原因，纠结了好久。</p>
<p>toStaticHTML的方法，&lt;a&gt;标签中有target="_blank"会被替换掉。</p>
<p>再一个就是无法显示的图像也会导致无法正常显示文章，用下面的正则替换掉后即可。</p>
<p>staticContent = staticContent.replace(/&lt;img src=.*aggbug.*&gt;/, '');&nbsp;</p>
<p>&nbsp;</p>
<p><img src="http://pic002.cnblogs.com/images/2012/18938/2012031200191574.png" alt="" width="700" /></p>]]