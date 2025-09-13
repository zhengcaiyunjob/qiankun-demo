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

  // 创建路由实例
  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/'),
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/vue3', component: Home }
    ]
  })

  // 创建Vue应用
  instance = createApp(App)
  instance.use(router)
  instance.mount(container ? container.querySelector('#vue3-app') : '#vue3-app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// qiankun生命周期函数
export async function bootstrap() {
  console.log('[vue3] vue app bootstraped')
  return new Promise((resolve, reject) => {
    try {
      // 模拟一些异步初始化工作，例如初始化SDK、加载必要配置等
      setTimeout(() => {
        console.log('bootstrap completed');
        resolve(); // 明确调用 resolve 表示成功
      }, 10);
    } catch (err) {
      console.error('Bootstrap error:', err);
      reject(err); // 如果发生错误，明确调用 reject
    }
  });
}

export async function mount(props) {
  console.log('[vue3] props from main framework', props);
  return new Promise((resolve, reject) => {
    try {
      // 必须调用 render 函数来挂载应用
      render(props);
      // 假设渲染是同步完成的，直接resolve
      // 如果你的mount有真正的异步操作（如获取数据），应在其完成后resolve
      setTimeout(() => {
        console.log('mount completed');
        resolve();
      }, 1000);
    } catch (err) {
      console.error('Mount error:', err);
      reject(err);
    }
  });
}

export async function unmount() {
  if (instance) {
    instance.unmount()
    instance = null
    router = null
  }
}
