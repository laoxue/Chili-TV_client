<template>
	<div class="navbar">
		<ul class="h_t">
			<li :key="index" v-bind:class='{active:index === selectIndex}' v-for="(item,index) in tabsParam" v-on:click="addClass(index)">{{item}}</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:'',
	data () {
		return {
		tabsParam:['她/他的资源','她/他的信息','她/他的生活'], // 头部tab
		isActive:false, // 当前选择
		selectIndex:0 // 下标
		}
	},
	components:{

    },
    methods:{
		addClass:function(index){
			this.selectIndex = index;
			switch(index){
				case 0:
					this.$router.push({name:'movies'});
					break;
				case 1:
					this.$router.push({name:'starinfo'})
					break;
				case 2:
					this.$router.push({name:'dianshiju'})
					break;
			}
        }
	}
}	
</script>
<style lang="scss" scope>
.navbar{
	width:100%;
	height: 1.5rem;
	position: relative;
	top: -1.1rem;
}
.h_t{
	width: 100%;
	height: 1.5rem;
}
.h_t li{
	width: 33.3%;
	height: 1.5rem;
	line-height: 1.5rem;
	background: white;
	text-align: center;
	float: left;
	font-size: 0.7rem;
}
.h_t li::before{
	content: '';
	width:20%;
	height: 1.7rem;
	background: white;
	display: block;
	position: relative;
	float: left
}
.h_t li::after{
	content: '';
	width:20%;
	height: 1.7rem;
	background: white;
	display: block;
	position: relative;
	float: right;
}
.active{
	border-bottom: 2px solid red;
	color: red;
}
.box{
	width:100%;
	height: 48rem;
	position: relative;
}
</style>