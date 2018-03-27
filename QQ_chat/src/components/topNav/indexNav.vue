<template>
    <div class="nav-containter">
        <!-- 左侧的头像 -->
        <div class="head-img" @click="toggleSlider(true)"><img src="../../../static/images/head.jpg" alt=""></div>
            <!-- 头部标题 -->
            <div class="title">消息</div>
            <!-- 右侧图标 -->
            <div id="right-icon" class="iconfont icon-tianjiajiahaowubiankuang"></div>
    </div>

</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            toggleSlider(flag){
                this.$store.commit('showSlider',flag)
            }
        }
    }
</script>

<style lang="less">
// 此页面的主容器
    .nav-containter {
        height: 50px;
        background-color: skyblue;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        align-items: center;
        // 头像的主容器
        .head-img {
            width: 35px;
            height: 35px;
            line-height: 35px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        // 标题
        .title {
            font-size: 18px;
        }
        //右侧的
        #right-icon{
            font-size: 24px;
        }
    }
</style>
