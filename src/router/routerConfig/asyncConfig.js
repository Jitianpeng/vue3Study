import { parseRoutes } from "@/utils/routerApi"

// 异步路由配置
const asyncConfig = [
    'login',
    'root',
    {
        router: 'root',
        path: '/',
        children: [
            {
                router: 'dashboard',
                path: 'dashboard',
                children: [
                    {
                        path: 'workplace',
                        router: 'workplace'
                    }
                ]
            }
        ]
    }
]

const options = {
    routes: parseRoutes(asyncConfig)
}
console.log(options, 'options--')
export default options