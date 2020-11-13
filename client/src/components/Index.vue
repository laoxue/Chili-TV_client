<template>
	<div class="index">
		<router-view></router-view>
		<TabBar v-show="hideshow"></TabBar>
	</div>
</template>
<script>
import TabBar from './Tags/TabBar.vue'
export default{
	data(){
		return{
			docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
	    showHeight: document.documentElement.clientHeight,   //实时屏幕高度
			hideshow:true
		}
	},
	mounted() {
		window.onresize = ()=>{
    return(()=>{
      this.showHeight = document.body.clientHeight;
    })()
  }
	},
	watch: {
		showHeight:function() {
    if(this.docmHeight > this.showHeight){
      this.hideshow=false
    }else{
      this.hideshow=true
    }
  }
	},
	components:{
		TabBar
	}
}
</script>
<style></style>