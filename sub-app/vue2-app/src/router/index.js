import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const isQiankun = window.__POWERED_BY_QIANKUN__

export default new Router({
  mode: isQiankun ? 'abstract' : 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }
  ]
})