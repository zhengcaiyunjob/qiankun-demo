<template>
  <div class="about">
    <h3>关于Vue2子应用</h3>
    <p>这是一个演示用的Vue2子应用，用于展示qiankun微前端的集成能力。</p>
    
    <div class="info-section">
      <h4>应用信息</h4>
      <div class="info-grid">
        <div class="info-item">
          <strong>应用名称:</strong> vue2-app
        </div>
        <div class="info-item">
          <strong>运行端口:</strong> 7101
        </div>
        <div class="info-item">
          <strong>技术框架:</strong> Vue 2.7.14
        </div>
        <div class="info-item">
          <strong>构建工具:</strong> Webpack 5
        </div>
        <div class="info-item">
          <strong>路由模式:</strong> History
        </div>
        <div class="info-item">
          <strong>集成方式:</strong> Qiankun UMD
        </div>
      </div>
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
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.about h3 {
  color: #42b883;
  text-align: center;
}

.info-section {
  margin-top: 30px;
}

.info-section h4 {
  color: #2c3e50;
  border-bottom: 2px solid #42b883;
  padding-bottom: 10px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.info-item {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid #42b883;
}
</style>