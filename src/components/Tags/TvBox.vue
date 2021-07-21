<template>
<div class="tvbox">
	<div class="box_header">
		<span style="float: left;">追剧不断</span><span style="float: right;">查看更多</span>
	</div>
	<div class="content">
		<ul class="items">
			<li v-for="list in Lists">
				<a href="#">
					<div class="fengmian" :style="{backgroundImage:`url(${list.pic})`}">
						<div class="pingfen">{{list.num}}</div>
						<div class="youwu you" v-if="list.cunzai==true">有</div>
					</div>
					<span>{{list.name}}</span>
				</a>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
export default{
	name:'tvbox',
	data(){
		return{
			Lists:[
				{"pic":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2526580079.jpg","name":"名姝 第二集","num":"6.0","cunzai":true
				},
				{"pic":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2523017228.jpg","name":"流星花园","num":"5.5","cunzai":true
				},
				{"pic":"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525687151.jpg","name":"神圣游戏","num":"6.7","cunzai":true
				},
				{"pic":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2524119829.jpg","name":"利器","num":"6.0","cunzai":true
				},
				{"pic":"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517077652.jpg","name":"西部世界","num":"8.5","cunzai":true
				},
				{"pic":"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2522763238.jpg","name":"金秘书为何那样","num":"9.0","cunzai":true
				},
				{"pic":"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520109024.jpg","name":"向往的生活","num":"6.0","cunzai":true
				}
			]
		}
	}
}
</script>
<style lang="scss">
.tvbox{
	position: relative;
	width: 100%;
	height: 10rem;
	/*background: red;*/
	top:3.2rem;
	border-top: 1px solid rgba(215,215,215,0.6);
}
.box_header{
	position: relative;
	top: 0px;
	/*background: black;*/
	height: 2rem;
	width: 100%；
}
.box_header span{
	/*background: red;*/
	position: relative;
	display: inline-block;
	width:20%;
	height: 2rem;
	line-height: 2rem;
}
.content{
	width: 100%;
	/*background: black;*/
	height: 10.5rem;
	overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}
.items{
	min-width: 200%;
	height: 10.5rem;
	/*background: red;*/

}
.items li{
	width: 100px;
	height: 8rem;
	/*background: black;*/
	margin-top: 1rem;
	margin-left: 1rem;
	float: left;
}
.items span{
	text-align: center;
	position: relative;
}
.fengmian{
	width: 100%;
	height: 100%;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	z-index: 99999;
}
</style>