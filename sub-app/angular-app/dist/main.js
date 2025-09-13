import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// 微前端生命周期函数
let app = null;
// 导出qiankun生命周期函数
export async function bootstrap() {
    console.log('Angular应用启动');
}
export async function mount(props) {
    console.log('Angular应用挂载', props);
    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .then(module => {
        app = module;
    })
        .catch(err => console.error('Angular启动失败', err));
}
export async function unmount(props) {
    console.log('Angular应用卸载', props);
    if (app) {
        app.destroy();
        app = null;
    }
}
// 独立运行模式
if (!window.__POWERED_BY_QIANKUN__) {
    bootstrap().then(() => mount({}));
}
