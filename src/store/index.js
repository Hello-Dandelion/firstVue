import Vue from 'vue';
import Vuex from 'vuex';
import webStorageCache from 'web-storage-cache';

Vue.use(Vuex);

var wsCache = new webStorageCache();
const state = {
  isLogin:false,
  username:''
};
const getters = {
  isLogin: state => state.isLogin,
  username: state => state.username,
};
const mutations = {
  changeLogin(state,flag){
    state.isLogin = flag;
  },
  getUser(state,str){
    state.username = str;
  },
  exitLogin(state,flag){
    //state.isLogin = false;
    wsCache.delete('isLogin');
    wsCache.delete('username');
    if(flag){
      location.href = '/';
      document.title = '登录';
    }
  }
};


export default new Vuex.Store({
  state,
  getters,
  mutations
});
