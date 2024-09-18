<template>
  <div class="container">  
    <el-button class="add_len">添加</el-button>  
  </div>  
  <el-card class="box-card" style="width: 97%;">
  <el-table :data="filterTableData" style="width: 100%;" :show-header = "false" size = "large">
    <el-table-column prop="name"/>
    <el-table-column align="right">
      <template #default="scope">
        <el-button  
        @click="handleEdit(scope.$index, scope.row)" 
        class="add_lener"  
        :type ="someCondition ? 'primary' : ''"  >
          编辑
        </el-button>
        <el-button 
        @click="handleDelete(scope.$index, scope.row)"
        class="add_len"
        type="danger"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const someCondition = false
interface User {
  //date: string
  name: string
  //address: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    name: '推文1',
  },
  {
    name: '推文2',
  },
  {
    name: '推文3',
  },
  {
    name: '推文4',
  },
]
</script>

<style scoped>
.container{
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  margin-right: 53px;
}
.add_len {
  width: 80px;
}
.add_lener {
  width: 120px;
  margin-right: 35px;
}
.box-card {
  margin-top: 25px;
  margin-left: 25px;
  padding: 0;
}
.box-card :deep(.el-table__row) {  
  height: 70px;
} 
.box-card :deep(.el-card__body) {  
 padding:0 20px;
} 

</style>