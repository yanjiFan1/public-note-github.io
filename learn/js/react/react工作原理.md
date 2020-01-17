react工作原理

频繁的DOM操作是性能瓶颈产生的原因之一
在这个时候，
react引入了虚拟DOM(Virtual DOM)机制
虚拟DOM(Virtual DOM)机制: 对于每一个组件，React会在内存中构建一个相对应的DOM树，基于React开发时所有的DOM构造都是通过虚拟DOM进行，每当组件的状态发生变化时，React都会重新构建整个DOM数据，然后将当前的整个DOM树和上一次的DOM树进行对比，得出DOM结构变化的部分（Patchs）, 然后将这些Patchs再更新到真实DOM中。整个过程都是在内存中进行，因此是非常高效的。


 1 getDefaultProps //创建组件
 2 getInitialState  //实例化状态
 3 componentWillMount  //挂载前
 4 componentDidMount //挂载后
 5 componentWillReceiveProps //属性被改变时
 6 shouldComponentUpdate //是否更新
 7 componentWillUpdate //更新前
 8 componentDidUpdate //更新后
 9 componentWillUnmount //销毁前

 对于外部系统来说，组件是一个独立存在的封闭系统，内部的逻辑被隐藏，只对外暴露传递数据的接口，而React为我们提供了两种方式来向组件传递数据，即 props 和 state。


在使用state之前，需要在getInitialState中为state设置一个默认值,然后才能通过this.state.xxx来访问，当组件被挂载完成时，触发componentDidMount方法，我们可以在这里通过Ajax请求服务器数据，然后再通过setState()把state的值设置为真实数据

props属性是只读的，如果想要改变props的值，只能通过重新调用render()来传递新的props，但要注意的是，重新执行render()组件不会被重新挂载，而是通过虚拟DOM技术进行增量更新和渲染，这时还会触发 componentWillReceiveProps 方法，并将新的props作为参数传递，你可以在这里对新的props进行处理

当 props 和 state 的状态发生变化后，组件在即将更新之前还会触发一个叫 shouldConponentUpdate 的方法，如果 shouldConponentUpdate 返回的是 true，不管props和state 的值和上一次相比有没有变化，React 都会老老实实的进行对比。此时，如果你确定以及肯定两次数据没有变化，那就让 shouldConponentUpdate 返回 false，React就不会进行diff了，更不会重新渲染了。瞬间省去了diff的时间。

销毁
当组件从DOM中被移除时，React会销毁之。在销毁之前，细心的React还触发 componentWillUnmount 来通知你，看你最后有没有什么话想对这个即将销毁的组件说，当然你没什么事就不用了。

什么时候用props,什么时候用state
我们已经知道可以通过props和state两种方式向组件传递数据，props是只读的不能被改变，而 state 是用来反映一个组件的状态，是可以改变的。因此，当组件所需要的数据在调用时是已经确定的，不频繁发生变化的，就可以使用props来传递，相反，当组件所需要的数据在调用时不能确定，需要等待异步回调时才能确定，比如ajax请求数据，input的onchange事件，这时就需要使用state来记录和改变这些值得变化。