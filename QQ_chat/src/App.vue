<template>
  <div id="app">
    <!-- 头部区域 -->
    <header>
      <index-nav></index-nav>
    </header>
    <!-- 侧边栏 -->
    <slide></slide>
    <!-- 中间内容区域 -->

      <router-view></router-view>

    <!-- 底部tabBar区域 -->
    <footer v-if="flag">
      <tab-bar></tab-bar>
    </footer>
  </div>
</template>

<script>
// 导入首页所需的组件
import tabBar from './components/tabBar/tabBar'//底部tab栏
import indexNav from './components/topNav/indexNav'
import slide from './components/sidebar/sidebar'


  export default {
    data(){
      return {
        flag:true
      }
    },
    methods:{

    },
    components: {
      tabBar,
      indexNav,
      slide
    },
    created () {
      this.flag = this.$route.path == '/chating' ? false :true;
    },
    watch: {
      '$route.path':function(){
        if(this.$route.path == '/chating') {
          this.flag = false;
        }else {
          this.flag = true
        }
        
      }
    }
  }
</script>

<style lang="less">
  #app {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #eee;
    padding-bottom: 48px;
    padding-top: 50px;
    header{
      .mu-appbar-title{
        text-align: center;
      }
    }
  }
</style>
