import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'

/**
 * 路由配置
 * 主应用路由主要负责布局和微应用占位
 * 具体微应用内容由qiankun框架处理
 */
const routes = [
  {
    path: '/',
    component: Layout,
    // redirect: '/vue2', // 默认重定向到Vue2应用
    children: [
      // 合并精确匹配和通配符路由
      { 
        path: '/vue2/:pathMatch(.*)*', 
        component: () => import('../views/MicroApp.vue'),
        meta: { title: 'Vue2应用' }
      },
      { 
        path: '/vue3/:pathMatch(.*)*', 
        component: () => import('../views/MicroApp.vue'),
        meta: { title: 'Vue3应用' }
      },
      { 
        path: '/angular/:pathMatch(.*)*', 
        component: () => import('../views/MicroApp.vue'),
        meta: { title: 'Angular应用' }
      }
    ]
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router