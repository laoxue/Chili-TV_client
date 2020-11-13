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
	mounted() {
  },
	watch: {

	},
	components:{
		TabBar
	}
}
</script>
<style></style>