<template>
  <div class="addBox" v-if="showPage === 'page2'">
    <div
      style="
        background-color: #f8f8f8;
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
      "
    >
      <p>添加考核</p>
      <el-icon @click="showPage = 'page1'"><CloseBold /></el-icon>
    </div>
    <div style="width: 100%; height: 80%; margin-top: 20px; margin-left: 30px">
      <el-form>
        <el-form-item label="考核名称">
          <el-input placeholder="请输入" style="width: 200px"> </el-input>
        </el-form-item>

        <el-form-item style="width: 500px" label="考核时间">
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="To"
            start-placeholder="2024-06-20"
            end-placeholder="2024-08-20"
          />
        </el-form-item>

        <el-form-item label="考核要求">
          <el-input placeholder="请输入" style="width: 400px; height: 200px">
          </el-input>
        </el-form-item>

        <el-form-item label="文件上传">
          <el-button>上传文件</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div
      style="
        background-color: #f8f8f8;
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      "
    >
      <el-button
        type="primary"
        style="width: 120px; margin-right: 10px"
        @click="showPage = 'page1'"
        >确定</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showPage = ref('page1')
</script>

<style scoped>
.addBox {
  border: 1px solid #e2e2e2;
  width: 800px;
  height: 470px;
  display: flex;
  margin: 70px auto;
  flex-wrap: wrap;
}

.el-icon {
  cursor: pointer;
}
</style>
