<template>
	<div class="chats">
		<div class="chatstit"><span class="back" @click="goback">返回</span>恐怖片聊天室</div>
		<div class="window">
			<p v-for="itme in msgbox">{{itme}}</p>
		</div>
		<div class="ctrl">
			<input type="text" name="text" v-model="val">
			<span @click="chats" class="btn">发送</span>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			val:'',
			msgbox:['欢迎你来到本聊天室！']
		}
	},
	mounted() {
		this.$socket.emit('login',{
				username: 'username',
				password: 'password'
			});

			//接收服务端的信息
			this.sockets.subscribe('relogin', (data) => {
			console.log(data)
			})
	},
	methods:{
		goback:function(){
			this.$router.push({name:'community'})
		},
		chats:function(){
			//发送信息给服务端
			// this.sockets.on('news', (data) => {
			// 	console.log(data)
			// 	this.sockets.emit('something', {my:'data'})
			// })
			
		}
	}
}
</script>
<style scoped>
.chats{
	overflow-x: hidden;
	overflow-y: hidden;
}
.chatstit{
	width: 100%;
	height: 2rem;
	background: #f1f1f1;
	position: fixed;
	top: 0;
	left: 0;
	line-height: 2rem;
	font-size: 1rem;
}
.window{
	width: 100%;
	height: 37rem;
	position: fixed;
	left: 0;
	top: 2rem;
	/*background:black;*/
}
.ctrl{
	width: 98%;
	position: fixed;
	bottom: 0.5rem;
	/*background: green;*/
	height: 2rem;
	left: 1%;
	display: flex;
	justify-content: space-between;
}
.back{
	position: absolute;
	left: 0.4rem;
	font-size: 0.7rem
}
.ctrl input{
	width:80%;
}
.ctrl span{
	width:20%;
	/*background: green;*/
	color: white;
	text-align: center;
	line-height: 2rem;
}
.btn{
	background: red;
	border-radius: 0.5rem;
}
</style>