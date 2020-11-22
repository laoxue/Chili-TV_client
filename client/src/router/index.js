import Vue from 'vue'
import Router from 'vue-router'
import TopBanner from '@/components/TopBanner'
import Index from '@/components/Index'
import Library from '@/components/NavBar/Library'
import Community from '@/components/NavBar/Community'
import FilmList from '@/components/NavBar/Filmlist'
import Home from '@/components/NavBar/Home'
import Movies from '@/components/TabTags/Movies'
// import Katong from '@/components/TabTags/Katong'
import DianShiJu from '@/components/TabTags/DianShiJu'
import FenLei from '@/components/Tags/FenLei'
import Show from '@/components/Tags/Show'
import Chats from '@/components/Tags/Chats'
import Design from '@/components/Tags/Design'
import Login from '@/components/Tags/Login' //登录页
import About from '@/components/Tags/aboutMe' //关于我
import Article from '@/components/Tags/Article' //文章页
import { checkToken } from '@/services/login/login.service'
Vue.use(Router)

const vueRouter =  new Router({
  routes: [
    // 欢迎页面
    {
      path: '/',
      name: 'topbanner',
      component: TopBanner
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
    // 首页
    {
      path: '/index',
      redirect: '/library',
      name: 'index',
      component: Index,
      children: [
        { 
          path: '/library',
          name:'library',
          redirect: '/movies',
          component: Library,
          children:[
            {
              path:'/movies',
              name:'movies',
              component: Movies
            },
            // {
            //   path:'/katong',
            //   name:'katong',
            //   component: Katong
            // },
            {
              path:'/dianshiju',
              name:'dianshiju',
              component: DianShiJu
            }
          ]
        },
        {
            path:'/fenlei',
            name:'fenlei',
            component:FenLei
        },
        { 
          path: '/community',
          name:'community', 
          component: Community 
        },
        { 
          path: '/filmlist',
          name:'filmlist', 
          component: FilmList 
        },
        { 
          path: '/home',
          name:'home',
          component: Home,
          beforeEnter: (to, from, next) => {
            if(window.localStorage.token){
              next()
            }else{
              const answer = window.confirm('还未登录请去登录哦!')
              vueRouter.push({name:'login'})
            }
          }
        }
      ]
    }
  ]
})
vueRouter.beforeEach((to, from, next) => {
  // checkToken().then((res) => {
   
  // })
  next()
})
export default vueRouter;
