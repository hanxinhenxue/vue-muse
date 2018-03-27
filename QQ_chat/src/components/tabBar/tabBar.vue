<template>
<div class="tabBar-containter">
    <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" class="iconfont icon-xiaoxi" title="消息" @click="toUrl('/message')"/>
        <mu-tab value="tab2" class="iconfont icon-lianxiren" title="联系人" @click="toUrl('/linkMan')"/>
        <mu-tab value="tab3" class="iconfont icon-xingxing" title="动态" @click="toUrl('/state')"/>
    </mu-tabs> 
</div>

</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1',//当value值和父组件的value相当就是选中状态
      activeLine:'skyblue'
    }
  },
  methods: {
      //选中状态的底部
    handleTabChange (val) {
      this.activeTab = val
    },
    //编程式导航
    toUrl(url){
        this.$router.push(url)
    }
  }
}
</script>

<style lang="less">
    // 该页面的主容器
    .tabBar-containter {
        // 包裹底部三个按钮的父盒子
        .mu-tabs{
            position: absolute;
            bottom: 0;
            background-color: #dad7dd33;
            // 字体的颜色
            .mu-tab-link {
                padding: 0;
                color: rgb(39, 36, 36);
            }
            // 跟随线的颜色
            .mu-tab-link-highlight {
                background-color: skyblue;
            }
        }
        
    }
</style>
