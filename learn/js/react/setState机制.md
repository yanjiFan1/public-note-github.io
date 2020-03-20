setState机制.md


setStated的执行原理：



 this.setState(newState)
 newState存入pending队列
 是否处于batch undate
 
 如果是-- 保存组件于dirtyComponents中
 如果否-- 遍历所有的dirtyComponents调用updateComponent 更新pending state or props