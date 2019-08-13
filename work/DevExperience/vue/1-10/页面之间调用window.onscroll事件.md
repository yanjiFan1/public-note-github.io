vue项目中，在A页面调用window.onscroll事件，在B页面还是会监听到，如何解决？

<!-- 在项目的全局设置 也就是说进入路由页面就会把页面滚动到顶部 -->
router.afterEach((to,from,next) => {
	window.scrollTo(0,0);
	Promise.resolve().then(() => {
		url:global.location.href
	})
})