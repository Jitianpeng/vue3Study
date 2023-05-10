import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import { initRouter } from '@/router'
// import { useAntComponent } from '@/utils/useAntComponent'
import {  useAntIcon } from '@/utils/useAntIcon'
import store from './store'
import '@/mock'
import 'ant-design-vue/dist/antd.css'
// 创建vue全局实例
const app = createApp(App)

// 加载默认路由
const router = initRouter()

// 按需引入 ant-design-vue 组件
// useAntComponent(app)

// 按需引入 @ant-design/icons-vue
useAntIcon(app)

app
    .use(Antd)
    .use(router)
    .use(store)
    .mount('#app')
