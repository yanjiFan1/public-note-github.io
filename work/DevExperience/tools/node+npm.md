1.npm 镜像更换  https://blog.csdn.net/yuanyuanispeak/article/details/79480904

	@1临时使用 npm --registry https://registry.npm.taobao.org install express
	@2持久使用 npm --registry npm config set registry https://registry.npm.taobao.org
	配置后可通过下面方式来验证是否成功 
	npm config get registry
	或 
	npm info express	


	通过cnpm使用	

		npm install -g cnpm --registry=https://registry.npm.taobao.org

	使用 cnpm install express


	!!!第二种办法  nrm 是一个 NPM 源管理器   https://www.jianshu.com/p/171ec231ced4 https://blog.csdn.net/anway12138/article/details/79455224
	列出可用的源：  nrm ls

	切换： nrm use taobao Registry has been set to: http://registry.npm.taobao.org/
	增加源： nrm add <registry> <url> [home]
	删除源：nrm del <registry>
	测试速度：nrm test
	查看远程node版本 	nrm ls available



	node_mirror: npm.taobao.org/mirrors/node/
	npm_mirror: npm.taobao.org/mirrors/npm/


	https://blog.csdn.net/qwdafedv/article/details/55802747  nvm-window 环境配置


2. 各个镜像 https://npm.taobao.org/


3. npm 或者使用 yarn     
