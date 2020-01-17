1. setTimeout和setInterval 的区别

2. 防抖

3. 浅拷贝和深拷贝

4. map和forEach的区别？map返回的是什么？ map实现原理
	相同点
	1.都是循环遍历数组中的每一项。
	2.forEach() 和 map() 里面每一次执行匿名函数都支持3个参数：数组中的当前项item,当前项的索引index,原始数组input。
	3.匿名函数中的this都是指Window。
	4.只能遍历数组。

	不同点
	forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组。
	map()方法会得到一个新的数组并返回。

	forEach()的执行速度 < map()的执行速度
	
	总结：
	forEach()可以做到的东西，map()也同样可以。反过来也是如此。
	map()会分配内存空间存储新数组并返回，forEach()不会返回数据。
	forEach()允许callback更改原始数组的元素。map()返回新的数组。


5. call和apply的区别

	共同作用: 改变this指向
	call（）：第一个参数是this值没有变化，变化的是其余参数都直接传递给函数。传递给函数的参数必须逐个列举出来。
	apply（）：传递给函数的是参数数组

	eg:
	function add(c, d){ 
	    return this.a + this.b + c + d; 
	} 
	var o = {a:1, b:3}; 
	add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16 
	add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34 

6. JSON.stringify特性 

7. 区分slice,splice和split方法

	1.slice（数组）用法：array.slice(start,end)
	解释：该方法是对数组进行部分截取，并返回一个数组副本；参数start是截取的开始数组索引，end参数等于你要取的最后一个字符的位置值加上1（可选）

	2.


