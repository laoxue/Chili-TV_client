<template class="filmlist">
<!-- 最外层 -->
  <div id="container">
      <Header @showit="showit" ref="header" class="fixedit" @searchtime="searchdata" @selectfilms="selectfilm"></Header>
      <div style="width:100%;height:3rem"></div>
      <showFilm :news="news" style="margin-top:40px" ref="films"></showFilm>
      <diaLog ref="dialog" @reflash="reflash"></diaLog>
      <fcmenu ref="fcmenu" @delfilms="delfilms"></fcmenu>
  </div>
</template>
<script>
import Header from './../Tags/HeaderSer.vue';
import showFilm from './../Tags/showFilm';
import diaLog from './../Tags/dialog';
import fcmenu from './../Tags/fcmenu';
import * as FilmService from './../../services/films/film.service'
// import * as loginService from './../../services/login/login.service.js'
	export default {
        name: 'home',
    // props: ['morelabels'],
        props: {
        },
        components: {
          Header,
          showFilm,
          diaLog,
          fcmenu
        },
        watch: {
          news (val) {
            this.news = val
          }
        },
        computed: {
        },
        created () {
            this.getnewfilm()
            window.addEventListener('scroll', this.handleScroll)
        },
        data () {
            return {
                news:[]
            }
        },
        methods: {
          delfilms () {
            // console.log(this.$refs.films.selectedDatas)
            let params = {
              ids:this.$refs.films.selectedDatas
            }
            FilmService.delmanyfilms(params).then((res) => {
              this.getnewfilm()
              this.selectfilm()
              this.$refs.films.selectedDatas = []
            })
          },
          selectfilm () {
            this.$refs.films.showall = !this.$refs.films.showall
            this.$refs.fcmenu.fcmenus = !this.$refs.fcmenu.fcmenus
          },
          searchdata (val) {
            this.news = val
          },
          handleScroll () {
             var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
              if (scrollTop > 0) {
                this.showHead = true
              } else{
                this.showHead = false
              }
          },
          reflash () {
            this.getnewfilm()
          },
          getnewfilm(){
            FilmService.searchmyuploadfilms().then((res) => {
              console.log(res)
              this.news = res.data.data
            })
          },
          showit () {
            this.$refs.dialog.showdialog = true
          }
        },
    }
</script>
<style scoped>
.fixedit{
  position:fixed;
  top:0px;
  width:100%;
  left:0px;
  background:white
  ;z-index:9
}
</style>