import Mock from 'mockjs'

// 允许登录的账号
const userList = [
    { account: 'admin', password: 'jtp111', userName: '天月双鸟飞' },
    { account: 'test', password: 'test', userName: '测试人员' }
]
Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/user/login`, 'post', ({ body }) => {
    const result = {
        data: {}
    }
    const {account, password} = JSON.parse(body)
    let success = false
    const target = userList.find(item => item.account === account && item.password === password )
    if (target) {
        success = true
        result.data.permissions = [{id: 'queryForm', operation: ['add', 'edit']}]
        result.data.roles = [{id: account, operation: ['add', 'edit', 'delete']}]
    }

    if (success) {
        result.code = 0
        result.message = account + '，欢迎回来'
        result.data.user = {
            account,
            userName: target.userName,
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
            address: '大明湖畔',
            position: '前端工程师 | VUE平台'
        }
        result.data.token = 'Authorization:' + Math.random()
        result.data.expireAt = new Date(new Date().getTime() + 30 * 60 * 1000)
    } else {
        result.code = -1
        result.message = '账户名或密码错误'
    }
    return result
})
