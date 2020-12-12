<template>
	<div class="katong">
		<userModel :news="news"></userModel>
		<div class="h_r"></div>
	</div>
</template>
<script>
import * as FilmService from './../../services/films/film.service'
import userModel from '../Tags/userModel'
export default{
	computed:{
	
	},
	components:{
		userModel
	},
	mounted() {
		this.getnewfilm()
	},
	data() {
		return {
			news:[],
		}
	},
	methods: {
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
.katong{
	position: relative;
	top:-1rem;
}
.h_r{
	width:100%;
	height:1.2rem;
}	
</style>