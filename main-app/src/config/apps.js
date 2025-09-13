/**
 * 子应用配置
 * 每个子应用需要配置以下信息：
 * - name: 应用名称，必须与子应用package.json中的name保持一致
 * - entry: 子应用入口地址
 * - container: 子应用挂载的DOM节点
 * - activeRule: 激活规则，匹配路由路径
 */

export const microApps = [
  {
    name: 'vue2-app',
    entry: '//localhost:7105',
    container: '#subapp-viewport',
    activeRule: '/vue2',
    props: {
      routerBase: '/vue2'
    }
  },
  {
    name: 'vue3-app',
    entry: '//localhost:7106',
    container: '#subapp-viewport',
    activeRule: '/vue3',
    props: {
      routerBase: '/vue3'
    }
  },
  {
    name: 'angular-app',
    entry: '//localhost:7104',
    container: '#subapp-viewport',
    activeRule: '/angular',
    props: {
      routerBase: '/angular'
    }
  }
]

// 菜单配置
export const menuItems = [
  {
    key: 'vue2',
    title: 'Vue2应用',
    path: '/vue2',
    icon: 'vue'
  },
  {
    key: 'vue3',
    title: 'Vue3应用',
    path: '/vue3',
    icon: 'vue'
  },
  {
    key: 'angular',
    title: 'Angular应用',
    path: '/angular',
    icon: 'angular'
  }
]