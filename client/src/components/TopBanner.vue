<template>
	<div class="topbanner">
		<h1>{{title}}</h1>
		<button @click="input">点击进入主页</button>
		<!-- <router-view></router-view> -->
	</div>
</template>
<script>
export default{
	name:'topbanner',
	data(){
		return{
			
		}
	},
	computed:{
		title(){
			return this.$store.state.topbar.title
		}
	},
	methods:{
		input:function(){
			this.$router.push({name:'index'})
		}
	}
}
</script>
<style></style>