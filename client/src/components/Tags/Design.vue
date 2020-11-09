<template>
    <div class="degsin">
        <div>
            <!-- 头部 -->
            <div class="wrapper-fixed">
                <span style="position:absolute;left:10px;top:10px" @click="backpre">返回</span>
                <nav class="sub-header clearfix BgCLev2 BCLev1 FCLev12">
                    <span>编辑个人资料</span>
                </nav>
            </div>
            <section class="list-info-page"><div class="nickname item-info-page arrow-card showPop"><span>昵称</span>
            <input type="text" v-model="username"/></div></section>
            <section class="list-info-page" v-if="!isEdit"><div class="nickname item-info-page arrow-card showPop"><span>密码</span>
            <input type="password" v-model="password"/></div></section>
            <section class="list-info-page"><div class="nickname item-info-page arrow-card showPop"><span>性别</span>
            <input type="text" v-model="sex"/></div></section>
            <section class="list-info-page"><div class="nickname item-info-page arrow-card showPop"><span>简介</span>
            <input type="text" v-model="remark"/></div></section>
            
            <a id="save" v-if="!isEdit" class="btn-info-page disable BtnGreenLev1" @click="design" style="text-decoration: none;" title="">保存</a>
            <a id="save" v-else class="btn-info-page disable BtnGreenLev1" @click="designedit" style="text-decoration: none;" title="">保存</a>
        </div>
    </div>  
</template>
<script>
import * as DesignService from './../../services/login/login.service.js'
export default {
    data () {
        return {
            username:'', //用户名
            password:'', //密码
            sex: '', //性别
            remark: '', //简介
            headerurl:'', //头像
            isEdit: this.$route.query.type === 'edit'
        }
     },
     created() {
         console.log( this.$route.query.type)
         if ( this.$route.query.type === 'edit') {
             this.initinfo()
         } else {

         }
     },
    methods: {
        backpre () {
            this.$router.go(-1)
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
        },
        initinfo () {
                let params = {
                id: window.localStorage.ljid ? window.localStorage.ljid : ''
                }
                DesignService.getinfo(params).then((res) => {
                    console.log(res)
                    this.username = res.data.data[0].username
                    this.sex = res.data.data[0].sex
                    this.remark = res.data.data[0].remark
                })
        },
        designedit () {
            let params = {
                username:this.username,
                sex:this.sex,
                remark: this.remark
            }
            DesignService.updateinfo(params).then((res) => {
                if(res.data.code ===0) {
                    alert('更新成功!')
                    this.$router.push({
                    path:'/home'
                })
                }else {
                    alert(res.data.msg)
                }
            })
        },
        design(){
            let params = {
                username:this.username,
                password:this.password,
                sex:this.sex,
                remark:this.remark
            }
            DesignService.design(params).then((res) => {
                if(res.data.code ===0) {
                    alert('注册成功!')
                    this.$router.push({
                    path:'/home'
                })
                }else {
                    alert(res.data.msg)
                }
            })
        }
    },
}
</script>
<style scoped>
.wrapper-fixed {
    position: relative;
}
.sub-header, .tit-popup {
    color: rgb(56 56 56);
}
.sub-header {
    border-color: rgb(191 191 191);
    background-image: linear-gradient(to bottom,rgb(255 255 255),rgb(234 234 234));
    height: 43px;
    padding: 0 8px;
    text-align: center;
}
.sub-header span {
    font-size: 1.25rem;
    line-height: 40px;
    display: inline-block;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.sub-header .back-header, .sub-header .more-sub-header, .sub-header .refresh-sub-header, .sub-header .home-sub-header, .sub-header .write-sub-header, .sub-header .save-sub-header, .sub-header>.btn {
    overflow: hidden;
    margin: 10px 5px 0;
    width: 24px;
    height: 25px;
    line-height: 25px;
    text-indent: -300px;
}
.sub-header .disable.save-sub-header {
    background-position: 0 -337px;
}
.list-info-page {
    background-color: rgb(255 255 255);
}
.list-info-page {
    margin: 15px 10px;
    font-size: .875rem;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
}
.item-info-page:last-child {
    border: 0;
}
.item-info-page {
    border-color: rgb(227 227 227);
}
.item-info-page {
    overflow: hidden;
    border-bottom: rgb(218 218 218) solid 1px;
    padding: 9px 5px 9px 0;
}
.arrow-card {
    padding-right: 16px;
}
.arrow-card, .card-4, .card-6 span {
    position: relative;
}
html, body, header, footer, nav, article, section, aside, time, code, div, p, ul, ol, li, dl, dd, dt, h1, h2, h3, a, span, strong, em, small, form, label, input, textarea {
    margin: 0;
    padding: 0;
}
user agent stylesheet
div {
    display: block;
}
.list-info-page {
    margin: 15px 10px;
    font-size: .875rem;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
}
.tit-info-page, .item-info-page span {
    color: rgb(51 51 51);
}
.item-info-page>span, .item-info-page a>span {
    float: left;
    margin: 0 0 0 15px;
    width: 75px;
    font-weight: 700;
}
.item-info-page.arrow-card>p, .item-info-page.arrow-card a>p {
    margin: 0 24px 0 90px;
    word-break: break-all;
}
.BtnGreenLev1:visited, .BtnLev3:visited .item-card.type-1:visited {
    color: rgb(255 255 254);
}
.item-card:visited, a:visited {
    color: rgb(81 125 175);
}
.BtnGreenLev1, .BtnLev3, .item-card.type-1 {
    border: rgb(58 170 70) solid 1px;
    border-color: rgb(58 170 70) rgb(51 151 61) rgb(44 132 53);
    color: rgb(255 255 255);
    text-align: center;
    background-color: rgb(63 187 77);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(rgb(63 187 77)),to(rgb(58 173 69)),color-stop(.92,rgb(52 157 63)));
    background-image: -moz-linear-gradient(#3fbb4d 0,#349d3f 92%,#3aad45 100%);
    background-image: -o-linear-gradient(#3fbb4d 0,#349d3f 92%,#3aad45 100%);
    background-image: -ms-linear-gradient(#3fbb4d 0,#349d3f 92%,#3aad45 100%);
    background-image: linear-gradient(to bottom,rgb(63 187 77) 0,rgb(52 157 63) 92%,rgb(58 173 69) 100%);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.25), inset 0 1px #59c665;
    box-shadow: 0 1px 2px rgba(0,0,0,.25), inset 0 1px #59c665;
    text-shadow: 0 1px 0 rgba(0,0,0,.35);
}
.btn-info-page {
    display: block;
    margin: 15px 10px 30px;
    font-size: .875rem;
    line-height: 40px;
    font-weight: 700;
}
</style>