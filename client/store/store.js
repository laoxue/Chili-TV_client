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
			"http://pq3e1h2sc.bkt.clouddn.com/banner01.jpg",
			"http://pq3e1h2sc.bkt.clouddn.com/banner02.jpg",
			"http://pq3e1h2sc.bkt.clouddn.com/banner03.jpg",
			"http://pq3e1h2sc.bkt.clouddn.com/banner04.jpg"
		],
		news:[
				{"pic":"http://pq3e1h2sc.bkt.clouddn.com/%E7%88%B1%E4%BD%A0%E8%A5%BF%E8%92%99.jpg","name":"爱你 西蒙","num":"6.2","cunzai":true
				},
				{"pic":"http://pq3e1h2sc.bkt.clouddn.com/%E5%90%8E%E6%9D%A5%E7%9A%84%E6%88%91%E4%BB%AC.jpg","name":"后来的我们","num":"7.8","cunzai":true
				},
				{"pic":"http://pq3e1h2sc.bkt.clouddn.com/%E7%88%86%E8%A3%82%E6%97%A0%E5%A3%B0.jpg","name":"爆裂无声","num":"9.8","cunzai":true
				},
				{"pic":"http://pq3e1h2sc.bkt.clouddn.com/%E9%95%87%E9%AD%82.jpg","name":"镇魂","num":"7.1","cunzai":true
				},
				{"pic":"http://pq3e1h2sc.bkt.clouddn.com/%E9%95%87%E9%AD%82.jpg","name":"镇魂","num":"7.1","cunzai":true
				}
			],
		act:[
				{
					"bgi":"http://imge.gmw.cn/site2/20160226/f04da226e54a183a3bc533.jpeg",
					"title":"每日电影推荐"
				},
				{
					"bgi":"http://ww1.sinaimg.cn/large/006hrwDrgy1fs1mezjizbj30wv0cpkdi.jpg",
					"title":"本月推荐指南"
				}

			],
		yingdan:[
			{
				yinTou:['http://img5.imgtn.bdimg.com/it/u=1631479385,1217128212&fm=27&gp=0.jpg'],
				yinHeader:{
					"title":"今年最吓人的恐怖片都在这",
					"subtit":"哪部是你今年最期待的恐怖片",
					"count":6,
					"date":"05-31"
				},
				yincontent:[
					{
						"pic":"http://pq3e1h2sc.bkt.clouddn.com/life.jpg",
						"name":"Life",
						"num":5
					},
					{
						"pic":"http://pq3e1h2sc.bkt.clouddn.com/%E5%90%91%E5%BE%80%E7%9A%84%E7%94%9F%E6%B4%BB.jpg",
						"name":"向往的生活",
						"num":5
					},
					{
						"pic":"http://pq3e1h2sc.bkt.clouddn.com/%E8%A5%BF%E9%83%A8%E4%B8%96%E7%95%8C.jpg",
						"name":"西部世界",
						"num":5
					},
					{
						"pic":"http://pq3e1h2sc.bkt.clouddn.com/%E5%BB%B6%E7%A6%A7%E6%94%BB%E7%95%A5.jpg",
						"name":"延禧攻略",
						"num":5
					},
					{
						"pic":"http://pq3e1h2sc.bkt.clouddn.com/%E8%BF%BD%E7%9C%A0%E8%AE%B0.jpg",
						"name":"追眠记",
						"num":5
					},
					{
						"pic":"http://pq3e1h2sc.bkt.clouddn.com/%E5%96%84%E8%89%AF%E5%8C%BB%E7%94%9F.jpg",
						"name":"善良医生",
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
				bgisrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638316756,1984181612&fm=27&gp=0.jpg",
				logosrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855090371,2902200220&fm=27&gp=0.jpg"
			},
			{
				title:"喜剧片聊天室",
				online:"55",
				bgisrc:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2021022694,1734959091&fm=27&gp=0.jpg",
				logosrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=378807740,2209255460&fm=27&gp=0.jpg"
			},
			{
				title:"爱情片聊天室",
				online:"2455",
				bgisrc:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3211830969,2208431888&fm=27&gp=0.jpg",
				logosrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2257356824,1968328449&fm=27&gp=0.jpg"
			},
			{
				title:"记录片聊天室",
				online:"655",
				bgisrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1125387980,2284216863&fm=27&gp=0.jpg",
				logosrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=355991045,2873468225&fm=27&gp=0.jpg"
			}
		],
		days:[
			{
				cunzai:true,
				name:'我不是药神',
				imgpic:'http://pq3e1h2sc.bkt.clouddn.com/%E8%8D%AF%E7%A5%9E.jpg',
				date:'7月15日',
				num:8,
				description:'可歌可泣的中国良心电影,徐峥的演技非常棒!'
			},
			{
				cunzai:false,
				name:'逐梦演艺圈',
				num:8,
				date:'7月16日',
				imgpic:'http://pq3e1h2sc.bkt.clouddn.com/%E7%AD%91%E6%A2%A6.jpg',
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