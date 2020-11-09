<template>
	<div class="show">
		<div class="show_head" :style="{backgroundImage:`url(${filminfo.coverUrl})`}">
		</div>
		<div class="h_logo">
			<img :src="filminfo.coverUrl"/>
		</div>
		<span class="goback" @click="goback">X</span>
		<span class="mv_tit">{{filminfo.filename}}</span>
		<span class="mv_sub">鹿晗关晓彤体校定情作</span>
		<span class="mv_type">{{filminfo.typelabel}}片</span>
		<span class="mv_num" @click="pianzi">上映日期:2018-07-02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;片长:45分钟</span>
		<div class="submit" :data-clipboard-text="filminfo.sourceCode" @click="download">复制资源码去下载</div>
		<div><span style="color:black">该影片由 <a href="#" style="background:white;color:blue">{{filminfo.username}}</a> 分享！</span></div>
		<div class="commit">
			<div>
				<ul class="commit_tabbar">
					<li :class="((index===nowIndex) ? 'commit_active' : '')" v-for="(item, index) in mctabbar" :key="index" @click="changetabr(index)">{{item}}</li>
				</ul>
				<div v-if="nowIndex ===0" class="desc_box">{{filminfo.desc}}</div>
				<div v-else-if="nowIndex ===1" class="desc_content">
						<div style="width:100%;height:auto;display:flex;margin-top:1rem" v-for="(item, index) in contbox" :key="index">
							<div style="width: 2rem;
    background: rgb(255 255 255);padding: 0.8rem 0.5rem 0.8rem 0.8rem;">
								<img :src="item.user_id.headUrl" style="width:100%"/>
							</div>
							<div style="text-align:left;padding:0.5rem 0.8rem 0.5rem 0.5rem">
								 <p style="font-size:0.8rem;font-weight:800;margin:0px;padding:0px;padding-bottom:0.2rem;">{{item.user_id.username}}</p>
								 <p style="font-size:0.5rem;margin:0px;padding:0px;color:#aaa;padding-bottom:0.2rem">{{item.commitdate}}</p>
								 <p style="font-size:0.5rem;margin:0px;padding:0px">{{item.content}}</p>
							</div>
						</div>
				</div>
				<div v-else class="desc_box">333333</div>
			</div>
		</div>

		<!-- 评论框 -->
		<div class="fixedinput" v-if="nowIndex ===1">
			<input v-model="content" type="text" placeholder="畅所欲言,提点意见把" style="width:93%;height:100%;position:absolute;left:0"/>
			<span class="commit_btn" @click="oncommit">评论</span>
		</div>
	</div>
</template>
<script>
import Clipboard from 'clipboard';
import * as FilmService from './../../services/films/film.service'
import * as CommitService from './../../services/commit/commit.service'
export default{
	data(){
		return{
			mctabbar:['简介','评论','占位'],
			nowIndex:0,
			content:'',
			contbox:[],
			filminfo: {
				filename:'',
				username:'',
				dbscore:0,
				coverUrl:'',
				sourceCode:'',
				typelabel:'',
				desc:''
			}
		}
	},
	name:'show',
	mounted() {
		this.initInfo()
	},
	methods:{
		oncommit(){
			let params = {
				film_id:this.$route.params.id,
				content:this.content
			}
			CommitService.postCommit(params).then((res) => {
					this.initInfo()
			})
		},
		changetabr(index){
			this.nowIndex = index
		},
		initInfo(){
			FilmService.getFilmnews(this.$route.params.id).then((res) => {
				console.log(res)
				this.filminfo.filename = res.data.data[0].fulmname
				this.filminfo.dbscore = res.data.data[0].dbscore
				this.filminfo.coverUrl = res.data.data[0].coverurl
				this.filminfo.sourceCode = res.data.data[0].sourcecode
				this.filminfo.typelabel = res.data.data[0].typelabel
				this.filminfo.username = res.data.data[0].user_name
				this.filminfo.desc = res.data.data[0].desc
				this.contbox = res.data.commit
				console.log(this.contbox)
			})
		},
		pianzi(){
			window.location.href = ''
		},
		goback:function(){
			this.$router.push({name:'movies'});
		},
		// 复制资源去下载 打开百度云 sachema 复制内容自动打开
		download:function(){
			window.location.href = 'baiduyun://'
			const btnCopy = new Clipboard('.submit');
			this.copyValue = `https://pan.baidu.com/s/12w9D3DmEYWfdnkth_IFFkg`;
			let that = this
			btnCopy.on('success', function(e) {
				console.log(that.copyValue)
				// window.location.href = 'baiduyun://'
				e.clearSelection(); // 清除选中内容
			});
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
	/* background: red; */
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
.commit_tabbar{
	display: flex;
	justify-content:space-evenly;
	padding:0px;
	margin: 0px;
}
.commit_tabbar li{
	float: left;
	text-align: center;
	padding-bottom: 3px;
	list-style: none;
	
}
.commit_active{
	border-bottom: 1px solid green;
}
.desc_box{
	padding: 1.2rem;
  font-size: 0.8rem;
  text-align: left;
}
.fixedinput{
	position: fixed;
	width:95%;
	bottom: 1.5rem;
	height: 2rem;
	/* background: red; */
	margin-left:2.5%;
	border-radius: 4px
}
.commit_btn{
	position: absolute;
  right: 1.4rem;
  z-index: 9999;
  color: rgb(255 0 0);
	border-radius: 5px;
  padding: 0.4rem 1rem;
  margin-top: 0.3rem;
	font-size: 0.6rem;
  background: rgb(0 128 0);
}
</style>