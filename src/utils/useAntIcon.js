import {
    GithubOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LockOutlined,
    SettingOutlined,
    PoweroffOutlined
} from '@ant-design/icons-vue'

const IconList = {
    'GithubOutlined': GithubOutlined,
    'MenuFoldOutlined': MenuFoldOutlined,
    'MenuUnfoldOutlined': MenuUnfoldOutlined,
    'UserOutlined': UserOutlined,
    'LockOutlined': LockOutlined,
    'SettingOutlined': SettingOutlined,
    'PoweroffOutlined': PoweroffOutlined,
}

export const useAntIcon = app => {
    Object.keys(IconList).forEach(item => {
        app.component(item, IconList[item])
    })
}