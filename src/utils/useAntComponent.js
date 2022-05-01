import {
    Button,
    Input,
    message,
    Select,
    ConfigProvider,
    Form,
    Layout
} from 'ant-design-vue'

export const useAntComponent = app => {
    app.config.globalProperties.message = message
    app.use(Button)
    app.use(Input)
    app.use(Select)
    app.use(ConfigProvider)
    app.use(Form)
    app.use(Layout)
}
