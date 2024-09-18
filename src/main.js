import { createApp } from "vue";
import store from "./store/index";      //Vuex
import App from "./App.vue";            
import router from "./routes";          //Vue-Router
import ElementPlus from "element-plus"; //ElementUI
import "element-plus/dist/index.css";
import * as ElIcon from "@element-plus/icons";
const app = createApp(App);



Object.keys(ElIcon).forEach((key) => {  //ElementUI-Icon
  app.component(key, ElIcon[key]);
});

app.use(store).use(router).use(ElementPlus).mount("#app");



