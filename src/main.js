import { createApp } from 'vue'
import App from './App.vue'
import { initRouter } from '@/router'
import { useAntComponent } from '@/utils/useAntComponent'
import {  useAntIcon } from '@/utils/useAntIcon'

// 创建vue全局实例
const app = createApp(App)

// 加载默认路由
const router = initRouter(true)

// 按需引入 ant-design-vue 组件
useAntComponent(app)

// 按需引入 @ant-design/icons-vue
useAntIcon(app)

app
.use(router)
.mount('#app')
