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
        <!-- 侧边==导航栏 -->
        <el-menu
          :default-active="this.$route.name"
          class="el-menu-vertical-demo"
          @click="handleMenuOpen(this.$route.name, this.$route.path)"
          style="user-select: none; min-height: calc(100% - 60px)"
          router
        >
          <!-- (index) 首页 1  || 考核管理 2 -> 人员管理 2-1 | 考核管理 2-2 | 预约管理 2-3 | 公告设置 2-4 || 信息管理 3 -> 团队管理 3-1 | 组别管理 3-2 | 项目介绍 3-3 | 精选推文 3-4 || -->
          <el-menu-item index="home">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><User /></el-icon>
              <span>考核管理</span>
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
          <el-sub-menu index="3">
            <template #title>
              <el-icon><Message /></el-icon>
              <span>信息管理</span>
            </template>

            <el-menu-item class="menu-item" index="group-intro"
              >团队介绍</el-menu-item
            >
            <el-menu-item class="menu-item" index="team-intro"
              >组别介绍</el-menu-item
            >
            <el-menu-item class="menu-item" index="project-intro"
              >项目介绍</el-menu-item
            >
            <el-menu-item class="menu-item" index="selected-post"
              >精选推文</el-menu-item
            >
          </el-sub-menu>
          <el-menu-item index="account-management">
            <el-icon><User /></el-icon>
            <span>账号管理</span>
          </el-menu-item>
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

<script>
import { SwitchButton } from '@element-plus/icons'
export default {
  data() {
    return {
      goRouter: '',
      isCommen: false,
      menuTitle: '',

      tabIndex: 1,
      editableTabsValue:
        JSON.parse(sessionStorage.getItem('editableTabsValue')) || 'home',
      editableTabs: JSON.parse(sessionStorage.getItem('editableTabs')) || [
        {
          title: '首页',
          name: 'home',
          content: '',
        },
      ],
    }
  },
  methods: {
    handleMenuOpen(keyPath, Path) {
      //回调函数 -- 点击菜单 -> 增加标签页
      this.isCommen = false
      let activeName = this.editableTabsValue
      let tabs = this.editableTabs
      this.editableTabsValue = activeName
      //相同标签页直接跳回去
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].name === keyPath) {
          activeName = i
          this.isCommen = true
          this.editableTabsValue = keyPath
          break
        }
      }
      sessionStorage.setItem(
        'editableTabsValue',
        JSON.stringify(this.editableTabsValue)
      )
      if (this.isCommen) return
      console.log(this.isCommen)

      switch (keyPath) {
        case 'home':
          this.menuTitle = '首页'
          break
        case 'person-management':
          this.menuTitle = '人员管理'
          break
        case 'evalution-management':
          this.menuTitle = '考核管理'
          break
        case 'appointment-management':
          this.menuTitle = '预约管理'
          break
        case 'announcement-management':
          this.menuTitle = '公告设置'
          break
        case 'group-intro':
          this.menuTitle = '团队介绍'
          break
        case 'team-intro':
          this.menuTitle = '组别介绍'
          break
        case 'project-intro':
          this.menuTitle = '项目介绍'
          break
        case 'selected-post':
          this.menuTitle = '精选推文'
          break
        case 'account-management':
          this.menuTitle = '账号管理'
          break
        default:
          this.menuTitle = keyPath // Fallback to keyPath if not matched
          break
      }
      console.log(this.menuTitle)
      this.editableTabs.push({
        title: this.menuTitle,
        name: keyPath,
        content: '',
      })
      this.editableTabsValue = keyPath
      this.activeMenu = keyPath
    },
    handleMenuClose(key, keyPath) {
      //回调函数 -- 关闭菜单
      console.log(key, keyPath)
    },
    clickTab(key) {
      this.goRouter = key['props'].name
      this.$router.push(this.goRouter)
      this.editableTabsValue = this.goRouter
    },
    removeTab(targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.$router.push(activeName)
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
    },
  },
  mounted: function () {
    this.activeMenu = 'home'
  },
  watch: {
    editableTabsValue: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem('editableTabsValue', JSON.stringify(newValue))
      },
    },
    editableTabs: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem('editableTabs', JSON.stringify(newValue))
      },
    },
  },
}
</script>

<style lang="css" scoped>
.common-layout {
  margin: -8px;
}
.menu-item {
  background-color: #f7f7f7;
}
.tabs-box {
  padding: 0;
}

.el-icon {
  cursor: pointer;
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
  font-size: 18px;
  font-weight: 400;
  color: #006eff;
}

.blue {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #006eff;
}

.sign-out {
  position: absolute;
  right: 15px;
  top: 12px;
}

.menu-item {
  margin-left: 10px;
}
</style>
