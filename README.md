# 统一应用平台 - 微前端解决方案

基于qiankun框架构建的统一应用平台，集成Vue2、Vue3、Angular等多种技术栈的子应用。

## 🏗️ 项目结构

```
qiankun/
├── main-app/          # 主应用 (Vue3 + Vite)
├── sub-app/          # 子应用目录
│   ├── vue2-app/     # Vue2 + Webpack5 子应用
│   ├── vue3-app/     # Vue3 + Vite 子应用
│   └── angular-app/  # Angular 16 子应用
├── start-all.sh      # 一键启动脚本
└── README.md         # 项目说明
```

## 🚀 快速开始

### 方式一：一键启动所有应用

```bash
# 给启动脚本添加执行权限
chmod +x start-all.sh

# 运行启动脚本
./start-all.sh
```

### 方式二：分别启动各个应用

```bash
# 1. 启动主应用 (端口: 3000)
cd main-app
npm install
npm run dev

# 2. 启动Vue2子应用 (端口: 7101)
cd sub-app/vue2-app
npm install
npm run dev

# 3. 启动Vue3子应用 (端口: 7102)
cd sub-app/vue3-app
npm install
npm run dev

# 4. 启动Angular子应用 (端口: 7103)
cd sub-app/angular-app
npm install
npm start
```

## 🌐 访问地址

- **主应用**: http://localhost:3000
- **Vue2子应用**: http://localhost:7101
- **Vue3子应用**: http://localhost:7102  
- **Angular子应用**: http://localhost:7103

## 🛠️ 技术栈说明

### 主应用
- **框架**: Vue 3.3.4
- **构建工具**: Vite 4.4.5
- **微前端**: Qiankun 2.10.16
- **路由**: Vue Router 4

### Vue2子应用
- **框架**: Vue 2.7.14
- **构建工具**: Webpack 5
- **路由**: Vue Router 3
- **运行端口**: 7101

### Vue3子应用  
- **框架**: Vue 3.3.4
- **构建工具**: Vite 4.4.5
- **路由**: Vue Router 4
- **运行端口**: 7102

### Angular子应用
- **框架**: Angular 16.2.0
- **构建工具**: Angular CLI
- **语言**: TypeScript 5.1
- **运行端口**: 7103

## 📋 功能特性

### 🎯 统一平台
- 集成多种技术栈的子应用
- 统一的导航和用户界面
- 集中式的用户认证和权限管理

### 🔗 微前端能力
- 应用间完全隔离
- 独立开发、独立部署
- 动态加载和卸载子应用
- 样式和JavaScript沙箱隔离

### 🎨 用户体验
- 响应式设计
- 统一的主题和样式
- 流畅的应用切换体验
- 加载状态提示

## 🚦 开发指南

### 添加新的子应用

1. 在 `sub-app/` 目录下创建新的子应用
2. 在 `main-app/src/config/apps.js` 中注册子应用配置：
```javascript
{
  name: 'your-app-name',
  entry: '//localhost:端口号',
  container: '#subapp-viewport',
  activeRule: '/your-app-path'
}
```

3. 在菜单配置中添加导航项

### 子应用开发要求

每个子应用需要导出以下生命周期函数：

```javascript
export async function bootstrap() {
  // 应用初始化
}

export async function mount(props) {
  // 应用挂载
}

export async function unmount() {
  // 应用卸载
}
```

## 🐛 常见问题

### Q: 子应用无法加载？
A: 检查子应用是否正常启动，端口是否正确配置。

### Q: 样式冲突？
A: Qiankun提供了样式隔离机制，确保子应用样式不会影响主应用。

### Q: 路由问题？
A: 确保子应用的路由base与activeRule配置一致。

## 📝 版本信息

- Node版本要求: 
  - 主应用: Node 14+
  - Vue2子应用: Node 12+
  - Vue3子应用: Node 14+  
  - Angular子应用: Node 16+

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📄 许可证

MIT License