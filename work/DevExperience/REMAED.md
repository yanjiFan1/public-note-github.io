！这个文件夹是放平常工作的开发经验的


1.后端负责人遇到bug讲的一句话
刚刚我们review了下故障，问题总结：主要由多版本和bugfix并行上线时git代码版本管理的问题引起的 问题细节描述：9月28日开发人员直接在master分支上修复了bug代码，导致10月10号上线新版本代码的时候一起上线了  问题解决方案：规范git代码管理以及版本和bugfix的上线流程（故障预案：应从master上面打bugfix分支进行修改，然后合并到test分支进行测试，最后测试成功后由开发负责人在约定的上线时间把bugfix分支合并到master分支进行上线）

2. 每年1.11是网易的内推节；