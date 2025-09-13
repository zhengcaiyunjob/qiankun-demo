<template>
  <div class="about">
    <h3>关于Vue3子应用</h3>
    <p>这是一个基于Vue3和Vite构建的现代化微前端子应用</p>
    
    <div class="info-cards">
      <div class="info-card">
        <h4>🔄 开发体验</h4>
        <ul>
          <li>极速的HMR热更新</li>
          <li>TypeScript原生支持</li>
          <li>现代化的开发工具链</li>
        </ul>
      </div>
      
      <div class="info-card">
        <h4>🚀 构建性能</h4>
        <ul>
          <li>基于ESBuild的快速构建</li>
          <li>优化的打包输出</li>
          <li>Tree-shaking支持</li>
        </ul>
      </div>
      
      <div class="info-card">
        <h4>🌐 部署信息</h4>
        <ul>
          <li>运行端口: 7102</li>
          <li>构建工具: Vite 4</li>
          <li>打包格式: UMD + ES Modules</li>
        </ul>
      </div>
    </div>

    <div class="integration-info">
      <h4>微前端集成</h4>
      <p>此应用通过qiankun框架与主应用集成，支持：</p>
      <ul>
        <li>独立开发和部署</li>
        <li>样式隔离和JS沙箱</li>
        <li>应用间通信</li>
        <li>路由自动同步</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.about h3 {
  color: #6366f1;
  text-align: center;
  font-size: 28px;
  margin-bottom: 16px;
}

.about > p {
  text-align: center;
  color: #6b7280;
  font-size: 16px;
  margin-bottom: 40px;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.info-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #6366f1;
}

.info-card h4 {
  margin: 0 0 16px 0;
  color: #1f2937;
  font-size: 18px;
}

.info-card ul {
  margin: 0;
  padding-left: 20px;
}

.info-card li {
  margin: 8px 0;
  color: #4b5563;
}

.integration-info {
  background: #f0f9ff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #bae6fd;
}

.integration-info h4 {
  margin: 0 0 16px 0;
  color: #0369a1;
}

.integration-info p {
  margin: 0 0 16px 0;
  color: #0c4a6e;
}

.integration-info ul {
  margin: 0;
  padding-left: 20px;
  color: #0c4a6e;
}

.integration-info li {
  margin: 8px 0;
}
</style>