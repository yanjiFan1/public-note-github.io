1.从 scheme 传参唤起小程序 https://opensupport.alipay.com/support/knowledge/39203/201602383690?ant_source=zsearch

外部 APP 调用小程序，需要通过 scheme 调用，在 scheme 中可以传参，和设置跳转的首页参数。 
URL格式：alipays://platformapi/startapp?appId=[appId]&page=[pagePath]&query= [params] 
appId: 表示要跳转的目标小程序 appId 
pagePath：表示要跳转到目标小程序的具体 page 页面，该值等于 app.json 里面的配置值；如果不带 page 字段，默认跳转到小程序首页。 
query： 表示从外部 APP 携带的参数透传到目标小程序；如果不需要携带参数给小程序，可以不带该参数。 
如果想要在scheme中加上域名，调用小程序，则需要把scheme当作参数进行uri编码 
例如：window.location.href=`https://ds.alipay.com/?scheme=alipays://platformapi/startapp?appId=2018032002416428&page=pages/block/block&query=hash=${query.rowkey}${type}` 
转换为：（js的转换方法） 
window.location.href=`https://ds.alipay.com/?scheme=`encodeURIComponent("alipays://platformapi/startapp?appId=2018032002416428&page=pages/block/block&query=hash=")`${query.rowkey}${type}`

2.