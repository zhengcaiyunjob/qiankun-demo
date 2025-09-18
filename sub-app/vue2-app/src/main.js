import './public-path'
import Vue from 'vue'
import App from './App.vue'
import router from './router'


let instance = null

function render(props = {}) {
  const { container } = props
  // 确保在传入的 container 内存在 #vue2-app 容器
  let mountEl
  if (container) {
    mountEl = container.querySelector('#vue2-app')
    if (!mountEl) {
      mountEl = document.createElement('div')
      mountEl.id = 'vue2-app'
      container.appendChild(mountEl)
    }
  } else {
    mountEl = '#vue2-app'
  }

  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(mountEl)
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// qiankun生命周期函数
export async function bootstrap() {
  console.log('[vue2] vue app bootstraped')
  
}

export async function mount(props) {
  console.log('[vue2] props from main framework', props)
  render(props)
}

export async function unmount() {
  if (instance) {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
  }
}