<template>
    <div class="footer-box">
      <div class="footer">我是个小小的蒲公英，出发要到远方旅行<br>Copyright © 2018 All Right</div>
    </div>
</template>

<script>
    export default {
        name: "appFooter"
    }
</script>

<style lang="scss" scoped>
  .footer-box{
    height: 72px;
    .footer{
      position: fixed;
      z-index: 100;
      bottom: 0;
      padding: 10px 0;
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 26px;
      color: #59b4d6;
      background-color: #d8eaf2;
    }
  }
</style>
