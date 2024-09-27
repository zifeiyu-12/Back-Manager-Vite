<template>
  <div v-if="page === 'page3'">
    <div
      style="
        display: flex;
        flex-direction: row-reverse;
        margin-top: 15px;
        margin-right: 30px;
      "
    >
      <el-button style="width: 80px" @click="page = 'page4'">+添加</el-button>
    </div>
    <div style="margin-top: 25px">
      <el-table :data="annouceList">
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="发布时间" prop="time"></el-table-column>
        <el-table-column label="发布人员" prop="author"></el-table-column>
        <el-table-column label="操作" #default width="380">
          <el-button> 编辑 </el-button>
          <el-button> 删除 </el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>

  <el-card
    style="
      margin-top: 20px;
      margin-left: 15px;
      height: 650px;
      position: relative;
      width: 1200px;
    "
    v-if="page == 'page4'"
  >
    <div style="margin-top: 13px; margin-left: 30px">
      <el-form>
        <el-form-item label="标题：" v-model="title">
          <el-input
            placeholder="请输入"
            style="width: 200px; margin-left: 30px"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容：" v-model="content">
          <el-input
            placeholder="请输入"
            style="width: 500px; height: 200px; margin-left: 30px"
          ></el-input>
        </el-form-item>
        <el-form-item label="添加对象：">
          <el-select
            v-model="value"
            multiple
            placeholder="+ 选择人员"
            style="width: 200px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :lable="item.lable"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div style="position: absolute; bottom: 70px; right: 100px">
      <el-button style="width: 80px; margin-right: 20px" @click="page = 'page3'"
        >取消</el-button
      >
      <el-button type="primary" style="width: 80px" @click="page = 'page3'"
        >确认</el-button
      >
    </div>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const page = ref('page3')
const title = ref('')
const content = ref('')
const value = ref('@')

const options = ref([
  {
    label: 'tinsley',
    value: 'tinsley',
  },
  {
    label: 'haha',
    value: 'haha',
  },
  {
    label: '芳',
    value: '芳',
  },
])
const annouceList = [
  {
    title: '我是公告标题',
    time: '2024-09-27',
    author: '嘻嘻',
  },
]
</script>

<style scoped>
::v-deep .cell {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-right: 1px solid white;
}

.el-table {
  --el-table-header-bg-color: #4095e5;
  --el-table-header-text-color: #ffffff;
}
</style>
