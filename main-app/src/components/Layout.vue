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
      </main>
    </div>
  </div>
</template>

<script>
import { menuItems, microApps } from '../config/apps'
import { loadMicroApp } from 'qiankun'

export default {
  name: 'Layout',
  data() {
    return {
      menuItems,
      currentMicroApp: null,

    }
  },
  watch: {},

  methods: {
    isActive(path) {
      return this.$route.path.startsWith(path)
    },
    navigateTo(path) {
      // 确保路径以/开头
      const normalizedPath = path.startsWith('/') ? path : `/${path}`
      console.log('Navigating to:', normalizedPath)
      this.$router.push(normalizedPath).catch(err => {
        console.log('Router push error:', err)
      })
    },
    handleLogout() {
      console.log('退出系统')
      // 这里实现退出逻辑
      alert('退出系统功能')
    },
    
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

#subapp-viewport {
  height: 100%;
}
</style>