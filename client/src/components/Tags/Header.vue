<template>
<div class="header">
	<header>
		<div class="logo_box">
			<img :src="loginUrl" class="logo"/>
			<span>{{username}}</span>
			<div>
				<i><img @click="tb" src="../../assets/icon/tb_arrow.png" class="arrow_logo"></i>
			</div>
		</div>
		<span></span>
		<span class="fenlei" @click="fenlei">分类</span>
	</header>
	<div class="chat" :style="{display:`${view}`}">
		<p>我的成就</p>
		<!-- <ul>
			<li>
				<img src="https://img.icons8.com/fluent/2x/city.png"/>
			</li>
		</ul> -->
		<!-- <img :src="loginUrl" style="width:95%;height:95%;padding:2.5%"/> -->
		<!-- <div class="chat_view">
			<p v-for="item in msgbox">{{item}}</p>
		</div>
		<div class="chat_ctrl">
			<input type="text" name="text" placeholder="与大力聊天吧......">
			<span @click="sayto">发送</span>
		</div> -->
	</div>
</div>
</template>
<script>
export default {
	data(){
		return{
			ctr:true,
			view:'none',
			val:'',
			logo:'',
			msgbox:['欢迎你来到本聊天室！'],
			username:'',
			loginUrl:''
		}
	},
	created() {
		if (window.localStorage.username) {
			this.username = window.localStorage.username
			this.loginUrl = window.localStorage.headerurl === '' ? 'http://aladjs.cn/300.jpg' : window.localStorage.headerurl 
		} else {
			this.username = '游客用户'
			this.loginUrl = 'http://aladjs.cn/unnamed.jpg'
		}
	},
	mounted() {
	},
	methods:{
		fenlei:function(){
			this.$router.push({name:'fenlei'});
		},
		sayto:function(){
			var that = this;
			var ws = new WebSocket("ws://localhost:2333/ws");
			ws.onopen = function(ev){
				console.log(that.val)
				ws.send(that.val);
				that.val=''
				
			}
			ws.onmessage = function(e){
				that.val=''
				for(var i =0;i<that.msgbox.length;i++){
					if(that.msgbox.indexOf(e.data)==-1){
						that.msgbox.push(e.data)
					}
				}
	
			}
		},
		tb:function(){
			if(this.ctr){
				this.view = 'block'
				this.ctr=false;
			}else{
				this.view = 'none'
				this.ctr = true;
			}
		}
	}
}
</script>
<style lang="scss">
@import "../../assets/plugins/reset.css";
$w:100%;
$h:2.5rem;
$bgc:red;
header{
	width: $w;
	height: $h;
	/*background: $bgc;*/
	position: fixed;
	top: 0px;
	z-index:8888888;
	background:#f1f1f1;
	.fenlei{
		position: absolute;
		display: block;
		font-size: 0.9rem;
		width: 20%;
		height:$h; 
		right:0px;
		top: 0px;
		margin-left: 80%;
		/*background: blue;*/
		line-height: $h;
	}
}
.logo{
	//   background:red;
	  border:1px solid rgba(215,215,215,0.6);
	  border-radius:50%
	}
.arrow_logo{
	height:2rem;
}
.logo_box{
	width: $w/3;
	height: $h;
	position: fixed;
	top:0px;
	/*background: red;*/
/*	background: black;*/
	img{
		width:1.5rem;
		height: 1.5rem;
		margin-top: (2.1rem-1.5rem)/2;
		position: absolute;
		left: 1rem;
	};
	span{
/*		background: blue;*/
		height: $h;
		display: block;
		width: 65%;
		position: relative;
		margin-left: 2.5rem;
		font-size: 0.8rem;
		line-height: $h
	};
	div{
	/*	background: yellow;*/
		height: $h;
		display: block;
		width: 1.5rem;
		position: absolute;
		top: 0;
		left:7rem;
		line-height: $h;
		i{
			position: absolute;
			left: -0.7rem;
			top: 0.2rem;
		}
	}
}
.chat{
	width: 100%;
	height:9rem;
	background: white;
	position: fixed;
	top:$h;
	z-index: 88;
	p{
		font-size: 0.7rem;
		text-align:left;
		padding-left: 1rem;
	}
	// border-bottom: 1px solid rgb(239 239 239);
	/*display: none;*/
}
.chat_view{
	width: 98%;
	left: 1%;
	height: 6rem;
	/*background: red;*/
	position: absolute;
	top: 2%;
	overflow: hidden;
	overflow-x:hidden;
	overflow-y:auto;
}
.chat_view p{
	font-size: 0.7rem;
	/*background: green;*/
	display: inline;
	position: absolute;
	padding: 0.2rem;
	border-radius: 0.2rem;
}
.user{
	text-align: center;
	left: 0.7rem;
}
.robort{
	text-align: center;
	right: 0.7rem;
}
.chat_ctrl{
	width: 98%;
	position: absolute;
	bottom: 0.5rem;
	background: green;
	height: 2rem;
	left: 1%;
	display: flex;
	justify-content: space-between;
}
.chat_ctrl input{
	width: 80%;
}
.chat_ctrl span{
	width: 20%;
	display: block;
	background:green;
	color: white;
	line-height: 2rem;
	text-align: center;
}
</style>