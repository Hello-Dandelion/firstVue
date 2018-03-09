<template>
  <div class="header-box">
    <div class="header-item logo">Dandelion</div>
    <ul class="header-item nav">
      <router-link to="/nav1" tag="li">一级目录1</router-link>
      <router-link to="/nav2" tag="li">一级目录2</router-link>
    </ul>
    <ul class="header-item msg">
      <li>欢迎您！<span>{{username}}</span></li>
      <li><span @click="exitLogin(true)">退出</span></li>
    </ul>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import webStroageCache from 'web-storage-cache';
  var wsCache = new webStroageCache();
  export default {
    name: "appHeader",
    data(){
      return {
        username:''
      }
    },
    methods:{
      ...mapMutations(['exitLogin']),
    },
    created(){
      this.username = wsCache.get('username');
    }
  }
</script>

<style lang="scss" scoped>
  .header-box{
    padding: 0 100px;
    display: flex;
    height: 60px;
    line-height: 60px;
    background: linear-gradient(90deg,#007eff,#01cfd7);
    .header-item{
      text-align: center;
      li{
        width: 150px;
        text-align: center;
        letter-spacing: 1px;
        &.router-link-active{
          background-color: #0886e9;
        }
      }
    }
    .header-item,.header-item>li>a{
      color: #fff;
    }
    .logo{
      flex:1;
      font-size: 28px;
    }
    .nav{
      flex:5;
      margin-left: 10%;
      li{
        float: left;
        font-size: 16px;
        cursor: pointer;
      }
    }
    .msg{
      flex: 3;
      li{
        float: left;
        text-align: right;
        &:last-child{
          float: left;
          span{
            padding: 0 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
