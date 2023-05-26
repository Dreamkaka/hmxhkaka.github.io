import{_ as a,X as e,Y as i,a0 as p}from"./framework-decf3de5.js";const t={},n=p('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是一个通用的指南，内容是基本通用的，可能有例外情况，请阅读对应部分或章节了解不同应用的特性。</p></div><h2 id="词汇" tabindex="-1"><a class="header-anchor" href="#词汇" aria-hidden="true">#</a> 词汇</h2><p>单词可以由一个或多个符号组成。常用词通常被解析为具有共同含义或少量含义的单个标记。拼写错误和不常见单词被解析为多个标记，这些标记从各种不同的单词中获得含义，并且通常是不一致的含义。</p><p>元音的变化更有可能将你映射到一个不同的不相关的单词，一个更独特更强的含义和影响。</p><blockquote><p>所以bank，bankk bank 很可能被解析为bank的近义词;但是bonk-有一个完全不同的意思</p></blockquote><h2 id="大小写" tabindex="-1"><a class="header-anchor" href="#大小写" aria-hidden="true">#</a> 大小写</h2><p>Clip的标记器在标记之前的将所有单词小写。其他模型，如BERT和T5，将大写的单词与非大写的单词区别对待。</p><h2 id="长度" tabindex="-1"><a class="header-anchor" href="#长度" aria-hidden="true">#</a> 长度</h2><p>除了webui，由于GPT-3模型限制，prompt并不是无限的，positive token在75-80之间，75字符后的内容会被截断。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>大写字母并不重要，下划线“_”通常不会被转换为空格。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>开头和结尾的额外空格会被直接丢弃。词与词之间的额外空格也会被丢弃。</p></div><h2 id="自然语言" tabindex="-1"><a class="header-anchor" href="#自然语言" aria-hidden="true">#</a> 自然语言</h2><p>可以直接使用自然语言，webui(sd)有自然语言处理能力（英文句子），也可以使用颜文字和emoji，也可以使用Unicode字符（如日语字符）</p><p>至少有一些Unicode字符是拉丁语字符的替代版本，它们被映射为普通的拉丁语字符。日语中使用的全幅拉丁字符（如ABC）被确认可以转换。法语重音符和德语umaluts不会被映射到它们的常规对应物。</p><p>人类的语言是任意的和不精确的（除了emoji，它只有一个字符使用异常精确）[^1]，人类的语言从未进化到可以详细描述空间信息的程度</p><p>许多小白遵循其特定的某些仪式性行为，认为这种模式会增加产生有利结果的机会。这种玄学不仅在实践中不起作用，而且还会继续强化和表现出来，促使一个人在错误的方向上越走越远。</p><p>稳定扩散是一个涉及潜伏空间的潜伏扩散模型。但根据定义，潜伏意味着不可观察。换句话说，它是一个黑匣子，没有人真正知道这个空间里到底发生了什么。</p><h2 id="标点符号" tabindex="-1"><a class="header-anchor" href="#标点符号" aria-hidden="true">#</a> 标点符号</h2><p>用逗号、句号、甚至是空字符(&quot;/0&quot;) 来分隔关键词，可以提高图像质量。</p><p>目前还不清楚哪种类型的标点符号或哪种组合效果最好--当有疑问时，只要以一种使提示更容易被阅读的方式来做。</p><h2 id="词汇顺序" tabindex="-1"><a class="header-anchor" href="#词汇顺序" aria-hidden="true">#</a> 词汇顺序</h2><p>似乎VAE使用了一种称为贝叶斯定理的统计方法。在计算标记的去向时，前几个单词似乎锚定了其余单词标记在潜在空间中的分布。</p><p>早期的标记具有更一致的位置，因此神经网络更容易预测它们的相关性。</p><p>在贝叶斯推理中，矩阵中的第一个标记或证据很重要，因为它设置了初始概率条件。但是后面的元素只是修改了概率条件。因此，至少在理论上,最后的令牌不应该比前面的令牌具有更大的影响。</p><p>但是解析器理解事物的方式是不透明的，因此没有办法确切地知道词法顺序是否具有“锚”[^2]效应。</p><h2 id="运动和姿势" tabindex="-1"><a class="header-anchor" href="#运动和姿势" aria-hidden="true">#</a> 运动和姿势</h2><p>如果没有很大要求的话，选择只与少数姿势相关的提示。</p><p>这里的姿势是指某一事物的物理配置:图像主体相对于摄像机的位置和旋转，人类/机器人关节的角度，果冻块被压缩的方式，等等。你试图指定的事物中的差异越小，模型就越容易学习。</p><p>因为运动就其定义而言涉及到主体姿势的巨大变化，与运动相关的提示经常导致身体的扭曲，如重复的四肢。另外，因为人类的四肢，特别是人类的手和脚有很多关节，他们可以采取许多不同的、复杂的姿势。这使得他们的可视化特别难学，对于人类和神经网络都是如此。</p><p><strong>简而言之:人类站着/坐着的好形象很容易，人类跳着/跑着的好形象很难。</strong></p><h2 id="特异性" tabindex="-1"><a class="header-anchor" href="#特异性" aria-hidden="true">#</a> 特异性</h2><p>问题体现在语义偏移上。对于神经网络的训练来说，特征的质量很重要:输入和输出之间的联系越强，神经网络就越容易学习这种联系。</p><p>换句话说，如果一个关键词有非常具体的含义，那么学习它与图像之间的联系要比一个关键词有非常广泛的含义容易得多。</p><p>这样一来，即使是像&quot;ZettaiRyouiki&quot;这样很少使用的关键词也能产生非常好的结果，因为它只在非常具体的情况下使用。另- -方面，&quot;动漫&quot;即使是一个比较常见的词，也不会产生很好的结果，这可能是因为它被用于许多不同的情况，即使是没有字面意思的动漫。如果你想控制你的图片的内容，选择具体的关键词尤其重要。</p><p>另外:你的措辞越不抽象越好。如果可能的话，避免留下解释空间的措辞，或需要&quot;理解&quot;不属于图像的东西。甚至像&quot;大&quot;或&quot;小&quot;这样的概念也是有问题的,因为它们与物体离相机近或远是无法区分的。理想情况下，使用有很大可能逐字出现在你想要的图像标题上的措辞。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>提示词是提示而不是判定依据,比如你输入质量判定词汇的时候，其实是在限制数据的范围,而不是“要求”Al出一张很好的图片。</p></div><h2 id="强调语法" tabindex="-1"><a class="header-anchor" href="#强调语法" aria-hidden="true">#</a> 强调语法</h2><p>如何增加或减少提示的特定部分的比重。</p><p>有些人断言，把关键词放在圆括号里会增加其效果，而把关键词放在方括号里则会减少其效果;使用更多的括号据说会带来更强的变化。然而，其他人在他们自己的提示中经常不能再现这种效果。</p><p>事实证明，造成这种差异的原因是，不同的脚本处理括号的方式不同。例如这个webui明确地处理了括号,而这个分支只会得到模型从训练数据中隐含学到的括号的效果(用不同的语法来代替) 。</p><p><strong>出于这个原因:一定要检查你从别人那里复制的提示语的语法是否与你使用的脚本的语法一致。在定量分析中，除非明确处理，否则方括号并没有产生一致的效果.</strong></p><p>无论使用何种具体的脚本，重复某个关键词似乎都会增加其效果。</p><p>值得注意的是,你的提示中存在越多的标记,任何单一标记的影响就越小。</p><p>你还会注意到，由于这个原因，在增加新的标记时，风格会逐渐消失。强烈建议随着提示符长度的增加增加风格词的标记强度，以便保持一致的风格，特别是在某些模型中。</p><h2 id="语义失衡" tabindex="-1"><a class="header-anchor" href="#语义失衡" aria-hidden="true">#</a> 语义失衡</h2><p>每一个提示词就像染料一样，它们的 “亲和性“ 不同，如果更常见的提示词，比如 loli 和其他提示词并列放置）的影响就大于其他提示词。</p><p>比如，如果你想生成动漫图片，使用了 星空 startrail 标签，相比你期望出现的动漫星空，会有更多来自真实照片的星空元素。</p><p>许多词汇在基准上的权重就不一样，所以要根据效果进行合理调节。</p><h2 id="尺寸" tabindex="-1"><a class="header-anchor" href="#尺寸" aria-hidden="true">#</a> 尺寸</h2><p>尺寸明显影响内容，如果图像高度增加，就更有可能生成 个体或单独的东西。如果图像宽度增加，更有可能生成多人或风景画。</p>',50),r=[n];function h(d,o){return e(),i("div",null,r)}const c=a(t,[["render",h],["__file","如何书写提示.html.vue"]]);export{c as default};
