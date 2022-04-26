export const mainRouter = {
    login: {
        path: '/login',
        name: 'login',
        meta: {
            title: '登陆'
        },
        component: () => import('@/view/login/Login')
    },

    root: {
        path: '/',
        name: 'root',
        redirect: '/login'
    }
}