import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/login'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
