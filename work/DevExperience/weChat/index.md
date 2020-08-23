1. 微信开发平台(分享，授权等） https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115

1. 点击事件 bindTap

2. 父子通信 子组件在需要传值时，使用triggerEvent传给父组件一个事件( myevent ），并传递想要给父组件的值( sonParam )

父组件

<div>
	<component bindMyevent="onMyevent">
</div>

子组件
<script>
	this.triggerEvent('myevent', sonParam: { type: '1' })
</script>
https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html
https://www.cnblogs.com/jane2160/p/11358166.html

3.