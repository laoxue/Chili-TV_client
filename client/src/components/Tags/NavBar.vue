<template>
	<div class="navbar">
		<ul class="h_t">
			<li v-bind:class='{active:index==qwerqwer}' v-for="(item,index) in tabsParam" v-on:click="addClass(index)">{{item}}</li>
		</ul>
		</div>
	</div>
</template>
<script>
export default{
	name:'',
	data () {
    return {
      tabsParam:['电影天堂','二次元世界','新剧来袭'],
      isActive:false,
      qwerqwer:0
    }
  },
  components:{

  },
  methods:{
  	addClass:function(index){
  		this.qwerqwer = index;
  	    if(index==0){
  	    	this.$router.push({name:'movies'})
  	    }else if(index==1){
  	    	this.$router.push({name:'katong'})
  	    }else if(index==2){
  	    	this.$router.push({name:'dianshiju'})
  	    }
  	}
  }
}	
</script>
<style lang="scss" scope>
.navbar{
	width:100%;
	height: 1.5rem;
	/*background: red;*/
	position: relative;
	top: -1.1rem;
}
.h_t{
	width: 100%;
	height: 1.5rem;
	/*background: balck;*/
}
.h_t li{
	width: 33.3%;
	height: 1.5rem;
	line-height: 1.5rem;
	background: white;
	text-align: center;
	float: left;
	font-size: 0.7rem;
}
.h_t li::before{
	content: '';
	width:20%;
	height: 1.7rem;
	background: white;
	display: block;
	position: relative;
	float: left
}
.h_t li::after{
	content: '';
	width:20%;
	height: 1.7rem;
	background: white;
	display: block;
	position: relative;
	float: right;
}
.active{
	border-bottom: 2px solid red;
	color: red;
}
.box{
	width:100%;
	height: 48rem;
	/*background: black;*/
	position: relative;
}
</style>