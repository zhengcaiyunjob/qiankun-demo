// 菜单功能测试脚本
// 这个脚本验证点击菜单时子应用是否能正确加载到主应用中

const puppeteer = require('puppeteer');

async function testMenuFunction() {
  console.log('🚀 开始测试菜单点击功能...');
  
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    // 1. 访问主应用
    console.log('📋 访问主应用: http://localhost:3002');
    await page.goto('http://localhost:3002', { waitUntil: 'networkidle0' });
    
    // 2. 检查页面标题
    const title = await page.title();
    console.log('📄 页面标题:', title);
    
    // 3. 检查菜单项是否存在
    const menuItems = await page.$$eval('.sidebar-nav li', items => 
      items.map(item => item.textContent.trim())
    );
    console.log('📋 菜单项:', menuItems);
    
    // 4. 测试点击Vue2菜单
    console.log('🖱️  点击Vue2菜单项...');
    await page.click('.sidebar-nav li:nth-child(1)');
    await page.waitForTimeout(2000);
    
    // 5. 检查子应用容器是否被填充
    const subappContent = await page.$eval('#subapp-viewport', el => el.innerHTML);
    console.log('📦 子应用容器内容长度:', subappContent.length);
    
    if (subappContent.length > 0) {
      console.log('✅ Vue2应用加载成功！');
    } else {
      console.log('❌ Vue2应用加载失败');
    }
    
    // 6. 测试点击Vue3菜单
    console.log('🖱️  点击Vue3菜单项...');
    await page.click('.sidebar-nav li:nth-child(2)');
    await page.waitForTimeout(2000);
    
    const vue3Content = await page.$eval('#subapp-viewport', el => el.innerHTML);
    console.log('📦 Vue3应用容器内容长度:', vue3Content.length);
    
    if (vue3Content.length > 0) {
      console.log('✅ Vue3应用加载成功！');
    } else {
      console.log('❌ Vue3应用加载失败');
    }
    
    console.log('🎉 菜单点击功能测试完成！');
    
  } catch (error) {
    console.error('❌ 测试失败:', error.message);
  } finally {
    await browser.close();
  }
}

// 运行测试
testMenuFunction();