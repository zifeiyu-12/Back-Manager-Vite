<template>
  <div class="common-layout">
    <!-- ElementUI 预设布局 -->
    <el-container>
      <el-aside width="16%">
        <!-- 侧边==账号名字 -->
        <div class="header">
          <span class="circle">
            <el-icon><Monitor /></el-icon>
          </span>
          <h5 class="nav-header">运营组</h5>
        </div>

        <el-menu
          class="el-menu-vertical-demo"
          @click="handleMenuOpen(this.$route.name, this.$route.path)"
          style="user-select: none; min-height: calc(100% - 60px)"
          router
        >
          <el-menu-item>
            <span
              ><el-icon color="blue"><HomeFilled /></el-icon>首页</span
            >
          </el-menu-item>
          <el-sub-menu>
            <template #title>
              <span
                ><el-icon><User /></el-icon>考核管理
              </span>
            </template>
            <el-menu-item class="menu-item" index="person-management"
              >人员管理</el-menu-item
            >
            <el-menu-item class="menu-item" index="evalution-management"
              >考核管理</el-menu-item
            >
            <el-menu-item class="menu-item" index="appointment-management"
              >预约管理</el-menu-item
            >
            <el-menu-item class="menu-item" index="announcement-management"
              >公告设置</el-menu-item
            >
          </el-sub-menu>
          <el-sub-menu>
            <template #title>
              <span>
                <el-icon><Message /></el-icon>信息管理</span
              >
            </template>
            <el-menu-item class="menu-item">团队介绍</el-menu-item>
            <el-menu-item class="menu-item">组别介绍</el-menu-item>
            <el-menu-item class="menu-item">项目介绍</el-menu-item>
            <el-menu-item class="menu-item">精选推文</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 主体==头部==蓝色条块 以及 可增减标签页 -->
        <el-header height="85px" class="tabs-box">
          <div class="blue">
            <el-button type="primary" class="sign-out">
              <el-icon class="el-icon--left"><SwitchButton /></el-icon>退出登录
            </el-button>
          </div>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 1px solid #e4e7ed;
              height: 40px;
            "
          >
            <div style="display: flex; align-items: center">
              <el-icon style="width: 40px"><ArrowLeft /></el-icon>
              <el-tabs
                style="margin-bottom: -15px"
                v-model="editableTabsValue"
                type="card"
                class="demo-tabs"
                closable
                @tab-click="clickTab"
                @tab-remove="removeTab"
              >
                <el-tab-pane
                  v-for="item in editableTabs"
                  :key="item.name"
                  :label="item.title"
                  :name="item.name"
                >
                  {{ item.content }}
                </el-tab-pane>
              </el-tabs>
            </div>

            <div>
              <el-icon style="width: 40px; /* height: 45px; */"
                ><ArrowRight
              /></el-icon>
              <el-icon style="width: 70px"><Refresh /> 刷新</el-icon>
            </div>
          </div>
        </el-header>
        <el-main>
          <!-- 主题==重要内容 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const xStore = useStore()

const clickTab = async () => {
  //点击标签 跳转至 对应 路由
  // console.log('active', xStore.state.activeIndex);
  router.push(xStore.state.activeIndex)
}

const removeTab = (name) => {
  xStore.commit('deleteTab', name)
  if (xStore.state.activeIndex === name) {
    //如果选中状态的标签被删除
    //重新设置激活的标签 并 跳转 对应路由
    if (xStore.state.openTab.length >= 1) {
      xStore.commit(
        'setActiveTab',
        xStore.state.openTab[xStore.state.openTab.length - 1].name
      )
      router.push({
        path: xStore.state.openTab[xStore.state.openTab.length - 1].name,
      })
    } else {
      xStore.commit('addTab', { title: '首页', name: 'home' })
      xStore.commit('setActiveTab', 'home')
      router.push('home')
    }
  }
}

const signOut = () => {
  xStore.state.openTab = []
  sessionStorage.removeItem('state')
}

onMounted(() => {
  xStore.commit('setActiveTab', route.meta.activeMenu)
  console.log(route.meta)
  if (route.path == 'user-system/home') {
    console.log(route.path)
  }
})
</script>

<style lang="css" scoped>
.common-layout {
  margin: -8px;
}

.tabs-box {
  padding: 0;
}

.circle {
  height: 30px;
  width: 30px;
  border-radius: 50cqb;
  background-color: #006eff;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
}

.header {
  margin-left: 20px;
  width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-header {
  font-size: 22px;
  color: #006eff;
}

span {
  width: 300px;
  font-size: 15px;
  color: #778187;
}
span:hover {
  color: #006eff;
}

.menu-item:hover {
  color: #006eff;
}

.menu-item {
  font-size: 15px;
  color: #778187;
  background-color: #f7f7f7;
}
.nav {
  width: 20%;
}

.content {
  width: 80%;
  height: 500px;
  background-color: #fff;
}

.blue {
  width: 100%;
  height: 60px;
  background-color: #006eff;
}

.sign-out {
  position: absolute;
  right: 15px;
  top: 12px;
}

.nav-left {
  float: left;
}

.nav-right {
  float: right;
}

.sub-nav span {
  font-size: 17px;
  padding: 15px;
  height: 50px;
  width: 50px;
  line-height: 50px;
  /* display: inline-block; */
  border-left: 0;
  border-right: 1px solid #e4e4e4;
}

.update {
  padding-right: 10px;
  font-size: 17px;
}
</style>
