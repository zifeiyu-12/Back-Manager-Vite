import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/login.vue";
import AdminSystemView from "../views/admin-system.vue"; //提供组件
import UserSystemView from "../views/user-system.vue";
import HomeView from "../components/home.vue";
import personManage from "../components/person-manage.vue";
import evalutionManage from "../components/evalution-manage.vue";
import appointmentManage from "../components/appointment-manage.vue";
import announcementManage from "../components/announcement-manage.vue";
import groupIntro from "../components/group-intro.vue";
import teamIntro from "../components/team-intro.vue";
import projectIntro from "../components/project-intro.vue";
import selectedIntro from "../components/selected-intro.vue";
import accountManage from "../components/account-manage.vue";
import _404 from "../views/404.vue"; // 网络错误、用户未授权等页面

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
    path: "/superadmin-system",
    component: AdminSystemView, //首页导航组件
    children: [
      {
        path: "home", //首页
        component: HomeView,
        name: "home",
      },
      {
        path: "person-management", //考核管理-人员管理
        component: personManage,
        name: "person-management",
      },
      {
        path: "evalution-management", //考核管理-考核管理
        component: evalutionManage,
        name: "evalution-management",
      },
      {
        path: "appointment-management", // 考核管理-预约管理
        component: appointmentManage,
        name: "appointment-management",
      },
      {
        path: "announcement-management", //考核管理-公告设置
        component: announcementManage,
        name: "announcement-management",
      },
      {
        path: "group-intro", //信息管理-团队介绍
        component: groupIntro,
        name: "group-intro",
      },
      {
        path: "team-intro", //信息管理-组别介绍
        component: teamIntro,
        name: "team-intro",
      },
      {
        path: "project-intro", //信息管理-项目介绍
        component: projectIntro,
        name: "project-intro",
      },
      {
        path: "selected-post", //信息管理-精选推文
        component: selectedIntro,
        name: "selected-post",
      },
      {
        path: "account-management", //账号管理
        component: accountManage,
        name: "account-management",
      },
    ],
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/user-system",
    component: UserSystemView, //首页导航组件
    children: [
      {
        path: "home", //首页
        component: HomeView,
        name: "u-home",
      },
      {
        path: "person-management", //考核管理-人员管理
        component: personManage,
        name: "u-person-management",
      },
      {
        path: "evalution-management", //考核管理-考核管理
        component: evalutionManage,
        name: "u-evalution-management",
      },
      {
        path: "appointment-management", // 考核管理-预约管理
        component: appointmentManage,
        name: "u-appointment-management",
      },
      {
        path: "announcement-management", //考核管理-公告设置
        component: announcementManage,
        name: "u-announcement-management",
      },
      {
        path: "group-intro", //信息管理-团队介绍
        component: groupIntro,
        name: "u-group-intro",
      },
      {
        path: "team-intro", //信息管理-组别介绍
        component: teamIntro,
        name: "u-team-intro",
      },
      {
        path: "project-intro", //信息管理-项目介绍
        component: projectIntro,
        name: "u-project-intro",
      },
      {
        path: "selected-post", //信息管理-精选推文
        component: selectedIntro,
        name: "u-selected-post",
      },
    ],
    meta: {
      requireAuth: true,
    },
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
