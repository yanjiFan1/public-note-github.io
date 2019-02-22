
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
26:problem26---面试对象的设计思想，原型链__proto__等特点以及用法；
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
37.problem37---熟悉前后端交互原理，对 HTTP 请求有一定深入的理解, 栈溢出
38.problem38---js  递归方法等其他方法；   https://www.jianshu.com/p/ca514efd3830
39.problem39-- 表单提交 (react vue js)
39.problem40-- flex布局 http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
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