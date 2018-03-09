// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import axios from 'axios';
import App from './App'
import router from './router'
import store from './store'
import './css/reset.css';
import  './css/style.css';
import elementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(elementUi);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
