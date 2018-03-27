<template>
  <div class="chatBar-containter">
      <!-- 输入框 -->
      <mu-text-field label="和我的小可爱聊天吧" labelFloat/>
      <mu-flat-button icon="发送" backgroundColor="#999" color="#fff" @click="send"/>
      <ul>
        <li class="iconfont icon-msnui-mic-inverse"></li>
        <li class="iconfont icon-tupian"></li>
        <li class="iconfont icon-xiangji"></li>
        <li class="iconfont icon-hongbao"></li>
        <li class="iconfont icon-yingxiangsheying"></li>
        <li class="iconfont icon-biaoqing"></li>
        <li class="iconfont icon-icon--"></li>
      </ul>
  </div>
</template>
<script>
    export default {
      data(){
        return {

        }
      },
      methods:{
        send(){
          this.$store.commit('sendMessage',document.querySelector('.mu-text-field-input').value)
        }
      }
    }
</script>
<style lang="less">
  .chatBar-containter {
    position: absolute;
    left: 0;
    bottom: 0;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      li {
        margin-right: 25px;
        font-size: 25px;
      }
    }
  }
</style>
