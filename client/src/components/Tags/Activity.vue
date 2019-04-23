<template>
<div class="activity">
	<div :style="{backgroundImage:`url(${item.bgi})`}" v-for="item in act">{{item.title}}</div>
</div>
</template>
<script>
export default{
	props:["act"]
}
</script>
<style>
.activity{
	border-top: 0.5rem solid rgb(241,241,241,0.8);
	width:100%;
	height: 6rem;
	/*background: red;*/
	display: flex;
	justify-content: space-around;
}
.activity div{
	width: 45%;
	height: 5rem;
	background: black;
	margin-top: 0.5rem;
	border-radius: 0.5rem;
	text-align: center;
	line-height: 5rem;
	font-size: 0.9rem;
	color: white;
	opacity: 0.4;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
</style>