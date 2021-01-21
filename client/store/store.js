// 暂时储存首页资源的地方
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

// 欢迎页面的状态
const TopBanner ={
	state:{
		title:"大力看电影欢迎您！"
	}
}
// 片源页面状态
const Movies = {
	state:{
		swiperImg: [
			{
				banner:"http://aladjs.cn/banner1.jpg",
				article_id:"222222"
			},
			{
				banner:"http://aladjs.cn/banner2.jpg",
				article_id:"333333"
			}
		],
		news:[
				{"pic":"http://aladjs.cn/%E9%87%91%E5%88%9A%E5%B7%9D.jpg","name":"金刚川","num":"8.4","cunzai":false
				},
				{"pic":"http://aladjs.cn/%E6%88%91%E5%92%8C%E6%88%91%E7%9A%84%E5%81%87%E8%B1%A1.jpg","name":"我和我的家乡","num":"7.7","cunzai":true
				},
				{"pic":"http://aladjs.cn/%E5%91%BC%E5%90%B8.jpg","name":"呼吸","num":"6.4","cunzai":true
				},
				{"pic":"http://aladjs.cn/%E9%A3%9E%E5%A5%94%E5%8E%BB%E6%9C%88%E7%90%83.jpg","name":"飞奔到月球","num":"8.1","cunzai":true
				},
				{"pic":"http://aladjs.cn/%E5%A7%9C%E5%AD%90%E7%89%99.jpg","name":"姜子牙","num":"7.7","cunzai":true
				}
			],
		act:[
				{
					"bgi":"http://aladjs.cn/blue.png",
					"title":"随便看看"
				},
				{
					"bgi":"http://aladjs.cn/red.png",
					"title":"我的推荐"
				}

			],
		yingdan:[
			{
				yinTou:['http://aladjs.cn/p2309770674.jpg'],
				yinHeader:{
					"title":"超值贺岁档，哪个你的最爱！",
					"subtit":"影视盘点top1",
					"count":6,
					"date":"05-31"
				},
				yincontent:[
					{
						"pic":"http://aladjs.cn/%E9%9C%8D%E5%85%83%E7%94%B2.jpg",
						"name":"霍元甲",
						"num":5
					},
					{
						"pic":"http://aladjs.cn/%E4%B8%83%E5%8F%B7%E6%88%BF%E7%9A%84%E7%A4%BC%E7%89%A9.jpg",
						"name":"七号房的礼物",
						"num":5
					},
					{
						"pic":"http://aladjs.cn/%E6%B5%B7%E7%BB%B5%E5%AE%9D%E5%AE%9D.jpg",
						"name":"海绵宝宝",
						"num":5
					},
					{
						"pic":"http://aladjs.cn/%E5%9B%BD%E4%BA%A7%E5%87%8C%E5%87%8C%E6%BC%86.jpg",
						"name":"国产凌凌漆",
						"num":5
					},
					{
						"pic":"http://aladjs.cn/%E5%A4%BA%E5%86%A0.jpg",
						"name":"夺冠",
						"num":5
					},
					{
						"pic":"http://aladjs.cn/%E9%87%8E%E6%80%A7%E7%9A%84%E5%91%BC%E5%94%A4.jpg",
						"name":"野性的呼唤",
						"num":5
					}
				]
			}
		]
	}
}
// 社区相关状态
const Community = {
	state:{
		chatroom:[
			{
				title:"恐怖片聊天室",
				online:"255",
				bgisrc:"http://aladjs.cn/%E6%81%90%E6%80%96%E7%89%87.jpg",
				logosrc:"http://aladjs.cn/%E6%81%90%E6%80%96%E7%89%87.jpg"
			},
			{
				title:"喜剧片聊天室",
				online:"55",
				bgisrc:"http://aladjs.cn/%E9%9C%8D%E5%85%83%E7%94%B2.jpg",
				logosrc:"http://aladjs.cn/%E9%9C%8D%E5%85%83%E7%94%B2.jpg"
			},
			{
				title:"爱情片聊天室",
				online:"2455",
				bgisrc:"http://aladjs.cn/%E5%96%9C%E5%89%A7%E7%89%87.jpg",
				logosrc:"http://aladjs.cn/%E5%96%9C%E5%89%A7%E7%89%87.jpg"
			},
			{
				title:"记录片聊天室",
				online:"655",
				bgisrc:"http://aladjs.cn/%E6%B5%B7%E7%BB%B5%E5%AE%9D%E5%AE%9D.jpg",
				logosrc:"http://aladjs.cn/%E6%B5%B7%E7%BB%B5%E5%AE%9D%E5%AE%9D.jpg"
			}
		],
		days:[
			{
				cunzai:true,
				name:'我不是药神',
				imgpic:'http://aladjs.cn/%E9%9C%8D%E5%85%83%E7%94%B2.jpg',
				date:'7月15日',
				num:8,
				description:'可歌可泣的中国良心电影,徐峥的演技非常棒!'
			},
			{
				cunzai:false,
				name:'逐梦演艺圈',
				num:8,
				date:'7月16日',
				imgpic:'http://aladjs.cn/%E8%8D%AF%E7%A5%9E.jpg',
				description:'看了这部电影的我久久不能平静,这特么也能算的上一部电影,简直大型PPT!'
			}
		]
	}
}
// 分类页面相关状态
const FenLei = {
	state:{
		labels:[
				{"title":"惊悚片","subtit":"惊吓与惊讶","color":"rgb(35, 132, 232)"},
				{"title":"喜剧片","subtit":"搞笑喜剧","color":"rgb(122, 106, 219)"},
				{"title":"动画片","subtit":"童年记忆","color":"rgb(159, 120, 96)"},
				{"title":"悬疑片","subtit":"烧脑","color":"rgb(230, 70, 126)"},
				{"title":"科幻片","subtit":"视觉挑战","color":"rgb(42, 184, 204)"},
				{"title":"纪录片","subtit":"记录事实","color":"rgb(244, 143, 46)"},
				{"title":"日韩电影","subtit":"随便看看","color":"rgb(225, 100, 77)"},
				{"title":"国产片","subtit":"冲刺票房","color":"rgb(64, 207, 169)"},
				{"title":"欧美电影","subtit":"外语佳片","color":"rgb(66, 189, 86)"}
			]
	}
}
const store = new Vuex.Store({
	modules:{
		topbar:TopBanner,
		fl:FenLei,
		mv:Movies,
		cm:Community
	}
})

export default store;