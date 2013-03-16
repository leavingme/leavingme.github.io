---
layout: post
title: Using the Data Package in Sencha Touch
date: 2010-10-23 20:26:00
---
<div style="padding-bottom: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; min-height: 100px; padding-left: 0px; padding-right: 0px; word-wrap: break-word; padding-top: 0px;" class="t_msgfontfix" id="aeaoofnhgocdbnbeljkmbjdmhbcokfdb-mousedown"><font class="Apple-style-span" face="Verdana, Helvetica, Arial, sans-serif" size="3"><span class="Apple-style-span" style="border-collapse: collapse; line-height: normal;">原文链接：</span></font><span class="Apple-style-span" id="" style="border-collapse: separate; font-family: verdana, 'courier new'; line-height: 21px;">&nbsp;</span><span class="Apple-style-span" style="border-collapse: collapse; line-height: normal;"><font class="Apple-style-span" size="3" face="Verdana, Helvetica, Arial, sans-serif"></font></span>[http://www.sencha.com/blog/2010/08/17/using-the-data-package-in-sencha-touch/](http://www.sencha.com/blog/2010/08/17/using-the-data-package-in-sencha-touch/)</div>

August 17, 2010 by Ed Spencer

<span style="line-height: 22px; letter-spacing: 2px; color: #444444;" class="Apple-style-span">Sencha Touch&nbsp;的核心部分之一是数据包。</span><span style="line-height: 22px; letter-spacing: 2px; color: #444444;" class="Apple-style-span">数据包允许应用程序通过内建的模型，存储和代理类的达到数据持久化。</span><span style="line-height: 22px; letter-spacing: 2px; color: #444444;" class="Apple-style-span">大多数应用程序将使用一个或多个包含在&nbsp;</span><span style="line-height: 22px; letter-spacing: 2px; color: #444444;" class="Apple-style-span">Sencha Touch 中</span><span style="line-height: 22px; letter-spacing: 2px; color: #444444;" class="Apple-style-span">经常将许多支持存储的可视化组件的这些类。</span>

<span style="line-height: 22px; letter-spacing: 2px; color: #444444;" class="Apple-style-span">数据包的根是 Ext.data.Model。模型代表应用程序中的数据类型 - 用户，产品，销售 - 任何东西。让我们想像我们正在创建一个应用程序来管理一个电子商务系统中的产品&nbsp;- 这是我们建立的产品模型：</span>

<div style="padding-bottom: 0px; margin: 0px; min-height: 100px; padding-left: 0px; padding-right: 0px; word-wrap: break-word; padding-top: 0px;" class="t_msgfontfix"><font class="Apple-style-span">
<div style="background-image: url(http://bbs.ajaxjs.com/images/default/codebg.gif); border-bottom: #cccccc 1px solid; border-left: #cccccc 1px solid; padding-bottom: 5px; overflow-x: hidden; overflow-y: hidden; background-color: #f7f7f7; margin: 10px 0px; padding-left: 10px; width: 586px; padding-right: 0px; word-wrap: break-word; background-position: 0px 0px; border-top: #cccccc 1px solid; border-right: #cccccc 1px solid; padding-top: 10px; background-origin: initial; background-clip: initial;" class="blockcode">
<div style="padding-bottom: 0px; line-height: normal; margin: 0px; padding-left: 0px; padding-right: 0px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; word-wrap: break-word; letter-spacing: 2px; color: #444444; font-size: 14px; padding-top: 0px;" id="code0">

1.  Ext.regModel('Product', {</div>
<div style="padding-bottom: 0px; line-height: normal; margin: 0px; padding-left: 0px; padding-right: 0px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; word-wrap: break-word; letter-spacing: 2px; color: #444444; font-size: 14px; padding-top: 0px;" id="code0">

1.  &nbsp; &nbsp; fields: [

2.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{name: 'name',&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;type: 'string'},

3.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{name: 'description', type: 'string'},

4.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{name: 'price',&nbsp; &nbsp;&nbsp; &nbsp; type: 'float'},

5.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{name: 'image_url',&nbsp; &nbsp;type: 'string'},

6.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{name: 'in_stock',&nbsp; &nbsp; type: 'boolean'}

7.  &nbsp; &nbsp; ]

8.  });</div></div><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span">Ext.regModel&nbsp;告诉 Sencha Touch&nbsp;使用设置的字段创建一个新的模型。我们可以在以后通过名称引用这个模型来轻松地配置组件加载的产品数据。</span><font class="Apple-style-span" color="#444444" face="Verdana, Helvetica, Arial, sans-serif"><span style="line-height: 22px; border-collapse: collapse; letter-spacing: 2px;" class="Apple-style-span">在这个例子中我们的应用程序是我们的电子商务网站的HTML5前端。我想使用一个页面来展示我们的产品 - 这里我们使用DataView来创建：</span></font> 
<div style="background-image: url(http://bbs.ajaxjs.com/images/default/codebg.gif); border-bottom: #cccccc 1px solid; border-left: #cccccc 1px solid; padding-bottom: 5px; overflow-x: hidden; overflow-y: hidden; background-color: #f7f7f7; margin: 10px 0px; padding-left: 10px; width: 586px; padding-right: 0px; word-wrap: break-word; background-position: 0px 0px; border-top: #cccccc 1px solid; border-right: #cccccc 1px solid; padding-top: 10px; background-origin: initial; background-clip: initial;" class="blockcode">
<div style="padding-bottom: 0px; line-height: normal; margin: 0px; padding-left: 0px; padding-right: 0px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; word-wrap: break-word; letter-spacing: 2px; color: #444444; font-size: 14px; padding-top: 0px;" id="code1">

1.  var productsList = new Ext.DataView({

2.  &nbsp; &nbsp;&nbsp;<span style="border-bottom: #ff0000 1px solid; padding-bottom: 0px; line-height: normal; margin: 0px; padding-left: 0px; padding-right: 0px; word-wrap: break-word; white-space: nowrap; cursor: pointer; padding-top: 0px;" class="t_tag" href="tag.php?name=store">store</span>: new Ext.data.Store({

3.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;model: 'Product',

4.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;proxy: {

5.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;type: 'ajax’,

6.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;url : '/products.json',

7.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;reader: {

8.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; type: 'json',

9.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; root: 'products'

10.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;}

11.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;}

12.  &nbsp; &nbsp; }),

13.  &nbsp; &nbsp; tpl: new Ext.XTemplate(

14.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;'&lt;div class="product"&gt;',

15.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;'&lt;img src="{image_url}" /&gt;',

16.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;'&lt;div class="button"&gt;Buy&lt;/div&gt;',

17.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;'&lt;/div&gt;'

18.  &nbsp; &nbsp; ),

19.  &nbsp; &nbsp; fullscreen: true

20.  });</div></div><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span">
<div dir="ltr">在上面的例子，我们在 DataView 创建了一个Store。Store 是模型的实例集合. Stores 通过代理类载入他的数据 - 在这个例子我们设置一个简单的‘ajax’ 代理并指示它通过 url '/products.json' 来载入它的数据。我们还提供了一个Reader，它告诉代理从服务器加载数据时如何解码得到的响应。在这种情况下我们期待从服务器返回一个JSON对象<font class="Apple-style-span" color="#444444" face="Verdana, Helvetica, Arial, sans-serif"><span style="line-height: 22px; border-collapse: collapse; letter-spacing: 2px;" class="Apple-style-span">, <font color="#444444">'products'</font></span><span style="line-height: 22px; border-collapse: collapse; letter-spacing: 2px;" class="Apple-style-span"> 键是一个对象数组：</span></font> </div>
<div dir="ltr">
<div style="background-image: url(http://bbs.ajaxjs.com/images/default/codebg.gif); border-bottom: #cccccc 1px solid; border-left: #cccccc 1px solid; padding-bottom: 5px; overflow-x: hidden; overflow-y: hidden; background-color: #f7f7f7; margin: 10px 0px; padding-left: 10px; width: 586px; padding-right: 0px; word-wrap: break-word; background-position: 0px 0px; border-top: #cccccc 1px solid; border-right: #cccccc 1px solid; padding-top: 10px; background-origin: initial; background-clip: initial;" class="blockcode">
<div style="padding-bottom: 0px; line-height: normal; margin: 0px; padding-left: 0px; padding-right: 0px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; word-wrap: break-word; letter-spacing: 2px; color: #444444; font-size: 14px; padding-top: 0px;" id="code2">

1.  {

2.  &nbsp; &nbsp; products: [

3.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{name:' Some Product',&nbsp; &nbsp; price: 9.99, image_url: 'product1.jpg', in_stock: true},

4.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{name:' Another Product', price: 7.50, image_url: 'product2.jpg', in_stock: true},

5.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{name:' A third product', price: 2.35, image_url: 'product3.jpg', in_stock:&nbsp;<span style="border-bottom: #ff0000 1px solid; padding-bottom: 0px; line-height: normal; margin: 0px; padding-left: 0px; padding-right: 0px; word-wrap: break-word; white-space: nowrap; cursor: pointer; padding-top: 0px;" class="t_tag" href="tag.php?name=false">false</span>},

6.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;...

7.  &nbsp; &nbsp; ]

8.  }</div></div><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span"><font color="#000000"></font></span></div>
<div dir="ltr"><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span">
<div dir="ltr">DataView是一个组件，它知道如何使用存储和渲染模型实例使用的HTML模板。我们设置模板上使用了Ext.XTemplate - 一个强大的模板类。一旦Store加载它的数据，DataView会自动将每一个加载完毕的记录，在模板的基础上渲染出HTML，给我们展现产品清单。

<font class="Apple-style-span" color="#444444" face="Verdana, Helvetica, Arial, sans-serif"><span style="line-height: 22px; border-collapse: collapse; letter-spacing: 2px;" class="Apple-style-span">现在我们已经有一个渲染好<font color="#444444">的产品</font></span><span style="line-height: 22px; border-collapse: collapse; letter-spacing: 2px;" class="Apple-style-span">页面，让我们把我们的例子更进一步，实现一个简单的购物车。我们的购物车将会是另外一个Store，这次使用session storage proxy&nbsp;来在客户端保存用户的购物选购的商品直到用户准备下一步：</span></font> </div></span></div>
<div dir="ltr">
<div style="background-image: url(http://bbs.ajaxjs.com/images/default/codebg.gif); border-bottom: #cccccc 1px solid; border-left: #cccccc 1px solid; padding-bottom: 5px; overflow-x: hidden; overflow-y: hidden; background-color: #f7f7f7; margin: 10px 0px; padding-left: 10px; width: 586px; padding-right: 0px; word-wrap: break-word; background-position: 0px 0px; border-top: #cccccc 1px solid; border-right: #cccccc 1px solid; padding-top: 10px; background-origin: initial; background-clip: initial;" class="blockcode">
<div style="padding-bottom: 0px; line-height: normal; margin: 0px; padding-left: 0px; padding-right: 0px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; word-wrap: break-word; letter-spacing: 2px; color: #444444; font-size: 14px; padding-top: 0px;" id="code6">

1.  var Cart = new Ext.data.Store({

2.  &nbsp; &nbsp; model: 'Product',

3.  &nbsp; &nbsp; proxy: {

4.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;type: 'sessionstorage',

5.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;id&nbsp;&nbsp;: 'shoppingCart'

6.  &nbsp; &nbsp; }

7.  });</div></div><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span"><font color="#444444">session storage</font></span><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span">代理保存<font color="#444444">所有模型数据</font></span><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span">在HTML5的sessionStorage对象里。这意味着这些产品将继续留在页面刷新之间的内存里（更多信息见我们最近的Web存储博客帖子）。sessionStorage对象同一个域之间的所有脚本所使用，所以我们给代理一个id这使得它可以存储<font color="#444444">数据</font></span><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span">在一个我们<font color="#444444">私人</font></span><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span">的命名空间中。</span><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span"> session storage 和 local storage 代理不需要 readers - 所有的数据读写会自动处理。

</span><font class="Apple-style-span" color="#444444" face="Verdana, Helvetica, Arial, sans-serif"><span style="line-height: 22px; border-collapse: collapse; letter-spacing: 2px;" class="Apple-style-span">我们可以给DataView 配置一个监听器，当用户点击了“购买”按钮，将添加一个商品到我们的购物车中：</span></font> </div>
<div dir="ltr">
<div style="background-image: url(http://bbs.ajaxjs.com/images/default/codebg.gif); border-bottom: #cccccc 1px solid; border-left: #cccccc 1px solid; padding-bottom: 5px; overflow-x: hidden; overflow-y: hidden; background-color: #f7f7f7; margin: 10px 0px; padding-left: 10px; width: 586px; padding-right: 0px; word-wrap: break-word; background-position: 0px 0px; border-top: #cccccc 1px solid; border-right: #cccccc 1px solid; padding-top: 10px; background-origin: initial; background-clip: initial;" class="blockcode">
<div style="padding-bottom: 0px; line-height: normal; margin: 0px; padding-left: 0px; padding-right: 0px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; word-wrap: break-word; letter-spacing: 2px; color: #444444; font-size: 14px; padding-top: 0px;" id="code7">

1.  productsList.on('itemtap', function(dataview, index, el, e) {

2.  &nbsp; &nbsp; //the itemtap event is fired whenever any part of the product template is tapped

3.  &nbsp; &nbsp; //but we only add to the cart if the Buy button was the target

4.  &nbsp; &nbsp; if (e.getTarget('div.button')) {

5.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;var product = dataview.store.getAt(index);

6.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;

7.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Cart.add(product);

8.  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Cart.sync();

9.  &nbsp; &nbsp; }

10.  });</div></div></div>
</span></font><div dir="ltr"><font class="Apple-style-span"><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span">
<div dir="ltr">我们监听了关于DataView的itemtap事件，检查该按钮Div被点击。如果我们得到用户点击的商品，添加它到购物车的 Store 并且同步这个store. 调用同步Store保存它的内容到<span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span"> session storage 以便当我们刷新了我们的页面<font color="#444444">购物车</font></span><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span">的内容也会被保留。</span></div>
<div dir="ltr"><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span"></span><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span"></span>&nbsp;</div><span style="line-height: 22px; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; letter-spacing: 2px; color: #444444; font-size: 14px;" class="Apple-style-span">
</span></span></font><div dir="ltr"><font class="Apple-style-span">这个例子显示了如何快速将简单的组件和数据包放在一起。我们看到了模型/存储/代理生态系统融合在一起，以及如何使用数据感知组件的Store。对于数据包类中的更大的定制的例子看到我们的Twitter的例子。</font></div></div></div>
<div style="padding-bottom: 0px; line-height: normal; margin: 20px auto; padding-left: 0px; width: 165px; padding-right: 0px; display: block; border-collapse: collapse; font-family: Verdana, Helvetica, Arial, sans-serif; word-wrap: break-word; height: 50px; color: #444444; clear: both; font-size: 12px; padding-top: 0px;" class="useraction"></div>