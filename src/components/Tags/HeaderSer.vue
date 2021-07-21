<template>
<div class="header" style="padding: 10px 0;">
	 <div class="searchbar">
     <span class="searchbar-icon"></span>
     <div class="searchbar-input">
       <input v-model="keyword" type="search" placeholder="输入关键字" autocapitalize="off" autofocus="autofocus" class="input_box">
     </div>
     <span class="add-icon" @click="showit"></span>
   </div>
   <div style="margin: 10px 0;width: 90%;padding-left: 10px;">
     <ul class="mcfunction">
       <li style="color:#0fc37c">我发布</li>
       <li>我收藏</li>
       <li>&nbsp;&nbsp;</li>
       <li><span class="cata-icon"></span><span>分类</span></li>
       <li @click="select"><span class="select-icon"></span><span>选择</span></li>
     </ul>
   </div>
</div>
</template>
<script>
import * as FilmService from './../../services/films/film.service'
export default {
	data(){
		return{
			ctr:true,
			view:'none',
			val:'',
      msgbox:['欢迎你来到本聊天室！'],
      keyword:''
		}
  },
  watch: {
    keyword (val) {
      setTimeout(()=>{
        FilmService.searchfilmsbyname(this.keyword).then((res) => {
          this.$emit('searchtime',res.data.data)
        })
        console.log(val)
      },1000)
    }
  },
	methods:{
    select(){
      this.$emit("selectfilms")
    },
    showit(){
      this.$emit("showit")
    },
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
<style scoped>
.searchbar{
    border-radius: 16px;
    background: rgb(0 0 0 / 15%);
    color: rgb(255 255 255 / 80%);
    border-radius: 5px;
    margin: 0 15px;
    background: rgb(241 241 241);
    height: 30px;
    line-height: 30px;
    position: relative;
    padding-left: 10px;
    -webkit-box-flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: rgb(187 187 187);
    font-size: 14px;
    width: 90%;
}
.searchbar-icon{
    display: inline-block;
    width: 15px;
    height: 14px;
    background: url(http://aladjs.cn/search.png) no-repeat center center;
    background-size: cover;
    line-height: 30px;
    margin-right: 10px;
}
.searchbar-input{
      -webkit-appearance: none;
    border: 0;
    background: 0 0;
    color: rgb(0 0 0);
    width: 100%;
    padding: 0;
    border-radius: 5px;
    margin: 0 10px 0 0;
    background: rgb(242 242 242);
    height: 30px;
    line-height: 30px;
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    display: block;
}
.input_box{
  -webkit-appearance: none;
    background: rgb(241 241 241);
    color: rgb(0 0 0);
    width: 100%;
    padding: 5px 0;
    position: absolute;
    top: 0;
    height: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box !important;
    outline: none;
    border: none;
}
.add-icon{
   display: inline-block;
    width: 15px;
    height: 14px;
    background: url(http://aladjs.cn/add.png) no-repeat center center;
    background-size: cover;
    line-height: 30px;
    margin-right: 10px;
}
.mcfunction{
  margin:0;
  padding:0
}
.mcfunction li{
  float: left;
  width: 20%;
  font-size: 13px;
  list-style: none;
}
.cata-icon{
    display: inline-block;
    width: 15px;
    height: 14px;
    background: url(http://aladjs.cn/%E5%88%86%E7%B1%BB.png) no-repeat center center;
    background-size: cover;
    line-height: 30px;
    margin-right: 10px;
}
.select-icon{
    display: inline-block;
    width: 15px;
    height: 14px;
    background: url(http://aladjs.cn/%E9%80%89%E6%8B%A9.png) no-repeat center center;
    background-size: cover;
    line-height: 30px;
    margin-right: 10px;
} 
</style>