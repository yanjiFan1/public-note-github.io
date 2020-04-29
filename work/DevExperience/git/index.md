1. git reflog 查看提交版本
2. git reset --hard 版本号  回退到以前的版本


git放入缓存
3. git stash 备份当前工作区的内容，保存到git 栈中，从最近的一次commit中读取相关内容
3.1 git pull  或者做其他的工作    
3.2 git stash pop

git提交规范：dev目标分支，my自己的分支

1.git checkout dev
2.git pull
3.git checkout my
4.git merge dev
5.git status
6.解决冲突后，git add, git commit -m 'xxxx',git push
7.git checkout dev
8.git merge my
9.git push origin dev


jenkins构建失败
1.  
错误： error posthtml-render@1.2.1: The engine "node" is incompatible with this module. Expected version ">=10". Got "8.16.0"
解决方案： 使用命令： yarn config set ignore-engines true
参考： https://jenkins.xiaoxiangyoupin.com/job/test-nginx/job/Cashloan/