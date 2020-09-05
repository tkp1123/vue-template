// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import { Message } from 'element-ui'
import store from './store'
require('../mock')

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
//配置请求的根路径
// axios.defaults.baseURI = ''
// axios.interceptors.request.use(function (config) {
//   console.log(config);
//   config.headers.Authorization = window.sessionStorage.getItem('token');
//   return config;
// })
Vue.config.$http = axios
Vue.prototype.$message = Message;

//.prettierrc 文件的作用是校正代码中不符合eslint 语法的问题,代码写完保存的时候,自动转换为符合的语法
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
