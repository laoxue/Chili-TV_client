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
          <div class="article_content" style="text-align: left;">
             <img preview="" style="width:100%;height:100%" :src="article.articlebanner" alt="不喜欢被批评，是人类的天性吗？" data-pswp-uid="1">
             <div v-html="article.content"></div>
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
        articlebanner:'',
        content:''
      }
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo () {
      ArticleService.getInfos({id:this.$route.params.id}).then((res) => {
        console.log(res)
        this.article.title = res.data.data[0].title
        this.article.authorname = res.data.data[0].user_name
        this.article.autherlogo = res.data.data[0].headUrl
        this.article.articlebanner = res.data.data[0].bannerUrl
        this.article.content = res.data.data[0].content
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
  color: rgb(85 84 84);
  overflow: hidden;
  width: 100%;
}
.article_content img{
  width:100%;
  height:100%
}
</style>