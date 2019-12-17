1. 性能优化


	1.1 首屏渲染：
		1.1.1 服务器端渲染 vue ssr
		1.1.2 nuxt
		1.1.3 Vue-router懒加载
		1.1.4 使用CDN加速
		1.1.5 
			gzip压缩
 			方法一：使用Nginx反向代理，配置nginx.conf文件，在http节点下加如下代码：
			gzip on;
			gzip_static on;
			gzip_buffers 4 16k;
			gzip_comp_level 5;
			gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
			方法二：使用node压缩，需要使用compression库，代码如下：
			const compression = require('compression');
			app.use(compression());
		1.1.6 异步加载组件 https://segmentfault.com/a/1190000012138052