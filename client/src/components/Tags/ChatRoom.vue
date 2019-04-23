<template>
	<div class="chatroom">
		<div class="room" v-for="list in chatroom" :style="{backgroundImage:`url(${list.bgisrc})`}" @click="toChats">
			<div class="btt">{{list.title}}</div>
			<div class="btm">
				<div class="head_logo" :style="{backgroundImage:`url(${list.logosrc})`}"></div>
				<span class="online">当前在线人数:{{list.online}}人</span>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	props:["chatroom"],
	methods:{
		toChats:function(){
			this.$router.push({name:'chats'})
		}
	}
}	
</script>
<style>
.chatroom{
	width: 100%;
	height: 14.5rem;
	/*background:black;*/
	display: flex;
	justify-content: space-around;
	flex-wrap:wrap;
}
.room{
	width: 45%;
	height: 6.5rem;
	/*background: red;*/
	margin-top: 0.4rem;
	border-radius: 0.2rem;
	background-repeat: no-repeat;
	background-position: 100% 100%;
	position: relative;
	border:0.07rem solid #f1f1f1;
}
.btm{
	position: absolute;
	width: 100%;
	height: 2.5rem;
	background:white;
	bottom: 0
}
.head_logo{
	width: 2.5rem;
	height: 3.5rem;
	background: red;
	position: absolute;
	left: 0.5rem;
	top: -1.5rem;
	border-radius: 0.3rem;
	background:url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1362333190,727606719&fm=11&gp=0.jpg);
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.online{
	position: absolute;
	right: 0;
	/*background: red;*/
	font-size: 0.8rem;
	display: block;
	height: 2.5rem;
	bottom: 0;
	line-height: 2.5rem;
	width: 73%;
	text-align: center;
}
.btt{
	width: 100%;
	height: 4rem;
	/*background: red;*/
	padding: 0.2rem;
	color: white;
	font-weight: 800;
	line-height: 3rem;
}
</style>