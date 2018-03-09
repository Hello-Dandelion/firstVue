import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';
import nav1 from '../components/nav1';
import nav2 from '../components/nav2';
import nav1Form from '../components/form';
import nav1Table from '../components/table';
import nav1Echarts from '../components/echarts';

Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {
      path:'/',
      redirect:{path:'/login'},
      meta:{title:"登录"}
    },
    {
      path:'/nav1',
      redirect:{path:'/nav1/form'},
    },
    {
      path: '/nav1',
      name: 'nav1',
      component: nav1,
      children:[{
        path: 'form',
        name: 'form',
        meta:{title:"表单"},
        component: nav1Form,
      },{
        path: 'table',
        name: 'table',
        meta:{title:"表格"},
        component: nav1Table,
      },{
        path: 'echarts',
        name: 'echarts',
        meta:{title:"图表"},
        component: nav1Echarts,
      }]
    },{
      path:'/nav2',
      name:'nav2',
      meta:{title:"说明"},
      component: nav2
    }],
    beforeEnter: (to,from,next)=> {   //导航守卫
      if (store.state.isLogin) {
        console.log('用户已经登录');
        document.title = to.meta.title;
        next();
      } else {
        console.log('用户未登录');
        next({path: '/login',meta:{title:"登录"}});  //未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来
      }
    }
});
