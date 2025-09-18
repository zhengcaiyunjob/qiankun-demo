import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let instance = null
let router = null

function render(props = {}) {
  const { container, routerBase } = props
  console.log('window >>>', window)
  console.log('__POWERED_BY_QIANKUN__ >>>', qiankunWindow.__POWERED_BY_QIANKUN__)
  
  // 修复路由基础路径配置并标准化为以斜杠结尾
  const normalizedBase = routerBase
    ? (routerBase.endsWith('/') ? routerBase : `${routerBase}/`)
    : '/vue3/'
  const base = qiankunWindow.__POWERED_BY_QIANKUN__ ? normalizedBase : '/'
  console.log('vue3 base >>>', base)

  // 创建路由实例
  router = createRouter({
    history: createWebHistory(base),
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About }
    ]
  })

  // 修复容器元素获取逻辑：确保在传入的 container 内存在 #vue3-app 容器
  let containerElement
  if (container) {
    containerElement = container.querySelector('#vue3-app')
    if (!containerElement) {
      containerElement = document.createElement('div')
      containerElement.id = 'vue3-app'
      container.appendChild(containerElement)
    }
  } else {
    containerElement = document.querySelector('#vue3-app') || '#vue3-app'
  }
  
  console.log('containerElement >>>', containerElement)

  // 创建Vue应用
  instance = createApp(App)
  instance.use(router)
  instance.mount(containerElement)
}

// 修复生命周期配置
const qiankunConfig = {
  async bootstrap(props) {
    console.log('[vue3] vue app bootstraped', props)
  },
  async mount(props) {
    console.log('[vue3] props from main framework mount', props)
    render(props)
  },
  async unmount(props) {
    console.log('[vue3] unmount', props)
    if (instance) {
      instance.unmount()
      instance = null
    }
    if (router) {
      router = null
    }
    // 清理容器内容
    const parent = props && props.container ? props.container : document
    const el = parent.querySelector ? parent.querySelector('#vue3-app') : null
    if (el && el.innerHTML) {
      el.innerHTML = ''
    }
  },
  async update(props) {
    console.log('[vue3] update', props)
  }
}

// 使用 renderWithQiankun 包装
renderWithQiankun(qiankunConfig)

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

// 确保生命周期函数被正确暴露到全局
export const bootstrap = qiankunConfig.bootstrap
export const mount = qiankunConfig.mount
export const unmount = qiankunConfig.unmount
export const update = qiankunConfig.update