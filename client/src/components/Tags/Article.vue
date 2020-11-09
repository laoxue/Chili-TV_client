<template>
  <div>
    <!-- 先定义一个头部 -->
     <div class="fixed_header" v-show="showHead">
       <div style="background-color: rgb(255 255 255);text-align: justify;font-weight: 300;font-style: normal;display: flex;width: 100%;">
         <div style="padding:10px 10px;display:flex;flex-direction: row;
    justify-content: space-between;width:90%">
           <!-- 头像 -->
           <div style="width: 35px;
    height:35px;border-radius:50%;background:red">
             <img :src="article.authorname" style="width:100%;height:100%;border-radius:50%;"/>
           </div>
           <!-- 名字 时间 -->
           <div style="display:flex;margin-left:20px;font-size:15px;align-items: center;width:60%">
              <span style="color: rgb(80 115 207);">{{article.authorname}}</span>
              <span style="color: rgb(169 169 169);margin-left:20px">52分钟前</span>
           </div>
           <div class="fans_btn">
            <span>+ 关注 </span>
           </div>
        </div>
       </div>
     </div>
     <!-- 文章部分 -->
     <div>
       <!-- 定义子文章内容 保证两边留白 -->
       <div style="margin: 0 10px">
         <!-- 标题 -->
          <div class="article_title">
           {{article.title}}
          </div>
          <div style="background: rgb(255 255 255)">
              <div style="background-color: rgb(255 255 255);text-align: justify;font-weight: 300;font-style: normal;display: flex;width: 100%;">
                <div style="padding:10px 0px;display:flex;flex-direction: row;
            justify-content: space-between;width:100%">
                  <!-- 头像 -->
                  <div style="width: 35px;
            height:35px;border-radius:50%;background:red">
                    <img :src="article.authorname" style="width:100%;height:100%;border-radius:50%;"/>
                  </div>
                  <!-- 名字 时间 -->
                  <div style="display:flex;margin-left:20px;font-size:15px;align-items: center;width:60%">
                      <span style="color: rgb(80 115 207);">{{article.authorname}}</span>
                      <span style="color: rgb(169 169 169);margin-left:20px">52分钟前</span>
                  </div>
                  <div class="fans_btn">
                    <span>+ 关注 </span>
                  </div>
                </div>
              </div>
          </div>
          <!-- 主要文章部分 -->
          <div class="article_content">
             <div><div class="article-content"><p style="text-align: left;"><span style="font-size: 0.833em;">不喜欢被批评，是人类的天性与弱点吗？</span></p><div class="pgc-img"><img preview="" style="width:100%;height:100%" :src="article.articlebanner" alt="不喜欢被批评，是人类的天性吗？" data-pswp-uid="1"><p class="pgc-img-caption"></p></div><p style="text-align: left;"><span style="font-size: 0.833em;">如果可以诚实地面对自己的内心，相信很多人都不喜欢被批评。<strong>或许从客观理性的角度上，我们可以正确看待、接纳批评，相信它不是一个真理，而是一个观点，但是从个人情绪上，我们都抵触那样的处境和感受。</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;">职场人罗先生曾经与老王沟通过类似的问题，他说自己是那种不太自信的职场人，做事情本就诚惶诚恐，如果遇到批评，哪怕明知道是善意的，也会在心里消化很久。如果可以选择，他希望自己不要受到批评。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;">老王认为，我们每个人都有弱点，都会做错事情。面对批评是认识弱点，面对错误的最好方式。但是也不可否认，在职场上很多批评是乔装打扮的伤害，让我们避之而唯恐不及。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>1、发泄情绪。</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>对于有些人来说，批评就是情绪的发泄。</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;">某电视台栏目组的编导小Q对此深有共鸣。他的领导就是情绪发泄的类型，像炮筒子一样一点就着。每当他和同事们受到批评的时候，都会有人暗自猜测，“今天谁得罪领导了？”久而久之，内心太脆弱的人都辞职了，留下的都是学会了无视这种情绪发泄的人。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;">也就是说，没有人在意领导在批评时究竟说了些什么，因为大家都认为那是他在“发神经”。大喊大叫一番，世界就太平了。</span></p><div class="pgc-img"><img preview="" src="https://p1-tt.byteimg.com/origin/pgc-image/d95af24af9324fd88abe0e5d4163f0d2?from=pc" alt="不喜欢被批评，是人类的天性吗？" data-pswp-uid="2"><p class="pgc-img-caption"></p></div><p style="text-align: left;"><span style="font-size: 0.833em;">这样的批评，又有什么意义呢？</span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>2、破坏对方自信，使得对方转换立场</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>有一种批评，是希望迫使对方转换立场。这种批评通常也是发生在上下级之间。</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;">你表达了与我相悖的观点，我就批评你，让你臣服于我的强势。这样的批评，其实一种非对等关系下的权力手段。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;">对于一个员工来说，他接受到的信号往往不是“我具体哪里做错了”，而是“你做得都不对，就应该都听我的”。这样的批评，缺少了对个体的充分尊重。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>3、破坏对方影响力</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>以“破坏对方影响力”为目的的批评，一般发生在势均力敌的两个人之间。这像是一种公开的挑战，为的是争夺话语权。</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;">某大型集团公司内，营销部门的主管向先生一向很强势。在一次会议上，该公司生产部门的主管针对产品特征与相关规定，连续对向先生提出质疑，问题直指他为了营销目标夸大事实的行为。这样的做法看似是为了公司业绩，但其实会对品牌造成伤害，也会使得各部门之间的科学衔接出现很大的问题。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;">从此以后，向先生在公司的话语权与影响力明显下滑。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>4、帮助对方认识到自身的问题</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>好的批评，应该是帮助对方认识到自身的问题，并且不是以一种居高临下的态度。这，才是善意批评的正确打开方式。</strong></span></p><div class="pgc-img"><img preview="" src="https://p1-tt.byteimg.com/origin/pgc-image/028f5b83c9fc4fdcad2ffb502a3314a8?from=pc" alt="不喜欢被批评，是人类的天性吗？" data-pswp-uid="3"><p class="pgc-img-caption"></p></div><p style="text-align: left;"><span style="font-size: 0.833em;">这一点说起来似乎很简单，其实很难。不要说职场之内，就算是父母与孩子之间，也时常会混淆这些差别。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;">当父母的批评脱离了实际意义，而变成发泄情绪，破坏孩子自信，争夺话语权等等，就是对关系的一种伤害和透支。其实在这样的环境下成长起来的人，也潜移默化接受了与之相似的职场环境。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;">正所谓“己所不欲勿施于人”，我们都清楚知道面对批评都如此艰难和不快，那么如何在职场环境下，去小心使用“批评”这项沟通工具呢？老王建议：</span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>1、谨慎使用贬义词</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>既然批评的目的是让对方认识到自己的问题，那我们首先应该注意的，就是对尊严与人格的保护。所以，贬义词不宜在批评中出现。</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;">职场人小柴见识过那种破口大骂的领导，每次批评人的时候，都会一连串说出很多难听的词汇。他对老王说，这压根就不是批评，而是辱骂。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>批评并没有一套规定的语言系统，但如果能够剔除掉贬义词，将语言回归到事情讨论本身，应该是一种正确的姿势。</strong></span></p><div data-content="{&quot;url&quot;:&quot;&quot;,&quot;content&quot;:&quot;&quot;,&quot;thumb_url&quot;:&quot;http://p7.pstatp.com/large/pgc-image/71fcd47aefb24affad6f58a4e4b30e56&quot;,&quot;title&quot;:&quot;从小白到职场精英的晋级法则76讲&quot;,&quot;author_dedivion&quot;:&quot;猎头老王&quot;,&quot;price&quot;:68,&quot;share_price&quot;:10.88,&quot;sold&quot;:28,&quot;column_id&quot;:&quot;6773236619152457996&quot;,&quot;new_thumb_url&quot;:&quot;http://sf1-ttcdn-tos.pstatp.com/img/pgc-image/71fcd47aefb24affad6f58a4e4b30e56&quot;}" class="tt-column-card"><div id="column-card" class="surface-4 line-1 android"><div class="container"><div class="cover surface-3 line-1"><img preview="" src="https://sf1-ttcdn-tos.pstatp.com/img/pgc-image/71fcd47aefb24affad6f58a4e4b30e56~339x222.png" data-pswp-uid="4"><div class="column font-7"><span class="font-7">专栏</span></div></div><div class="content"><div class="title font-1">从小白到职场精英的晋级法则76讲</div><div class="author font-2">作者：猎头老王</div><div class="column-info"><div class="price font-4">¥68</div><div class="count font-3 line-1">28人已购</div></div><div class="button font-4 surface-4">查看</div></div></div></div></div><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>2、回避利害关系</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>很多人打着“为你好”的旗号批评一个人，但其实是在“为自己好”。也就是说，当批评者与被批评者存在利害关系的时候，其实批评很难客观公正。</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;">比如说，小张和小王在竞争一个项目的leader。那么这个时候小张说“我觉得小王的思路有些问题”，就很难让人回到批评的本质上，让人相信他是发自内心为了小王好。</span></p><div class="pgc-img"><img preview="" src="https://p3-tt.byteimg.com/origin/pgc-image/004f2543bb4c4a938c4ee92bd4e9ded1?from=pc" alt="不喜欢被批评，是人类的天性吗？" data-pswp-uid="5"><p class="pgc-img-caption"></p></div><p style="text-align: left;"><span style="font-size: 0.833em;">所以出于这个角度，我们在批评一个人的时候可以先去想一想，自己与对方是否存在利害关系。如果批评了对方，是否有为自己谋得利益的嫌疑。如果答案是肯定的，老王劝你还是选择沉默，因为你的批评已经走在了被误解和被扭曲的路上。它们无法展现出最本真的面貌，也无法如你所愿，带给对方好的启迪。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>3、尽量将伤害降到最低。</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>职场上，如果一定要批评一个人，就要试着将伤害降到最低。</strong>因为批评的目的不是打击这个人的自信，摧毁这个人的自尊，而是提醒与帮助他。</span></p><div id="pgc-card" data-promotion-id="3430145111274693888" class="pgc-card"><a href="https://u.jd.com/96MF4e" target="_blank" class="pgc-card-href"><div class="pgc-cover" style="background-image: url(&quot;https://sf1-ecomcdn-tos.pstatp.com/obj/cmp-ecom-alliance/FpW_OMhcGL8P1F7LWiuntiikYDnb.jpg&quot;);"></div> <div class="pgc-content"><div class="pgc-content-title">造极 : 重新定义“一技之长”</div> <div class="pgc-content-desc"></div> <div class="pgc-content-price">￥46.8</div></div> <div class="pgc-card-buy"><div><i class="pgc-icon-buy"></i></div> <div class="pgc-buy-text">购买</div></div></a></div><p style="text-align: left;"><span style="font-size: 0.833em;">要知道，这世界上大多数的批评都会带来伤害，无论它带有怎样的目的。既然如此，就尽量去考虑到对方的感受，点到为止，守住分寸。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;">反过来，如果我们作为一个“被批评者”，也要去很好地保护自己，清醒认知批评的本质是什么，尽量理性看待、宽容接纳。</span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>写在最后</strong></span></p><p style="text-align: left;"><span style="font-size: 0.833em;"><strong>没有人喜欢被批评，无论它出自善意还是恶意。这是人性决定的，也是批评的本质决定的。从这个角度出发，我们在批评与面对批评的时候，应该守住原则与界限，不去伤害别人，也避免被人伤害。</strong></span></p></div></div>
          </div>
       </div>
     </div>
  </div>
</template>
<script>
import * as ArticleService from './../../services/article/article.service'
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  data() {
    return {
      showHead: false,
      article:{
        title:'',
        authorname:'',
        autherlogo:'',
        articlebanner:''
      }
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo () {
      ArticleService.getInfos({id:this.$route.params.id}).then((res) => {
        this.article.title = res.data.data[0].title
        this.article.authorname = res.data.data[0].user_name
        this.article.autherlogo = res.data.data[0].headUrl
        this.article.articlebanner = res.data.data[0].bannerUrl
      })
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop)
      if (scrollTop > 37) {
        this.showHead = true
      } else{
        this.showHead = false
      }
      //  var offsetTop = document.querySelector('#searchBar').offsetTop;
    }
  },
}
</script>
<style scoped>
.fixed_header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 100;
    padding: 0 .45333rem;
    background: rgb(255 255 255);
}
.fans_btn{
    background: rgb(80 115 207);
    font-size: 13px;
    height: 25px;
    line-height: 25px;
    width: 60px;
    border-radius: 16px;
    text-align: center;
    color: rgb(255 255 255);
    border: 1px solid rgb(80 115 207);
}
.article_title{
  font-size: 18px;
  color: rgb(53 53 53);
  line-height: .8rem;
  margin-top: .26667rem;
  font-weight: 500;
  padding:10px 0px;
  text-align: left;
}
.article_content{
  margin-top: 20px;
  font-size: 13px;
  color: rgb(85 84 84);
  line-height: 13px;
  overflow: hidden;
  width: 100%;
}
.article_content img{
  width:100%;
  height:100%
}
</style>