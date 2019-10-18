
1. 中间件
@1.webpack-dev-server
@2.http-proxy-middleware

2.webpack（v4.28.2）尝试配置：
@1.node 版本需要大于6.11.5
@2.
参考文档：@1 从零开始使用webpack 4, Babel 7创建一个React项目（2018）--- https://imweb.io/topic/5be0159bb5bbd42b053d0458

3.解决 FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory 问题
https://blog.csdn.net/weixin_41196185/article/details/81114226

4. webpack多文件入口 https://github.com/SHERlocked93/multi-entry-vue

5. 请问webpack-dev-server与react-hot-loader两者的热替换有什么区别？

区别在于webpack-dev-server自己的--hot模式只能即时刷新页面，但状态保存不住。因为React有一些自己语法(JSX)是HotModuleReplacementPlugin搞不定的。

而hot-loader在--hot基础上做了额外的处理，来保证状态可以存下来