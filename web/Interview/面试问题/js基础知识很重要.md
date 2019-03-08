BEM规范   
代码千万行，注释第一行。命名不规范，同事两行泪。

夯实基础
1.你能使用css实现斑马条纹背景、毛玻璃效果吗
2.能给图片实现滤镜效果，能实现所有自适应布局效果吗
3.原型，原型链，闭包是实现设计模式的必备知识，你真的弄懂了吗
4.闭包导致内存泄漏的原因是什么，你弄明白了吗
5.ajax跨域的解决方案你可以说几种？9102年了，你还是只告诉我jsonp吗
6.http协议有了解过吗？
7.如何在http协议中实现不缓存静态资源？
8.浅拷贝， 深拷贝  stringify parseIn  参考：https://juejin.im/post/59ac1c4ef265da248e75892b,https://link.juejin.im/?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F23031215
	深拷贝和浅拷贝的主要区别就是其在内存中的存储类型不同
 ！！！
  	1. 基本数据类型存放在栈中，基本数据类型值不可变
	2. 引用类型存放在堆中,变量实际上是一个存放在栈内存的指针，这个指针指向堆内存中的地址, 引用类型值可变

	var a = [1,2,3];
	var b = [1,2,3];
	console.log(a === b) // false
	虽然变量 a 和变量 b 都是表示一个内容为 1，2，3 的数组，但是其在内存中的位置不一样，也就是说变量 a 和变量 b 指向的不是同一个对象，所以他们是不相等的。
	3.基本类型的赋值的两个变量是两个独立相互不影响的变量
	4.引用类型的赋值是传址, 也就是说两个变量会指向同一个对象，因此两者之间操作互相有影响
    var a = {}
    var b = a;
    a.name = 'jozo';
    console.log(a.name); //'jozo'
    console.log(b.name); //'jozo'

    b.age = 22;
    console.log(b.age); //22
    console.log(a.age); //22
	console.log(a === b) //true
	
	深拷贝：将 B 对象拷贝到 A 对象中，包括 B 里面的子对象，
	浅拷贝：将 B 对象拷贝到 A 对象中，但不包括 B 里面的子对象
	eg:
		var obj1 = {
			name:'yanji',
			age:26,
			'language':[1,[2,3],[4,5]]
		}

		var obj2 = obj1;

		var obj3 = shallowCopy(obj1)

		function shallowCope(src) {
			var dst = {}
			for(var prop in src) {
				if(src.haOwnProperty(prop)) {
					dst[prop] = src[prop];
				}
			}
			return dst;
		}
		
		obj2.name = 'lisi';
		obj3.age = '20'

		obj2.language[1] = ["二","三"];
	    obj3.language[2] = ["四","五"];
		
		我们改变 obj2 的 name 属性和 obj3 的 name 属性，可以看到，改变赋值得到的对象 obj2 同时也会改变原始值 obj1，而改变浅拷贝得到的的 obj3 则不会改变原始对象 obj1。这就可以说明赋值得到的对象 obj2 只是将指针改变，其引用的仍然是同一个对象，而浅拷贝得到的的 obj3 则是重新创建了新对象。

		我们接下来来看一下改变引用类型会是什么情况呢，我又改变了赋值得到的对象 obj2 和浅拷贝得到的 obj3 中的 language 属性的第二个值和第三个值（language 是一个数组，也就是引用类型）。结果见输出，可以看出来，无论是修改赋值得到的对象 obj2 和浅拷贝得到的 obj3 都会改变原始数据

	深拷贝： 递归调用刚刚的浅拷贝


9.闭包  内存泄漏问题等
   1 不再用到的内存，没有及时释放，就叫做内存泄漏----->如果一个值不再需要了，引用数却不为0，垃圾回收机制无法释放这块内存，从而导致内存泄漏  参考：http://www.ruanyifeng.com/blog/2017/04/memory-leak.html   有chrome工具可以查看

   ！如何从外部读取局部变量？
    那就是在函数的内部，再定义一个函数
    eg: function f1() {
    	var n = 999;

    	function f2() {
    		alert(n); //999
    	}
    }

	var result=f1();
  　　result(); // 999
	

	上一节代码中的f2函数，就是闭包,,   个人理解--->闭包就是能够读取其他函数内部变量的函数
	
	闭包的两个优点 一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中


10. 高阶函数---->  函数柯里化 是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术
11. protoType 和 __proto__  参考:https://blog.csdn.net/ligang2585116/article/details/53522741
__proto__是每个对象都有的一个属性，而prototype是函数才会有的属性！！！
使用Object.getPrototypeof()代替__proto__!!!





12.


es6部分：
1.class 引入了 Class（类）这个概念，作为对象的模板。 通过class关键字，可以定义类  参考：http://es6.ruanyifeng.com/#docs/class


深究原理

1. Virtual DOM diff算法 双向绑定原理等等框架背后的机制都值得我们去学习
2. PWA，SSR










