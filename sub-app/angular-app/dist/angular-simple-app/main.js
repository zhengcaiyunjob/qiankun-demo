// 简化的Angular应用 - 纯JavaScript实现
(function() {
  'use strict';
  
  // 微前端生命周期函数
  window.simpleAngularApp = {
    bootstrap: function() {
      console.log('Angular简单应用启动');
      return Promise.resolve();
    },
    
    mount: function(props) {
      console.log('Angular简单应用挂载', props);
      renderApp();
      return Promise.resolve();
    },
    
    unmount: function(props) {
      console.log('Angular简单应用卸载', props);
      const appElement = document.getElementById('simple-angular-app');
      if (appElement) {
        appElement.remove();
      }
      return Promise.resolve();
    }
  };
  
  // 渲染应用
  function renderApp() {
    const appElement = document.createElement('div');
    appElement.id = 'simple-angular-app';
    appElement.innerHTML = `
      <div class="angular-app" style="
        padding: 20px;
        font-family: Arial, sans-serif;
      ">
        <h2>Angular简单应用示例</h2>
        <div class="nav" style="margin: 20px 0;">
          <button onclick="showView('home')" style="
            margin-right: 10px;
            padding: 8px 16px;
            background: #007acc;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          ">首页</button>
          <button onclick="showView('about')" style="
            padding: 8px 16px;
            background: #007acc;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          ">关于</button>
        </div>
        <div id="content" style="
          margin-top: 20px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        "></div>
      </div>
    `;
    
    document.body.appendChild(appElement);
    
    // 默认显示首页
    showView('home');
  }
  
  // 显示不同视图
  window.showView = function(view) {
    const content = document.getElementById('content');
    if (!content) return;
    
    if (view === 'home') {
      content.innerHTML = `
        <div>
          <h3>欢迎使用Angular应用</h3>
          <p>这是一个简单的Angular子应用示例，集成到qiankun微前端框架中。</p>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li style="margin: 5px 0;">✅ 使用纯JavaScript实现</li>
            <li style="margin: 5px 0;">✅ 支持微前端生命周期</li>
            <li style="margin: 5px 0;">✅ 独立运行和集成模式</li>
          </ul>
        </div>
      `;
    } else {
      content.innerHTML = `
        <div>
          <h3>关于这个应用</h3>
          <p>技术栈：纯JavaScript + HTML</p>
          <p>运行端口：7104</p>
          <p>构建方式：无需编译，直接运行</p>
        </div>
      `;
    }
  };
  
  // 独立运行模式
  if (!window.__POWERED_BY_QIANKUN__) {
    window.simpleAngularApp.bootstrap().then(function() {
      window.simpleAngularApp.mount({});
    });
  }
  
})();