import { createStore } from "vuex";

const state = sessionStorage.getItem("state")
  ? JSON.parse(sessionStorage.getItem("state"))
  : {
      islogin: false,
      rule: '运营组',
      username: null, //username
      openTab: [], // 所有打开的路由
      activeIndex: '' //激活状态
    };

const mutations = {
  islogin(state, user) {
    state.islogin = user.islogin;
    state.rule = user.authority;
    state.username = user.username;
  },
  // 添加 tabs
  addTab(state, data) {
    state.openTab.push(data);
  },
  //删除 tabs
  deleteTab(state, name) {
    let index = 0;
    for (let option of state.openTab) {
      if (option.name === name) {
        break;
      }
      index++;
    }
    state.openTab.splice(index,1);
  },
  //设置对当前激活的tabs
  setActiveTab(state, index) {
    state.activeIndex = index;
  }
};

export default createStore({
  state,
  mutations,
});
