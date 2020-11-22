<template>
	<div class="chats">
		<div class="chatstit"><span class="back" @click="goback">返回</span>恐怖片聊天室</div>
		<div class="window">
			<div v-for="(itme, index) in leftbox" style="text-align:left" :key="index"><img :src="headerurl" style="width:45px;height:45px;border-radius:50%"/><span>{{itme.username}}:{{itme.val}}</span></div>
			<div v-for="(itme, index) in rightbox" style="text-align:right" :key="index"><div><span class="chat_box">{{itme}}</span><img :src="headerurl" style="width:45px;height:45px;border-radius:50%"/></div><span style="font-size:10px">{{username}}</span></div>
		</div>
		<div class="ctrl">
			<input type="text" name="text" v-model="val">
			<span @click="chats" class="btn">发送</span>
		</div>
	</div>
</template>
<script>
import { io } from 'socket.io-client';
export default{
	data(){
		return{
			username: window.localStorage.username,
      remark: window.localStorage.remark,
      sex: window.localStorage.sex,
      headerurl: window.localStorage.headerurl,
			val:'',
			leftbox:[],
			rightbox:[],
			socket:{}
		}
	},
	created() {
	//发送信息给服务端
	  // const socket = io('http://localhost');
	},
	mounted() {
		const socket = io('http://172.17.123.154:3000',{ 
			 query:{ 
					token:window.localStorage.token
			 } 
		})
		window.global.SOCKET = socket
		// socket.emit('login','xueq')
		// this.socket = socket
		let that = this
		socket.on('chat message', function(msg){
			console.log(msg)
			if (msg.id === window.global.SOCKET.id) {
				that.rightbox.push(msg.val)
			} else {
				that.leftbox.push({username:msg.username,val:msg.val})
			}
    });
		// this.$socket.emit('login',{
		// 		username: 'username',
		// 		password: 'password'
		// });

		// 	//接收服务端的信息
		// 	this.sockets.subscribe('relogin', (data) => {
		// 	console.log(data)
		// 	})
	},
	methods:{
		goback:function(){
			this.$router.push({name:'community'})
		},
		chats:function(){
			window.global.SOCKET.emit('chats_val',this.val)
			window.global.SOCKET.on('chat message', function(msg){
			console.log(window.global.SOCKET.id)
			// this.msgbox.push({
			// 	use:'me',
			// 	val:''
			// })
    	});
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
.chat_box{
	padding: 2px;
    background: rgb(4 190 2);
    font-size: 14px;
    border-radius: 5px;
    margin-right: 10px;
}
</style>