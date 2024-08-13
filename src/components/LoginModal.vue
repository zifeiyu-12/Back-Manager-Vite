<template>
  <div class="body">
    <el-row class="title" justify="center"> 小程序后台管理系统 </el-row>
    <div class="login-modal">
      <el-row justify="center">
        <el-input
          v-model="username"
          style="width: 70%; height: 40px; border-radius: 50%; margin-top: 40px"
          placeholder="请输入账号"
        >
          <template #prefix
            ><el-icon><User /></el-icon
          ></template>
        </el-input>
      </el-row>
      <el-row justify="center">
        <el-input
          v-model="password"
          style="width: 70%; height: 40px; margin-top: 40px"
          type="password"
          placeholder="请输入密码"
          show-password
        >
          <template #prefix
            ><el-icon><Lock /></el-icon
          ></template>
        </el-input>
      </el-row>
      <el-row justify='center' style="margin-top: 40px;">
        <el-button type="primary" :icon="Edit" round style="width: 100px;height: 40px;font-size: 18px;">登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const username = ref("");
const password = ref('');
</script>

<style scoped>
.body {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #5793df;
}
.title {
  margin-top: 180px;
  color: white;
  font-size: 30px;
}
.login-modal {
  display: inline-block;
  position: relative;
  width: 500px;
  height: 300px;
  margin-top: 50px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  left: 50%;
  transform: translateX(-50%);
}
</style>
