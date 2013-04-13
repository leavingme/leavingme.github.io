---
layout: post
title: jQ.Mobi MVC 指引
date: 2013-04-13 23:59:00
---
Intro


1. About

MVC是一个轻量级的MVC框架。你可能会问“为什么需要另外的框架？”。MVC的目标是轻量级和快。我们不提供所有的高级功能的框架，像Backbone.js, CanJS, Knockout.js和Ember.js。相反，我们的目标是帮助分离内容从你的App，提供路由，简单模型和视图。

MVC构建一起工作的UI，但也可作为单独库来使用。其主要目标是提供控制器和视图来帮助你分割你的应用程序。

控制器 - 在你的应用程序中运行的逻辑。通过URL进行访问就像服务端的MVC框架一样。
视图 - html用来渲染您的应用程序
模型 - 处理存储和数据关系

2. Overview


MVC概述

MVC可以帮助你分割出你的应用程序和管理您的代码。控制器处理您的应用程序的逻辑侧，并将通用功能进行分组。你说你正在编写一个TODO应用程序控制器可能看起来像

待办事项     
     添加     
     编辑     
     保存     
     删除
然后，您将能够通过URL来调用它们的“待办事项”控制器类似下面的这条路线。


<a href="/todo/add">添加</a> 
<a href="/todo/edit/1">编辑</a>
<a href="/todo/delete/1">删除</a>


您也可以使用以下方法调用一个javascript函数调用控制器和动作，


$.mvc.route("/todo/delete");


视图
视图可以使用任何你喜欢的模板系统，但是我们在MVC捆绑jq.template.js。视图允许您重新使用HTML代码来生成标记给用户。有几个例子

购物车中的产品列表
有关产品的详细信息
FORM项
请参阅的视图部分如何使用jq.template.js的更详细的信息。

3. Quickstart


MVC快速入门

在你的应用程序中使用MVC非常简单。让我们从一个空文件夹开始，有一个index.html文件在其中。接下来，您将创建三个文件夹和一个app.js文件。

folder - controllers/
folder - models/
folder - views/
file - app.js


现在，打开您的index.html文件并且包含jq.mvc.min.js文件和app.js文件。
jq.mvc.min.js包括jq.mvc.js，jq.mobi.js和jq.template.js 


<script src="//cdn.app-framework-software.intel.com/jq.mvc.min.js" type="text/javascript"></script>
<script src="app.js" type="text/javascript"></script>


接下来，打开app.js文件并穿件我们的MVC应用程序的一个实例。

var app = new $.mvc.app();

现在我们的应用程序在那，但它不会做任何事情。让我们创建一个控制器和两个视图。在你的控制器文件夹中创建文件“hello.js”。
在视图文件夹中创建的文件”hello.js“和”world.js“


./
    controllers/
        hello.js
    views/
        hello.js
        world.js
    index.html
    app.js
 
“hello.js”控制器
用你最喜欢的编辑器打开该文件，并让我们建立一个基本的控制器。


$.mvc.controller.create("hello", {
    views:["views/hello.js","views/world.js"], //These are the views we will use with the controller
    world:function(){
        //This is the action "world".  We will load the "world.js" view.
        //When loading views, you must reference the folder path and file name.
        $("#main").html($.template('views/world.js'));
    },
    init:function(){
        //Here we can run any initializing code for this controller/
    },
    default:function(){
        //Let's load the "hello.js" view as th default.
        $("#main").html($.template('views/hello.js'));
    },
});


下一步，我们将编辑的两种视图文件。首先，我们将编辑“views/hello.js”和“views/ world.js，”

<!-- views/hello.js -->

Hello <br>
<a href="hello/world">Hello World</a>



<!-- views/world.js -->

Hello World <br>
<a href="hello/">Go Back</a>


app.js
Let's open up app.js again and edit it. We'll add an entry to load the hello.js controller and add a ready function to load the hello default action.

让我们再次打开app.js并对其进行编辑。我们将添加一个条目，到加载的hello.js的控制器和添加一个ready函数来加载的Hello默认操作。


var app = new $.mvc.app();
app.loadControllers(["hello"]); //You can pass in array or a string.  You do not need to reference the .js extension.

//现在让我们运行代码在app.ready里并且加载hello控制器的默认操作。
app.ready(function(){
    $.mvc.route("hello/");
});


4. Get Involved


想要参与么?

首先，到Github上fork代码。您可以开始玩弄的核心，破事，解决问题，并进行增强。当你准备好了，如下提交一个pull request

pull request 概述
错误修正/功能增强
对于上述的测试案例
这种变化是否会影响当前的安装（它会打破他们）？
届时我们会检查pull request，要么自动合并或提供反馈意见。如果你是提出一些激烈的，最好先与我们联系，以讨论整体的影响，并从那里。如果我们发现它转移了我们的核心目标，否则将影响用户，我们会拒绝它。


