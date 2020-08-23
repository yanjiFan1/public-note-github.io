建立一个公用的event.js文件
内容
import Vue from 'vue'
export default new Vue()


两个需要通信的页面，都要引入event.js
import vmson from '../commander/event.js'


发送
vmson.$emit('send',data)


接收
vmson.$on('send',(data)=>{
	console.log(data)
})







