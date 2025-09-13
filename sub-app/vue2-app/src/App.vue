<template>
  <div id="app">
    <div class="navbar">
      <h2>Vue2子应用</h2>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  background: #f0f0f0;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.navbar h2 {
  margin: 0 0 10px 0;
  color: #42b883;
}

.navbar a {
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

.navbar a.router-link-exact-active {
  color: #42b883;
  font-weight: bold;
}
</style>