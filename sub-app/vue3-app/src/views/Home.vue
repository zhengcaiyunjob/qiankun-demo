<template>
  <div class="home">
    <h3>Vue3子应用 - 首页</h3>
    <p>这是基于Vue3 + Vite构建的现代化子应用</p>
    
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h4>极速开发</h4>
        <p>基于Vite的快速冷启动和热更新</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h4>现代架构</h4>
        <p>使用Vue3 Composition API和TypeScript</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🔗</div>
        <h4>微前端集成</h4>
        <p>完美支持qiankun微前端框架</p>
      </div>
    </div>

    <div class="tech-stack">
      <h4>技术栈信息</h4>
      <div class="tech-list">
        <span class="tech-tag">Vue 3.3.4</span>
        <span class="tech-tag">Vite 4.4.5</span>
        <span class="tech-tag">Vue Router 4</span>
        <span class="tech-tag">ES Modules</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
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