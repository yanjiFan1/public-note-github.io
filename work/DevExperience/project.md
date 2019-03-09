1.

<!-- 判断ie是否是低版本 -->

 <!--[if lt IE 9]>

<div id ="old-ie-hint"> <p class='lt-ie8'>很抱歉，您使用的浏览器暂不支持，将为您的使用带来不便。请更换或升级为IE8以上、Chrome、Firefox、Safari进行浏览。<a href="#" onclick="javascript:$('p.lt-ie8').css('display','none'); ">取消</a></p> </div>
<script language="JavaScript">
  (function() {
    var test = /access-type=(\d)/.exec(document.cookie);
    var accessType = test ? test[1] : null;
     if (accessType === "1") {
      document.getElementById("old-ie-hint").innerHTML = "很抱歉，您当前的浏览器版本过低，网站无法正常显示。 请点击<a href='http://10.0.11.111:8080/Chrome_V20_11.exe'>下载谷歌浏览器</a>，下载后点击“运行”自动安装。<br /> 如您的浏览器版本已经是IE10及以上，请关闭兼容模式视图：点击右上角“工具”->兼容性视图>在弹出窗口中取消勾选兼容性视图选项。<br />感谢您对顺丰速运的支持与关注！";
    }
  })();
</script>

<![endif]-->

2.
