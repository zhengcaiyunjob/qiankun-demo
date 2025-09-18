<template>
  <div class="home">
    <h3>Vue3子应用 - 首页</h3>
    <p>示例表单（切换页面后内容保留）</p>

    <form class="form-card" @submit.prevent>
      <div class="form-row">
        <label for="name">姓名</label>
        <input id="name" v-model="form.name" placeholder="请输入姓名" />
      </div>
      <div class="form-row">
        <label for="email">邮箱</label>
        <input id="email" v-model="form.email" placeholder="请输入邮箱" />
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      form: {
        name: '',
        email: ''
      },
      storageKey: null
    }
  },
  created() {
    // 不使用本地存储，由主应用缓存实例保持状态
  },
  watch: {
    form: {
      handler() {
        // no-op
      },
      deep: true
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.home {
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.home h3 {
  color: #6366f1;
  text-align: center;
  font-size: 28px;
  margin-bottom: 16px;
}

.home > p {
  text-align: center;
  color: #6b7280;
  font-size: 16px;
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.feature-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.feature-card h4 {
  margin: 0 0 12px 0;
  color: #1f2937;
  font-size: 18px;
}

.feature-card p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
}

.tech-stack {
  background: #f8fafc;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.tech-stack h4 {
  margin: 0 0 16px 0;
  color: #1f2937;
  text-align: center;
}

.tech-list {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.tech-tag {
  background: #6366f1;
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}
</style>