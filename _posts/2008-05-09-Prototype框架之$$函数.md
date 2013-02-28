
    元素标签(tag)。$$("li")
    元素ID,id前要加#。$$("#div_test")
    css类，类名前加.。$$(".style1")
    元素是否具有某个属性。$$("a[class]")
    元素的某个属性是否符合特定的条件。$$("a[class='style1']")
    以上的css选择符可以自由组合，形成一个复合的css选择符,中间不要有空格。如下：$$("a#link[class='link']")表示id为"link",class为".link"的链接元素（A）。
    不同的css选择符（以上所有）之间用空格分隔，就组成一个多层的css选择符。如：$$(div p[class='js']) 

以上内容的参考：《征服Ajax--dojo、prototype、script.aculo.us框架解析与实例》


$$()函数是Prototype 1.5新增的一个快捷方式，它允许开发人员通过CSS样式选择页面中的元素。熟悉XPath的读者会发现，CSS选择符在语法形式上和XML文档的XPath十分类似，Prototype支持的CSS选择符包括以下几种类型：
l  元素标签名称，例如：$$(“li”)。
l  元素ID，例如：$$(“#fixtures”)。
l  CSS类名，例如：$$(“.first”)。
l  元素是否具有某个属性，例如：$$(“h1[class]”)。
l  元素的某个属性是否符合特定的条件，例如：$$('a[href="#"]')、$$('a[class~="internal"]')、$$('a[href!=#]')。
l  上面所有这些CSS选择符的类型可以自由组合，形成一个复合的CSS选择符，例如：$$('li#item_3[class][href!="#"]')。
l  不同的CSS选择符（包括复合CSS选择符）之间用空格分隔，就组成了一个多层的CSS选择符，它通过指定目标元素的父节点甚至更多层父节点的CSS样式属性来定位目标元素。例如：$$('div[style] p[id] strong')。
例2-8给出了一个$$()函数的测试页面示例，读者可以在该页面中输入不同的CSS选择符表达式，测试结果。
例2-8  $$()函数测试页面
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>chapter 3</title>
    <style type="text/css" media="screen">
        /* <![CDATA[ */#testcss1
        {
            font-size: 11px;
            color: #f00;
        }
        #testcss2
        {
            font-size: 12px;
            color: #0f0;
            display: none;
        }
        /* ]]> */</style>

    <script type="text/javascript" language="javascript" src="prototype.js"></script>

    <script>

        function test() {

            // 根据输入的CSS选择符，切换相应元素的显示

            $$($F('csspath')).each(

                function(item) {

                    Element.toggle(item);

                }

            );

        }

    </script>

</head>
<body>
    <form>
    <div id="fixtures">
        <h1 class="title">
            Some title <span>here</span></h1>
        <p id="p" class="first summary">
            <strong id="strong">This</strong> is a short blurb
            <!-- 该页面元素具备 first和internal两种CSS样式-->
            <a id="link_1" class="first internal" href="#">with a link</a> or <a id="link_2"
                class="internal highlight" href="#"><em id="em">two</em> </a>.
        </p>
        <ul id="list">
            <li id="item_1" class="first"><a id="link_3" href="#" class="external"><span id="span">
                Another link</span> </a></li>
            <li id="item_2">Some text</li>
            <li id="item_3" xml:lang="es-us" class="">Otra cosa</li>
        </ul>
    </div>
    <input type="text" value="" id="csspath" />
    <input type="button" value="click" onclick="test()" />
    </form>
</body>
</html>

例2-8的运行页面如图2-2所示，在文本输入框中输入一个CSS选择符（例如“.title”），点击“click”按钮即可切换相应的页面元素（即Some title here）的显示/隐藏状态。
    
 (a)  在文本输入框中输入CSS选择符“.title” (b)  页面元素“Some title here”隐藏

图2-2  $$函数应用示例
]]