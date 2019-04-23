<template>
  <div class="community">
    <Header></Header>
    <ChatRoom :chatroom="chatroom"></ChatRoom>
    <div class="title">每日一片</div>
    <Days :days="days"></Days>
  </div>
</template>
<script>
import Header from './../Tags/Header.vue';
import ChatRoom from './../Tags/ChatRoom.vue';
import Days from './../Tags/Days.vue';
export default {
  name: 'shequ',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    chatroom(){
      return this.$store.state.cm.chatroom
    },
    days(){
      return this.$store.state.cm.days
    }
  },
  components:{
    Header,
    ChatRoom,
    Days
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  width: 100%;
  height: 2.5rem;
  background: white;
  text-align: center;
  line-height: 2.5rem;
  font-size: 0.8rem;
  margin-bottom:2rem;
}
.community{
  margin:0px;
  padding:0px;
}
</style>