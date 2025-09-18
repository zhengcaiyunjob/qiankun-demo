<template>
  <div class="layout-container">
    <!-- Header部分 -->
    <header class="app-header">
      <div class="header-left">
        <h1>统一应用平台</h1>
      </div>
      <div class="header-right">
        <span class="username">欢迎，管理员</span>
        <button class="logout-btn" @click="handleLogout">退出</button>
      </div>
    </header>

    <div class="main-content">
      <!-- Sidebar部分 -->
      <aside class="app-sidebar">
        <nav class="sidebar-nav">
          <ul>
            <li
              v-for="item in menuItems"
              :key="item.key"
              :class="{ active: isActive(item.path) }"
              @click="navigateTo(item.path)"
            >
              <span class="menu-icon">{{ item.icon }}</span>
              <span class="menu-text">{{ item.title }}</span>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- 主内容区域 -->
      <main class="app-main">
        <div id="subapp-viewport"></div>
        <MicroApp v-if="!hasSubApp" />
      </main>
    </div>
  </div>
</template>

<script>
import { menuItems, microApps } from '../config/apps'
import MicroApp from '../views/MicroApp.vue'

export default {
  name: 'Layout',
  components: {
    MicroApp
  },
  data() {
    return {
      menuItems,
      currentPath: '/',
      currentMicroApp: null,
      microAppUnmounting: false,// 标记是否正在卸载微应用
      microApps: {}, // 存储所有微应用实例
      cachedApps: new Map(), // 缓存已加载的应用
      activeApp: null // 当前活跃应用

    }
  },
  computed: {
    hasSubApp() {
      return this.$route.path !== '/'
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path.startsWith(path)
    },
    navigateTo(path) {
      console.log('加载子应用:', path)
      // 直接加载子应用到subapp-viewport，不进行路由跳转
      this.loadMicroApp(path)
    },
    // 显示已缓存的应用
    showCachedApp(appKey) {
      if (this.activeApp) {
        this.hideApp(this.activeApp)
      }

      // 显示缓存的应用容器
      const appContainer = this.cachedApps.get(appKey)
      if (appContainer) {
        appContainer.style.display = 'block'
        this.activeApp = appKey
      }
    },
    // 隐藏应用（但不卸载）
    hideApp(appKey) {
      const appInstance = this.microApps[appKey]
      if (appInstance) {
        // 创建应用容器副本用于缓存
        const originalContainer = document.getElementById('subapp-viewport')
        const clonedContainer = originalContainer.cloneNode(true)
        clonedContainer.style.display = 'none'

        // 保存到缓存
        this.cachedApps.set(appKey, clonedContainer)

        // 清空原始容器
        originalContainer.innerHTML = ''
      }
    },
    
    // 加载微应用到主容器
    async loadMicroApp(path) {
      console.log('加载子应用:', path)
      const appName = path.replace('/', '');
      const appkey = `${appName}-app`;
      // 如果应用已缓存，直接显示
      if (this.cachedApps.has(appkey)) {
        this.showCachedApp(appkey)
        this.currentPath = path
        return
      }
      // 隐藏当前活跃应用
      if (this.activeApp) {
        this.hideApp(this.activeApp)
      }

      // 1. 首先清理之前可能存在的应用
      await this.cleanSubAppContainer(); // 确保等待卸载完成

      // 2. 从配置中获取应用信息 (确保 microApps 已定义并导入)
      const appConfig = microApps.find(app => app.name === `${appName}-app`)

      if (appConfig) {
        try {
          // 3. 使用 qiankun 加载微应用
          const { loadMicroApp } = await import('qiankun')

          // 存储当前应用实例以便后续卸载
          this.currentMicroApp = loadMicroApp({
            name: appConfig.name,
            entry: appConfig.entry,
            container: '#subapp-viewport', // 确保容器存在
            props: {
              routerBase: path,
              standalone: true
            }
          }, {
            // 可选：配置单个应用的生命周期超时时间
            timeouts: {
              bootstrap: {
                millis: 10000, // 延长 bootstrap 超时时间至 10 秒
                rejectOnTimeout: false // 超时后不拒绝，继续等待
              }
            }
          });

          // 更新当前路径状态
          this.currentPath = path
        } catch (error) {
          console.error('加载子应用失败:', error)
        }
      } else {
        console.error('未找到应用配置:', appName)
      }
    },
    
    // 清理子应用容器
    async cleanSubAppContainer() {
      // 卸载现有微应用
      if (this.currentMicroApp) {
        try {
          // 等待卸载完成
          await this.currentMicroApp.unmount();
          this.currentMicroApp = null;
        } catch (error) {
          console.warn('卸载应用时发生错误:', error);
        }
      }

      // 清理 DOM 容器
      const container = document.getElementById('subapp-viewport');
      if (container) {
        container.innerHTML = '';
      }
    },
    handleLogout() {
      console.log('退出系统')
      // 这里实现退出逻辑
      alert('退出系统功能')
    }
  }
}
</script>

<style scoped>
.layout-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  height: 60px;
  background: #001529;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid #f0f0f0;
}

.header-left h1 {
  margin: 0;
  font-size: 18px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.username {
  font-size: 14px;
}

.logout-btn {
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.logout-btn:hover {
  background: #ff7875;
}

.main-content {
  flex: 1;
  display: flex;
}

.app-sidebar {
  width: 200px;
  background: #001529;
  color: white;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sidebar-nav li:hover {
  background: #1890ff;
}

.sidebar-nav li.active {
  background: #1890ff;
}

.menu-icon {
  font-size: 14px;
}

.menu-text {
  font-size: 14px;
}

.app-main {
  flex: 1;
  padding: 16px;
  background: #f0f2f5;
}

</style>