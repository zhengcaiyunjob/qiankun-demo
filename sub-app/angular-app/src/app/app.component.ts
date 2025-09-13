import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="angular-app">
      <h2>Angular简单应用示例</h2>
      <div class="nav">
        <button (click)="currentView = 'home'">首页</button>
        <button (click)="currentView = 'about'">关于</button>
      </div>
      
      <div class="content">
        <div *ngIf="currentView === 'home'">
          <h3>欢迎使用Angular应用</h3>
          <p>这是一个简单的Angular子应用示例，集成到qiankun微前端框架中。</p>
          <ul>
            <li>✅ 使用Angular 16开发</li>
            <li>✅ 支持微前端生命周期</li>
            <li>✅ 独立运行和集成模式</li>
          </ul>
        </div>
        
        <div *ngIf="currentView === 'about'">
          <h3>关于这个应用</h3>
          <p>技术栈：Angular + TypeScript</p>
          <p>运行端口：7103</p>
          <p>构建方式：TypeScript编译 + http-server</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .angular-app {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .nav {
      margin: 20px 0;
    }
    .nav button {
      margin-right: 10px;
      padding: 8px 16px;
      background: #007acc;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .nav button:hover {
      background: #005a9e;
    }
    .content {
      margin-top: 20px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    li {
      margin: 5px 0;
    }
  `]
})
export class AppComponent {
  currentView: string = 'home';
}