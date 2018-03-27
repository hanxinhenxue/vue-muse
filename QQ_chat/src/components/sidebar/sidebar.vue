<template>
<!-- 侧边栏组件 -->
    <div class="slider-containter">
    <mu-drawer :open="this.$store.state.slider.open" :docked="this.$store.state.slider.docked" :zDepth="0" :width="250" @close="toggle(true)">
      <mu-list @itemClick="docked ? '' : toggle(true)">
        <!-- 头像框 -->
        <mu-list-item id="personal-message">
          <!-- 个人信息 -->
          <div class="personal-top">
            <img src="../../../static/images/head.jpg" alt="">
            <span>隐藏&nbsp;&nbsp;&nbsp;&nbsp;寒心恨雪</span>
          </div>
          <div class="personal-bottom">
            <p>☆ ☆ ☆ ☆ ☆</p>
            <p>静坐常思己过，闲谈莫论人非</p>
          </div>
        </mu-list-item>

        <mu-list-item><span class="iconfont icon-kongjian"></span>&nbsp;&nbsp;&nbsp;了解会员特权</mu-list-item>
        <mu-list-item><span class="iconfont icon-kongjian"></span>&nbsp;&nbsp;&nbsp;QQ钱包</mu-list-item>
        <mu-list-item><span class="iconfont icon-kongjian"></span>&nbsp;&nbsp;&nbsp;个性收藏</mu-list-item>
        <mu-list-item><span class="iconfont icon-kongjian"></span>&nbsp;&nbsp;&nbsp;我的相册</mu-list-item>
        <mu-list-item><span class="iconfont icon-kongjian"></span>&nbsp;&nbsp;&nbsp;我的文件</mu-list-item>
        <mu-list-item><span class="iconfont icon-kongjian"></span>&nbsp;&nbsp;&nbsp;免流量特权</mu-list-item>
      </mu-list>
    </mu-drawer>
</div>
</template>

<script>
    export default {
  data () {
    return {
        docked:this.$store.state.slider.docked
    }
  },
  methods: {
    toggle (flag) {
      this.$store.commit('showSlider',flag)
    }
  }
}
</script>

<style lang="less">
  .slider-containter {
    .mu-list {
      padding-top: 0;
      .iconfont {
        color: skyblue;
        font-size: 18px;
      }
    }
    #personal-message {
      height: 200px;
      width: 100%;
      position: relative;
      background: url('../../../static/images/head.jpg') no-repeat center center;
      background-size: cover;
      padding-top: 75px;
      // 信息框上
      .personal-top {
        color: #fff;
        font-size: 20px;
        display: flex;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          border: 2px solid #fff;
          border-radius: 50%;
          margin-right: 15px;
        }
      }
      // 信息框下
      .personal-bottom{
        color: #fff;
        >p:first-child {
          color: yellow;
          margin-bottom: 5px;
        }
        >p:last-child {
          margin: 0;
        }
      }
    }
  }
</style>
