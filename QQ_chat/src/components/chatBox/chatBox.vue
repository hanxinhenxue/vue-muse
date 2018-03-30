<template>
  <div class="chatBox-containter">
    <!-- 机器人聊天窗口 -->
    <div v-for="(item,i) in this.$store.state.chat" :key="i">
      <!-- 头像 -->
      <div v-if="item._id=='aa'"  class="robot-chat">
          <img src="../../../static/images/robot1.jpg" alt="">
              <!-- 对话 -->
           <div class="words">
            {{item.content}}
          </div>
      </div>
      <!-- 玩家聊天窗口 -->
      <div v-else>
           <div class="my-chat">
      <!-- 对话 -->
              <div class="words">
                {{item.content}}
              </div>
      <!-- 头像 -->
              <img src="../../../static/images/head.jpg" alt="">
            </div>
      </div>

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
  width: 100%;
  padding-top: 15px;
    height: 100%;
    overflow-y: scroll;
    padding-bottom: 75px;
  // 机器人聊天窗口
    .robot-chat{
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

