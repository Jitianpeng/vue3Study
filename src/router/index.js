import { createRouter, createWebHashHistory } from 'vue-router'

function initRouter(isAsync) {
    const options = isAsync ? require('@/router/routerConfig/asyncConfig').default : require('@/router/routerConfig/config').default
    options.history = createWebHashHistory() // 路由模式 - 哈希模式
    return createRouter(options)
}

export {
    initRouter
}