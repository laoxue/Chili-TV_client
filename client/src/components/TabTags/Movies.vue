<template>
	<div class="movies">
		<!-- slide 兼容处理 -->
		<template v-if="slideshowImage.length > 0">
			<SlideShow :swiper-image="slideshowImage"></SlideShow>
		</template>
		<template v-else>
			<div class="empty_banner">
				<img src="http://aladjs.cn/empty_banner.png"/>
			</div>
		</template>
		<MovieBox :news="news"></MovieBox>
		<Activity :act="act"></Activity>
		<YingDan style="border-top: 0.5rem solid rgb(241 241 241 / 80%);padding: 5px 0px;" v-for="(item, index) in yingdan" :yingdan="item" :key="index"></YingDan>
		<div class="h_r"></div>
	</div>
</template>
<script>
import SlideShow from './../Tags/SlideShow.vue'
import MovieBox from '../Tags/MovieBox.vue'
import Activity from '../Tags/Activity.vue'
import YingDan from '../Tags/YingDan.vue'
import userModel from '../Tags/userModel'
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
		YingDan,
		userModel
	},
	mounted() {
		this.getbanner()
		this.getnewfilm()
		this.getyingdan()
	},
	data() {
		return {
			slideshowImage:[],
			news:[],
			yingdan:[]
		}
	},
	methods: {
		getyingdan(){
			FilmService.getFilmList().then((res) => {
				this.yingdan = res.data.data
				console.log(this.yingdan)
			})
			// return this.$store.state.mv.yingdan
		},
		getbanner(){
			ArticeService.getBanner().then((res) => {
				console.log('这里面是banner图')
				this.slideshowImage = res.data.data
				console.log(this.slideshowImage)
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
.empty_banner{
	position: relative;
    height: 9rem;
    width: 95%;
    margin-left: 2.5%;
    border-radius: 0.5rem;
	margin-bottom: 0.5rem;
}
.empty_banner img{
	width: 100%;
	height:100%;
}
</style>