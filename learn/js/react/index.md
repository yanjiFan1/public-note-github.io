react  https://zh-hans.reactjs.org/

react全家桶:
react https://zh-hans.reactjs.org/
react-router https://react-guide.github.io/react-router-cn/
redux https://cn.redux.js.org/
axios
antd https://ant.design/index-cn
js-cookie
less https://less.bootcss.com/



1.react可以兼容ie8  参考：https://blog.suzper.com/2017/04/17/IE8%E4%B8%8B%E4%BD%BF%E7%94%A8react%E6%80%BB%E7%BB%93/
2.react性能分析 
参考：
https://segmentfault.com/a/1190000007811296
https://imweb.io/topic/577512fe732b4107576230b9

<!-- {...this.props} (不要滥用，请只传递component需要的props，传得太多，或者层次传得太深，都会加重shouldComponentUpdate里面的数据比较负担，因此，请慎用spread attributes（<Component {...props} />）)。

::this.handleChange()。(请将方法的bind一律置于constructor)

this.handleChange.bind(this,id)

复杂的页面不要在一个组件里面写完。

请尽量使用const element。

map里面添加key，并且key不要使用index（可变的）。具体可参考使用Perf工具研究React Key对渲染的影响

尽量少用setTimeOut或不可控的refs、DOM操作。

props和state的数据尽可能简单明了，扁平化。

使用return null而不是CSS的display:none来控制节点的显示隐藏。保证同一时间页面的DOM节点尽可能的少。 -->

3. class写法和hack形式




工具：
1.react-pref-tool 性能检测方案  参考：https://segmentfault.com/a/1190000007811296


面试题参考
1 https://www.cnblogs.com/zhuxinpeng-looking/p/11283015.html 
2. https://blog.csdn.net/buzhan5543/article/details/100955290 2019年17道高频React面试题及详解

1. react工作原理

参考:
React 会创建一个虚拟 DOM(virtual DOM)。当一个组件中的状态改变时，React 首先会通过 "diffing" 算法来标记虚拟 DOM 中的改变，第二步是调节(reconciliation)，会用 diff 的结果来更新 DOM。


2. 虚拟dom (Virtual DOM)
3. setState机制
4. render机制
5. 生命周期
6. 双向绑定原理
7. react-router实现原理
8. redux实现原理
9. diff算法
	参考：
	1.把树形结构按照层级分解，只比较同级元素。
	2.给列表结构的每个单元添加唯一的key属性，方便比较。
	3.React 只会匹配相同 class 的 component（这里面的class指的是组件的名字）
	4.合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.
	5．选择性子树渲染。开发人员可以重写shouldComponentUpdate提高diff的性能。

10. react性能优化方案
1）重写shouldComponentUpdate来避免不必要的dom操作。
2）使用 production 版本的react.js。
3）使用key来帮助React识别列表中所有子组件的最小变化

11. React解决了什么问题？
答：解决了三个问题： 1.组件复用问题， 2.性能问题，3.兼容性问题：

12. React 有何优点
1.只需查看 render 函数就会很容易知道一个组件是如何被渲染的
2.JSX 的引入，使得组件的代码更加可读，也更容易看懂组件的布局，或者组件之间是如何互相引用的
3.支持服务端渲染，这可以改进 SEO 和性能
4.易于测试
5.React 只关注 View 层，所以可以和其它任何框架(如Backbone.js, Angular.js)一起使用

13. state 和 props

14. key值的目的

15. 何为纯函数(pure function)
一个纯函数是一个不依赖于且不改变其作用域之外的变量状态的函数，这也意味着一个纯函数对于同样的参数总是返回同样的结果