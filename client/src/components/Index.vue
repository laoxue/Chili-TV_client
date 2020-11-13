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
			docmHeight: document.documentElement.clientHeight ||document.body.clientHeight,
      showHeight: document.documentElement.clientHeight ||document.body.clientHeight,
      hideshow:true  //显示或者隐藏footer
		}
	},
	mounted() {
      //监听事件
      window.onresize = ()=>{
          return(()=>{
              this.showHeight = document.documentElement.clientHeight || document.body.clientHeight;
      })()
      }
 
  },
	watch: {
        //监听显示高度
      showHeight:function() {
          if(this.docmHeight > this.showHeight){
            //隐藏
              this.hideshow=false
          }else{
            //显示
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