原文链接： http://www.sencha.com/blog/2010/08/17/using-the-data-package-in-sencha-touch/August 17, 2010 by Ed SpencerSencha Touch 的核心部分之一是数据包。数据包允许应用程序通过内建的模型，存储和代理类的达到数据持久化。大多数应用程序将使用一个或多个包含在 Sencha Touch 中经常将许多支持存储的可视化组件的这些类。
数据包的根是 Ext.data.Model。模型代表应用程序中的数据类型 - 用户，产品，销售 - 任何东西。让我们想像我们正在创建一个应用程序来管理一个电子商务系统中的产品 - 这是我们建立的产品模型：



Ext.regModel('Product', {

    fields: [        {name: 'name',        type: 'string'},        {name: 'description', type: 'string'},        {name: 'price',       type: 'float'},        {name: 'image_url',   type: 'string'},        {name: 'in_stock',    type: 'boolean'}    ]});Ext.regModel 告诉 Sencha Touch 使用设置的字段创建一个新的模型。我们可以在以后通过名称引用这个模型来轻松地配置组件加载的产品数据。在这个例子中我们的应用程序是我们的电子商务网站的HTML5前端。我想使用一个页面来展示我们的产品 - 这里我们使用DataView来创建： 


var productsList = new Ext.DataView({    store: new Ext.data.Store({        model: 'Product',        proxy: {            type: 'ajax’,            url : '/products.json',            reader: {                type: 'json',                root: 'products'            }        }    }),    tpl: new Ext.XTemplate(        '<div class="product">',            '<img src="{image_url}" />',            '<div class="button">Buy</div>',        '</div>'    ),    fullscreen: true});
在上面的例子，我们在 DataView 创建了一个Store。Store 是模型的实例集合. Stores 通过代理类载入他的数据 - 在这个例子我们设置一个简单的‘ajax’ 代理并指示它通过 url '/products.json' 来载入它的数据。我们还提供了一个Reader，它告诉代理从服务器加载数据时如何解码得到的响应。在这种情况下我们期待从服务器返回一个JSON对象, 'products' 键是一个对象数组： 



{    products: [        {name:' Some Product',    price: 9.99, image_url: 'product1.jpg', in_stock: true},        {name:' Another Product', price: 7.50, image_url: 'product2.jpg', in_stock: true},        {name:' A third product', price: 2.35, image_url: 'product3.jpg', in_stock: false},        ...    ]}

DataView是一个组件，它知道如何使用存储和渲染模型实例使用的HTML模板。我们设置模板上使用了Ext.XTemplate - 一个强大的模板类。一旦Store加载它的数据，DataView会自动将每一个加载完毕的记录，在模板的基础上渲染出HTML，给我们展现产品清单。现在我们已经有一个渲染好的产品页面，让我们把我们的例子更进一步，实现一个简单的购物车。我们的购物车将会是另外一个Store，这次使用session storage proxy 来在客户端保存用户的购物选购的商品直到用户准备下一步： 



var Cart = new Ext.data.Store({    model: 'Product',    proxy: {        type: 'sessionstorage',        id  : 'shoppingCart'    }});session storage代理保存所有模型数据在HTML5的sessionStorage对象里。这意味着这些产品将继续留在页面刷新之间的内存里（更多信息见我们最近的Web存储博客帖子）。sessionStorage对象同一个域之间的所有脚本所使用，所以我们给代理一个id这使得它可以存储数据在一个我们私人的命名空间中。 session storage 和 local storage 代理不需要 readers - 所有的数据读写会自动处理。我们可以给DataView 配置一个监听器，当用户点击了“购买”按钮，将添加一个商品到我们的购物车中： 



productsList.on('itemtap', function(dataview, index, el, e) {    //the itemtap event is fired whenever any part of the product template is tapped    //but we only add to the cart if the Buy button was the target    if (e.getTarget('div.button')) {        var product = dataview.store.getAt(index);                Cart.add(product);        Cart.sync();    }});

我们监听了关于DataView的itemtap事件，检查该按钮Div被点击。如果我们得到用户点击的商品，添加它到购物车的 Store 并且同步这个store. 调用同步Store保存它的内容到 session storage 以便当我们刷新了我们的页面购物车的内容也会被保留。
 
这个例子显示了如何快速将简单的组件和数据包放在一起。我们看到了模型/存储/代理生态系统融合在一起，以及如何使用数据感知组件的Store。对于数据包类中的更大的定制的例子看到我们的Twitter的例子。
]]