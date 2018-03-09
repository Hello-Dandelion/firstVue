<template>
  <div class="login-main">
    <form action="" class="login-form" ref="loginForm">
      <input type="text" v-model="formData.username" class="user-name" placeholder="输入任意用户名">
      <input type="password" v-model="formData.password" class="user-pwd" placeholder="输入任意密码">
      <button type="button" @click="submitForm">登录</button>
    </form>
  </div>
</template>

<script>
  import appFooter from '../components/footer';
  import {mapGetters,mapMutations} from 'vuex';
  import webStroageCache from 'web-storage-cache';
  var wsCache = new webStroageCache();
  export default {
    name: 'login',
    data(){
      return {
        formData: {
          username: '',
          password: ''
        }
      }
    },
    components:{
      'v-footer':appFooter
    },
    computed: {
      ...mapGetters(['isLogin'])
    },
    methods:{
      ...mapMutations(['changeLogin','getUser']),
      submitForm(){
        let username = this.formData.username,
            password = this.formData.password;
        if(username != '' && password != ''){
          console.log(this.$store);
          debugger;
          wsCache.set('isLogin', true, {exp: 60 * 30});
          wsCache.set('username', username);
          console.log(this.$store);
          this.$store.commit('getUser',username);
          this.$store.commit('changeLogin',true);
          this.$router.push('/nav1');
        }else{
          return false;
        }
      }
    },
    created() {
      if (wsCache.get('isLogin')){
        this.changeLogin();
      }else {
        document.title = '登录';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-main{
    min-height: 100vh;
    overflow: hidden;
    background: url("../assets/login-bg.jpg") no-repeat center;
    background-size: 100% 100%;
    .login-form{
      position: absolute;
      left: 50%;
      top: 50%;
      width: 420px;
      height: 300px;
      transform: translate(-50%,-50%);
      border-radius: 6px;
      background-color: rgba(255,255,255,0.9);
      input,button{
        margin: 0 auto;
        display: block;
      }
      input{
        padding: 0 8px 0 40px;
        width: 288px;
        height: 38px;
        &:focus{
          outline: none;
          border: 1px solid #2ba3f9;
          box-shadow: 1px 1px 3px rgba(43,163,249,0.8),-1px -1px 3px rgba(43,163,249,0.8);
        }
        &.user-name{
          margin-top: 55px;
        }
        &.user-name:focus{
          background: url("../assets/username-focus.png") no-repeat 8px center;
          background-size: 22px 24px;
        }
        &.user-name{
          background: url("../assets/username-blur.png") no-repeat 8px center;
          background-size: 22px 24px;
        }
        &.user-pwd:focus{
          margin-top: 25px;
          background: url("../assets/password-focus.png") no-repeat left center;
          background-position-x: 8px;
        }
        &.user-pwd{
          margin-top: 25px;
          background: url("../assets/password-blur.png") no-repeat left center;
          background-position-x: 8px;
        }
      }
      button{
        padding: 0 8px;
        width: 338px;
        margin-top: 40px;
        height: 42px;
        font-size: 16px;
        letter-spacing: 5px;
        color: #fff;
        background-color: #007eff;
      }
    }
  }
</style>
