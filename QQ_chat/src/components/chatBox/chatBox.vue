<template>
  <div class="chatBox-containter">
    <!-- 机器人聊天窗口 -->
    <div class="robot-chat">
      <!-- 头像 -->
      <img src="../../../static/images/robot1.jpg" alt="">
      <!-- 对话 -->
      <div class="words">
        哈喽今天怎么样啊
      </div>
    </div> 

    <!-- 玩家聊天窗口 -->
    <div class="my-chat">
      <!-- 对话 -->
      <div class="words">
        还不错，你呢？
      </div>
      <!-- 头像 -->
      <img src="../../../static/images/head.jpg" alt="">
    </div>




  <chat></chat>
  </div>
</template>
<script>
    import chat from '../tabBar/chatBar.vue'

    export default {
      data(){
        return {

        }
      },
      components:{
        chat
      }
    }
</script>
<style lang="less">
.chatBox-containter {
  // 机器人聊天窗口
    .robot-chat{
    margin-top: 15px;
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid skyblue;
      margin-right: 20px;
    }
    .words {
      padding: 10px 5px;
      background-color: #fff;
    }
  }
  // 玩家聊天窗口
  .my-chat {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid plum;
      margin-right: 20px;
    }
    .words{
      padding: 10px 5px;
      background-color: #fff;
    }
  }
}

</style>

