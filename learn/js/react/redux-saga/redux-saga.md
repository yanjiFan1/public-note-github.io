1. 官方文档：https://redux-saga-in-chinese.js.org/
   英文原版：https://redux-saga.js.org/

2. redux-saga是什么，干什么的
	
	是一个用于管理应用程序Side Effect(副作用,例如异步获取数据，访问浏览器缓存等)的library，目标是让副作用管理更容易，执行更高效，测试更简单，在处理故障时更容易

	redux-saga是一个redux中间件，意味着这个线程可以通过正常的redux action从主应用程序启动，暂停和取消，它能访问完整的redux state，也可以dispatch redux action。