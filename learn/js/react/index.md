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