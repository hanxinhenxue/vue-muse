<template>
  <div class="state-containter">
    <ul class="top">
      <li>
        <span class="iconfont icon-kongjian"></span>
        <p>好友动态</p>
      </li>
      <li>
        <span class="iconfont icon-dizhi"></span>
        <p>附近</p>
      </li>
      <li>
        <span class="iconfont icon-30chuangjianbuluo"></span>
        <p>兴趣部落</p>
      </li>
    </ul>
    <ul class="bottom">
      <li><span class="iconfont icon-94"></span>游戏</li>
      <li><span class="iconfont icon-shipin"></span>日迹</li>
      <li><span class="iconfont icon-labagonggaoxiaoxi"></span>动漫</li>
      <li><span class="iconfont icon-paobu"></span>运动</li>
    </ul>
  </div>
</template>

<script>
    
</script>

<style lang="less">
  .state-containter {
    .top {
      list-style: none;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      text-align: center;
      background-color: #fff;
      li {
        span {
          font-size: 30px;
        }
      }
    }
    .bottom {
      background-color: #fff;
      list-style: none;
      li {
        height: 50px;
        span {
          margin-right: 20px;
          font-size: 20px;
        }
      }
    }
  }
</style>
