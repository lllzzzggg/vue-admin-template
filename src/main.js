/*
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-01-08 10:35:19
 * @LastEditors: lzg
 * @LastEditTime: 2020-05-28 15:47:12
 */
import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import Api from './api'

import './icons' // icon

import * as filters from './filters' // global filters
import { isAsyncRoute } from './settings'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

if (isAsyncRoute) {
  require('./router/asyncRoute')
}
import './permission' // permission control

Vue.config.productionTip = false
Vue.prototype.$Api = Api

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
