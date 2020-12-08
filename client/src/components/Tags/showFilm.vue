<template>
<div class="moviebox">
	<div class="box_header">

	</div>
	<div class="content" style="margin-left:0.8rem;overflow-y: scroll;
    height: 80vh;">
		<div class="item_content" v-for="(list, index) in news" :key="index" @click="Toshow(list)">
			<span style="font-size:8px;text-align:center;position:absolute;z-index:99;font-weight:800;color:white;width:100%;left:0px;font-family: emoji;">{{list.filmname}}</span>
			<span v-if="showall" :data-id="list._id" class="showicon" style="position:absolute;z-index:125;bottom:25px;right:5px" @click="selected"></span>
			  <div :style="{backgroundImage:`url(${list.coverurl})`}"><img src="./../../assets/icon/label.png"/><span>{{list.dbscore}}</span></div>
		</div>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return{
			list:'',
			showall: false,
			selectedDatas:[]
		}
	},
	name:'movieBox',
	props:["news"],
	methods:{
		Toshow:function(list){
			this.$router.push({path:`/show/${list._id}`});
		},
		getIndex (arr, row) {
      for (let i in arr) {
        if (arr[i] === row) {
          return i
        }
      }
      return -1
    },
		selected (e) {
			if (this.getIndex(this.selectedDatas, e.currentTarget.getAttribute('data-id')) !== -1) {
			 	e.currentTarget.style.backgroundImage = 'url(http://aladjs.cn/select-icon.png)'
				let index = this.getIndex(this.selectedDatas, e.currentTarget.getAttribute('data-id'))
				this.selectedDatas.splice(index, 1)
				console.log(this.selectedDatas)
			} else {
				e.currentTarget.style.backgroundImage = 'url(http://aladjs.cn/selected-icon.png)'
				this.selectedDatas.push(e.currentTarget.getAttribute('data-id'))
				console.log(this.selectedDatas)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
div,h1,header,footer,body,ul,li,section{
	margin:0px;
	padding:0px;
}
li{
	list-style: none;
}
a{
	background: black;
	text-decoration: none;
	font-size: 0.96rem;
	color: black
}
.item_content{
	width: 7rem;
	height: 9.5rem;
	/*background: black;*/
	float: left;
	margin-left: 0.2rem;
	position:relative
}
.item_content div{
	width: 90%;
	margin-left: 5%;
	height: 90%;
	/*background: yellow;*/
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: relative;
}
.item_content div img{
	width: 1.8rem;
	height: 1.8rem;
	position: absolute;
	right: 0
}
.item_content div span{
	width: 1.8rem;
	height: 1.8rem;
	position: absolute;
	right: 0;
	top: 0.5rem;
	font-size: 13px;
	font-weight: 700
}
.showicon{
	display: inline-block;
    width: 18px;
    height: 18px;
    background: url(http://aladjs.cn/select-icon.png) no-repeat center center;
    background-size: cover;
    line-height: 30px;
		margin-right: 10px;
		z-index: 5;
}
// $contentwidth
// .moviebox{
// 	position: relative;
// 	width: 100%;
// 	height: 13rem;
// 	/*background: red;*/
// /*	top:-1.5rem;*/
// 	border-top: 1px solid rgba(215,215,215,0.6);
// }
// .box_header{
// 	position: relative;
// 	top: 0px;
// 	/*background: black;*/
// 	height: 1rem;
// 	width: 100%；
// }
// .box_header span{
// 	/*background: red;*/
// 	position: relative;
// 	display: inline-block;
// 	width:20%;
// 	height: 2rem;
// 	line-height: 2rem;
// }
// .content{
// 	width: 100%;
// 	/*background: black;*/
// 	height: 10.5rem;
// 	overflow-x: hidden;
//   overflow-y: hidden;
//   white-space: wrap;
// }
// .content .items{
// 	width: calc(8rem*5 + 1rem);
// 	height: 100%;
// 	/*background: red;*/
// }
// .content .items li{
// 	width: 7.5rem;
// 	height: 100%;
// 	/*background: black;*/
// 	float: left;
// 	margin-left: 0.2rem;
// }
// .content .items li div{
// 	width: 90%;
// 	margin-left: 5%;
// 	height: 90%;
// 	/*background: yellow;*/
// 	background-size: 100% 100%;
// 	background-repeat: no-repeat;
// 	position: relative;
// }
// .content .items li div img{
// 	width: 1.8rem;
// 	height: 1.8rem;
// 	position: absolute;
// 	right: 0
// }
// .content .items li div span{
// 	width: 1.8rem;
// 	height: 1.8rem;
// 	position: absolute;
// 	right: 0;
// 	top: 0.5rem;
// 	font-weight: 700
// }
// .content .items li span{
// 	position: relative;
// 	font-size: 0.7rem;
// 	/*background: black;*/
// 	display: block;
// }
// .more{
// 	float: right;
// 	font-size: 0.7rem
// }
</style>