<template>
  <div class="library">
    <Header></Header>
    <NavBar></NavBar>
    <router-view></router-view>
    <div class="dixian">---------          :-)         ---------</div>
  </div>
</template>
<script>
import Header from './../Tags/Header.vue';
import NavBar from './../Tags/NavBar.vue'  
// import MovieBox from './Tags/MovieBox.vue'
// import YingDan from './Tags/YingDan.vue'
export default {
  name: 'library',
  computed:{
		slideshowImage(){
			return this.$store.state.mv.swiperImg
		},
		news(){
			return this.$store.state.mv.news
		},
		act(){
			return this.$store.state.mv.act
		}
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	Header,
    NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.library{
  margin:0px;
  padding:0px;
  margin-bottom:5rem;
}
.dixian{
  width:100%;
  text-align: center;
  height: 0.5rem;
  font-weight: 10;
  font-size: 0.6rem;
}
</style>