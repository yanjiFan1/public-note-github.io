1.原生页面跳转H5页面的时候，接口请求数据，   token 不能及时拿到
answer:

请求接口数据的时候
1.使用

async aa () {
  await this.getToken  解决这个问题
}


2.