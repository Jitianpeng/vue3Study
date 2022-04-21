import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { useAntComponent } from '@/utils/useAntComponent'

// 创建vue全局实例
const app = createApp(App)

// 按需引入 ant-design-vue 组件
useAntComponent(app)

app
.use(router)
.mount('#app')
