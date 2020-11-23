<template>
	<div class="chats">
		<div class="chatstit"><span class="back" @click="goback">返回</span>恐怖片聊天室<span style="color:gray;font-size:10px">(当前在线{{onlinenum}}人)</span></div>
		<div class="window">
			<ul style="margin:0;padding:0">
				<li v-for="(itme, index) in chatbox" :style="`${itme.isme ? 'list-style:none;display:flex;flex-direction:row-reverse;margin-top:10px' : 'list-style:none;display:flex;flex-direction:row;margin-top:10px'}`" :key="index">
					<div style="width:40px;height:40px;background:gray;margin:0 8px;border-radius:5px;"><img :src="itme.headUrl" style="width:100%;height:100%;;"/></div>	
					<div :style="`${itme.isme ? 'line-height: 40px;font-size:12px;background:rgb(122 206 122);border-radius:4px;padding:0 5px;max-width:70%;text-align: left;overflow: auto;' : 'line-height: 40px;background:rgb(230 230 230);font-size:12px;padding:0 5px;max-width:70%;text-align: left;overflow: auto;border-radius:4px'}`">{{itme.val}}</div>
				</li>
			</ul>
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
			chatbox:[],
			socket:{},
			onlinenum:0,
			myid: window.global.SOCKET.id
		}
	},
	created() {
	//发送信息给服务端
	  // const socket = io('http://localhost');
	},
	mounted() {
		const socket = io(`${window.global.BASE_URL}`,{ 
			 query:{ 
					token:window.localStorage.token
			 } 
		})
		window.global.SOCKET = socket
		// socket.emit('login','xueq')
		// this.socket = socket
		let that = this
		//接收服务端推送的信息
    socket.on("users", function(obj) {
			that.onlinenum = obj.number
		})
		// socket.on("disconnect", function(obj) {
			
    // })
		socket.on('chat message', function(msg){
			console.log(msg)
				that.chatbox.push({username:msg.username,headUrl:msg.headUrl,val:msg.val,isme:(msg.id === window.global.SOCKET.id)})
			  that.val = ''
    });
	},
	methods:{
		goback:function(){
			// this.$router.push({name:'community'})
			window.global.SOCKET.emit('disconnect');
		},
		chats:function(){
			window.global.SOCKET.emit('chats_val',this.val)
			window.global.SOCKET.on('chat message', function(msg){
		
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
.chat_box_me{
	padding: 2px;
    background: rgb(4 190 2);
    font-size: 14px;
    border-radius: 5px;
    margin-right: 10px;
}
.chat_box_other{
	padding: 2px;
    font-size: 14px;
    margin-right: 10px;
}
</style>