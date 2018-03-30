<template>
  <div class="chatBar-containter">
      <!-- 输入框 -->
      <div class="box-mb">
        <input type="text" name="" id="mess-input"  v-model="msg">
        <input type="button" value="发送" id="mess-but" @click="send" @keyup.13="send">
      </div>

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
          msg:'',
          flag:this.$store.state.flag
        }
      },
      methods:{
        send(){
          //为空不发送请求
          if(this.msg == ''){
            return;
          }
            var val = this.msg;//获取表单的值
            this.$store.state.chat.push({_id:'bb',content:val})//玩家对话
            this.$store.commit('sendMessage',val)//获取机器人请求
            this.msg=''//清空对话框

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
    padding: 0 15px;
    .box-mb {
      display: flex;
      justify-content: space-between;
      #mess-input{
        width: 70%;
        height: 40px;
        border: none;
        border-bottom: 1px solid #ccc;
        background-color: #eee;
        &:focus {
          outline: none;
        }
      }
      #mess-but {
        width: 28%;
        border-radius: 5px;
        outline: none;
      }
    }
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
