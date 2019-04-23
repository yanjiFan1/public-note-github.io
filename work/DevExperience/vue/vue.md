1. 实战：vue项目中导入swiper插件
https://segmentfault.com/a/1190000013044682


//1.  子组件更改父组件的值 导致报错,,,   关闭子组件，子组件没有被卸载掉

2.key值必须是唯一的，否认会有警告，很难受。  参考： https://blog.csdn.net/Dream_xun/article/details/85064277

3.从路由获取参数  need_close---->路由参数
this.needclose = this.$route.query.need_close

