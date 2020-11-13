<template>
	<div class="tabbar">
		<ul>
			<li @click="toLibrary"><i :class=[zt1]><img src="../../assets/icon/tb_mv.png"/></i><span>片源</span></li>
			<li  @click="toFilmlist"><i :class=[zt4]><img src="../../assets/icon/tb_book.png"/></i><span>影单</span></li>
			<li  @click="toCommunity"><i :class=[zt2]><img src="../../assets/icon/tb_sq.png"/></i><span>社区</span></li>
			<li  @click="toHome"><i :class=[zt3]><img src="../../assets/icon/tb_home.png"/></i><span>个人中心</span></li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'tabbar',
  data(){
  	return{
  		zt1:'active',
  		zt2:'',
			zt3:'',
			zt4:''
  	}
  },
  methods:{
 	toLibrary:function(){
 		this.$router.push({name:'library'});
 		this.zt1='active';
 		this.zt2='';
		this.zt3='';
		this.zt4='';
 	},
 	toCommunity:function(){
 		this.$router.push({name:'community'});
 		this.zt1='';
 		this.zt2='active';
		this.zt3='';
		this.zt4='';
 	},
 	toHome:function(){
 		this.$router.push({name:'home'});
 		this.zt1='';
		this.zt2='';
		this.zt4='';
 		this.zt3='active';
	 },
	toFilmlist:function(){
		this.$router.push({name:'filmlist'});
 		this.zt1='';
		this.zt2='';
		this.zt3='';
 		this.zt4='active';
	}
  }
}
</script>
<style scoped>
.tabbar{
	background: #f1f1f1;
	width: 100%;
	height: 3rem;
	/*background: red;*/
	/* position: fixed; */
	bottom: 0;
	margin:0;
	padding: 0;
	box-sizing: content-box;
	left: 0;
	z-index: 999;
	border-top: 1px solid rgba(215,215,215,0.6);
}
.tabbar ul{
	width: 100%;
	height: 100%;
	/*background: black;*/
	padding:0;
	margin:0;
}
.tabbar ul li{
	width: 25%;
	display: block;
	height: 3rem;
	/*background: yellow;*/
	float: left;
	position: relative;
	text-align: center;
	/*background: black*/
}
.tabbar ul li img{
	margin-top: 0.4rem;
	width: 1.7rem;
	height: 1.7rem;
}
.tabbar ul li span{
	position: relative;
	bottom: 0.6em;
	font-size: 0.7rem;
	display: block;
	/*background: red;*/
}
.active{
	background: white;
	position: relative;
	width: 2.5rem;
	height: 2.5rem;
	bottom: 0.5rem;
	display: block;
	left: 50%;
	border-bottom: 0 solid white;
	border-radius: 50%;
	transform: translate(-50%);
}
</style>