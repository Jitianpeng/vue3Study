import {
    GithubOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LockOutlined
} from '@ant-design/icons-vue'

const IconList = {
    'GithubOutlined': GithubOutlined,
    'MenuFoldOutlined': MenuFoldOutlined,
    'MenuUnfoldOutlined': MenuUnfoldOutlined,
    'UserOutlined': UserOutlined,
    'LockOutlined': LockOutlined,
}

export const useAntIcon = app => {
    Object.keys(IconList).forEach(item => {
        app.component(item, IconList[item])
    })
}