webpack的思想：  一切皆模块

Webpack实战:入门、进阶与调优 居玉浩

webpack简介

1.webpack-dev-serve  
作用：
	1启动一个本地服务
	2.处理打包资源与静态文件的请求
	3.它的live-reloading功能可以监听文件变化，自动刷新页面来提升开发效率
如何启用：
packjson文件中
启动webpack-dev-serve "dev": "webpack-dev-server"


第二章 模块打包：

1.CommonJS module.exports = { }  这样可以对外暴露内容
2.模块打包与原理
	1.最外层立即执行匿名函数。它用来包裹整个bundle，并构成自身的作用域
	2.installdModules对象。 每个模块只在第一次加载的时候执行，之后其导出值就被存储到这个对象里面，当再次被加载的时候直接从这里取值，而不会重新执行
	3.__webpack_require__函数。 对模块加载的实现，在浏览器中可以通过调用__webpack_require__(module_id)来完成模块导入
	4.modules对象。 工程中所有产生了依赖关系的模块都会以key-value的形式放在这里。key可以理解为一个模块的id，有数字或者一个很短的hash字符串构成；
	value则是一个匿名函数包裹的模块实体，匿名函数的参数则赋予了每个模块导出和导入的能力

3.一个bundle是如何在浏览器中执行的

	1.在最外层的匿名函数中会初始化浏览器执行环境，包括定义installedModules对象、__webpack_require_函数等，为模块的加载和执行做一些准备工作。
	2.加载入口模块。 每个bundle都有且只有一个入口模块，浏览器中会从入口文件开始执行。
	3.执行模块代码。 如果执行到了modules.exports则记录下模块的导出值；如果中间遇到require函数（准确地说是__webpack_require__）,则会暂时交出执行权，进入__webpack_require__函数体内进行加载其他模块的逻辑。
	4.在__webpack_require__中会判断即将加载的模块是否存在installedModules对象中。如果存在则直接取值，否则回到第3步，执行该模块的代码来获取导出值。
	5.所有依赖的模块都已执行完毕，最后执行权又回到入口模块。当入口模块的代码执行到结尾，也就意味着整个bundle运行结束。

	总结：
	第三步和第四步是一个递归的过程。webpack为每个模块创造一个可以导出和导入模块的环境，但本质上并没有修改代码的执行逻辑，因此代码执行顺序与模块加载的顺序是完全一致的，这就是webpack模块打包的奥秘

4.commonJS和ES6 Modules是目前使用较为广泛的模块标准。

区别： 
1前者建立模块依赖关系是在运行是，后者是在编译时；
2在模块导入方面就，前者是值拷贝，后者导入的是只读的变量映射；ES6 Modules通过其静态特性可以进行编译过程中的优化，并且具备处理循环依赖的能力。


第三章  资源输入输出
1. 当一个bundle大于250kB时(压缩前)会认为这个bundle已经过大了，在打包时会发生警告
2. vendor作用
可以将业务模块和第三方模块分开，分别打包出自己的bundle模块，第三方模块不会经常变动，因此可以有效地利用客户端缓存，在用户后续请求页面时会加快整体的渲染速度

3. 




总结：
1. loader的原理





