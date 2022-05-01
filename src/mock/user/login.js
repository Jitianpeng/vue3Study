import Mock from 'mockjs'

const userList = [
    {
        userName: 'admin',
        password: 'jtp111'
    },
    {
        userName: 'test',
        password: 'test'
    }
]
Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/user/login`, 'post', ({ body }) => {
    const result = {
        data: {}
    }
    const {userName, password} = JSON.parse(body)
    const acceptAccount = {userName, password}

    let success = false
    if (userList.find(item => JSON.stringify(item) === JSON.stringify(acceptAccount))) {
        success = true
        result.data.permissions = [{id: 'queryForm', operation: ['add', 'edit']}]
        result.data.roles = [{id: userName, operation: ['add', 'edit', 'delete']}]
    }else {
        success = false
    }

    if (success) {
        result.code = 0
        result.message = userName + '，欢迎回来'
        result.data.user = {
            userName,
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
            address: '',
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
