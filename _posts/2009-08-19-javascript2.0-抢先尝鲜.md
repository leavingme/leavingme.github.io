---
layout: post
title: "JavaScript2.0 :抢先尝鲜"
date: 2009-08-19 10:42:00
---
[JavaScript2.0 :抢先尝鲜](http://www.webreference.com/programming/javascript/rg38/2.html) 作者 Rob Gravelle
作者为我们简要的介绍了下正在制定中的JavaScript2.0标准,有许多新特性的介绍和相应的代码演示：

<p>作为一个开发者和作家，我的一部分工作就是跟随web世界最新发展潮流——不管是关于公司合并、在线购物潮流、或者是编程技巧。我承认如今很难跟上 业界里发生的所有事情，但是有个四处流传的小道消息却吸引了许多的目光：JavaScript2.0提案。作为新的 JavaScript2.0\EMCAScript 4.0计划于2009年终稿，但是日前已经做了很多的工作-包括好的、不好的。今天，我们来看看这份提案规范的一部分，看下他们是在改进这门语言还是狗尾 续貂。

**JavaScript的历史**

为了更好的理解JavaScript标准是如何实现的，让我们简要的看下这门语言的历史吧

JavaScript是ECMAScript脚本语言的一个分支。ECMAScript 是Ecma国际组织标准化的，这门语言的另外2个分支是ActionScript（macroMedia,Adobe）和JScript（微软）。 JavaScript是有Netscape的Brendan Eich开发的，最初叫Mocha而后是LiveScript，最后改为JavaScript。1993.3月，Sun公司发布了支持 JavaScript的Navigator2.0（译者：我感觉这是错误的，可查看原文）。鉴于JavaScript作为客户端脚本语言取得广泛流行，微 软制定了自己的脚本语言JScript，发布于1996.8月的ie3.0中。Netscape公司在日内瓦提交了JavaScript给Ecma国际标 准化组织，申请成为标准。

Ecma国际标准化组织是个管理信息、通信系统的、基于成员制度，非营利性国际机构 。这个机构起初是为了标准化欧洲的计算而于1991年成立，在它成立后的40年间，Ecma总共出台了370封标准和90个科技报告，其中包括了CD- ROM卷和文件系统，c++语言规范和他们的开放xml格式。第一版的ECMAScript（Ecma-262）于1997在Ecma全员大会上通过。不 管JavaScript还是JScript他们都是兼容ECMAScript的，同时也提供了Ecma规范没有提供的特殊的额外的特性。甚至在今 天，JavaScript和JScript依然有个很多不兼容的地方。JavaScript受如java、c++等面向对象语言的影响很深，这也意味着初 学者能很容易的上手。

**语言的增强**

**更加的面向对象**

迄今为止，JavaScript是使用的原型来做继承的，而不是经典的面向对象式的继承自父类。事实上，如下面实例的一样，如今JavaScript没有class的东西：

// Current JavaScript 1.x "Class" Definition
function MyClass()
{
&nbsp;this.member1 = "a string";
&nbsp;this.member2 = 10;
}
var myClass = new MyClass(); // class instantiation

// JavaScript 2.0 Class Definition
class TrueClass
{
&nbsp;this.member1 = "a string";
&nbsp;this.member2 = 10;
}
var trueClass = new TrueClass(); // class instantiation

当对象的构造函数和他们类型角色一起的时候，构造函数会翻倍。使用new 调用函数的时候会创建一个新对象，而后你就可以使用被bind到这个对象的本地关键字this来调用这个函数。函数的原型决定了这个对象的原型。不管什么 类型的值赋予一个对象的原型，那么它都会被他所有的实例和汉字共享。使用原型 ，JavaScript可以模拟许多基于class的特性，尽管有些古怪。举个例子，在下面的代码中，myOtherDog尝试去重载父类Dog的 getBreed() 函数。虽然myOtherDog的getBreed（）函数是能够实现的，但是他没有重载成功——给了myOtherDog两个面包。

function Dog(name)
{
&nbsp; this.name = name;
&nbsp; this.bark = function() { alert('Woof!'); };
&nbsp; this.displayName = function() { alert(this.name); };
};

var myDog = new Dog('Killer');
myDog.displayName(); //Killer
myDog.bark(); //Woof!

Dog.prototype.getBreed = function()
{
&nbsp; alert("Mutt");
};

myDog.getBreed(); //Mutt

myOtherDog = new Dog('Bowzer');

// this hides getBreed() from other Dogs
myOtherDog.getBreed = function()
{
&nbsp; return "Lhasa Apso";
};
alert(myOtherDog.getBreed()); //Lhaso Apso and Mutt!

alert(myDog.getBreed()); //function is undefined

**强类型**

像大多数的脚本语言一样，JavaScript也是弱类型的。解释器会在运行时，基于值来决定某变量的数据类型。这种松散性使得开发者可以很灵活的 重用和比较变量。在后种情况，使用强制类型转换就可以比较两种不同数据类型的值；JavaScript会自动在比较之前将他们转化成相同的类型。

alert( "42" == 42 ); //true
alert( ("42" == 42) + 1 ); //2. the boolean true evaluates to 1.
alert( "I live at " + 99 + " Renolds street."); // the 99 int is converted to a string.

相反的，JavaScript2.0会强类型化了些，这就意味着必须显式的申明变量的类型，脚本引擎不会强制类型转换了。类型可以赋予属性、函数参 数、函数返回值、变量、对象、数组的初始化对象。如果没有定义类型，那么变量或者属性被设置为默认的Object类型，这是所有的数据类型层级的基类。使 用：后跟类型申明的是赋类型的语法：

var a:int = 100; //variable a has a type of int
var b:String = "A string."; //variable b has a type of String

function (a:int, b:string)//the function accepts two parameters, one of type int, one of type string

function(...):int //the function returns a value with a type of int

为了进行上述的比较，你需要转换类型：

alert( int("42") == 42 ); //true
alert( int("42" == 42) + 1 ); //2
alert( "I live at " + string(99) + " Renolds street.");

**程序单元体**

借鉴了各种流行js框架，程序单元体是很有用的代码模块，它可以在运行时导入。当框架和自定义库数量越来越多的时候，这些已经成为web程序不可或缺的组成部分。设想下，包含了成千上万行代码的库们，一次性下载他们已经不合时宜了。这是伪代码：

use unit Effects "http://mysite/lib/Effects";
use unit Utils "http://mysite/lib/Utils";

var panel = new Panel();
panel.setTime(Util.getFormattedTime());

**编译时的类型检查**

在JavaScript2.0 里，你可以使用严格模式来编译JavaScript模块。在运行之前，它可以检查几个重要的方面的完整性，包括：

静态类型检查
引用名称确认
对常数的非法赋值
保证比较的两个值有合法的类型
常数

先前的JavaScript开发者不得不使用命名规范或者精心制定的工作规则保护他们的常量。而这些在JavaScript2.0都是不需要的：

//JavaScript 1.x constant
var CULTURE_CONST = "Do you really want to change me?"; // constant in appearance only.

//JavaScript 2.0 constant
const HAMMER_TIME = "You can't touch this!" // a true constant.

**命名空间**

随着js框架的不断涌现，使用命名空间已经变得越来越必要了。这个标准目前被用作创建全局对象来保护你自己的功能不给先前的全局对象和函数击倒在地（直译）。

**总结**

许多向对2.0提案进行了猛烈的抨击，批评它在想经典的语言如c++、java在靠近。

“...JavaScript是动态、灵活的，使用原型继承和对象模型是很实用，很基础的优势，为什么有人要把这些那么优雅、灵活的东西变成java呢，java基本上强制性的让程序员使用古典的，基于class的继承——我搞不懂。”

而我个人对此很感受很复杂，即欢迎像class，命名空间，常量这样好的变化，也对强类型脚本变量很不感冒。总体上说，JavaScript冒着对 业余程序员变得更严格，相应的更严肃的危险 。不过，我也想应该感谢那些商业网站能够使用像我这样的专业人士来编码他们的业务流程。不管结果如何，无疑web开发的格局将会发生戏剧性的改变。

初稿：2009 7.20

复查：2009.7.22

翻译：2009.8.20
]]</p>
