import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入菜单
import Menu from './pages/menu.vue';
import {home, goodsList, goodsDetails} from './pages/index';

// 配置路由
const router = new VueRouter({
  routes: [
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/goodsList',
      component: goodsList
    },
    {
      path: '/goodsDetails',
      component: goodsDetails
    },
    {
      path: '/*',
      redirect: 'menu'
    }]
});

export default router;
