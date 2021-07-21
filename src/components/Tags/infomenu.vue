<template>
      <div>
        <ul style="margin-top:10px">
          <li class="listyle">添加影片资源</li>
          <li class="listyle">通过Excel导入影片资源</li>
        </ul>
      </div>
</template>
<script>
	export default {
        name: 'infomenu',
    // props: ['morelabels'],
        props: {
        },
        components: {
        },
        data () {
            return {

            }
        },
        created() {

        },
        methods: {

        },
    }
</script>
<style scoped>
*{
  list-style: none;
  margin:0;
  padding:0;
}
.listyle{
  height: 35px;
  line-height: 35px;
  margin-top: 5px;
  text-align: left;
  padding-left: 10px;
  font-size: 13px;
  border: 1px solid rgb(218 218 218);
  border-radius: 5px;
}
</style>