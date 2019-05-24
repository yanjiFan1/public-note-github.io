1.官网：http://element-cn.eleme.io/#/zh-CN


开发经验：

1.如何给input输入框中保留两位小数  https://blog.csdn.net/u013243347/article/details/81181058
 	<el-input 
		v-model="scope.row.firstPrice" 
		size="medium" 
		placeholder="请输入首重价" 
		autocomplete="off" 
		:maxlength="20"        
		oninput="this.value = (this.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null" 
	>
	</el-input>
	上面的写法可以完美解决

 2. vue 行内样式的写法  https://blog.csdn.net/xukongjing1/article/details/81584281

 3. 编辑器集合  https://www.cnblogs.com/wisewrong/p/8985471.html
 	vue2-management-platform https://suweiteng.github.io/vue2-management-platform/#/editor
 	vue-quill-editor  https://github.com/surmon-china/vue-quill-editor
