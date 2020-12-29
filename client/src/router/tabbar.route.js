// tabBar 下方四个路由
import Index from '@/components/Index' 
import Library from '@/components/NavBar/Library'
import Community from '@/components/NavBar/Community'
import FilmList from '@/components/NavBar/Filmlist'
import Home from '@/components/NavBar/Home'
import Movies from '@/components/TabTags/Movies'
import DianShiJu from '@/components/TabTags/DianShiJu'
import FenLei from '@/components/Tags/FenLei'
import Katong from '@/components/TabTags/KaTong'
// 首页
export default [{
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
            path:'/starinfo',
            name:'starinfo',
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
  }]