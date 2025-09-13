<template>
  <div class="micro-app-container">
    <div v-if="!isMicroAppLoaded" class="loading-state">
      <h2>欢迎使用统一应用平台</h2>
      <p>请从左侧菜单选择要访问的子应用</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MicroApp',
  data() {
    return {
      isMicroAppLoaded: false
    }
  },
  mounted() {
    // 监听qiankun应用加载状态
    this.checkMicroAppStatus()
  },
  methods: {
    checkMicroAppStatus() {
      // 检查当前是否有微应用加载
      const subappContainer = document.getElementById('subapp-viewport')
      this.isMicroAppLoaded = subappContainer && subappContainer.children.length > 0
    }
  }
}
</script>

<style scoped>
.micro-app-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-state {
  text-align: center;
  color: #666;
}

.loading-state h2 {
  margin-bottom: 16px;
  color: #1890ff;
}
</style>