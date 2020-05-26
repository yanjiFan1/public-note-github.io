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

6. 获取定位（在印度的一个app项目）
参考地址： https://www.cnblogs.com/cangqinglang/p/10833677.html --- html5获取地理位置和定位 navigator.geolocation.getCurrentPosition(successCallback,failCallback)

方案一  HTML5 getCurrentPosition 获取地理位置和定位
// 定位
getLocation () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition, this.showError)
  } else {
    Toast.fail('浏览器不支持地理定位。')
  }
},

showError (error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      Toast.fail('定位失败,用户拒绝请求地理定位')
      break
    case error.POSITION_UNAVAILABLE:
      Toast.fail('定位失败,位置信息是不可用')
      break
    case error.TIMEOUT:
      Toast.fail('定位失败,请求获取用户位置超时')
      break
    case error.UNKNOWN_ERROR:
      Toast.fail('定位失败,定位系统失效')
      break
  }
},

showPosition (position) {
  // 将我们获取到的经纬度保存到变量中
  var latlon = position.coords.latitude + ',' + position.coords.longitude
  alert(latlon)
  // console.log(http://maps.google.cn/maps/api/geocode/json?latlng=30,120&language=CN)
  // //baidu接口
  // var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+latlon+"&output=json&pois=0"
  // $.ajax({
  //   type: "GET",
  //   dataType: "jsonp",
  //   url: url,
  //   beforeSend: function(){
  //     $("#baidu").html('正在定位...');
  //   },
  //   success: function (data) {
  //     if(data.status==0){
  //        $("#baidu").html(data.result.formatted_address);
  //      }
  //    },
  //    error: function (XMLHttpRequest, textStatus, errorThrown) {
  //      $("#baidu").html(latlon+"地址位置获取失败");
  //   }
  // });
}

方案二：

百度定位
 // getAdr (fun) {
  //   var script = document.createElement('script')
  //   script.type = 'text/javascript'
  //   script.src = 'http://api.map.baidu.com/getscript?v=2.0&ak=HbUVYMUg6PwbOnXkztdgSQlQ&services=&t=20190123111209'
  //   var head = document.getElementsByTagName('head').item(0)
  //   head.appendChild(script)
  //   script.onload = () => {
  //     var geolocation = new BMap.Geolocation()
  //     geolocation.getCurrentPosition( (r) => {
  //       if (this.getStatus() === BMAP_STATUS_SUCCESS) {
  //         var point = new BMap.Point(r.point.lng, r.point.lat)
  //         var myGeo = new BMap.Geocoder()
  //         myGeo.getLocation(point, (result) => {
  //           if (result){
  //             console.log(result)
  //             var adr = result.addressComponents
  //             this.adress = adr.province + adr.city + adr.district + adr.street
  //             // 定位不准确办法：
  //             if (fun.constructor === Function) {
  //               fun(result)
  //             }
  //           }
  //         })
  //       }
  //     })
  //   }
  // }

7. https://taro-docs.jd.com/taro/docs/README.html

8. 手机页面混乱  其他手机正常

解决：  此手机手机设置有问题  字体大小或者第三方app内部字体大小设置等 

9. 和原生通信

https://blog.csdn.net/chx_w/article/details/79473980