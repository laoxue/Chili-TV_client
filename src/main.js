// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../store/store'
import VueTouch from 'vue-touch'
import global_ from './components/Global.vue'  //引入全局组件

window.global  = global_;  //修改原型
Vue.config.productionTip = false

Vue.use(VueTouch, {name: 'v-touch'})

// import VueSocketIO from 'vue-socket.io'
 
// Vue.use(new VueSocketIO({
//     debug: true,
//     // 服务器端地址
//     connection: `${window.global.SOCKET_URL}`,
//     vuex: {
//     }
// }))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
