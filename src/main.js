import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App'
import config from '@/config'
import api from '@/api'
import {
  router
} from './router'

Vue.use(Vant)
/**
 * @description 全局注册baseUrl
 */
Vue.prototype.$baseUrl = config.baseUrl

/**
 * @description 全局注册picUrl
 */
Vue.prototype.$picUrl = config.picUrl

/**
 * @description 全局注册fileUrl
 */
Vue.prototype.$fileUrl = config.fileUrl

/**
 * @description 全局注册ajax
 */
Vue.prototype.$api = api

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});