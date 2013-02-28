JavaScript为函数对象定义了两个方法：apply和 call，它们的作用都是将函数绑定到另外一个对象上去运行，两者仅在定义参数的方式有所区别： 
Function.prototype.apply(thisArg,argArray); 
Function.prototype.call(thisArg[,arg1[,arg2…]]); 
从函数原型可以看到，第一个参数都被取名为 thisArg，也就是说，所有函数内部的 this 指针都会被赋值为 thisArg，这就达到了将函数作为另外一个对象的方法运行的目的。两个方法除了 thisArg 参数，都是为 Function 对象传递的参数。下面的代码说明了 apply 和 call 方法的工作方式： 
//定义一个函数func1，具有属性p和方法A 
function func1(){ 
  this.p="func1-";   
  this.A=function(arg){ 
    alert(this.p+arg); 
  } 
} 
//定义一个函数func2，具有属性p和方法B 
function func2(){ 
  this.p="func2-"; 
  this.B=function(arg){ 
    alert(this.p+arg); 
  } 
} 
var obj1=new func1(); 
var obj2=new func2(); 
obj1.A("byA");         //显示func1-byA 
obj2.B("byB");         //显示func2-byB 
obj1.A.apply(obj2,["byA"]);     //显示func2-byA，其中[“byA”]是仅有一个元素的数组，下同 
obj2.B.apply(obj1,["byB"]);     //显示func1-byB 
obj1.A.call(obj2,"byA");      //显示func2-byA 
obj2.B.call(obj1,"byB");      //显示func1-byB 
可以看出， obj1的方法A被绑定到obj2运行后， 整个函数A的运行环境就转移到了obj2，即this指针指向了obj2。同样obj2的函数 B也可以绑定到 obj1对象去运行。代码的最后 4 行显示了apply和call函数参数形式的区别。 
与 arguments 的 length属性不同，函数对象的还有一个参数相关的属性 length，它表示函数定义时所指定参数的个数，而非调用时实际传递的参数个数。 例如下面的代码将显示2：  
function sum(a,b){ 
  return a+b; 
} 
alert(sum.length); 

]]