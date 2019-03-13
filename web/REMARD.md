
web性能优化
1、HTTP/HTTPS缓存机制
2.webpack打包. chunck.js   分模块打包, 热更新， 代理




接下来的PPT
1、HTTP/HTTPS缓存机制  (熟悉常见问题以及对策)
2、webpack4研究；
3、架构问题；
4、react原理 生命周期  源码以及设计思想； redux api  redux-saga(https://www.zcfy.cc/article/async-operations-using-redux-saga-freecodecamp-2377.html)
5、vue原理
6、webpack打包机制 多个chunck 热更新问题；
7、游戏 egret  原理canvas 画布；  看看canvas
8 HTML5 CSS3  ES2015;
9 http统一拦截
10.redux-saga+redux   文档:1 https://www.jianshu.com/p/6bcf4573ca28?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation  2.https://juejin.im/post/59e083c8f265da43111f3a1f
11。为什么使用redux https://segmentfault.com/a/1190000012142449 

面试问道的东西
基础篇
1.problem1---Javascript的12种去重方法  https://mp.weixin.qq.com/s/U-Ka1fXeOUdQZhWZxqp4_A  *
2.problem2---js的数据类型 *
3.problem3---js事件
4.problem4---移动端的触摸事件
5.problem5---路由器的缓存  浏览器的缓存
6.problem6---跨域以及跨域原理  (代理  cros 产生原因)
7.problem7---作用域  怎么预防作用域污染
8.problem8---闭包 
9.problem9---前端缓存？ 缓存分为几类？
10.problem10---js常用数组操作方法,包含ES6方法  https://mp.weixin.qq.com/s/f-ygI68q-dj6pj6KRxZ-sQ
11.problem11---HTML5、CSS3新特性  每个至少将10个 HTML5 语义元素
12.problem12---http请求统一拦截  code码代表意义  http全过程   
13.problem13---callback,promise,generator,async-await https://mp.weixin.qq.com/s/5cDGrZlUu_-ERpWpWoouyg
14.problem14---请求方式eg(axios,fetch,(get,post请求))
15.problem15---call apply的用法
16.problem16---闭包，内存泄漏等问题
17.problem17---input框中的事件  eg:oninput、onchange与onpropertychange(https://blog.csdn.net/freshlover/article/details/39050609) 
18.problem18---Promise  应该是es6的东西 哇哈哈哈  看看阮一峰的es6
19.problem19---1px问题 移动端主要是 https://www.jianshu.com/p/7e63f5a32636
20:problem20---正则 
21:problem21---nginx与前端开发  https://juejin.im/post/5bacbd395188255c8d0fd4b2
22:problem22---数组的方法 es5 es6等
23:problem23---移动端触屏事件以及pc操作页面事件
24:problem24---冒泡和捕获事件
25:problem25---git的用法
26:problem26---面试对象的设计思想，prototype 原型链__proto__等特点以及用法；
27:problem27---node.js的了解以及用法 express4 koa2等框架的简单了解;
28:problem28--- map filter split reduce promise 等数组操作 
29:problem29--- AMD加载前置  CMD延时加载   MVVM MVC   
30:problem30--- react vue为什么要使用这个，为什么使用react而不使用vue
31:problem31--- 二叉树， 冒泡 , 算法 ，  排序等方法
32:problem32--- 柯里化
33:problem33--- 学习网站   nec(http://nec.netease.com/) w3c(http://www.w3school.com.cn/)  菜鸟教程(http://www.runoob.com)
34:problem34--- json和二进制的转换 参考:arrayBuffer  https://www.kancloud.cn/kancloud/javascript-standards-reference/46517
35:problem35--- 字符串和数组，对象转换  数组和对象转换  参考:https://www.kancloud.cn/kancloud/javascript-standards-reference/46517
36.problem36---@1模块化的异步加载怎样做？@2图片加载完的时候会执行吗？@3window.onload执行时间？等 https://mp.weixin.qq.com/s/PQ0E3UWYLcryXRKdKSg0OQ
37.problem37---熟悉前后端交互原理，对 HTTP 请求有一定深入的理解, 栈溢出  参考： https://wangzitian0.github.io/2017/06/16/HTTP-best-practice-RESTful/ （HTTP协议的最佳实践RESTful）
38.problem38---js  递归方法等其他方法；   https://www.jianshu.com/p/ca514efd3830
39.problem39-- 表单提交 (react vue js)
40.problem40-- flex布局 http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html


react篇
1.problemReact1--高阶组件，高阶函数



进阶篇
1.try/catch 事件
2.网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么？            https://www.zhihu.com/question/31809713
3.SPA -单页应用    single page web application

注意
1.js基础
2.计算机网络
3.性能优化
	@1.事件委托---减少dom操作  https://www.jianshu.com/p/916230ad9229
	实现事件委托是利用了事件的冒泡原理实现的。当我们为最外层的节点添加点击事件，那么里面的ul、li、a的点击事件都会冒泡到最外层节点上，委托它代为执行事件。

4.开发技巧
5.移动端知识
6.安全性问题



架构问题
1.参考1 关于常见的前端架构面试汇总题 https://juejin.im/post/5b3b3985e51d4519115cc219







deps  部门id数组   [01,0102,010203]
ptypes  职位类别id数组  [01,0102,010203]



如何让自己变得更优秀：
	谈问题只能发现不足，有策略才能不断提高。论坛上也经常也能看到如何有效的提高自己的问题，这时候就有人跳出来说“看源码”。我完全不否认看源码的作用——实际上我觉得看源码是质变的一种方式——但是，提升不仅仅只有看源码一条路，实际上当基础不牢的时候看源码是完全看不懂的。所以要根据自身情况，在不同的阶段选择不同的策略。

	3.2.1 明确自身定位
	这一块我觉得是最重要的。在我们开始学习、工作之前，或者是学习、工作了一段时间之后，审视自己，确定自己的层次，给自己制定一个合适的提升策略才是关键。明确定位应该不断的被提起，通过对业界，对自己的反思，才能理清自己进步和努力的方向。

	3.2.2 培养技术品味
	当理清了自身的定位时，如何前进，向哪里前进就成了另外一个问题。自己是很难形成技术品味的，要有更多的输入，包括但不限于上文的阅读源码和博客，才能形成自己的技术品味，也从而知道自己该前进的方向。

	3.2.3 巩固基础，解决问题
	认真对待自己遇到的每一个问题，从不轻易放过，尝试结合原理从自己的理解去解释问题。每解决一个问题，就是对原理的又一次深入理解。几次三番之后，即使遇到自己没有遇到过的问题，也可以举一反三，事半功倍。

	这个部分和第二步是不分先后的，二者交替进行。

	3.2.4 多写博客，多做总结
	我之前经常会遇到感觉自己已经完全弄清楚了某件事情，但是过了一段时间，再去看的时候又忘记了。这有两个原因：

	之前理解的并不深入，如果自己深究，还是有不理解的地方
	记忆确实遗忘了
	解决这个的方法就是多做总结。总结的过程也是一个反思的过程，这时候更能清晰的梳理自己的思路，然后把自己的闪光点记录下来。从而达到深入理解和备忘的两个功效。

	如果是坚持不下来可以找个朋友采用对赌方案，每次不写就扣个几百块，我自身的亲身体验，有奇效……另外，因为隔一段时间就要写博客，也促使自己一直在留意和反思日常的工作，简直一举两得。

	3.2.5 以点带面，跨界突破
	这一块我也是单纯有个想法。我遇到的大牛，不仅对自己的领域非常了解，对其他的领域也有所认知。这是一种深层次的帮助——通过理解别的领域的方案，从而反哺自身。所以学习其他的语言，研究其他开发的理念，对前端的开发都是有帮助的。

	以上这五点要是都能做到，不说成为大神，养家糊口、自信爆棚应该还是可以期望的。


