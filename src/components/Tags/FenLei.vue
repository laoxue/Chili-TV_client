<template>
	<div class="fenlei" style="margin-top:60px">
		<div class="search">
			<span @click="close">关闭</span>
			<input type="text" name="search" placeholder="请输入您要搜索的影片">
		</div>
		<div class="content">
			<ul>
				<li v-for="item in labels"><span style="top:0;height: 2rem;font-size: 1rem;line-height: 2rem;font-weight: 550" :style="{color:`${item.color}`}">{{item.title}}</span><span style="height: 1rem;bottom: 0;font-size: 0.7rem;line-height: 1rem;color: #999">{{item.subtit}}</span></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default{
	name:'fenlei',
	data(){
		return{
		}
	},
	computed:{
		labels(){
			return this.$store.state.fl.labels
		}
	},
	methods:{
		close:function(){
			this.$router.push({name:'movies'});
		}
	}
}
</script>
<style scoped>
.search{
	width: 100%;
	height: 3.5rem;
	/*background: red;*/
	position: fixed;
	top: 0;
	left: 0;
	border-bottom: 0.1rem solid rgba(215,215,215,.3);
	z-index: 999999;
	background: white
}
.search input{
	width: 70%;
	position: absolute;
	/*background: black;*/
	height: 1.8rem;
	left: 25%;
	top: 0.75rem;
	border-radius: 0.2rem;
	outline:0;
	background-color:#f1f1f1;
	border-color:transparent;
	text-align: center;
}
.search span{
	position: absolute;
	height: 2rem;
	width: 20%;
	top: 0.8rem;
	/*background: black;*/
	left: 0.75rem;
	background: white;
	line-height: 2rem;
	text-align: center;
	display: block;

}
.content{
	width:100%;
	height: 14.5rem;
	/*background: red;*/
	position: relative;
}
.content ul{
	position: absolute;
	/*background: black;*/
	width: 95%;
	left: 2.5%;
	height: 13.5rem;
	margin-top:0.5rem;
	padding: 0;
}
.content ul li{
	width: 30%;
	height: 3rem;
	background: white;
	float: left;
	margin-left: 2.5%;
	margin-top: 1rem;
	line-height: 3rem;
	position: relative;
	text-align: center;
	list-style: none;
}
.content ul li span{
	display: block;
	position: absolute;
	width: 100%;
	height: 1.5rem;
	/*background: red;*/
}
.ittit{

}
</style>