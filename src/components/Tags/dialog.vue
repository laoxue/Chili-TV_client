<template>
<div v-show="showdialog">
  <div class="dialog" @click="close">
  </div>
  <!-- 遮挡框 -->
   <div class="searchdouban" v-show="!showmodel">
     <div style="width:95%;background:white;margin-left:2.5%;height:3rem;border-radius:5px"><input type="text" v-model="searhdata" placeholder="请输入您要录入的名字快捷录入" style="width:80%;height:40%;border:1px dashed red"/><span class="searchbtns" @click="searchdouban" style="border-radius: 0 3px 7px 0;">检索</span></div>
   </div>
   <!-- 录入框 -->
   <!-- <div class="handluru" v-show="!showmodel">
     <p>名称:<input type="text" placeholder="请输入资源名字"/></p>
     <p>封面颜色:</p>
     <p><span v-for="(item, index) in colorbox" :key="index" :style="`background:${item};height:25px;width:25px;display:inline-block;margin-right:3px`" @click="choosecolor"></span></p>
     <p>简介:<input type="text" placeholder="请输入简介"/></p>
     <p>资源码:<textarea type="text" placeholder="请输入资源码"> </textarea></p>
     <p><button>确定</button></p>
   </div> -->
   <!-- 检索框 -->
   <div class="jiansuomodel" v-show="!showmodel&&showneirong">
        <div :style="`height: 10rem;
    width: 150rem;background-size:100% 100%;background-image: url(${jiansuodata.imageurl});background-repeat:no-repeat`">
    <!-- <span>{{jiansuodata.title}}</span> -->
        </div>
        <div style="font-size:0.8rem;overflow: hidden;
    height: 100%;">
    <p style="height:10%;font-size: 1.2rem;
    padding: 0px;
    margin: 0px;">{{jiansuodata.title}}</p>
    <p>{{jiansuodata.updatedate}}</p>
    <p style="overflow:hidden;height:53%;padding: 0 0.2rem;">{{jiansuodata.desc}}</p>
          
        </div>
        <!-- <div style="width:38rem">
          <button>添加</button>
        </div> -->
   </div>
   <div class="codelist" v-show="!showmodel&&showneirong">
       <textarea maxlength="1000" v-model="sourcecode" placeholder="复制粘贴码" style="border:1px dashed red" cols="50"></textarea>
       <span class="savebtn" @click="savedbfilm">保存</span>
   </div>
	 <div class="model" v-show="showmodel">
      <ul>
        <li @click="handinput"><span class="lr-icon"></span><span>手动录入</span></li>
        <li><span class="pc-icon"></span><span>从电脑导入</span><input type="file" class="file_type" @change="readexcel" ref="excel"></li>
        <li><span class="h5-icon"></span><span>从本地导入</span></li>
      </ul>
   </div>
</div>
</template>
<script>
import * as FilmService from './../../services/films/film.service'
export default{
	data(){
		return{
      colorbox:['red','gray','blue'],
      list:'',
      showdialog: false,
      showmodel: true,
      searhdata:'',
      jiansuodata:{},
      showneirong:false,
      sourcecode:''
		}
	},
	name:'movieBox',
  props:["news"],
	methods:{
    // 选择颜色
    choosecolor (e) {   
      this.clearborder(e.currentTarget.parentElement.children)
      e.currentTarget.style.border = '2px solid red'
    },
    clearborder (childdom) {
      for(let i = 0 ;i<childdom.length;i++) {
        childdom[i].style.border = '0px solid red'
      }
    },
    savedbfilm(){
      let mongodata = {
        "filmname": this.jiansuodata.title,
        "id":"",
        "sourcecode": this.sourcecode,
        "dbscore": this.jiansuodata.dbscore,
        "coverurl": this.jiansuodata.imageurl,
        "typelabel":this.jiansuodata.updatedate,
        "desc":this.jiansuodata.desc
       }
       FilmService.savedoubanfilm(mongodata).then((res) => {
         this.showdialog = false
         this.$emit("reflash")
       })
    },
    searchdouban () {
      this.showneirong = true
      let params = {
        filmname:this.searhdata
      }
      FilmService.getdoubanfilm(params.filmname).then((res) => {
        this.jiansuodata = res.data.data
      })
    },
    handinput(){
      this.showmodel = false  // 豆瓣电影

    },
    leave(){
      // document.body.style.overflow = 'hidden'
      // document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
		close(){
      this.showdialog = false
    },
    show() {
      this.showdialog = true
      thie.$emit('showit')
    },
    readexcel(){
    let reads= new FileReader();
    let f = this.$refs.excel.files[0];
    console.log(f)
    reads.readAsDataURL(f);
    let that = this
    reads.onload=function (e) {
      that.headerurl = this.result
    };
    let formData = new FormData();
    formData.append('file',f)
    // 调用上传图片接口
    console.log(f)
    FilmService.uploadexcel(formData).then((res) => {
      this.showdialog = false
      this.$emit("reflash")
    })
    }
	}
}
</script>
<style scoped>
.savebtn{
  z-index: 99999;
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: rgb(255 0 0);
  color: rgb(255 255 255);
  font-size: 12px;
  padding: 5px;
}
textarea::placeholder{
  color:red;
  font-size: 20px;
  text-align: center;
  line-height: 10rem;
  opacity: .4;
}
.codelist{
  opacity: .9;
  padding: 0.5rem;
  display: flex;
  width:90%;
  height:10rem;
  background: white;
  position: fixed;
  left: 10px;
  top:42vh;
  z-index: 100;
  border-radius: 5px; 
}
.jiansuomodel{
  padding: 0.5rem;
  display: flex;
  width:90%;
  height:10rem;
  background: white;
  position: fixed;
  left: 10px;
  top:15vh;
  z-index: 100;
  border-radius: 5px;
}
.searchbtns{
    background: rgb(255 0 0);
    color: rgb(255 255 255);
    padding: 0.2rem;
    line-height: 3rem;
}
.searchdouban{
  width:93%;
  min-height: 5rem;
  position: fixed;
  /* background: white; */
  z-index: 100;
  border-radius: 8px;
  left: 10px;
  top:5vh
}
.dialog{
  position: fixed;
  width:100vw;
  height:100vh;
  background: black;
  top: 0px;
  left: 0px;
  opacity: .5;
  z-index: 99;
}
.model{
  width:93%;
  min-height: 5rem;
  position: fixed;
  background: white;
  z-index: 100;
  border-radius: 8px;
  left: 10px;
  top: 8vh;
}
.model::after{
  content: '';
  display: block;
  height: 0px;
  width: 0px;
  border: 10px solid transparent;
  border-bottom-color: white;
  /* background:red; */
  position: absolute;
  top: -20px;
  left: calc(100% - 30px);
}
.model ul{
  margin: 0;
  padding: 0;
}
.model ul li {
  list-style: none;
  height: 3rem;
  line-height: 3rem;
  width:90%;
  margin-left:5%;
  text-align: left;
  position: relative;
  border-bottom: 1px solid rgb(241 241 241);
}
.lr-icon{
  display: inline-block;
  width: 15px;
  height: 14px;
  background: url(http://aladjs.cn/%E9%93%85%E7%AC%94%20%281%29.png) no-repeat center center;
  background-size: cover;
  line-height: 30px;
  margin-right: 10px;
}
.pc-icon{
  display: inline-block;
  width: 15px;
  height: 14px;
  background: url(http://aladjs.cn/%E7%94%B5%E8%84%91.png) no-repeat center center;
  background-size: cover;
  line-height: 30px;
  margin-right: 10px;
}
.h5-icon{
  display: inline-block;
  width: 15px;
  height: 14px;
  background: url(http://aladjs.cn/%E6%89%8B%E6%9C%BA.png) no-repeat center center;
  background-size: cover;
  line-height: 30px;
  margin-right: 10px;
}
.file_type{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: inline-block;
  opacity: 0;
}
.handluru{
  width:90%;
  min-height:5rem;
  background: white;
  position: fixed;
  top:2rem;
  z-index: 9999;
  left:5%
}
</style>