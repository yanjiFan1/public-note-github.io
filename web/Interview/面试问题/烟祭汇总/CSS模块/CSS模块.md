参考： 
https://juejin.im/post/5c875791e51d456b30397846

1. em 和 rem
em 相对于父元素
rem 相对于根元素

2. 重绘和重排 参考： https://juejin.im/post/5c875791e51d456b30397846

3. 三大定位，相对定位放在固定定位产生什么影响？

4. 纯css画三角形

5.  CSS BFC是什么？

BFC是一个独立的块级渲染容器，拥有自己的渲染规则，不受外部影响，不影响外部
特征

内部box垂直往下排列
内部块元素受maigin特征的影响，上下外边距会塌陷
BFC区域不会遮盖浮动元素区域
计算BFC高度时，浮动元素高度也计算在内
BFC是独立渲染容器，外部元素不影响内部，反之亦然

产生条件

固定定位和绝对定位
float除了none外
overflow除了visible外（hidden、auto、scroll）
display为以下其一（inline-block、table-cell、table-caption）

作用

清除浮动
消除margin重叠
布局（左浮动，右BFC自适应）

6. 清除浮动的方式
	1. 父元素设置伪类：clear:both + zoom:1
	2. 结尾处添加空白标签：claer:both
	3. 父元素产生BFC BFC内浮动元素高度计算在内

7. 水平垂直居中的实现方式，尽可能多

方法一、定位 + transform

.parent{
    height: 500px;
    width: 500px;
    border: 1px solid red;
    position: relative;
 }
 .child{
    height: 80px;
    width: 80px;
    background-color: #515A6E;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
 }


方法二、margin + transform

.parent{
    height: 500px;
    width: 500px;
    border: 1px solid red;
 }
 .child{
    height: 80px;
    width: 80px;
    background-color: #515A6E;
    margin: 50% 0 0 50%;
    transform: translate(-50%, -50%);
 }


方法三、定位 + 负margin

.parent{
    height: 500px;
    width: 500px;
    border: 1px solid red;
    position: relative;
 }
 .child{
    height: 80px;
    width: 80px;
    background-color: #515A6E;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -40px 0 0 -40px;
 }

方法四、flex

.parent{
    height: 500px;
    width: 500px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 .child{
    height: 80px;
    width: 80px;
    background-color: #515A6E;
 }


方法五、table-cell

.parent{
    height: 500px;
    width: 500px;
    border: 1px solid red;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
 }
 .child{
    display: inline-block;
    height: 80px;
    width: 80px;
    background-color: #515A6E;
 }


8. 盒子模型

标准盒子模型

width = content

IE盒子模型

width = border + padding + content

9. 块级元素和行内元素的区别？img可设置宽高吗？

块级元素

独占一行，在默认情况下，其宽度自动填满其父元素的宽度
块级元素可以设置width、height属性
块级元素即使设置了宽度也是独占一行，块级元素可以设置margin、padding属性

行内元素

行内元素不会独占一行，相邻的行内元素会排列在同一行里，直到行排不下，就自动换行，其宽度随内容而变化
行内元素的width、height属性则无效
水平方向的padding、margin会产生边距效果，竖直方向的padding、margin不会产生边距效果

行内置换元素

浏览器依据元素的标签和属性来决定元素的具体显示内容

img、input、textarea、select、object属于行内置换元素，
具有块级元素的特征（除宽度外）

10. 