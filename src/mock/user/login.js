import Mock from 'mockjs'

const userList = [
    {
        name: 'admin',
        password: 'jtp111666'
    },
    {
        name: 'test',
        password: 'test'
    }
]
Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/user/login`, 'post', ({ body }) => {
    const result = {
        data: {}
    }
    const {name, password} = JSON.parse(body)
    const acceptAccount = {name, password}

    let success = false

    if (userList.includes(acceptAccount)) {
        success = true
        result.data.permissions = [{id: 'queryForm', operation: ['add', 'edit']}]
        result.data.roles = [{id: name, operation: ['add', 'edit', 'delete']}]
    }else {
        success = false
    }

    if (success) {
        result.code = 0
        result.message = Mock.mock('@TIMEFIX').CN + '，欢迎回来'
        result.data.user = {
            name,
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
