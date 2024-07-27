<template>
<router-view />
</template>

<script setup>
// import axios from "axios";
import { useStore } from "vuex";
// import router from "./router";
import { onMounted } from "vue";
const store = useStore();

onMounted(() => {
  window.addEventListener("unload", saveState); //刷新之前完成保存vuex数据
  console.log("store.state.islogin", store.state.islogin);
});

const saveState = () => {
  console.log("store.state.islogin", store.state.islogin);
  if (store.state.islogin == true) {
    console.log("saveState:islogin == true");
    sessionStorage.setItem("state", JSON.stringify(store.state));
  } else {
    return;
  }
};
</script>

<style scoped>

</style>
