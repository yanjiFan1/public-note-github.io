vue-awesome-swiper

https://3.swiper.com.cn/api/index.html
https://segmentfault.com/a/1190000014609379


1. 需求： 首页整个屏幕滚动，滚动到最后一个slide，然后滚动window，即可以滚动到footer部分，然后向上滚动，滚动到顶部，继续滚动swiper


实现：

swiperOption: {
	direction: 'vertical',
	slidesPerView: 1,
	mousewheel: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true
	},
	// observer: true, // 子元素发生变化时,swiper进行更新
	// watchActiveIndex: true,
	on: {
		    slideChange: () => {
	    let realIndex = this.swiper && this.swiper.realIndex
	    if (realIndex === 2) {
	      this.swiper.mousewheel && this.swiper.mousewheel.disable()
	    } 
	  }
	}
},

在slideChange方法中怕【判断最后一个slide， 这个时候使用this.swiper.mousewheel.disable() 禁止滑轮滚动，

在mounted中监听滚动事件， 滚动到顶部（即是整个屏幕），然后再放开滑轮滚动，到此就实现了需求

window.addEventListener('scroll', (e) => {
  console.log(document.documentElement.scrollTop)
  if (document.documentElement.scrollTop === 0) {
    this.swiper.mousewheel && this.swiper.mousewheel.enable()
  }
})


坑坑：

1. 第一个思路使用this.swiper.destroy 即销毁掉swiper ，这个实现了一部分需求 ，就是滚动到最后一个slide 可以继续滚动window到footer部分，但是向上滚动，不能继续滚动了， 这个方案失败

2. 接着第一个思路， 在滚动到顶部的时候，我location.reload() 刷新页面。 最后以失败告终s