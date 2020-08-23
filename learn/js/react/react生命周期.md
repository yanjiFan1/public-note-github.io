react生命周期
参考 : https://segmentfault.com/a/1190000004168886
	   https://www.jianshu.com/p/b331d0e4b398

一个React组件的生命周期分为三个部分：实例化、存在期和销毁时。


实例化：
	

	当组件在客户端被实例化 第一次创建时
	getDefaultProps 方法只会调用一次 其返回的对象可以用于设置默认的 props(properties的缩写) 值
	getInitialState 这个方法的调用有且只有一次，用来初始化每个实例的 state
	componentWillMount 该方法在首次渲染之前调用，也是再 render 方法调用之前修改 state 的最后一次机会。
    render 该方法会创建一个虚拟DOM，用来表示组件的输出。对于一个组件来讲，render方法是唯一一个必需的方法

		1 只能通过 this.props 和 this.state 访问数据（不能修改）

		2 可以返回 null,false 或者任何React组件

		3 只能出现一个顶级组件，不能返回一组元素

		4 不能改变组件的状态

		5 不能修改DOM的输出
		render方法返回的结果并不是真正的DOM元素，而是一个虚拟的表现，类似于一个DOM tree的结构的对象。react之所以效率高，就是这个原因。
    componentDidMount


	
	当组件在服务端被实例化，首次被创建时，以下方法依次被调用:

	getDefaultProps
	getInitialState
	componentWillMount
	render


	componentDidMount 不会在服务端被渲染的过程中调用



存在期：
此时组件已经渲染好并且用户可以与它进行交互，比如鼠标点击，手指点按，或者其它的一些事件，导致应用状态的改变，你将会看到下面的方法依次被调用

1、componentWillReceiveProps  
组件的 props 属性可以通过父组件来更改，这时，componentWillReceiveProps 将来被调用。可以在这个方法里更新 state,以触发 render 方法重新渲染组件。

2、shouldComponentUpdate
如果你确定组件的 props 或者 state 的改变不需要重新渲染，可以通过在这个方法里通过返回 false 来阻止组件的重新渲染，返回 `false 则不会执行 render 以及后面的 componentWillUpdate
3、componentWillUpdate
注意不要在此方面里再去更新 props 或者 state
4、render
5、componentDidUpdate
这个方法和 componentDidMount 类似，在组件重新被渲染之后，componentDidUpdate(object prevProps, object prevState) 会被调用。可以在这里访问并修改 DOM。


销毁时：

componentWillUnmount


当再次装载组件时，会依次调用：

1. getInitialState
2. componentWillMount
3. render
4. componentDidMount

反模式

在 getInitialState 方法中，尝试通过 this.props 来创建 state 的做法是一种反模式

v16.3
新的生命周期

getDerivedStateFromProps
getSnapshotBeforeUpdate   这个方法在render之后，componentDidUpdate之前调用，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，请返回null，不写的话控制台会有警告。还有这个方法一定要和componentDidUpdate一起使用，否则控制台也会有警告



v17.0

componentWillMount
componentWillReceiveProps
componentWillUpdate