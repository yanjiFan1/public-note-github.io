！！！
	React是专注于View层的，组件也是React核心理念之一。
使用react的优点和缺点：https://codeday.me/bug/20180323/148318.html
三大框架的优点缺点：https://www.cnblogs.com/zcqian/p/6843787.html


1. react基本原理及性能优化 https://segmentfault.com/a/1190000015648248
	Virtual Dom模型
	生命周期管理
	setState机制
		调用setState会提交一次state修改到队列中,不会直接修改this.state(减少了update流程的触发次数,从而提高了性能)
		！另外用于监听state更新完成，可以使用setState方法的第二个参数，回调函数。在这个回调中读取this.state就是已经批量更新后的结果。

	diff算法  参考：https://zhuanlan.zhihu.com/p/20346379
		1. React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题
		2. React 通过分层求异的策略，对 tree diff 进行算法优化；
		3. React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；
		4. React 通过设置唯一 key的策略，对 element diff 进行算法优化；
		5. 建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；
		6. 建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。

		
	diff算法用于计算出两个virtual dom的差异,是react中开销最大的地方。

	React patch、事件系统
	react的 Virtual Dom模型


	性能优化方案:
		1. 减少diff算法触发次数
			@1 setState
				主要优化 非批更新阶段中(timeout/Promise回调),减少setState的触发次数	------>处理接口回调是,无论数据多么复杂,保证最后一次只调用一次setState

		2. 父组件render
			父组件的render必然会触发子组件进入update阶段(无论props是否更新)。此时最常用的优化方案即为 shouldComponentUpdate方法----->最常见的方式为进行this.props和this.state的浅比较来判断组件是否需要更新

	2. 正确使用diff算法
		不使用跨层级移动节点的操作。
		对于条件渲染多个节点时，尽量采用隐藏等方式切换节点，而不是替换节点。
		尽量避免将后面的子节点移动到前面的操作，当节点数量较多时，会产生一定的性能问题。

2. react属于单向数据流	

3. react propTypes-> 校验类型  一般写在 constructor

4. 生命周期

实例化：
	客户端：
		1、getDefaultProps
		2、getInitialState
		3、componentWillMount
		4、render
		5、componentDidMount
	服务端：
		1、getDefaultProps
		2、getInitialState
		3、componentWillMount
		4、render

分为三个阶段:
挂载阶段
	constructor
	getDerivedStateFromProps
	componentWillMount/UNSAFE_componentWillMount  react17将会完全删除，向下兼容
	render
	componentDidMount  需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错
更新阶段
	componentWillReceiveProps/UNSAFE_componentWillReceiveProps 	 react17将会完全删除，向下兼容
	getDerivedStateFromProps
	shouldComponentUpdate
	componentWillUpdate/UNSAFE_componentWillUpdate react17将会完全删除，向下兼容
	render
	getSnapshotBeforeUpdate
	componentDidUpdate
卸载阶段
	componentWillUnmount  应该处理任何必要的清理工作，比如销毁定时器、取消网络请求、清除之前创建的相关DOM节点等

16.3.0 (March 29, 2018)
新增的生命周期：
getDerivedStateFromProps()
getSnapshotBeforeUpdate()

计划去除的三个方法：
componentWillMount
componentWillReceiveProps
componentWillUpdate


5. 高阶组件 高阶函数
  1. 高阶函数只要满足参数或返回值为函数就可以成为高阶函数，而非一定要同时满足才成立
	eg:
		function add(a,b,fn) {
			return fn(a) + fn(b);
		}
		var fn = function(a) {
			return a * a;
		}
		add(2,3,fn); 13
	以上就是一个高阶函数

	平常使用的高阶方法：  eg： Map Reduce Filter Sort； 以及redux中的connect方法也是高阶函数
	
	函数柯里化 是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术
	es6中写法： 参考:https://juejin.im/post/5b019b6bf265da0b95276368
		var add2 = x => y => x+y;
		var add3 = add2(2)

		console.log('add2',add2(2)) 返回函数
		console.log('add3',add3(5)) //7
	个人总结：柯里化函数就是一种分步传参的函数，可以提前传参而不让他执行内容，但是参数满足时再调用函数。感觉可以用来做一些未知的判断


  2. 以组件作为参数的组件，结果return一个组件
	

6. 有状态组件 和  无状态组件 https://www.w3cplus.com/react/stateful-vs-stateless-components.html
	无状态的函数写法，有叫做纯组件SFC 参考：https://www.w3cplus.com/react/stateful-vs-stateless-components.html
	1. 输入输出数据完全有props决定,而且不会产生副作用，即为无状态组件
	2. 使用无状态组件一般会搭配高阶组件(HOC),为什么要用高阶组件,原因就是使用高阶组件来托管state,Redux 框架就是通过 store 管理数据源和所有状态，其中所有负责展示的组件都使用无状态函数式的写法。


7. state 和  props的区别 http://axuebin.com/blog//2017/09/15/react-state-props/
state是组件自己管理数据，控制自己的状态，可变；
props是外部传入的数据参数，不可变(可读型)；
没有state的叫做无状态组件，有state的叫做有状态组件；
多用props，少用state。也就是多写无状态组件

8. 
refs  获取真实的DOM
eg:
	<input type="text" ref="myInput" />
	this.refs.myInput.focus();

findDOMNode()：获取真实的DOM
forceUpdate()：强制更新


