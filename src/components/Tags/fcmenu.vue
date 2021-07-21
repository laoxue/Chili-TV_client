<template>
    <div class="menu_fc" v-if="fcmenus">
        <ul>
          <li @click="delfilms">批量删除</li>
          <li>批量分享</li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      fcmenus:false
    }
  },
  methods: {
    delfilms () {
      this.$emit('delfilms')
    }
  },
}
</script>
<style scoped>
.menu_fc{
  position: fixed;
  z-index: 9999;
  width:10rem;
  height: 5rem;
  bottom: 10vh;
  left: 0.8rem;
}
.menu_fc ul{
  padding:0px;
  margin: 0px;
}
.menu_fc ul li {
  list-style: none;
  background: #f1f1f1;
  border-radius: 5px;
  font-size: 0.8rem;
  padding:0.2rem;
  width:5.5rem;
  font-weight: 800;
  margin-top: 0.4rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color:rgb(15, 195, 124)
};
</style>