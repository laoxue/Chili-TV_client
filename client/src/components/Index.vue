<template>
	<div class="index">
		<router-view></router-view>
		<TabBar></TabBar>
	</div>
</template>
<script>
import TabBar from './Tags/TabBar.vue'
export default{
	data(){
		return{

		}
	},
	components:{
		TabBar
	}
}
</script>
<style></style>