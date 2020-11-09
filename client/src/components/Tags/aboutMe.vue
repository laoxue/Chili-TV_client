<template>
  <div>
     <div class="bg-gray whole-page">
         <ul class="xue-style" style="padding:0px;margin:0px">
           <li class="listyle">
             <div class="infoitme">
               <div class="infos_item" style="float: none;width: 0;-webkit-box-flex: 1;-ms-flex: 1;flex: 1; text-align:left">
                 <span>意见反馈</span>
               </div>
               <div class="infos_item">
                 <span class="subitem"><img src="./../../assets/icon/next.png" style="width:15px;height:15px"/></span>
               </div>
             </div>
           </li>
           <li class="listyle">
             <div class="infoitme">
               <div class="infos_item" style="float: none;width: 0;-webkit-box-flex: 1;-ms-flex: 1;flex: 1; text-align:left">
                 <span>客服电话</span>
               </div>
               <div class="infos_item">
                 <span class="subitem">18550087591</span>
               </div>
             </div>
           </li>
           <li class="listyle">
             <div class="infoitme">
               <div class="infos_item" style="float: none;width: 0;-webkit-box-flex: 1;-ms-flex: 1;flex: 1; text-align:left">
                 <span>版权所有</span>
               </div>
               <div class="infos_item">
                 <span class="subitem">大力有话说</span>
               </div>
             </div>
           </li>
         </ul>

         <!-- 退出注销 -->
         <ul class="xue-style" style="padding:0px;margin:0px;margin-top: 20px;">
           <li class="listyle">
             <div class="infoitme">
               <div class="infos_item" style="float: none;width: 0;-webkit-box-flex: 1;-ms-flex: 1;flex: 1; text-align:center">
                 <span style="color: rgb(255 82 83);" @click="logoutuser">退出</span>
               </div>
             </div>
           </li>
         </ul>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
    logoutuser(){
     window.localStorage.clear()
     this.$router.push({
       name:'login'
     })
    }
  },
}
</script>
<style scoped>
.bg-gray{
  background-color: rgb(242 242 242);
}
.whole-page{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.infoitme{
  display: -webkit-box;
    -webkit-box-flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    padding-top: 10px;
    padding-bottom: 10px;-webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;position: relative;-webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.listyle{
  list-style:none;border-bottom: 1px solid rgb(228 228 228);height: 50px;
  display: -webkit-box;
  line-height: 100%;background:white;padding:0 15px
}
.subitem{
  color: rgb(102 102 102);
  font-size: 15px;
}
</style>