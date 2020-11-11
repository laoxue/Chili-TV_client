<template>
	<div class="movies">
		<SlideShow :swiper-image="slideshowImage"></SlideShow>
		<MovieBox :news="news"></MovieBox>
		<Activity :act="act"></Activity>
		<YingDan v-for="(item, index) in yingdan" :yingdan="item" :key="index"></YingDan>
		<div class="h_r"></div>
	</div>
</template>
<script>
import SlideShow from './../Tags/SlideShow.vue'
import MovieBox from '../Tags/MovieBox.vue'
import Activity from '../Tags/Activity.vue'
import YingDan from '../Tags/YingDan.vue'
import * as ArticeService from './../../services/article/article.service'
import * as FilmService from './../../services/films/film.service'
export default{
	computed:{
		// slideshowImage(){
		// 	return this.$store.state.mv.swiperImg
		// },
		// news(){
		// 	return this.$store.state.mv.news
		// },
		act(){
			return this.$store.state.mv.act
		},
	},
	components:{
		SlideShow,
		MovieBox,
		Activity,
		YingDan
	},
	mounted() {
		this.getbanner()
		this.getnewfilm()
		let numu = ['动画','剧情','爱情']
		numu.map((item) => [
			this.getyingdan(item)
		])
	},
	data() {
		return {
			slideshowImage:[],
			news:[],
			yingdan:[]
		}
	},
	methods: {
		getyingdan(type){
			FilmService.getFilmList(type).then((res) => {
				this.yingdan.push(res.data)
				console.log(res)
			})
			// return this.$store.state.mv.yingdan
		},
		getbanner(){
			ArticeService.getBanner().then((res) => {
				// console.log(res)
				this.slideshowImage = res.data.data
			})
		},
		getnewfilm(){
			FilmService.getFilmnews().then((res) => {
				// console.log(res)
				this.news = res.data.data
			})
		}
	},
}
</script>
<style>
.movies{
	position: relative;
	top:-1rem;
}
.h_r{
	width:100%;
	height:1.2rem;
}
</style>