1.页面的元素是否可以被选中 
-webkit-user-select: none;
user-select: none;

2.用CSS3移除点击交互元素的高亮背景
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
-webkit-user-select: none;
-moz-user-focus: none;
-moz-user-select: none;

3.vh calc() 的用法  使用canIuse 查看兼容性；

4.轮播图 https://segmentfault.com/a/1190000014609379

5.img模糊怎么搞？
-webkit-filter: blur(15px); /* Chrome, Safari, Opera */
filter: blur(15px);
参考：https://www.runoob.com/cssref/css3-pr-filter.html

6.文字换行问题
单行不换行，显示...
width:600px;
text-overflow: ellipsis;
white-space: nowrap;
overflow:hidden;
可以内嵌标签

多行不换行，显示...
!!!不可以内嵌标签
@mixin text-overflow($line) {
  display:-webkit-box;  
  overflow:hidden;  
  -webkit-box-orient:vertical; 
  text-overflow:ellipsis;
  -webkit-line-clamp:$line; 
}

7.左滑删除  
http://www.cnblogs.com/woodk/p/5360494.html
https://www.jb51.net/article/136221.htm   较好一点	

8.解决ios上下有拖动的感觉
box-sizing: border-box;
overflow-x: auto;
overflow-y: hidden;
-webkit-overflow-scrolling: touch; 