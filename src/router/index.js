import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import user from '@/components/user'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: home,
    component: home
  },
  {
    path: '/user',
    name: user,
    component: user
  }
]

// 创建router 实例
export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
