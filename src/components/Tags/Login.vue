<template class="login_no">
      <!-- 未登录 -->
    <div id="login" class="width-vertical">
        <!-- 内层 -->
        <div class="login-content nc-outer-box">
            <div class="login-password">
                <!-- logo部分 -->
                <div class="login-blocks block00">
                    <div class="logo_login">
                        <div class="tb-logo"></div>
                    </div>
                </div>
                <!-- 表单部分 -->
                <div id="login-form" class="login-form">
                    <div class="fm-field">
                        <label for="" class="fm-label">
                            <span><label>登录名</label></span>
                        </label>
                        <div class="input-plain-wrap input-wrap-loginid "><input name="fm-login-id" type="text" class="fm-text" id="fm-login-id" style="outline: none;" tabindex="0" aria-label="手机号/邮箱/会员名" placeholder="手机号/邮箱/会员名" autocapitalize="off" v-model="username"></div>
                        <input type="text" tabindex="1" style="width: 0px; height: 0px; overflow: hidden; display: inline-block; border: 0px; position: absolute; left: -999999px;">
                    </div>
                    <div class="fm-field">
                        <label for="" class="fm-label">
                            <span><label>密码</label></span>
                        </label>
                        <div class="input-plain-wrap input-wrap-loginid "><input name="fm-login-id" type="password" class="fm-text" id="fm-login-id" style="outline: none;" tabindex="1" aria-label="请输入登录密码" placeholder="请输入登录密码" autocapitalize="off" v-model="password"></div>
                        <input type="text" tabindex="1" style="width: 0px; height: 0px; overflow: hidden; display: inline-block; border: 0px; position: absolute; left: -999999px;">
                        <!-- <div class="password-look-btn"><i class="iconfont  icon-eye-close"></i></div> -->
                    </div>
                    <!-- 登录方式 -->
                    <div class="login-blocks login-links" style="display: flex;padding: 0 30px;justify-content: space-between;"><span target="_self" class="sms-login-link">短信验证码登录</span><span class="register-link" @click="design">免费注册</span></div>
                    <div class="fm-btn"><button type="button" tabindex="3" class="fm-button fm-submit password-login" style="width:85%;margin-left:-0.5%" @click="login" id="TencentCaptcha"
     data-appid="2008967045"
     data-cbfn="callback">登录</button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
window.callback = function(res){
 console.log(res)
 // res（用户主动关闭验证码）= {ret: 2, ticket: null}
 // res（验证成功） = {ret: 0, ticket: "String", randstr: "String"}
 if(res.ret === 0){
     alert(res.ticket)   // 票据
 }
}
import * as loginService from './../../services/login/login.service.js'
	export default {
        name: 'home',
    // props: ['morelabels'],
        props: {
        },
        components: {
        },
        data () {
            return {
                username: '',
                password: ''
            }
        },
        created() {
        },
        methods: {
            design () {
                this.$router.push({
                    path:'/design',
                    query:{
                        type:"new"
                    }
                })
            },
            login () {
        /* eslint-disable no-new */
                const param = {
                    username: this.username,
                    password: this.password
                }
                loginService.login(param).then((res) => {
                    console.log(res)
                    if(res.data.code === 0) {
                        localStorage.token = res.data.data.token
                        localStorage.username = res.data.data.username
                        localStorage.sex = res.data.data.sex
                        localStorage.remark = res.data.data.remark
                        localStorage.headerurl = res.data.data.headUrl
                        this.$router.push({
                            name:'home'
                        })
                    } else {
                        alert(res.data.msg)
                    }
                })
                this.islogin = true
            }
        },
    }
</script>
<style scoped>
/* 未登录 */
	#login{
        /* padding: 0 20px; */
    }
    .width-vertical {
    width: 100%;
    margin-bottom: 20px;
    }
    .width-vertical .login-content {
    width: 100%;
    margin: 0 auto;
    }
    .nc-outer-box {
    padding-top: 2px;
    }
    .login-blocks {
    margin: 8px 0;
    text-align: right;
    zoom: 1;
}
#login .tb-logo {
    background: url(http://aladjs.cn/dali_saymore.png) no-repeat;
    background-size: contain;
    width: 80px;
    height: 80px;
    background-color: rgb(255 80 0);
    border-radius: 50%;
    margin: 40px auto 0;
}
.login-label-text .fm-field {
    margin-bottom: 10px;
}
.fm-field {
    position: relative;
    margin-bottom: 20px;
    font-size: 14px;
}
#login .fm-field .fm-label {
    display: none;
}
.login-label-text .fm-field .fm-label {
    padding: 5px 0;
    display: block;
    color: rgb(34 34 34);
    overflow: hidden;
}
#login .input-plain-wrap {
    border-bottom: 1px solid rgb(255 80 0);
    margin: 40px 30px 0;
}
#login .fm-field .fm-text {
    border: 0;
    padding-left: 5px;
    font-size: 16px;
    color: rgb(51 51 51);
    height: 30px;
}
.width-auto .fm-btn, .width-auto .fm-text, .width-vertical .fm-btn, .width-vertical .fm-text {
    width: 100%;
}
.password-look-btn {
    bottom: 6px;
}
.input-del-btn, .password-look-btn {
    position: absolute;
    right: 10px;
    bottom: 8px;
}
.icon-eye-close:before {
    content: "\E6B8";
}
#login .login-links {
    margin-top: 20px;
}
.login-blocks {
    margin: 8px 0;
    text-align: center;
    zoom: 1;
}
#login .login-links a {
    color: rgb(85 85 85);
    font-size: 14px;
}
.login-blocks a {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
}
a {
    color: rgb(0 136 204);
    background: white;
    text-decoration: none;
}
.fm-btn, .width-vertical .fm-text {
    width: 100%;
}
.login-label-text .fm-btn {
    margin-top: 20px;
}
#login .fm-button {
    background: -webkit-linear-gradient(left,rgb(255 144 0),rgb(255 80 0)) no-repeat;
    color: rgb(255 255 255);
    box-shadow: 0 2px 4px #f7c7b1;
    height: 45px;
    border-radius: 35px;
    margin-top: 15px;
    font-size: 16px;
}
.fm-button {
    background-color: rgb(255 144 0);
    background-image: -webkit-gradient(linear,left top,right top,from(rgb(255 144 0)),to(rgb(255 144 0)));
    background-image: linear-gradient(90deg,rgb(255 144 0),rgb(255 144 0));
    border: 1px solid rgb(255 144 0);
    border-radius: 3px;
    font-size: 20px;
    height: 42px;
    line-height: 42px;
    outline: none;
    color: rgb(255 255 255);
    width: 100%;
    cursor: pointer;
}
.sms-login-link{
    color: gray;
    font-size:0.5rem;
}
.register-link{
    color: gray;
    font-size:0.7rem;
    color:rgb(255 80 0)
}
</style>