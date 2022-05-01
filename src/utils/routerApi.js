import { routerMap } from '@/router/routerMap'

/**
 * 根据 路由配置 和 路由组件注册 解析路由
 * @param routesConfig 路由配置
 */
function parseRoutes(routesConfig) {
    const routes = []
    routesConfig.forEach(item => {
        let router, routeConfig = {}
        if(typeof item === 'string') {
            router = routerMap[item],
            routeConfig = {
                path: router && router.path,
                router: item,
            }
        } else if(typeof item === 'object') {
            router = routerMap[item.router]
            routeConfig = item
        }
        if (!router) {
            console.warn(`can't find register for router ${routeConfig.router}, please register it in advance.`)
            router = typeof item === 'string' ? {path: item, name: item} : item
        }

        // 从config中解析路由
        const configMeta = {
            authority: routeConfig.authority,
            icon: routeConfig.icon,
            page: routeConfig.page,
            link: routeConfig.link,
            params: routeConfig.params,
            query: routeConfig.query,
            ...routeConfig.meta
        }

        // 从router中解析路由
        const routerMeta = {
            authority: router.authority,
            icon: router.icon,
            page: router.page,
            link: router.link,
            params: router.params,
            query: router.query,
            ...router.meta
        }

        // 删除 configMeta 中的空字段
        Object.keys(configMeta).forEach(key => {
            if (configMeta[key] === undefined || configMeta[key] === null || configMeta[key] === '') {
                delete configMeta[key]
            }
        })

        // 合并 meta
        Object.assign(routerMeta, configMeta)

        // 定义路由
        const route = {
            path: routeConfig.path || router.path || routeConfig.router,
            name: routeConfig.name || router.name || routeConfig.router,
            component: router.component,
            redirect: routeConfig.redirect || router.redirect,
            meta: {
                ...routerMeta,
                authority: routerMeta.authority || '*',
            }
        }

        // 路由现实控制
        if (routeConfig.invisible || router.invisible) {
            route.meta.invisible = true
        }

        // 解析子路由
        if (routeConfig.children && routeConfig.children.length > 0) {
            route.children = parseRoutes(routeConfig.children)
        }
        routes.push(route)
    })

    return routes
}

export {
    parseRoutes
}