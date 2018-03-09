<template>
    <div class="nav1-box">
      <ul class="nav1-item nav1-left">
        <router-link to="/nav1/form" tag="li"><i class="icon icon-list2"></i>表单</router-link>
        <router-link to="/nav1/table" tag="li"><i class="icon icon-database"></i>表格</router-link>
        <router-link to="/nav1/echarts" tag="li"><i class="icon icon-stats-bars"></i>图表</router-link>
      </ul>
      <div class="nav1-item nav1-right">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "nav1"
    }
</script>

<style lang="scss" scoped>
  .nav1-box{
    display: flex;
    .nav1-left{
      flex: 1;
      min-height: 100vh;
      box-shadow: 1px 0 8px rgba(0,0,0,.1);
      li{
        padding: 5px 40px;
        height: 40px;
        line-height: 40px;
        letter-spacing: 2px;
        cursor: pointer;
        .icon{
          vertical-align: middle;
          margin-right: 8px;
        }
        &.router-link-active, &.router-link-exact-active{
          color: #409eff;
          background: #eef6fd url('../assets/nav-bg-line.png') repeat-y 0;
        }
      }
    }
    .nav1-right{
      flex: 5;
      margin: 18px;
      padding: 15px;
      color: #333;
      background: #fff;
      border-radius: 3px;
      box-shadow: 1px 0 8px rgba(0,0,0,.1), 0 1px 8px rgba(0,0,0,.1);
    }
  }
</style>
