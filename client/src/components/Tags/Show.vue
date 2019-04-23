<template>
	<div class="show">
		<div class="show_head" :style="{backgroundImage:`url(${toppic})`}">
		</div>
		<div class="h_logo">
			<img :src="toppic"/>
		</div>
		<span class="goback" @click="goback">X</span>
		<span class="mv_tit">{{name}}</span>
		<span class="mv_sub">鹿晗关晓彤体校定情作</span>
		<span class="mv_type">国产片</span>
		<span class="mv_num">上映日期:2018-07-02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;片长:45分钟</span>
		<div class="submit">复制资源码去下载</div>
		<!-- <div class="commit">
			<span class="tit">精彩影评</span>
			<div class="user">
				<div class="user_l"></div>
				<div class="user_r"></div>
			</div>
		</div> -->
		<h4></h4>
	</div>
</template>
<script>
export default{
	data(){
		return{
			name:this.$route.params.name,
			num:this.$route.params.num,
			toppic:this.$route.params.toppic,
		}
	},
	name:'show',
	methods:{
		goback:function(){
			this.$router.push({name:'movies'});
		}
	}
}	
</script>
<style scoped>
.show{
	width: 100%;
	position: absolute;
	top:0;
	height: auto;
	/*background: black;*/
}
.show span{
	display: block;
	color: white;
	font-weight: 100
}	
.show_head{
	height: 19rem;
	position: relative;
	width: 100%;
	-webkit-filter: blur(18px) brightness(40%);
	background-image: url(https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2523592367.jpg);
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
.commit{
	width: 100%;
	height: 30rem;
	background: white;
	position: relative;
}
.h_logo{
	height: 8.8rem;
	width: 6.8rem;
	background: white;
	position: absolute;
	top:1.5rem;
	left: 50%;
	transform: translate(-50%);
	border-radius: 0.2rem;
}
.h_logo img{
	width: 6.4rem;
	height: 8.4rem;
	padding: 0.2rem;
}
.mv_tit{
	position: absolute;
	top: 10.8rem;
	width: 100%;
}
.mv_sub{
	position: absolute;
	top: 12.2rem;
	width: 100%;
	font-size: 0.7rem;
}
.mv_type{
	position: absolute;
	top: 13.2rem;
	width: 100%;
	font-size: 0.7rem;	
}
.mv_num{
	position: absolute;
	top: 14.2rem;
	width: 100%;
	font-size: 0.7rem;
}
.submit{
	position: absolute;
	top: 16rem;
	width: 60%;
	height: 1.5rem;
	background:#42bd56;
	z-index: 55;
	left: 20%;
	border-radius: 0.2rem;
	text-align: center;
	line-height: 1.5rem;
	color: white;
}
.bgc{
	width: 100%;
	height: 1.2rem;
	background: #f1f1f1;
}
.commit{
	width: 100%;
	height: auto;
	background: red;
	position: relative;
	top: 1.2rem;
}
.tit{
	font-size: 0.7rem;
	position: relative;
	text-align: left;
	padding:0.5rem;
}
.goback{
	height: 1.5rem;
	width: 1.5rem;
	position: absolute;
	border-radius: 50%;
	color: white;
	top: 0.5rem;
	left:0.5rem;
	background: gray;
	line-height: 1.5rem;
	text-align: center;
	opacity: .4;
}
.user{
	width: 100%;
	height: 5rem;
	background: white;
	position: relative;
}
.user_l{
	width: 20%;
	height: 5rem;
	background: black;
	float: left;
}
.user_r{
	width: 80%;
	height: 5rem;
	background: red;
	float: right;
}
</style>