文件总结： 

参考：https://segmentfault.com/a/1190000018225708
https://mp.weixin.qq.com/s/MrQTbq8QsjR4sLZQ0RL2lg


1. 谈谈你对MVVM开发模式的理解
2. vue生命钩子 参考 /learn/vue
	vue实例有一个完整的生命周期，生命周期也就是指一个实例从开始创建到销毁的这个过程
	beforeCreate() 在实例创建之间执行，数据未加载状态
	created() 在实例创建、数据加载后，能初始化数据，dom渲染之前执行
	beforeMount() 虚拟dom已创建完成，在数据渲染前最后一次更改数据
	mounted() 页面、数据渲染完成，真实dom挂载完成
	beforeUpadate() 重新渲染之前触发
	updated() 数据已经更改完成，dom 也重新 render 完成,更改数据会陷入死循环
	beforeDestory() 和 destoryed() 前者是销毁前执行（实例仍然完全可用），后者则是销毁后执行

	vue 生命周期这里日常开发中常见的就是created和mounted，具体应用就是比如，我在页面加载时需要获取新闻列表和一些原始数据，这时候我们就可以在created钩子函数中调用方法去加载数据，并进行绑定,如果有时候我们需要手动实现图表（echarts），这个时候因为图表的实现机制，我们需要确保dom元素已经渲染完成，图表必须挂载到真实dom元素时，就必须在mounted函数中去调用图表生成方法了。


3. vue实现双向绑定的原理 + Vue中如何在组件内部实现一个双向数据绑定？  参考 /learn/vue
4. vue指令 v-for v-if v-show 常用的
5. v-if和v-show的区别
	使用了 v-if 的时候，如果值为 false ，那么页面将不会有这个 html 标签生成。
	v-show 则是不管值为 true 还是 false ，html 元素都会存在，只是 CSS 中的 display 显示或隐藏

	使用技巧：

	1.这两个在使用时会有一些小问题，比如v-if在使用的时候，如果子元素内有使用{{}}绑定的响应属性，如{{current.name}}，这时候如果current不存在，那么在渲染这个元素的时候“可能”会报错，为啥是可能，是因为v-if有可能判断为false而导致内层元素根本就没渲染，而使用v-show的话就会报错，因为无论是true或false，内层元素都会渲染，这时如果current没有初始化，则一定会报错。所以，我们如果通过v-show来显示隐藏元素的时候，需要确保内层绑定值已经初始化完成了。

	2.个人推荐，如果是内层元素不变化的，如图片，部分样式内容等开启隐藏的，可以用v-show来实现，配合transition能实现比较好的性能要求。如果是需要动态渲染的可以使用v-if

	3.有些情况由于刷新机制问题，我们可以通过v-if来强制开启vue进行重绘元素，如element和bin-ui，表格的生成都是基于配置宽高动态生成的，这就需要监听窗口大小去调用组件提供的接口重新刷新大小，但还有个暴力的解决办法就是v-if，比如弹窗的时候再渲染表格，关闭时直接=false来强制清除元素，以便保证每次都刷新重绘元素。

6. 简述Vue的响应式原理
	


7.  delete和Vue.delete删除数组的区别
8. 如何优化SPA应用的首屏加载速度慢的问题？
9. 前端如何优化网站性能？
10. 网页从输入网址到渲染完成经历了哪些过程？
	大致可以分为如下7步：
	输入网址；
	发送到DNS服务器，并获取域名对应的web服务器对应的ip地址；
	与web服务器建立TCP连接；
	浏览器向web服务器发送http请求；
	web服务器响应请求，并返回指定url的数据（或错误信息，或重定向的新的url地址）；
	浏览器下载web服务器返回的数据及解析html源文件；
	生成DOM树，解析css和js，渲染页面，直至显示完成；
	
11. 虚拟dom

虚拟DOM是干什么的？这就要从浏览器本身讲起。

如我们所知，在浏览器渲染网页的过程中，加载到HTML文档后，会将文档解析并构建DOM树，然后将其与解析CSS生成的CSSOM树一起结合产生爱的结晶——RenderObject树，然后将RenderObject树渲染成页面（当然中间可能会有一些优化，比如RenderLayer树）。这些过程都存在与渲染引擎之中，渲染引擎在浏览器中是于JavaScript引擎（JavaScriptCore也好V8也好）分离开的，但为了方便JS操作DOM结构，渲染引擎会暴露一些接口供JavaScript调用。由于这两块相互分离，通信是需要付出代价的，因此JavaScript调用DOM提供的接口性能不咋地。各种性能优化的最佳实践也都在尽可能的减少DOM操作次数。

而虚拟DOM干了什么？它直接用JavaScript实现了DOM树（大致上）。组件的HTML结构并不会直接生成DOM，而是映射生成虚拟的JavaScript DOM结构，通过在这个虚拟DOM上实现了一个diff 算法找出最小变更，再把这些变更写入实际的DOM中。这个虚拟DOM以JS结构的形式存在，计算性能会比较好，而且由于减少了实际DOM操作次数，性能会有较大提升

虚拟dom的概念这里只是给简单介绍一下，vue的template模板语法，包括jsx语法，本质上最后渲染时都会渲染成render函数，而render函数中渲染的内容，其实就是虚拟dom，在前端开发中，类库的开发和组件开发中，render函数的编写也是必须掌握的技能之一。


12. $nextTick()函数 是回调函数将在 DOM 更新完成后被调用

可以在dom更新完毕后调用

13. Vue中key值的作用

（不太好理解） 再看看
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。

这块的注意点主要在动态组件和v-for时，为了标识独有dom，key值一般我们取类似id这种唯一且 不变的变量，如果仅为了区分dom，切元素不会频繁更新（增删改）则可使用index索引


14. 组件通信

1.父组件向子组件通信：子组件通过 props 属性，绑定父组件数据，实现双方通信

2.子组件向父组件通信：将父组件的事件在子组件中通过 $emit 触发

3.非父子组件、兄弟组件之间的数据传递
  1 eventBus中央事件总线let EventBus = new Vue(); https://juejin.im/post/5d358280e51d4556bc06704d
  2 Vuex 数据管理
  3 provide和inject 注入（多用于组件form） https://www.jianshu.com/p/ae0c347174f6
	provide / inject这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。

15. 插槽  slot

定义多个卡槽 <slot> 元素有一个特殊的特性：name。这个特性可以用来定义额外的插槽：
	方法1：
	<slot name="header"></slot>
	<slot name="footer"></slot>
	方法2：
	<template v-slot:header>
    	<h1>Here might be a page title</h1>
 	</template>

16. Vue的底层原理
当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。

17. vue的数据机制
单向数据流：顾名思义，数据流是单向的。数据流动方向可以跟踪，流动单一，追查问题的时候可以更快捷。缺点就是写起来不太方便。要使UI发生变更就必须创建各种 action 来维护对应的 state

双向数据绑定：数据之间是相通的，将数据变更的操作隐藏在框架内部。优点是在表单交互较多的场景下，会简化大量与业务无关的代码。缺点就是无法追踪局部状态的变化，增加了出错时 debug 的难度 

具体表现在，一般我们使用自定义组件（如bin-ui中的按钮<b-button size=’small’ v-waves :disabled=’false’>我是按钮<b-button>）中，size和disabled就是单项数据流的体现，父级组件传参给按钮组件，流动单一，按钮组件只需要对props参数做显示即可，双向数据绑定多体现在form表单组件，如input，v-model是实现双向数据绑定的语法糖，本质的数据流动还是单向的，即v-model相当于绑定:value 并@input=‘’监听返回值并更新。

18. 对 vue数据驱动视图的理解

vue特点：

各部分之间的通信，都是双向的
采用双向绑定：View 的变动，自动反映在 ViewModel，反之亦然
传统的开发总是避免不了操作dom，我们总会想到在数据返回后去操作dom元素，但是操作dom元素的开销也是比较大的，而且不容易将视图层和业务层分离，因此，需要改变习惯，当我们获取数据完成时，只需要对当前vue状态值进行更新，剩下的刷新操作，就交给vue虚拟dom去完成吧

19. vuex
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式


20. 混入mixin

混入： https://cn.vuejs.org/v2/guide/mixins.html
全局引入： Vue.mixin(模块)