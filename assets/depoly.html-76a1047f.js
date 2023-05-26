import{_ as l,X as r,Y as d,a1 as e,a2 as n,$ as t,a3 as c,a0 as o,E as s}from"./framework-618a7d34.js";const p={},m=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"由于原生框架较难上手且作者摆烂已经很久没维护了，所以本文章采用基于原生框架开发的喵喵版本yunzai")],-1),u=e("strong",null,"且nodejs版本大于14",-1),h={href:"https://nodejs.org/zh-cn/download",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"同时确保你下载了git，方便后续下载",-1),v={href:"https://git-scm.com/download",target:"_blank",rel:"noopener noreferrer"},f={href:"https://gitee.com/yoimiya-kokomi/Miao-Yunzai",target:"_blank",rel:"noopener noreferrer"},_=o(`<p>不想前往的可以直接用下面的代码clone</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用 Github 
git clone --depth=1 https://github.com/yoimiya-kokomi/Miao-Yunzai.git
cd Miao-Yunzai 
git clone --depth=1 https://github.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/


# 使用Gitee
git clone --depth=1 https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git
cd Miao-Yunzai 
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>务必要全部clone下来,比如gitee的那两行clone命令就要全部执行不然跑不了</p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>安装pnpm,安装过的可以直接跳过</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用npmjs.org安装
npm install pnpm -g

# 指定国内源npmmirror.com安装
npm --registry=https://registry.npmmirror.com install pnpm -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装依赖</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 直接安装
pnpm install -P

# 如依赖安装缓慢或失败，可尝试更换国内npm源后再执行install命令
pnpm config set registry https://registry.npmmirror.com
pnpm install -P
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis" aria-hidden="true">#</a> 安装redis</h2><p>yunzai启动还需要redis数据库，因此我们现在去下载redis</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于原生redis不支持windows端，所以本文选择使用其他人构建的windows版本进行构建，如果你的系统是linux或者macos也或者说愿意折腾WSL的话可以自行尝试，本文不再赘述</p></div>`,11),b={href:"https://github.com/tporadowski/redis/releases/tag/v5.0.14.1",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,[n("前往你的安装目录，打开"),e("strong",null,"redis-server.exe"),n("这个程序启动redis")],-1),k=e("li",null,[n('返回你的机器人目录，运行“node app"进行初步配置和启动 :::info{title=程序启动闪退原因} 如果双击之后闪退有两种原因 第一种是安装完成后redis会自行启动，所以实际上已经打开了，只需要把服务改成手动并重新启动即可'),e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})]),n(" 如果不是上述情况解决方法看下面 ::: 请先打开文件扩展名！！！！！！！！！！！！！")],-1),y=o(`<p>然后在 Redis 目录下建一个名称是 start.txt 文本，在新建的 start.txt 文件中加入下面一句话</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-server.exe redis.windows.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着将文件名start.txt格式改成start.bat就行了</p><p>双击打开 start.bat 就可以了<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><hr class="footnotes-sep">`,5),w={class:"footnotes"},z={class:"footnotes-list"},j={id:"footnote1",class:"footnote-item"},Y={href:"https://blog.csdn.net/qq_54431167/article/details/116327191",target:"_blank",rel:"noopener noreferrer"},q=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),M={id:"footnote2",class:"footnote-item"},B={href:"https://jingyan.baidu.com/article/22a299b53ff3b7df18376a1f.html",target:"_blank",rel:"noopener noreferrer"},E=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function N(V,L){const a=s("Badge"),i=s("ExternalLinkIcon");return r(),d("div",null,[m,e("p",null,[n("首先确保你的电脑下载了nodejs，"),u,t(a,{type:"warning"},{default:c(()=>[n("warning")]),_:1})]),e("blockquote",null,[e("p",null,[e("a",h,[n("https://nodejs.org/zh-cn/download"),t(i)]),n(" 下载最新版nodejs")])]),g,e("blockquote",null,[e("p",null,[e("a",v,[n("https://git-scm.com/download"),t(i)]),n(" 下载git")])]),e("p",null,[n("之后前往"),e("a",f,[n("https://gitee.com/yoimiya-kokomi/Miao-Yunzai"),t(i)]),n(" 下载框架并安装")]),_,e("ol",null,[e("li",null,[n("前往"),e("a",b,[n("https://github.com/tporadowski/redis/releases/tag/v5.0.14.1"),t(i)]),n(" 下载安装镜像，进行安装")]),x,k]),y,e("section",w,[e("ol",z,[e("li",j,[e("p",null,[n("详细解决方法见："),e("a",Y,[n("https://blog.csdn.net/qq_54431167/article/details/116327191"),t(i)]),n(),q])]),e("li",M,[e("p",null,[n("原文地址："),e("a",B,[n("https://jingyan.baidu.com/article/22a299b53ff3b7df18376a1f.html"),t(i)]),n(),E])])])])])}const G=l(p,[["render",N],["__file","depoly.html.vue"]]);export{G as default};
