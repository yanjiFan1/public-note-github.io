1. react-navtive中文网 https://reactnative.cn/docs/troubleshooting.html
2. react-native学习项目 https://www.jianshu.com/p/5ca3245d63eb


2.1 React Native最佳学习模版- F8 App开源了,界面和体验是相当的完美,这个是Facebook官方开发的,所以放在第一位进行推荐。现在在github将近1.4W个star了
https://github.com/fbsamples/f8app
2.2来自饿了么RN大神开源的reading项目,已经完成Android和iOS双适配。绝对是一个产品级的开源项目，并且作者还在持续的更新。值得一荐！ https://github.com/attentiveness/reading
2.3https://github.com/stage88/react-weather
2.4这个项目主要进行查看NBA相关数据,界面做的非常Nice，项目整体架构也非常不错,关键还有图表界面，同时适配Android和iOS双平台。也是大家不可多得学习的项目。推荐！ https://github.com/xiekw2010/react-native-gitfeed
2.5https://github.com/wwayne/react-native-nba-app
2.6https://github.com/ljunb/react-native-iShiWuPai
2.7https://github.com/zhongjie-chen/rn_rank

安装遇到问题：
1. react-natvie如何启动android studio 的模拟器 https://blog.csdn.net/dandoudou/article/details/89202356

勾选SDK Tools中的Inter x86 Emulator Accelerator(HAXM installer)


2. Android 疑难杂症之Execution failed for task ':app:transformDexArchiveWithExternalLibsDexMergerForDebug'.

https://blog.csdn.net/qq939782569/article/details/90264168

3. adb找不到, https://blog.csdn.net/y201314an/article/details/81022556

这个时候需要找到adb.exe文件路径， 在环境变量path中添加他的路径就可以了

4.【Android-Error】jar冲突 - app:transformDexArchiveWithExternalLibsDexMergerForDebug
https://blog.csdn.net/mingtiannihao0522/article/details/85679037

5. 启动项目的时候必须需要使用adb 连接模拟器

adb devices 查看是否有模拟器
adb kill-server 杀死服务
adb start-server 启动服务
adb reconnect device 连接服务（如果是手机需要点击确定USB），如果是模拟器不用管

6. AndroidStudio:* daemon not running; starting now at tcp:5037
检查了端口。杀了端口等一系列操作做完还不行，最后发现是笔记本在连公司的网络时加了防火墙，关了即可

7. 手机上可以启动项目，但是模拟器不能启动

解决方案：
1. adb devices显示模拟器  设备名字
2. 在项目中执行  react-native run-android --deviced 设备名字


8.https://www.jianshu.com/p/17f1218aada0

9. gradle下载地址
https://www.cnblogs.com/yaozhixiang/articles/10210812.html
https://gradle.org/releases/
https://services.gradle.org/distributions/

10. 项目下android->gradle->wrapper->gradle-wrapper.properties里面可以更改gradle的下载版本
distributionUrl=https\://services.gradle.org/distributions/gradle-5.2-all.zip


工具： 
1. docker https://docs.docker.com/compose/install/
2. 


网络端口占用
https://blog.csdn.net/chaoge321/article/details/83827701
netstat -aon|findstr "5037"  
netstat -aon|findstr "5037"  

项目参考：

https://www.jianshu.com/p/3ad0cb27f19b