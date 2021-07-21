<template>
    <div class="load_template">
        <div class="load_template_icons" v-if="options.loading">
            <img src="@/assets/icon/loading.gif" />
        </div>
        <div class="load_template_text">
            <span>{{options.text}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    // 自定义组件属性 text 文字 内嵌样式
    props:['options']
}
</script>
<style lang="less" scoped>
.load_template {
    position: fixed;
    left: 50%;
    top: 35%;
    z-index: 99;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    background: black;
    opacity: .8;
    padding: 10px 20px;
    border-radius: 5px;
    &_icons {
        img {
            width:50px;
            height: 50px;
        }
    }
    &_text {
        span {
            color: white;
        }
    }
}
</style>
