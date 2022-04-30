import axios from 'axios'

// 跨域认证信息 header 名
const xsrfHeaderName = 'Authorization'

axios.defaults.timeout = 5000
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.defaults.withCredentials= true
axios.defaults.xsrfHeaderName= xsrfHeaderName
axios.defaults.xsrfCookieName= xsrfHeaderName

const METHOD = {
    GET: 'get',
    POST: 'post',
    DELETE: 'delete',
    PUT: 'put',
}

/**
 * axios请求
 * @param url 请求地址
 * @param method {METHOD} http method
 * @param params 请求参数
 * @returns {Promise<AxiosResponse<T>>}
 */
async function request({ url, method, params, config }) {
    switch (method) {
    case METHOD.GET:
        return axios.get(url, {params, ...config})
    case METHOD.POST:
        return axios.post(url, params, config)
    case METHOD.DELETE:
        return axios.delete(url, params, config)
    case METHOD.PUT:
        return axios.put(url, params, config)
    default:
        return axios.get(url, {params, ...config})
    }
}

export {
    METHOD,
    request
}