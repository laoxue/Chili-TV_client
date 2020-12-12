<template>
<div class="yingdan">
	<div>
	<div class="yingtou" :style="{backgroundImage:`url(${yingdan.yintou})`}">
		<div class="yt_model"></div>
		<span class="yingtoutit">{{yingdan.yingheader.title}}</span>
		<span class="yingtousubtit">{{yingdan.yingheader.subtit}}</span>
		<span class="yingtoucount">共{{yingdan.yingheader.count}}个资源</span>
		<span class="yingtoudate">{{yingdan.yingheader.date}}更新</span>
	</div>
	<div class="content">
		<ul :style="`width:${(yingdan.yincontent.length * 2 + 4)*10}%`">
			<li v-for="(itme, index) in yingdan.yincontent" :key="index" :style="{backgroundImage:`url(${itme.coverurl})`}" @click="Toshow(itme)">
				<span>{{itme.filmname}}</span>
			</li>
		</ul>
	</div>
	</div>
</div>
</template>
<script>
export default{
	name:'tvbox',
	props:["yingdan"],
	methods:{
		Toshow:function(list){
			console.log(list)
		    this.$router.push({path:`/show/${list._id}`})
		}
	}
}
</script>
<style lang="scss" scoped>
.yingdan{
	width: 100%;
	height: 16.5rem;
	/*background: black;*/
}
.yingtou{
	width: 97%;
	height: 7.5rem;
	background: black;
	position: relative;
	text-align: center;
	margin-left:1.5%;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position:center;
}
.yingtou::before{
	content: '';
	width: 0px;
	height: 0;
	position: absolute;
	left: 0;
	bottom: -0.1rem;
	left: 50%;
	transform: translate(-50%);
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid white;
}
.yingtoutit{
	display: block;
	color: white;
	width: 100%;
	font-weight: 500;
	font-size: 1rem;
	position: absolute;
	top: 20%;
	text-align: center;
	/*background: white*/
}
.yingtousubtit{
	display: block;
	color: white;
	width: 100%;
	font-weight: 500;
	font-size: 0.6rem;
	position: absolute;
	top: 40%;
	text-align: center;
	/*background: white*/
}
.yingtoucount{
	display: block;
	color: white;
	width: 100%;
	font-weight: 500;
	font-size: 0.7rem;
	position: absolute;
	top: 60%;
	text-align: center;
	/*background: white*/
}
.yingtoudate{
	display: block;
	color: white;
	width: 98%;
	font-weight: 500;
	font-size: 0.7rem;
	position: absolute;
	top: 80%;
	text-align: right;
	/*background: white*/
}
.content{
	width: 100%;
	height: 10rem;
	/*background: green;*/
	position: relative;
	padding-top:0.2rem;
	overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}
.content ul{
	width: 160%;
	height: 8rem;
	/*background: red;*/
}
.content ul li{ 
	height: 7rem;
	width: 5.5rem;
	margin-top: 0.5rem;
	margin-left: 0.5rem;
	float: left;
	background: white;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.content ul li span{
	font-size: 0.5rem;
	position: relative;
	top:7.2rem;
}
.yt_model{
	width: 100%;
	height:100%;
	background: rgb(50, 50, 59);
	opacity: .8;
}
</style>