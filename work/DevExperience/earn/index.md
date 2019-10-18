项目：fivezerofive

yum install lrzsz
rz：从本地上传文件至服务器
sz filename：从服务器下载文件至本地

上传代码到服务器上
https://blog.csdn.net/xiaobanv1/article/details/89712323



文件发布到服务器

1. 本地先把代码压缩成 zip
2. rz 上传压缩包
3. unzip + 压缩包名称 解压
4. 访问


vue项目中接口代理 // 参考：https://segmentfault.com/a/1190000014492336?utm_source=tag-newest

dev: {
  env: require('./dev.env'),
  port: 8888,
  autoOpenBrowser: true,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: { 
    '/api': {
      // target: 'http://manage-official.yexiaobai.top', // 设置你调用的接口域名和端口号
      target: 'localhost:3000', // 设置你调用的接口域名和端口号
      changeOrigin: true,     // 跨域
      pathRewrite: {
        '^/api': '/'          
      }
    }
  },
  // CSS Sourcemaps off by default because relative paths are "buggy"
  // with this option, according to the CSS-Loader README
  // (https://github.com/webpack/css-loader#sourcemaps)
  // In our experience, they generally work as expected,
  // just be aware of this issue when enabling this option.
  cssSourceMap: false
}


react项目可以配合create-react-app 在package.json文件中进行配置
"proxy": {
  "/api/*": {
    "target": "http://localhost:3000/",
    "pathRewrite": {
      "/api": "/api"
    },
    "secure": false
  }
},