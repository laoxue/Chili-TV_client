<template>
	<div class="topbanner" style="margin-top:7rem">
		<!-- <h1>{{title}}</h1> -->
		<img src="http://aladjs.cn/dali_saymore.png" style="width:150px;height:150px;"/>
		<p style="color:rgb(112 118 123)">{{this.date}}</p>
		<p style="color:rgb(112 118 123)">{{subtitle}}</p>
		<!-- <button @click="input">点击进入主页</button> -->
		<!-- <router-view></router-view> -->
		<span class="overTime">跳过广告 <span style="position: relative;
    top: 1px;">{{overtime}}</span></span>
	</div>
</template>
<script>
export default{
	name:'topbanner',
	data(){
		return{
			date:'',
			subtitle:'发现更多懂你的人',
			overtime:3
		}
	},
	computed:{
		title(){
			return this.$store.state.topbar.title
		},
	},
	created() {
		this.date = this.getnowTime();
	},
	mounted() {
		this.overTime();
	},
	methods:{
		input:function(){
			this.$router.push({name:'index'})
		},
		getnowTime(){
			let date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();
			let week = date.getDay();
			let str = `${year}年${month}月${day}日 , 星期${this.changenumber(week)}`;
			return str;
		},
		overTime(){
			
				console.log(this.overtime)
					var timer = setInterval(()=>{
						if(this.overtime >0) {
							this.overtime -= 1;
						}else {
							clearInterval(timer)
							this.$router.push({name:'index'})
						}
				},1000)
			
			
		},
		changenumber(num){
			switch(num){
				case 1:
					return '一'
					break;
				case 2:
					return '二'
					break;
				case 3:
					return '三'
					break;
				case 4:
					return '四'
					break;
				case 5:
					return '五'
					break;
				case 6:
					return '六'
					break;
				case 7:
					return '日'
					break;
			}
		}
	}
}
</script>
<style scoped>
.overTime{
	padding: 0.2rem 0.5rem;
    background: rgb(202 202 202);
    color: rgb(255 255 255);
	position: fixed;
    right: 1.2rem;
    bottom: 1.2rem;
	font-size: 0.7rem;
}
</style>