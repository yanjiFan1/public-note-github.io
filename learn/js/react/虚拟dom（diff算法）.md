虚拟dom（diff算法）

参考： https://www.jianshu.com/p/3ba0822018cf

diff算法的作用
计算出Virtual DOM中真正变化的部分，并只针对该部分进行原生DOM操作，而非重新渲染整个页面。

传统diff算法
通过循环递归对节点进行依次对比，算法复杂度达到 O(n^3) ，n是树的节点数，这个有多可怕呢？——如果要展示1000个节点，得执行上亿次比较。。即便是CPU快能执行30亿条命令，也很难在一秒内计算出差异


diff策略：  react使用三大策略将O(n^3)复杂度转化为O(n)复杂度

1. 策略一(tree diff):

Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计


2. 策略二(component diff):

拥有相同类的两个组件 生成相似的树形结构,
拥有不同类的两个组件，生成不同的树形结构


3. 策略三(element diff)
对于同一层级的一组子节点， 通过唯一id区分




tree diff
 (1）React通过updateDepth对Virtual DOM树进行层级控制。
（2）对树分层比较，两棵树 只对同一层次节点 进行比较。如果该节点不存在时，则该节点及其子节点会被完全删除，不会再进一步比较。
（3）只需遍历一次，就能完成整棵DOM树的比较。

问题来了，DOM节点出现了跨层级操作，diff会咋办？

diff只简单考虑同层级的节点位置变换,如果是跨层级的话，只有创建节点和删除节点的操作



component diff


component diff
React对不同的组件间的比较，有三种策略
（1）同一类型的两个组件，按原策略（层级比较）继续比较Virtual DOM树即可。

（2）同一类型的两个组件，组件A变化为组件B时，可能Virtual DOM没有任何变化，如果知道这点（变换的过程中，Virtual DOM没有改变），可节省大量计算时间，所以 用户 可以通过 shouldComponentUpdate() 来判断是否需要 判断计算。

（3）不同类型的组件，将一个（将被改变的）组件判断为dirty component（脏组件），从而替换 整个组件的所有节点。

注意：如果组件D和组件G的结构相似，但是 React判断是 不同类型的组件，则不会比较其结构，而是删除 组件D及其子节点，创建组件G及其子节点。


element diff

当节点处于同一层级时，diff提供三种节点操作：删除、插入、移动。

插入：组件 C 不在集合（A,B）中，需要插入

删除：（1）组件 D 在集合（A,B,D）中，但 D的节点已经更改，不能复用和更新，所以需要删除 旧的 D ，再创建新的。

（2）组件 D 之前在 集合（A,B,D）中，但集合变成新的集合（A,B）了，D 就需要被删除。

移动：组件D已经在集合（A,B,C,D）里了，且集合更新时，D没有发生更新，只是位置改变，如新集合（A,D,B,C），D在第二个，无须像传统diff，让旧集合的第二个B和新集合的第二个D 比较，并且删除第二个位置的B，再在第二个位置插入D，而是 （对同一层级的同组子节点） 添加唯一key进行区分，移动即可。


diff的不足与待优化的地方

理想情况是只移动D，不移动A,B,C。因此，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，会影响React的渲染性能。



循环递归


eg：


var arrList = {
	name: '1', children: [{
		name: '2', children: [{
		    name: '3', children: [{
		      name: '4', children: []
		    }]
		}]
	}]
}

function deep(val) {
	if (val.childred.length == 0) {
		val.childred == null
	} else {
		for (var i = 0; i < val.children.length; i++) {
			deep(val.children[i])
		}
	}
} 

deep(arrList)