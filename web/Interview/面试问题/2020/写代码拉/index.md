1. 参考https://fangyinghang.com/es-6-tutorials/

知其然而又知其所以然

2020写代码啦押题.md



一：算法
1. 排序
快速排序
思路：
1、选择数组中间数作为基数，并从数组中取出此基数；
2、准备两个数组容器，遍历数组，逐个与基数比对，较小的放左边容器，较大的放右边容器；
3、递归处理两个容器的元素，并将处理后的数据与基数按大小合并成一个数组，返回。

var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};


计数排序
冒泡排序
for(int i =0;i < score.length - 1;i++) {
	for(int j = 0;j < score.length - 1-i;j++)// j开始等于0，
	{
		if(score[j] < score[j+1])
		{
		int temp = score[j];
		score[j] = score[j+1];
		score[j+1] = temp;
		}
	}
}

分析：第一个元素和后面的所有元素比较，内层循环一轮结束，就可以将最大的数放到最后；接下来是执行第二次内层的循环，将已经排序之后的数组（已经排列好最大的数字）的第二大的数字放到倒数第二位；接下来是依次将大数放到后面。


选择排序
归并排序
插入排序
2. 二分法 搞清楚二分搜索算法即可
3. 翻转二叉树



二：EventLoop

三： JS垃圾回收机制

四： 框架

五： 基础
