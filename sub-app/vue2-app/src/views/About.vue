<template>
  <div class="about">
    <h3>关于Vue2子应用</h3>
    <p>示例表单（切换页面后内容保留）</p>

    <form class="form-card" @submit.prevent>
      <div class="form-row">
        <label for="company">公司</label>
        <input id="company" v-model="form.company" placeholder="请输入公司" />
      </div>
      <div class="form-row">
        <label for="title">职位</label>
        <input id="title" v-model="form.title" placeholder="请输入职位" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      form: {
        company: '',
        title: ''
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
.about {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.about h3 {
  color: #42b883;
  text-align: center;
}

.form-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  max-width: 520px;
  margin: 0 auto;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.form-row label {
  width: 80px;
  color: #2c3e50;
}

.form-row input {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}
</style>