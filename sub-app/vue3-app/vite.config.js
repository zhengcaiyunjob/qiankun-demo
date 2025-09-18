import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import vueJsx from '@vitejs/plugin-vue-jsx' // 导入 JSX 插件

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vue3/' : '/',
  plugins: [
    vue(),
    vueJsx(), // 添加 JSX 插件
    qiankun('vue3-app', { // 'vue3-app' 需与主应用注册的 name 保持一致
      useDevMode: true
    })],
  server: {
    port: 7106,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*', // 关键配置
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  optimizeDeps: {
    // 可以强制将某些依赖项进行预构建
    include: ['some-cjs-dep'] // 将 'some-cjs-dep' 替换为你项目中实际可能存在的 CommonJS 包名
  },
  build: {
    lib: {
      entry: './src/main.js',
      name: 'vue3-app',
      fileName: 'vue3-app',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})