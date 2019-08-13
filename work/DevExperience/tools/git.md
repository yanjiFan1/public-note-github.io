1.当执行npm publish 时，出现unauthorized 和 is not in the npm registry https://blog.csdn.net/hahahhahahahha123456/article/details/82054908

2.文件中出现忽略文件怎么办？https://blog.csdn.net/yan88888888888888888/article/details/82379823

新建的文件在git中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在.gitignore中已经声明了忽略路径也是不起作用的，这时候我们就应该先把本地缓存删除，然后再进行git的push，这样就不会出现忽略的文件了。git清除本地缓存命令如下：

git rm -r --cached .
git add .
git commit -m 'update .gitignore'



3.commit 提交了  如何回滚文件

git reset 版本号


git log 查看日志


git reset --hard commit文件


git revert 版本号


4.
git提交规范：dev目标分支，my自己的分支
1、git checkout dev
2、git pull
3、git checkout my
4、git merge dev
5、git status 
6、解决冲突后，git add,git commit - m 'xxxxxxx',git push
7、git checkout dev
8、git merge my
9、git push origin dev 