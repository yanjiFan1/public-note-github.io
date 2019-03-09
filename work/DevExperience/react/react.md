1.
react中input 只能输入数字  
answer:<Input onInput={(e) => e.target.value = e.target.value.replace(/[^\d]/g,'')} />

坑：我在这块花了好几个小时, 当初
解决方案1：是<Input onKeyUp={(e) => e.target.value = e.target.value.replace(/[^\d]/g,'')} />
这样处理的结果是  输入框输入非数字时候回一闪一闪的确实输入不上，但是我们再切换到其他输入框的情况下，会带出一个非数字，仍然会出错；

解决方案2:<Input type="number" onKeyUp={(e) => e.target.value = e.target.value.replace(/[^\d]/g,'')} />
结果:我输入数字然后输入非数字，之前输入的全部清除掉,这样用户体验不是很好

解决方案3：<Input onKeyPress={(e) => e.target.value = e.target.value.replace(/[^\d]/g,'')} />
这样无法解决。。。醉了醉了

解决方案4:<Input onInput={(e) => e.target.value = e.target.value.replace(/[^\d]/g,'')} />
这个解决方案完美解决;
英文状态下,输入数字可以，输入非数字，不是闪烁，切换到其他输入框也不会出现上个输入框出现的非 

知识点：
oninput 事件在用户输入时触发。
该事件在 <input> 或 <textarea> 元素的值发生改变时触发。
提示： 该事件类似于 onchange 事件。不同之处在于 oninput 事件在元素值发生变化是立即触发， onchange 在元素失去焦点时触发。另外一点不同是 onchange 事件也可以作用于 <keygen> 和 <select> 元素。
参考地址:
@1.http://www.runoob.com/jsref/event-oninput.html
@2.https://blog.csdn.net/freshlover/article/details/39050609

2.
在文件中 组件文件名称小写，文件名称首字母大写；

3.
react-from-wrappedComponentRef
表单验证，如果父组件想要验证子组件中的form表单值，
以前的做法是，在子组件中拿到form表单值，通过父组件的一个方法拿到这些值，这个看起来可以使用，但是总感觉有点不妥.
其实可以使用 wrappedComponentRef={(form) => this.offerForm = form}  
eg 父组件调用BasicInfo， <BasicInfo wrappedComponentRef={(form) => this.offerForm = form} {...totalData} /> 这样就可以获取到BasicInfo中的form表单值；

4.
在封装form表单中使用封装组件的话，form表单如何拿到组件中的value值呢？
其实可以在自己的组件中使用onChange方法就可以解决；form如何能拿到各个值，原因就是ant-design在封装组件的时候会有onChange事件(语言没有组织好)

5.
在一次做一个页面， 这个页面是有一张很长的大图和一个button按钮组成（图片自适应，所以img不设置高度）
我的做法是，把图片切割成多个小图片,然后使用定位吧按钮定位到底部。但是这个时候出现了一个问题。就是每次加载图片的时候，图片还没有加载出来，装载button的div有高度，直接跑到顶部。给用户的感觉就是button按钮一闪一闪的。效果很差。  

处理方法:给button按钮上方的图片加上最小高度就可以解决这个问题

解决前：
<img style={{width:'100%'}} src={First} />
<img style={{width:'100%'}} src={Second} />
<img style={{width:'100%'}} src={Third} />
<img style={{width:'100%'}} src={Four} />
<img style={{width:'100%'}} src={Five} />
<img style={{width:'100%'}} src={Six} />
<img style={{width:'100%'}} src={Seven} />
<img style={{width:'100%'}} src={Eight} />
<div style={{width:'100%',height:'74px',position:'relative'}}>
	<img className="u-btn" src={Nine} onClick={(e) => this.Todeliver(e)} />
</div>
解决后：
<div style={{width:'100%',minHeight:'340px'}}><img style={{width:'100%'}} src={First} /></div>
<div style={{width:'100%',minHeight:'520px'}}><img style={{width:'100%'}} src={Second} /></div>
<img style={{width:'100%'}} src={Third} />
<img style={{width:'100%'}} src={Four} />
<img style={{width:'100%'}} src={Five} />
<img style={{width:'100%'}} src={Six} />
<img style={{width:'100%'}} src={Seven} />
<img style={{width:'100%'}} src={Eight} />
<div style={{width:'100%',height:'74px',position:'relative'}}>
	<img className="u-btn" src={Nine} onClick={(e) => this.Todeliver(e)} />
</div>

6.
react在写style样式的时候  width和height 的值都可以写成数字；   eg:width:100，  解析的时候会解析成px
!!! lineHight这样的既可以写px又可以写数字的属性  不可以直接写成数字

7. 
在render中 
arr.map((item,index) => {
	return 
	<li> 
		111
	</li>
})
上面的写法是没有返回值的；
需要这样写：
arr.map((item,index) => {
	return <li> 
		111
	</li>
})

8.
大文件上传（分片上传）   https://www.jianshu.com/p/0d1421df0e0d

9.
不是同一个页面最好不要使用store  会出现问题

10.  React 将字符串解析成HTML的DOM节点
@1
<section dangerouslySetInnerHTML={{__html: '<div>1111</div>'}}></section>
@2 react-html-parser  这个组件是作用如下
eg：
import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
class HtmlComponent extends React.Component {
  render() {
    const html = '<div>Example HTML string</div>';
    return <div>{ ReactHtmlParser(html) }</div>;


 11.
 两个循环同时写的时候  例如下面是错误的
 (value.appendixKey || []).map(item => appendixKeyNosKeys.push(item.nosKey))
(value.workAppendixKeys || []).map(item => workAppendixKeysNosKeys.push(item.nosKey))

正确的是下面的
(value.appendixKey || []).map(item => appendixKeyNosKeys.push(item.nosKey));
(value.workAppendixKeys || []).map(item => workAppendixKeysNosKeys.push(item.nosKey));
循环结束需要在后面加上';'
否则会报错如下：proxyConsole.js:56 TypeError: (value.appendixKey || []).map(...) is not a function
