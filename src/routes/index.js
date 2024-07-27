import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/login.vue";
import SystemView from "../views/system.vue"; //提供组件
import _404 from "../views/404.vue";   // 网络错误、用户未授权等页面

const routes = [
  //存储路由，自由定义路由规则
  {
    path: "/", //根路径
  },
  {
    path: "/login", //根路径
    component: LoginView, //导入对应组件
  },
  {
    path: "/system",
    component: SystemView,
    children: [
      
    ],
  },
  {
    path: "/404",
    component: _404,
  },
];

const router = createRouter({
  history: createWebHistory(), // createWebHashHistory
  routes,
});

export default router; //路由器导出
