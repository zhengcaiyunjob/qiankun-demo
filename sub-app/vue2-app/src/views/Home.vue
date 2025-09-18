<template xmlns="http://www.w3.org/1999/html">
  <div class="home">
    <h3>Vue2子应用 - 首页</h3>
    <p>这是基于Vue2 + Webpack5构建的子应用</p>
    <div class="features">
      <div class="feature-card">
        <h4>技术栈</h4>
        <ul>
          <li>Vue 2.7.14</li>
          <li>Webpack 5</li>
          <li>Vue Router 3</li>
        </ul>
      </div>
      <div class="feature-card">
        <h4>特性</h4>
        <ul>
          <li>支持qiankun微前端</li>
          <li>独立开发部署</li>
          <li>与主应用无缝集成</li>
        </ul>
      </div>
    </div>
    <div>
      <label>name</label>
      <input type="text" placeholder="请输入">
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
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.home h3 {
  color: #42b883;
  text-align: center;
}

.features {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  flex: 1;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.feature-card h4 {
  margin-top: 0;
  color: #2c3e50;
}

.feature-card ul {
  padding-left: 20px;
}

.feature-card li {
  margin: 8px 0;
}
</style>