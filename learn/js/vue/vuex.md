vue全家桶：
vue核心知识 https://cn.vuejs.org/
vue-resource // axios代替
vue-router https://router.vuejs.org/zh/
vue-cli
vuex https://vuex.vuejs.org/
nodejs，npm，webpack， axios



1. 中文官方文档： https://vuex.vuejs.org/zh/

知识点：
Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：
1 应用层级的状态应该集中到单个 store 对象中。
2 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
3 异步逻辑都应该封装到 action 里面。
4 如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。


遇到的问题：
1. 在组件中mapGetters获取值的时候，必须在store中的state初始化这个值，否则是拿不到的
2. 