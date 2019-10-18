!!! 
https://www.jianshu.com/p/328bc24d3f65
https://openclub.alipay.com/club/history/read/7214

1.swiper组件应用，不能出来轮播图
解决方案：swiper 组件加个类
<swiper class="m-swiper"></swiper>
.m-swiper{
	height:400px!important;
}


解决方案2： 在img上添加高度


2.图片自适应问题
Image组件，  其中有mode字段 ，可以控制图片的填充问题 
mode='widthFix'  宽度不变，高度自动变化，保持原图宽高比不变

3.全部状态管理（）暂无，如果想要使用，请参考下面的文章
https://blog.csdn.net/billll/article/details/80037850	

4.富文本编辑器（微信中修改的）
https://github.com/yaoshanliang/wxParse

5.支付宝小程序使用阿里图标   
https://openclub.alipay.com/club/history/read/8877

6.解析字符串 https://www.jb51.net/article/151543.htm

7.从 scheme 传参唤起小程序 https://opensupport.alipay.com/support/knowledge/39203/201602383690?ant_source=zsearch

外部 APP 调用小程序，需要通过 scheme 调用，在 scheme 中可以传参，和设置跳转的首页参数。 
URL格式：alipays://platformapi/startapp?appId=[appId]&page=[pagePath]&query= [params] 
appId: 表示要跳转的目标小程序 appId 
pagePath：表示要跳转到目标小程序的具体 page 页面，该值等于 app.json 里面的配置值；如果不带 page 字段，默认跳转到小程序首页。 
query： 表示从外部 APP 携带的参数透传到目标小程序；如果不需要携带参数给小程序，可以不带该参数。 
如果想要在scheme中加上域名，调用小程序，则需要把scheme当作参数进行uri编码 
例如：window.location.href=`https://ds.alipay.com/?scheme=alipays://platformapi/startapp?appId=2018032002416428&page=pages/block/block&query=hash=${query.rowkey}${type}` 
转换为：（js的转换方法） 
window.location.href=`https://ds.alipay.com/?scheme=`encodeURIComponent("alipays://platformapi/startapp?appId=2018032002416428&page=pages/block/block&query=hash=")`${query.rowkey}${type}`

8.微信小程序返回按钮的问题
https://www.jianshu.com/p/a7bb1a826548

9.小程序提交
2019/06/21(被驳回)

审核失败，点此查看审核报告，请退回开发，点此查看审核驳回常见案例，审核驳回相关问题可咨询在线客服小蚂哥或电话0571-88158090。
1. 商城类小程序提供线下门店的资质不符合标准: 门头照为公司前台照和工厂照不符合要求，必须为线下实体店的门头照
2. 商品详情页没有属性描述和3张以上产品图片: 请在各个商品详情页面完善商品规格属性描述，必须要3张以上图片描述和文字属性描述（部分商品详情不全）
3. 同一标题页面下有重复信息: 小程序-休闲零食存在重复商品信息（漂亮兔）请检查删除重复信息
4. 应用描述没有介绍清楚小程序服务内容: 应用描述必须完整，清楚描述小程序的主要服务内容，销售什么产品（建议将版本更新添加至应用描述）
5. 业务异常，业务功能不可用: 我的页面点击登录--支付宝授权--同意--页面显示未授权--无法使用支付宝信息直接授权，请优化
6. 商城类无线下门店的小程序不允许接入: 商城类小程序必须提交实体店的门头照+营业执照各一张

10.如何通过链接打开支付宝小程序（appId 是你自己小程序的appId）
后面的路径地址是需要转码的 !!! 转码工具 http://tool.chinaz.com/Tools/urlencode.aspxhttp://tool.chinaz.com/Tools/urlencode.aspx

alipays://platformapi/startapp?appId=xxx&page=pages%2fgoodsDetail%2fgoodsDetail%3fgoodsCode%3d101549748

11. 问题？ 页面跳转到页面中，页面不展示
	回答：页面跳转层级问题，  经过处理，
	处理之前：
	if(getCurrentPages().length === 5) {
      my.redirectTo('/pages/home/home');
    } 
    处理之后：
	if(getCurrentPages().length >= 10) {
      my.redirectTo('/pages/home/home');
    } 
    参考:: getCurrentPages().length改变这个长度的大小即可

12. 
通过钉钉等阿里项目跳转到小程序内部  
alipays://platformapi/startapp?appId=2019052165320335&page=pages%2fgoodsDetail%2fgoodsDetail%3fgoodsCode%3d101554148

13. 如何获取连接进来的标识  比如isShowCoupon = 1(下面连接经过编码)
alipays://platformapi/startapp?appId=2019052165320335&page=pages/home/home%3fisShowCoupon%3d1


14.小程序需要域名吗？
是不需要的， 如果我们使用到webview的话，可以在H5白名单中配置就可以了。但是我们是需要服务器域名的，当然这个域名也是需要配置的（开发，测试，生产）


15.支付宝数据埋点问题，
我们可以使用支付宝小程序中的
 
数据分析代码中：

my.reportAnalytics('home_area2_pro',{
    proidleft:proidright  //proidleft-key值，上传字段名   proidright-上传字段值
})


后台系统中如何配置（具体参考支付宝小程序中的事件管理）

1.进入后台系统小程序模块

2.进入数据分析模块

3.进入事件管理模块-添加事件

 3.1 事件英文名，事件中文名（不能修改）   page-和小程序中的路由一致  element-元素，就是需要在代码中需要埋点的元素加个类，个人建议以md-开头，好区分 data-第一个值是字段名  第二值是字段对应的字段值（可以看考事件管理，有不同格式）

4.在实时中—事件管理中查看埋点的情况

5.在自定义分析中可以查看具体信息---每一个属性值（即上传的属性值，在分组一栏中可以查看）---具体情况在下面的table中

记住！！！—事件中data模块  数据中需要设置string  否则在自定义分析中是拿不到属性值，无法分析。


16.提交审核需要准备的资料

1.版本号（自动生成）
2.小程序服务区域
3.小程序截图
4.版本描述 
5.客服设置 客服电话等三个
6.测试账号（非必填）
7.备注
8.测试相关资料（非必填）

基本信息
1.小程序名称
2.小程序英文名
3.小程序简介
4.小程序logo
5.所属行业 
6.营业执照号：
7.营业执照名称 
8.营业执照有效期（非必填）
9。营业执照照片
10.商户门头照
11.小程序描述
12.客服电话（非必填） 
13.客服邮箱（非必填）


17.缓存问题

今天在切换环境的时候，  开发环境切换成测试环境

之前用户已经登录我们的小程序，存在token，切换成测试环境的时候，生成一个新的token

结果两个token冲突，导致页面存在一些问题


18.
支付宝小程序大小限制为3M ， node_modules计入大小

19.
支付宝小程序花呗分期接入  IDE版本需要升级到0.60 以上

20. 花呗分期引入 需要订购插件
https://docs.alipay.com/mini/plugin/plugin-order
1 插件订购 

https://fw.alipay.com/commodity/v2/ant/merchandise/merchandiseDetail.htm?merchandiseId=AM010401000000025653

2 分期接入说明 

https://docs.alipay.com/mini/introduce/antcreditpay-istallment

3 分期技术对接文档 

https://docs.open.alipay.com/277/105952/



21.分享有礼 https://docs.alipay.com/mini/operation/share-with-benefit

 
H5页面调用
alipays://platformapi/startapp?
appId=2018121862587354
&page=pages%2Findex%2Findex&query=
appId%3D
XXXXXXXXXXXXXXXX
%26
shareTemplateId%3DV2
XXXXXXXXXXXXXXXXXXXXXX

22. 获取小程序唯一标识 my.getAuthCode 静默授权可以拿到
