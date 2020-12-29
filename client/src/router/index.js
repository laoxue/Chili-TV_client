import Vue from 'vue' // 引入vue
import Router from 'vue-router' // 引入vue-router
import ADPage from '@/components/ADpage' // 引入广告页面
import Login from '@/components/Tags/Login' // 引入登录页
import About from '@/components/Tags/aboutMe' // 引入关于我的信息
import Article from '@/components/Tags/Article' // 引入文章页
// import Katong from '@/components/TabTags/Katong'
import tabBar from './tabbar.route' // 引入子路由 下部分路由导航
import Show from '@/components/Tags/Show'
import Chats from '@/components/Tags/Chats'
import Design from '@/components/Tags/Design'

import { checkToken } from '@/services/login/login.service'
Vue.use(Router)

const vueRouter =  new Router({
  routes: [
    // 欢迎页面
    {
      path: '/',
      name: 'topbanner',
      component: ADPage
    },
    {
      path: '/design',
      name: 'design',
      component: Design
    },
    {
      path: '/aboutinfo',
      name: 'aboutinfo',
      component: About
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if(window.localStorage.token){
          vueRouter.push({name:'home'})
        }else{
          next()
        }
      }
    },
    // 影片展示页
    {
      path:'/show/:id',
      name:'show',
      component: Show,
    },
    // 聊天页
    {
      path:'/chats',
      name:'chats',
      component:Chats
    },
    ...tabBar
  ]
})
// vueRouter.beforeEach((to, from, next) => {
//   // checkToken().then((res) => {
   
//   // })
//   next()
// })
export default vueRouter;
