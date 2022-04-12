import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: "/", 
  // ↑ 不写或用"/"
  // 如果路径不对，如"./"，在二级路由的页面刷新，会报错
  // umi.js:1 Uncaught SyntaxError: Unexpected token '<
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: '首页'
        },
        {
          path: '/order',
          component: './order/index',
          title: '订单'
        },
        {
          path: '/user',
          component: './user/index',
          title: '我的'
        },
        {
          path: '/user/edit',
          component: './user/edit',
          title: '设置用户'
        },
        {
          path: '/search',
          component: './search/index',
          title: '搜索'
        },
        {
          path: '/observer',
          component: './observer',
          title: 'observer'
        },
        {
          path: '/house',
          component: './house',
          title: '房屋详情'
        },
      ]
    }
  ],
});
