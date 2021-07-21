<template class="login_yes">
      <div>
          <!-- 头部定制 -->
        <!-- <div class="prf-topbar"></div> -->
        <!-- 头像区 -->
        <i class="systemmenu" @click="loginout"></i>
        <div class="prf-detail m-avatar-box m-box">
            <!-- 头像 -->
            <div class="m-img-box">
                <input type="file" accept="image/*" @change="upload" ref="headUrl" style="position: absolute;top: 25px;opacity: 0;"/>
                <img style="width: 4rem;height: 4rem;margin-right: .9375rem;border-radius:50%" :src="(headerurl==='' || headerurl === 'undefiend')?'http://aladjs.cn/300.jpg':headerurl">
            </div>
            <!-- 侧边部分 -->
            <div class="m-box-col m-box-dir m-box-center"><div class="m-text-box"><h3 class="m-box"><span class="m-text-cut" style="color:#f1f1f1">{{username}}</span><i class="m-box-center-a lite-iconf lite-iconf-male"></i></h3><h4 class="m-text-cut-2" style="text-align:left;color:#f1f1f1">简介: {{remark}}</h4></div></div>
        </div>
        <!-- 功能区 -->
        <div class="prf-handle m-box">
            <!-- 左边部分 -->
            <div class="m-box-center-a"><span data-v-97fb35ae="" title="4" class="prf-num"><i data-v-97fb35ae="" style="color:#f1f1f1">4<em data-v-97fb35ae="" class="m-bubble m-bubble-red newFans" style="display: none;"></em></i><b data-v-97fb35ae="" class="text-center" style="color:#f1f1f1">消息</b></span><span data-v-97fb35ae="" title="381" class="prf-num"><i data-v-97fb35ae="" style="color:#f1f1f1">381<em data-v-97fb35ae="" class="m-bubble m-bubble-red newFans" style="display: none;"></em></i><b data-v-97fb35ae="" class="text-center" style="color:#f1f1f1">关注</b></span><span data-v-97fb35ae="" title="326" class="prf-num"><i data-v-97fb35ae="" style="color:#f1f1f1">326<em data-v-97fb35ae="" class="m-bubble m-bubble-red newFans" style="display: none;">0</em></i><b data-v-97fb35ae="" class="text-center" style="color:#f1f1f1">粉丝</b></span></div>
            <!-- 右边编辑部分 -->
            <div class="bar-btn m-box-col"><a class="m-btn m-btn-block m-btn-lite-white" @click="editinfo">编辑个人资料</a></div>
        </div>
      </div>
</template>
<script>
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
                username: window.localStorage.username,
                remark: window.localStorage.remark,
                sex: window.localStorage.sex,
                headerurl: window.localStorage.headerurl
            }
        },
        created() {
            this.initinfo()
        },
        methods: {
            loginout () {
                // let that = this
                this.$router.push({
                    name:'aboutinfo'
                })
            },
            upload () {
                let reads= new FileReader();
                let f = this.$refs.headUrl.files[0];
                console.log(f)
                reads.readAsDataURL(f);
                let that = this
                reads.onload=function (e) {
                    that.headerurl = this.result
                };
                let formData = new FormData();
                formData.append('pic',f)
                // alert(formData)
                // 调用上传图片接口
                loginService.uploadimage(formData).then((res) => {
                    window.localStorage.headerurl = res.data.data.headUrl
                })
            },
            initinfo(){
                let params = {
                id: window.localStorage.ljid ? window.localStorage.ljid : ''
                }
                loginService.getinfo(params).then((res) => {
                    console.log(res)
                    this.username = res.data.data[0].username,
                    this.sex = res.data.data[0].username,
                    this.remark = res.data.data[0].remark
                })
            },
            editinfo(){
                this.$router.push({
                    path:'/design',
                    query:{
                        type:"edit"
                    }
                })
            }
        },
    }
</script>
<style scoped>
/* 已登录 */
.iosx2 .lite-bot-line {
    -o-border-image: none;
    border-image: none;
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: .5px;
    border-left-width: 0;
}
.profile-header {
    position: relative;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    background: rgb(255 255 255);
}
.lite-bot-line {
    background-color: rgb(216 30 6);
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 1px;
    border-left-width: 0;
    border-color: rgb(230 230 230);
    border-style: solid;
}
.profile-header .prf-topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2.75rem;
    line-height: 2.75rem;
    background: rgb(255 255 255);
    z-index: 995;
}
.profile-header .prf-detail {
    padding: 1.25rem .9375rem 1.25rem;
}
.m-box {
    display: -ms-flexbox;
    display: flex;
}
.profile-header .prf-detail .m-img-box {
    width: 4rem;
    height: 4rem;
    margin-right: .9375rem;
}
.m-avatar-box .m-img-box {
    border-radius: 50%;
    position: relative;
}
.m-img-box {
    display: inline-block;
    width: 100%;
}
.m-box-dir {
    -ms-flex-direction: column;
    flex-direction: column;
}
.m-box-center {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
}
.m-box-col {
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    display: block;
    min-width: 0;
}
.m-container-max {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}
.profile-header .prf-detail .m-text-box h3 {
    /* font-size: 1.3125rem; */
    color: rgb(51 51 51);
}
.m-text-box h3 {
    font-size: 1rem;
    color: rgb(51 51 51);
    line-height: 1.4;
}
.m-box {
    display: -ms-flexbox;
    display: flex;
}
.m-text-box>* {
    margin: 0 0 .375rem 0;
}
.profile-header .prf-detail .m-text-box h4 {
    font-size: .8125rem;
    color: rgb(153 153 153);
}
.m-text-box h4:last-child {
    color: rgb(147 147 147);
}
.m-text-box>:last-child {
    margin: 0;
}
.m-text-box h4 {
    font-size: .75rem;
    color: rgb(99 99 99);
    line-height: 1.5;
}
.m-text-box>* {
    margin: 0 0 .375rem 0;
}
.m-text-cut-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
#app{
    margin-top:0px
}
.profile-header .prf-handle {
    padding: 0 .9375rem 1.6875rem;
}
.m-box {
    display: -ms-flexbox;
    display: flex;
}
.m-box-center-a {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}
.profile-header .prf-handle .prf-num {
    margin-right: 1.75rem;
    cursor: pointer;
}
.profile-header .prf-handle .bar-btn {
    max-width: 12.5rem;
}
.m-box-col {
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    display: block;
    min-width: 0;
}
.profile-header .prf-handle .bar-btn .m-btn, .profile-header .prf-handle .bar-btn .m-font {
    font-size: .875rem;
    vertical-align: top;
    height: 2rem;
    line-height: 2.125rem;
}
.profile-header .prf-handle .bar-btn .m-btn-lite-white {
    color: rgb(105 116 128);
    position: relative;
}
.m-btn.m-btn-block {
    width: 100%;
    display: block;
}
.m-btn {
    text-align: center;
    line-height: 2.5rem;
    height: 2.5rem;
    font-size: .875rem;
    border-radius: 2.5rem;
    outline: 0;
    display: inline-block;
    min-width: 4.375rem;
    box-sizing: border-box;
    padding: 0;
}
.profile-header .prf-handle .prf-num i {
    font-size: .9375rem;
}
.profile-header .prf-handle .prf-num b, .profile-header .prf-handle .prf-num i {
    display: block;
    width: 100%;
    text-align: left;
    line-height: 1.3;
}
.profile-header .prf-handle .prf-num b {
    font-size: .8125rem;
}
.profile-header .prf-handle .prf-num b, .profile-header .prf-handle .prf-num i {
    display: block;
    width: 100%;
    text-align: left;
    line-height: 1.3;
}
a, abbr, address, article, aside, audio, b, big, blockquote, body, caption, center, cite, code, dd, del, details, dfn, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, label, legend, li, mark, menu, nav, ol, output, p, pre, q, ruby, s, samp, section, small, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, u, ul, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
.profile-header .prf-handle .bar-btn .m-btn-lite-white:after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    left: 0;
    /* border: 1px solid rgb(105 116 128); */
    border-radius: 4px;
    transform: scale(.5);
    transform-origin: 0 0;
    -webkit-transform: scale(.5);
    -webkit-transform-origin: 0 0;
}
.m-img-box h1 h2 h3 h4 h5{
    color:white
}
body{
    margin:0
}
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
.systemmenu{
    background: url(http://aladjs.cn/system.png) no-repeat;
    width: 25px;
    height: 25px;
    display: block;
    background-size: 100%;
    position: absolute;
    right: 15px;
    top: 15px;
}
</style>