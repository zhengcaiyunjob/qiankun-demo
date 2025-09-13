<template>
  <div id="app">
    <div class="navbar">
      <h2>Vue3子应用</h2>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
}

.navbar h2 {
  margin: 0 0 10px 0;
  font-weight: 600;
}

.navbar a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  margin: 0 12px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar a:hover,
.navbar a.router-link-active {
  color: #fff;
  text-decoration: underline;
}
</style>