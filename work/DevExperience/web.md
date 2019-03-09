1.Google浏览器上传文件卡死状态问题解决方案(将Adobe Acrobat这个扩展程序设置为允许)
https://blog.csdn.net/chuanmin_zhang/article/details/80963474?utm_source=blogxgwz1
2.快速打开谷歌商店： chrome://apps     快速打开谷歌扩展文件 chrome://extensions/

3.调用打印机：
<span id="btn-print" className="btn btn-print" onClick="window.print();">立即打印</span>

4.写邮件样式需要注意的点
注意事项：：
1、邮件不能采用div布局，只能使用table，如使用div布局，不能出现并排显示的内容，outlook下载后，div布局的内容会横排显示，不能竖排显示
2、涉及到需要用背景图片的，需要使用table的background属性，而不是style里面的background样式
3、邮件中不能定义font-family为汉字的字体，需要默认字体，或者不定义，gmail等邮箱会过滤掉字体样式属性
4、邮件里设置的高度，gmail会过滤掉，如果空内容，是无法把容器撑开的，一般采用img图片撑开，但需要注意，空白位置需要增加font-size:0px;line-height:0px;两个属性，保证样式在发到邮箱后，img下面不会多出空行
5、邮件宽度不超过650px
6、在所有td和tr标签上添加  style="border: 0px; padding: 0px; margin: 0px;"样式，保证各个浏览器样式统一
7.邮件不支持html5新特性（eg：section标签）
8.邮件会默认生成一个style文件；可能会覆盖掉你的样式；（eg:body{margin：0}
9.写邮件  伪类元素不一定生效（网易-闪电邮不生效）
参考文档：
1.https://segmentfault.com/a/1190000008864116 
2. http://blog.csdn.net/xiaoran606/article/details/7107878
3.http://www.ruanyifeng.com/blog/2013/06/html_email.html

5.今天出现了一个问题：就是数据update的情况下  前端没有传字段或者传null  后端都不更新！！！
所以注意定义接口的时候注意一下：需要给后端传什么字段，类型  返回数据类型

6. 男女-color
性别男 #00AAE7
性别女 #D1098D

7运算符优先级
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

8.今天遇到 微信分享到朋友圈 只有自己可见   这不就尴尬了
原因： 分享量太大 被微信禁止了 只有自己可以看到自己发的（防止病毒式传播）; 诱导违规

9 打印材料如何分页
pageBreakBefore = "always"  写在需要分页的样式中
打印材料中的样式如何写
@media print {
	打印中的样式
}