<template>
<div class="holedays">
	
	<div class="days" v-for="item in days" :style="{backgroundImage:`url(${item.imgpic})`}">
		<div class="date">
		------ {{item.date}} ------
		</div>
		<button v-if="item.cunzai" class="has">有汁源</button>
		<button v-else class="no">无汁源</button>
		<span class="biaoti">{{item.name}}</span>
		<span class="pingfen">{{item.num}}</span>
		<span class="discription">推荐理由:{{item.description}}</span>
	</div>
</div>
</template>
<script>
export default{
	props:["days"]
}
</script>
<style lang="scss" scoped>
.days{
	width: 95%;
	height: 12rem;
	margin-left:2.5%;
	/* background: red; */
	position: relative;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	margin-bottom:2rem;
}
.date{
	font-size: 0.7rem;
	position: relative;
	bottom: 1.5rem;
}
.days .biaoti{
	font-size: 1rem;
	color: white;
	position: absolute;
	left: 0.8rem;
	bottom: 4rem;
}
.days{
	.has{
		position: absolute;
		left: 0.2rem;
		top:0.2rem;
		border-radius: 0.3rem;
		background: green;
		color:white;
		border:0px;
	}
	.no{
		position: absolute;
		left: 0.2rem;
		top:0.2rem;
		border-radius: 0.3rem;
		background: red;
		color:white;
		border:0px;
	}
}
.pingfen{
	font-size: 1.8rem;
	color: yellow;
	position: absolute;
	left: 5.8rem;
	bottom: 4rem;
}
.discription{
	width: 100%;
	height: 2rem;
	background: black;
	position: absolute;
	left: 0;
	bottom: 0;
	opacity: .6;
	color: white;
	font-size: 0.8rem;
	line-height: 2rem;
}
</style>