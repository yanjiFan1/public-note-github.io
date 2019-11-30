官方文档：https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html

初学redux saga，
前提是关于数据操作
1.请求接口的数据，我们会dispatch一个方法，然后需要在saga中进行监听，redux不需要进行监听，否则会多渲染一次
2.关于非数据请求或者清空store中的数据，我们需要dispatch一个方法，在redux中进行监听就可以，saga中不需要进行监听
3.saga中监听到的方法把数据处理完，即副作用处理好，接着dispath一个方法到store中，然后渲染在页面中
4.关于用户操作的状态，我们可以放在state中，这个就没有必要存在store中了，但是有个特殊的就是，在请求完成后关闭弹框
这个时候我们需要在redux-saga进行数据操作，然后利用callBack，在页面更改这个弹框的状态
5.



关于redux：
1.用户操作的值没有必要存在store中,我们可以把数据放在state中；
2.关于表单，我们只要dispatch一个方法，表单中的内容就会被清空；   解约办法:我们把表单中的内容存在store中，store中的内容只要改变,父组件就会向下传递，子组件就会重新渲染;



关于saga:
1.优雅的写saga:

问题之请求成功回调问题：message.success（）写在saga中还是写在页面中



saga的问题
1.使用saga页面出错-控制台不会报错；



### redux-saga 是一个 redux 中间件，它具有如下特性：
> 集中处理 redux 副作用问题。
> 被实现为 generator 。
> 类 redux-thunk 中间件。
> watch/worker（监听->执行） 的工作形式。

// 类 thunk 的 worker “进程”

```
function* load() {
  yield put({ type: BEGIN_LOAD_DATA });
  
  try {
    const result = yield call(fetch, UrlMap.loadData);

    yield put({
      type: LOAD_DATA_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: LOAD_DATA_ERROR,
      payload: e,
      error: true,
    });
  }
}

function* saga() {
  // 创建一个监听“进程”
  yield fork(watch(CLICK_LOAD_BUTTON, load))
}

```


### 关于各个 Effect 的具体介绍，文档已经写得很详细了，这里只做简要介绍。

> 1、put

```
作用和 redux 中的 dispatch 相同。

    yield put({ type: 'CLICK_BTN' });
```

> 2、select
```
作用和 redux thunk 中的 getState 相同。

    const id = yield select(state => state.id);
```
> 3、take
```
等待 redux dispatch 匹配某个 pattern 的 action 。

在这个例子中，先等待一个按钮点击的 action ，然后执行按钮点击的 saga：

    while (true) {
        yield take('CLICK_BUTTON');
        yield fork(clickButtonSaga);
    }


再举一个利用 take 实现 logMiddleware 的例子：

    while (true) {
    const action = yield take('*');
    const newState = yield select();
    
    console.log('received action:', action);
    console.log('state become:', newState);
    }
    这种监听一个 action ，然后执行相应任务的方式，在 redux-saga 中非常常用，因此 redux-saga 提供了一个辅助 Effect —— takeEvery ，让 watch/worker 的代码更加清晰。

    yield takeEvery('*', function* logger(action) {
    const newState = yield select();

    console.log('received action:', action);
    console.log('state become:', newState);
    });
```

###redux-saga 优缺点分析
+  缺点
```
redux-saga 不强迫我们捕获异常，这往往会造成异常发生时难以发现原因。因此，一个良好的习惯是，相信任何一个过程都有可能发生异常。如果出现异常但没有被捕获，redux-saga 的错误栈会给你一种一脸懵逼的感觉。

generator 的调试环境比较糟糕，babel 的 source-map 经常错位，经常要手动加 debugger 来调试。

你团队中使用的其它异步中间件，或许难以和 redux-saga 搭配良好。或许需要花费一些代价，用 redux-saga 来重构一部分中间件。
```
+ 优点
```
保持 action 的简单纯粹，aciton 不再像原来那样五花八门，让人眼花缭乱。task 的模式使代码更加清晰。

redux-saga 提供了丰富的 Effects，以及 sagas 的机制（所有的 saga 都可以被中断），在处理复杂的异步问题上十分趁手。如果你的应用属于写操作密集型或者业务逻辑复杂，快让 redux-saga 来拯救你。

扩展性强。

声明式的 Effects，使代码更易测试
```

// http://react-china.org/t/redux-saga/23566 参考