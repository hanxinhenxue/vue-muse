<template>
  <div class="messageBox">
    <!-- 机器人聊天窗口 -->
      <mu-list-item class="chatBox" to="/chating">    
        <mu-list-item title="蕾姆">
      <mu-avatar src="../../../static/images/robot1.jpg" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">{{this.$store.state.chat[this.$store.state.chat.length - 1].content}}</span><br/>
      </span>
    </mu-list-item>
        <mu-badge :content="num" slot="right"/>
      </mu-list-item>
  </div>
</template>

<script>
export default {
  data(){
    return {
      num:parseInt(this.$store.state.chat.length)
    }
  }
}
</script>

<style lang="less" scoped>
  .messageBox {
    .chatBox {
      img {
        width: 65px;
        height: 55px;
        border-radius: 50%;
      }
    }
  }
</style>
