import { METHOD, request } from '@/utils/request'

/**
 * 用户登陆
 * @returns {Promise<*>}
 */
export async function Login(params) {
    return request({
        url: '/user/login',
        method: METHOD.POST,
        params: { ...params },
    })
}