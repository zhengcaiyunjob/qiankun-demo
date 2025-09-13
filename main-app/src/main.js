import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, initGlobalState, start } from 'qiankun'
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

// 注册qiankun微应用
registerMicroApps(microApps, {
  beforeLoad: (app) => {
    console.log('before load', app.name)
    return Promise.resolve()
  },
  beforeMount: (app) => {
    console.log('before mount', app.name)
    return Promise.resolve()
  },
  beforeUnmount: (app) => {
    console.log('before unmount', app.name)
  }
})

// 启动qiankun
start({
  sandbox: {
    experimentalStyleIsolation: true
  }
})

app.use(router)
app.mount('#app')