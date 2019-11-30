1. 	vue实现双向数据绑定原理   
参考： https://testerhome.com/articles/19818

利用Object.defineProperty()这个方法重新定义了对象获取属性值(get)和设置属性值(set)的操作来实现


它接收三个参数，要操作的对象，要定义或修改的对象属性名，属性描述符


var obj = {}
Object.defineProperty(obj, 'name', {
	get: function() {
		console.log('我被获取了')
		return val;
	},
	set: function() {
		console.log('我被设置了')
	}
})
obj.case = 'product'; // 在给obj设置case属性的时候，触发了set这个方法
var val = obj.case; // 在得到obj的case属性，会触发get方法

数据双向绑定流程图
Data -> Observer(劫持监听所有data属性)-> Dep(订阅者) --通知变化--> Watcher -添加订阅者-> View  


数据变化更新视图，视图变化更新数据

1. 监听器Observer，劫持并监听所有属性，有变动的，就通知订阅者    Observer.js
2. 订阅者Watcher, 可以收到属性的变化通知并执行相应的函数，从而更新视图 Watcher.js
3. 解析器Compile, 解析每个节点的相关指令， 并根据初始化模版data数据以及初始化相应的订阅器	Compile.js