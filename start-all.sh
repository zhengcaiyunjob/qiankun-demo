#!/bin/bash

# 定义需要检查的端口数组
PORTS=(3000 7104 7105 7106)
echo "🔍 检查端口占用情况..."

# 函数：检查并释放指定端口
check_and_free_port() {
    local PORT=$1
    # 使用 lsof 查找占用端口的进程PID [1,2](@ref)
    local PROCESS=$(lsof -ti :$PORT)
    
    if [ -n "$PROCESS" ]; then
        echo "  端口 $PORT 被进程 $PROCESS 占用，正在释放..."
        # 终止进程 [1,2](@ref)
        kill -9 $PROCESS 2>/dev/null
        sleep 1 # 稍作等待
        
        # 再次检查是否成功终止
        if lsof -ti :$PORT >/dev/null; then
            echo "⚠️  无法释放端口 $PORT，请手动处理"
            return 1
        else
            echo "✅ 端口 $PORT 已成功释放"
        fi
    else
        echo "✅ 端口 $PORT 未被占用"
    fi
}

# 检查并释放所有需要的端口
for port in "${PORTS[@]}"; do
    check_and_free_port $port
done

echo ""
echo "🚀 启动统一应用平台..."

# 启动主应用
echo "📦 启动主应用 (端口: 3000)"
cd main-app
npm install
npm run dev &

# 等待主应用启动
sleep 3

# 启动Vue2子应用
echo "📦 启动Vue2子应用 (端口: 7105)"
cd ../sub-app/vue2-app
npm install
npm run dev &

# 启动Vue3子应用
echo "📦 启动Vue3子应用 (端口: 7106)"
cd ../vue3-app
npm install
npm run dev &

# 启动Angular子应用
echo "📦 启动Angular子应用 (端口: 7104)"
cd ../angular-app
npm install
npm start &

echo ""
echo "✅ 所有应用已启动！"
echo "🌐 主应用: http://localhost:3000"
echo "🔗 Vue2子应用: http://localhost:7105"
echo "🔗 Vue3子应用: http://localhost:7106"
echo "🔗 Angular子应用: http://localhost:7104"