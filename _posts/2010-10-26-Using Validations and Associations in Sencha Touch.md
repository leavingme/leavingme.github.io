原文链接：http://www.sencha.com/blog/2010/10/14/using-validations-and-associations-in-sencha-touch/
October 14, 2010 by Ed Spencer

Sencha Touch 已经有了丰富的模型层，它可以方便地处理不同类型的数据。自 Sencha Touch 0.97β 起，模型支持验证它们的数据和关联其他模型变的非常丰富。这些新的特性使其更易于编写的客户端应用程序代码量减少了。

首先亮相，让我们来看看在模型中使用验证。本例中，我们将使用电子商务管理应用程序，其中的用户和产品模型。让我们首先定义产品模型：


Ext.ns('MyApp');
 
MyApp.Product = Ext.regModel('Product', {
    fields: [
        {name: 'id',      type: 'int'},
        {name: 'user_id', type: 'int'},
        {name: 'name',    type: 'string'},
        {name: 'price',   type: 'float'},
        {name: 'sku',     type: 'string'}
    ],
 
    validations: [
        {type: 'presence', name: 'name'},
        {type: 'format',   name: 'sku', matcher: /[0-9]{4}[A-Z]+/},
        {type: 'length',   name: 'name', min: 3}
    ],
 
    proxy: {
        type: 'localstorage',
        id  : 'products'
    }
});


上面的模型定义大部分是不需要说明的：我们定义了一个叫做 Product 有 4 个字段的模型 – id，name，price 和 sku，加上了这些字段的几个验证规则。这些字段定义一直在 Sencha Touch 验证遵循相同的格式。在所有情况下，我们指定字段和验证的类型。有些验证采取额外的可选配置 – 例如长度验证可以采取最小和最大属性，格式可用匹配器，等等。
Sencha 内建 5 种验证方式并且很容易添加定制规则。 首先，让我们, 让我们认识内建的:
presence只是确定该字段有一个值。0 是有效的值但空字符串不是。长度确保一个字符串之间的最小和最大长度。这两个约束是可选的。格式确定一个字符串匹配一个正则表达式的格式。在上面的例子我们确保SKU 4个数字后面至少跟着一个字母。包含确保一个值在一组特定的值里 (e.g. 确保性别是男性或女性)。排除确保一个值不在一组特定的值里 (e.g. 用户名黑名单，比如‘admin’)。
现在我们有把握做不同的验证，让我们试着对一个产品实例用它们。我们将创建产品实例并且针对它运行验证，注意任何失败：


var product = new MyApp.Product({
    name : 'Sencha Touch',
    sku  : 'not a valid sku',
    price: 99
});
 
var errors = product.validate();
 
errors.isValid()) //returns 'false' as there were validation errors
errors.items; //returns the array of all errors found on this model instance
 
errors.forField('sku'); //returns the errors for the sku field


这里的主要函数是 validate(), 运行所有配置的验证并且返回一个 Ext.data.Errors 对象。这个简单的对象仅仅是一个发现的任何错误的集合，再加上一些方便的方法例如 isValid() – 如果所有的字段均没有错将返回 true – 还有 forField(), 它返回给定字段的所有错误。
在我们的电子商务系统每一个产品都是有用户创建，因此现在我们建立用户模型：


MyApp.User = Ext.regModel('User', {
    fields: [
        {name: 'id',       type: 'int'},
        {name: 'name',     type: 'string'},
        {name: 'gender',   type: 'string'},
        {name: 'username', type: 'string'}
    ],
 
    validations: [
        {type: 'inclusion', name: 'gender',   list: ['male', 'female']},
        {type: 'exclusion', name: 'username', list: ['admin']}
    ],
 
    associations: [
        {type: 'hasMany', model: 'Product', name: 'products'}
    ],
 
    proxy: {
        type: 'localstorage',
        id  : 'users'
    }
});


定义用户遵循我们定义产品相同的模式 – 我们建立字段和一些验证。在这种情况下，我们验证性别字段是不是男性或女性，并且用户名可以是除了‘admin’的任何名字。
不过这次，我们还为这个模型加入了关联。有Sencha Touch 里有 2 种主要的关联类型 – hasMany 和 belongsTo。在我们的应用里每一个用户创建许多产品，因此我们位User 到 Product 创建 hasMany 关联。
关联给我们一个强有力的手段去操纵相关的数据。例如：加载一个特定用户的所有产品是非常简单：


var user = new MyApp.User({id: 10});
 
//loads all products where user_id = 10
user.products().load({
    callback: function(records, operation) {
        alert(records.length);
    }
});


让我们分析一下上面这个代码实际上做的事情。我们定义的关联在用户对象创建了一个叫做 products() 的新方法。此方法返回一个 Ext.data.Store 它只从加载的产品过滤当user_id 等于 User 实例 id (在这个事例中是10)。
因为我们在浏览器中并且访问数据库有很长的时间，所有的载入和保存操作都是异步的，因此我们必须传递一个回调函数来生成 Products 存储的 load 方法。This callback is given the records that are loaded as well as the Ext.data.Operation object that is used to load them.
关联不仅仅有助于装载数据 – 它们创建新的记录也非常有用：


user.products().add({
    name: 'Ext JS 4.0',
    sku : '1234A'
});
 
user.products().sync();


这里我们实例化一个新的产品，它会自动给出在user_id字段的用户id。调用 sync() 通过它配置的代理保存这个新的产品 – 这又是一个异步操作，如果你想要操作完成时得到通知，你可以传递一个回调。
它通常是非常有用的双方关系都了解关联，让我们更新我们的产品模型定义：It’s usually useful to have both sides of a relationship know about the association


MyApp.Product = Ext.regModel('Product', {
    //same fields and validations as before
    ...
 
    associations: [
        {type: 'belongsTo', model: 'User'}
    ]
});


belongsTo 关联同样可以在模型里建立新的方法，下面是我们怎么使用这些：


var product = new MyApp.Product({id: 100});
 
product.getUser(function(user) {
    //do something with the loaded user model
});
 
product.setUser(100, {
    callback: function(product, operation) {
        if (operation.wasSuccessful()) {
            alert('Product user updated');
        } else {
            alert('Product user could not be updated');
        }
    }
});


再一次，加载方法 (getUser) 是异步的并且需要一个回调函数给用户给用户实例。setUser方法简单地更新foreign_key（在这种情况下的user_id）到100并保存产品型号。。 像往常一样，可以在保存操作完成时触发回调将 – 无论成功与否。
 
了解验证和关联最好的方法是查看 check out the updated Model documentation， 同样还有 docs on the hasMany 和 belongsTo associations。 最后，要知道，因为我们仍处于测试阶段，这个新的API功能在版本1.0之前可能会略有变化。

]]