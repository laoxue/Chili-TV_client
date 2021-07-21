<template class="home">
<!-- 最外层 -->
  <div id="container" style="margin:0px;padding:0;margin: 8px;">
      <!-- 登录层 -->
      <!-- 未登录 -->
    <!-- <login id="login" class="width-vertical" v-if="islogin"></login> -->
    <!-- 已登陆 -->
    <info class="profile-header lite-bot-line"></info>
  </div>
</template>
<script>
import * as loginService from './../../services/login/login.service.js'
import login from './../Tags/Login'
import info from './../Tags/userInfo'
import infomenu from './../Tags/infomenu'
	export default {
        name: 'home',
    // props: ['morelabels'],
        props: {
        },
        components: {
            login,
            info
        },
        computed: {
        },
        created () {
            this.getinfo()
        },
        data () {
            return {
                
            }
        },
        methods: {
            getinfo () {
                loginService.getinfo().then((res) => {
                    console.log(res)
                    if(res.data.code === 0){
                        
                    }else{
                        this.$router.push({
                            path:'/login'
                        })
                    }
                })
            }
        },
    }
</script>
<style scoped>

</style>