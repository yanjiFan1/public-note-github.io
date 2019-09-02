1. 行高问题

	1.flex布局
	2.padding
	3.行高问题
	
2. 滑动问题
-webkit-overflow-scrolling:touch 解决滑动卡顿问题

3.
ios 内容不显示，滑动才会显示

使用watch监听不显示内容的变量，然后滑动

eg：

watch: {
  timeShow (val) {
    if (val) window.scrollTo(0, 0.1)
  }
},

4. 移动端适配flexible
http://g.tbcdn.cn/mtb/lib-flexible/{{version}}/??flexible_css.js,flexible.js

5. 移动端适配问题
  1. https://blog.csdn.net/wanshaobo888/article/details/75386409
  2. postcss-px-to-viewport
  3. postcss-pxtorem
