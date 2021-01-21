<template>
<div class="moviebox" style="border-top: 0.5rem solid rgb(241 241 241 / 80%);">
	<div class="box_header">
		<span style="float: left;font-size: 0.9rem;margin-left:0.7rem;width:25%"><i class="title_icon"></i>&nbsp;饭团速递</span><span class="more">查看更多</span>
	</div>
	<v-touch class="content" style="overflow-x:scroll">
		<ul class="items" style="width:800%">
			<li v-for="(list, index) in news" @click="Toshow(list)" :key="index">
				<div :style="{backgroundImage:`url(${list.coverurl})`}">
					<!-- <img src="../../assets/icon/label.png"/><span>{{list.dbscore}}</span> -->
				</div>
				<span style="background: linear-gradient(rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 30%) 100%);
    opacity: .7;
    color: rgb(255 255 255);
    margin: 0 0.8rem;bottom: 1.5rem;padding: 0.25rem 0rem;">{{list.filmname}}</span>
			</li>
		</ul>
	</v-touch>
</div>
</template>
<script>
export default{
	data(){
		return{
			list:''
		}
	},
	name:'movieBox',
	props:["news"],
	methods:{
		Toshow:function(list){
			console.log(list)
			this.$router.push({path:`/show/${list._id}`});
		}
	}
}
</script>
<style lang="scss" scoped>
// $contentwidth
.moviebox{
	position: relative;
	width: 100%;
	height: 13rem;
	/*background: red;*/
/*	top:-1.5rem;*/
	border-top: 1px solid rgba(215,215,215,0.6);
}
.box_header{
	position: relative;
	top: 0px;
	/*background: black;*/
	height: 2rem;
	width: 100%；
}
.box_header span{
	/*background: red;*/
	position: relative;
	display: inline-block;
	width:20%;
	height: 2rem;
	line-height: 2rem;
}
.content{
	width: 100%;
	/*background: black;*/
	height: 10.5rem;
	// overflow-x: auto;
    // overflow-y: hidden;
    white-space: nowrap;
}
.content .items{
	width: 100%;
	padding-left: 1rem;
	// width: calc(8rem*5 + 1rem);
	height: 100%;
	/*background: red;*/
}
.content .items li{
	width: 6.5rem;
	height: 100%;
	/*background: black;*/
	float: left;
	margin-right: 1rem;
}
.content .items li div{
	width: 100%;
	// margin-left: 10%;
	
	// margin-top: 10%;
	height: 90%;
	border-radius: 4px;
	/*background: yellow;*/
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: relative;
}
.content .items li div img{
	width: 1.8rem;
	height: 1.8rem;
	position: absolute;
	right: 0
}
.content .items li div span{
	width: 1.8rem;
	height: 1.8rem;
	position: absolute;
	right: 0;
	top: 0.5rem;
	font-weight: 700
}
.content .items li span{
	position: relative;
	font-size: 0.7rem;
	/*background: black;*/
	display: block;
}
.more{
	float: right;
	font-size: 0.7rem
}
.more:after{
	content: " ";
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 5px;
    position: relative;
    top: 1px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhBAMAAAClyt9cAAAAHlBMVEUAAAAaGhocHBwaGhoaGhoaGhoaGhoaGhogICAZGRk3RNH5AAAACXRSTlMAqiWflHTmswiV270IAAAARUlEQVQoz2MAASUGNMAy0wBNRHPmRAyRmQKoIswzMRRJYihiHDKKAlBF2mbOLMBUg2EOpl2DVgkovjDjFCPe8aYNzPQDADm4L3viuOX/AAAAAElFTkSuQmCC);
}
.title_icon{
	background: url(http://aladjs.cn/store.png);
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    display: inline-block;
    background-size: 100%;
    position: relative;
    top: 2px;
}
</style>