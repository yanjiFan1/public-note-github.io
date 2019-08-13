1. 实战：vue项目中导入swiper插件
https://segmentfault.com/a/1190000013044682


//1.  子组件更改父组件的值 导致报错,,,   关闭子组件，子组件没有被卸载掉

2.key值必须是唯一的，否认会有警告，很难受。  参考： https://blog.csdn.net/Dream_xun/article/details/85064277

3.从路由获取参数  need_close---->路由参数
this.needclose = this.$route.query.need_close


4.多端开发 uniapp https://uniapp.dcloud.io/

5.如何引入外部数据

5.1 外部资源--demo.js  export const demo = []
5.2.1 vue文件 通过 import { demo } from './demo.js'
5.2.2 vue文件 在data中定义demo变量，然后在template中使用demo这个变量
!!！在vue文件中如果不定义demo这个变量页面会报错