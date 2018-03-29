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
          var val = document.querySelector('.mu-text-field-input').value;//获取表单的值
          this.$store.state.person.push(val)//玩家对话

          document.querySelector('.mu-text-field-input').value=''

          this.$store.commit('sendMessage',val)//获取机器人请求
        }
      }
    }
</script>
<style lang="less">
  .chatBar-containter {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: #eee;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      li {
        margin-right: 25px;
        font-size: 25px;
      }
    }
  }
</style>
