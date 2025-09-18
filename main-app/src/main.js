import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initGlobalState } from 'qiankun'
import { microApps } from './config/apps'

// 初始化状态
const actions = initGlobalState({
  user: 'User From Main',
  token: ''
})

// 监听状态变化
actions.onGlobalStateChange((state, prevState) => {
  console.log('主应用: 状态变更', state, prevState)
})

// 导出状态操作，可以传递给子应用或自行使用
export const setGlobalState = (state) => {
  actions.setGlobalState(state)
}

// 创建Vue应用
const app = createApp(App)

app.use(router)
app.mount('#app')

// 由 Layout 组件按需加载与缓存子应用实例