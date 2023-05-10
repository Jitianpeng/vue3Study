import { createRouter, createWebHashHistory } from 'vue-router'

function initRouter() {
    const options = require('@/router/routerConfig/asyncConfig').default
    options.history = createWebHashHistory() // 路由模式 - 哈希模式
    return createRouter(options)
}

export {
    initRouter
}