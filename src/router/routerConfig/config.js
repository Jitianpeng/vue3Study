// 路由配置
const options = {
    routes: [
        {
            path: '/login',
            name: '登录页',
            component: () => import('@/view/login/Login')
        },
        {
            path: '/',
            redirect: '/login'
        },
    ]
}

export default options