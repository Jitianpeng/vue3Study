import {
  Button,
  Input,
  message,
  Select
} from 'ant-design-vue'

export const useAntComponent = app => {
    app.config.globalProperties.message = message
    app.use(Button)
    app.use(Input)
    app.use(Select)
}
