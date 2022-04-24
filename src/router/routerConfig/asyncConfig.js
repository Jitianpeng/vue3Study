import { parseRoutes } from "@/utils/routerApi"

// 异步路由配置
const asyncConfig = [
    'login',
    'root',
]

const options = {
    routes: parseRoutes(asyncConfig)
}

export default options