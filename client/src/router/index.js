import Vue from 'vue'
import Router from 'vue-router'
import TopBanner from '@/components/TopBanner'
import Index from '@/components/Index'
import Library from '@/components/NavBar/Library'
import Community from '@/components/NavBar/Community'
import Home from '@/components/NavBar/Home'
import Movies from '@/components/TabTags/Movies'
import Katong from '../components/TabTags/Katong'
import DianShiJu from '@/components/TabTags/DianShiJu'
import FenLei from '@/components/Tags/FenLei'
import Show from '@/components/Tags/Show'
import Chats from '@/components/Tags/Chats'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'topbanner',
      component: TopBanner
    },
    {
      path:'/show',
      name:'show',
      component: Show,
    },
    {
            path:'/chats',
            name:'chats',
            component:Chats
    },
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
            {
              path:'/katong',
              name:'katong',
              component: Katong
            },
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
          path: '/home',
          name:'home',
          component: Home 
        }
      ]
    }
  ]
})
