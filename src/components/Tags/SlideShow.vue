<template>
  <Swiper class="swiper" v-if="swiperImage.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
        <Slide @click="lunbo" v-for="(item,index) in swiperImage" :key="index">
          <img :src="item.bannerUrl" @click="viewArticle(item._id)">
        </Slide>
   </Swiper>
</template>
<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
  name: 'SlideShow',
  components:{
    Swiper,
      Slide
  },
  props:["swiperImage"],
  methods:{
    lunbo:function(){
      console.log(111)
    },
    viewArticle(ar_id){
      this.$router.push({
        path:`/article/${ar_id}`
      })
    }
  }
} 
</script>
<style lang="scss" scope>
.swiper{
  position: relative;
  height:9rem;
  width:95%;
  margin-left:2.5%;
  border-radius: 0.5rem;
  img{
      width: 100%;
      height: 9rem;
      max-width: 100%;
      max-height: 100%;
  }
}
// img{
//   // position: absolute;
//   width: auto;
// 	height: auto;
// 	max-width: 100%;
// 	max-height: 100%;
// }
</style>