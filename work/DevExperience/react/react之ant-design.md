1.wrappedComponentRef获取子组件的form表单值
	<BasicInfo wrappedComponentRef={(form) => this.offerForm = form} {...totalData} />
2.form之getFieldDecorator更新的原理是什么
answer:这个属于高阶函数，内部会调用onChange事件，这样form才会拿到这个高阶方法中的值,所以在这个高阶方法中(getFieldDecorator)调用组件，想要使组件中的值及时更新到form中，需要在组件中调用onChange事件. 这块我还是有点疑惑，为什么在ant-design的组件中 比如input就可以及时更新，但是自己写的组件就必须再次调用高阶函数中的onChange方法

3.tabs这个组件， tabPane中不能放内容，这样的话由于state和props更新多次导致会render很多次，性能不好,直接体现的是UI的效果不好，切换tab的时候会出现白屏效果
解决方法:(把内容放在和tabs同级)
<Tabs onChange={this.changeTab}>
	{this.TabPaneList.map((item,index) => <TabPane tab={item.title} key={item.key} className="u-tabPane"></TabPane>)}
</Tabs>
<Spin spinning={isFetching}>
	{interviewInfo && interviewInfo.map(item => 
		<CardList
			{...this.state}
			key={item.applyId}
			title = {this.renderTitle(item)}
			columns = {this.renderCardListContent(item,applyStatus)}
			extra={<div>{this.setOperateBtn(applyStatus,this.btnListSection(item.buttonFlag,applyStatus,item))}</div>}
			footer={<Button style={{marginTop:'20px'}} className="fr" onClick={()=>this.evIsShowModal('updateInterview',true,'add',item)}>+添加面试安排</Button>}
		/>
	)}
	{pagination && pagination.total > 0 && <CustomPagination {...pagination} change={this.changeTable} />}
</Spin>

4.Input组件中 遇到这样一个问题：  默认Input组件不显示， button组件显示，点击button  Input显示（这个是大背景）---需要点击button ，  input需要聚焦。但是只要点击button，input就会失去焦点。所以给我们的效果就是  只要点击button，input就会失去焦点  怎么处理呢？
answer：
通过isShowAddFavDir这个flag ，只要点击button，更改flag的布尔值，就会render，达到了点击button，input聚焦的效果
//处理blur事件
handleBlur = (e) => {
	setTimeout(() => {
       this.setState({isShowAddFavDir:true})
    }, 300);
}
//处理KeyUp事件
handleKeyUp = (e) => {
    //限制开头不能输入空格
    if (e.target.value.trim() == "") {
        this.props.form.setFieldsValue({name:e.target.value.replace(/^\s+|\s+$/g, '')})   
    }
}
<Input 
	autoFocus={isShowAddFavDir?false:true}
    maxLength="15"
    onBlur={this.handleBlur}
    onKeyUp={this.handleKeyUp}
/>


5.在form表单中使用getFieldDecorator  然后中间包裹的是Checkbox  然后回填信息，一直不成功
解决办法：
<FormItem {...this.formTailLayout}>
	{getFieldDecorator('noticeAssessor111',{valuePropName:'checked'})(
        <Checkbox>112222</Checkbox>
    )}
</FormItem>

valuePropName  这个属性是设置包裹组件的回填属性 因为checkbox需设置checked  才会选中， 所以需要把valuePropName设置为checked才会回填成功

(以上已分享到微信公众平台)

6.
多文件上传，大文件上传，分块上传，断点续传，文件秒传，上传失败自动修复再上传???