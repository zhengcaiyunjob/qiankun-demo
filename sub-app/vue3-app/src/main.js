import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let instance = null
let router = null

function render(props = {}) {
  const { container } = props
  const base = window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/'

  // 创建路由实例
  router = createRouter({
    history: createWebHistory(base),
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/vue3', component: Home }
    ]
  })

  // 确保挂载节点存在
  const containerElement = container ? container.querySelector('#vue3-app') : '#vue3-app'

  // 创建Vue应用
  instance = createApp(App)
  instance.use(router)
  instance.mount(containerElement);
}

renderWithQiankun({
  async bootstrap(props) {
    console.log('[vue3] vue app bootstraped', props)
    // 这里通常用于执行一些应用启动之初需要初始化的操作
    // 但注意不要进行任何会返回Promise的异步操作，除非必要
  },
  async mount(props) {
    console.log('[vue3] props from main framework mount', props)
    render(props) // 调用render函数挂载应用
  },
  async unmount(props) {
    console.log('[vue3] unmount', props)
    if (instance) {
      instance.unmount()
      // 清理路由
      if (router) {
        router = null
      }
      instance = null
    }
  },
  async update(props) {
    console.log('[vue3] update', props)
    // 处理更新逻辑（如果需要）
  }
});

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}