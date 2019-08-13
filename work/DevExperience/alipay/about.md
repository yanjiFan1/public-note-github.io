1.点击事件如何传参data-参数
data-type="coupon" data-status="true" onTap="setModal
如何获取
event.target.dataset.参数（coupon或者status）

2.子父通信问题 https://docs.alipay.com/mini/framework/component-template

父组件传递方法，方法名称前需要添加on

子组件中调用方法需要在methods中写个方法进行调用

this.props.on+方法名称()


3.动态写class
class="coupon-list {{item.type === 2 ? 'active' : ''}}"

<!-- 4.页面不滚动，弹框内容滚动
https://www.cnblogs.com/wangzhenyu666/p/8985382.html -->

4.如何从顶部开始进行布局
在页面的json文件中设置"transparentTitle":"auto"

5.scroll-view（滚动 height：100vh）和"transparentTitle":"auto"（导航渐变）,冲突
解决方案:

6.页面如何从顶部开始布局

在页面的json问题中进行配置
"transparentTitle":"auto",（导航栏渐变）

7.
<text><image src="{{}}">fdafas </text>
image标签不写 / 结束符   包裹的内容就会不显示
！!fdafas 不会显示  

8.如何引入iconfont
https://blog.csdn.net/Zhooson/article/details/89919614  ----这个有效
https://blog.csdn.net/zhongjie19/article/details/82144097

！转换iconfont.ttf文件（小程序的wxss文件的font-face的url不接受http地址作为参数,但可以接受base64,因此需将字体文件下载后,转换为base64。用网址https://transfonter.org/转换)

9.文件或文件夹名不允许添加@字符  否则打包不成功


10.支付宝小程序跳转webview（H5页面），如何返回？
给webview单独新建一个小程序页面，
 
<view class="m-webview-chat">
<web-view src="https://chat3.365webcall.com/chat/chatwin3.aspx?settings=mw7mXbXN0m6600w0z3Am66wI00z3Am6mwXwmz3AX6mmm6" />
</view>
然后在其他页面通过跳转页面（my.navigateTo）来控制webview显隐