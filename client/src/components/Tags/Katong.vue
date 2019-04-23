<template>
	<div class="katong">
		<SlideShow :swiper-image="slideshowImage"></SlideShow>
		<MovieBox :news="news"></MovieBox>
		<Activity :act="act"></Activity>
		<YingDan></YingDan>
		<div class="h_r"></div>
		<YingDan></YingDan>
	</div>
</template>
<script>
import SlideShow from './../Tags/SlideShow.vue'
import MovieBox from '../Tags/MovieBox.vue'
import Activity from '../Tags/Activity.vue'
import YingDan from '../Tags/YingDan.vue'
export default{
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
	components:{
		SlideShow
	}
}	
</script>
<style>
.katong{
	position: relative;
	top:-1rem;
}
.h_r{
	width:100%;
	height:1.2rem;
}	
</style>