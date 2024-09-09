import axios from "axios";
import { ElMessage } from "element-plus";

const server = axios.create({
  baseURL: "api", //请求URL = baseURL + apiURL
  timeout: 5000, //最大5秒，5秒后提示超时
});

//添加请求拦截器
server.interceptors.request.use(
  (config) => {
    //如果请求成功
    return config;
  },
  (error) => {
    //如果请求失败
    return Promise.reject(error);
  }
);

//添加响应拦截器
server.interceptors.response.use(
  (res) => {
    //如果响应成功(2xx内响应码)
    const data = res.data;
    if (data.err !== null) {
      ElMessage({
        message: data.err,
        type: "error",
        duration: 5 * 1000,
      });
      return res;
    }
    ElMessage({
      message: data.msg,
      type: "success",
      duration: 5 * 1000,
    });
    return res;
  },
  (error) => {
    //如果响应失败(2xx外)
    ElMessage({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default server;
