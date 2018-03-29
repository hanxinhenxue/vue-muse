<template>
  <div class="messageBox">
    <!-- 机器人聊天窗口 -->
      <mu-list-item class="chatBox" to="/chating">    
        <mu-list-item title="蕾姆">
      <mu-avatar src="../../../static/images/robot1.jpg" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">我们是好朋友了，来聊天吧</span><br/>
      </span>
    </mu-list-item>
        <mu-badge content="12" slot="right"/>
      </mu-list-item>
  </div>
</template>

<script>
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
