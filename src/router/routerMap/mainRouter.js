const layout = () => import('@/layout/adminLayout/AdminLayout')
const pageView = () => import('@/layout/adminLayout/PageView')
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
        component: layout,
        redirect: '/login'
    },

    // =========================== 首页 - 工作面板 ====================================
    dashboard: {
        name: 'dashboard',
        meta: {
            title: 'Dashboard'
        },
        component: pageView
    },

    workplace: {
        name: 'workplace',
        meta: {
            title: '工作台'
        },
        component: () => import('@/view/dashboard/WorkPlace')
    },
}