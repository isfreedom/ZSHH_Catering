// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/index.scss' // global css
import '@/icons' // icon
import 'es6-promise/auto'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
// 移除移动端页面点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
