<template>
    <div class="pageLogin">
        <div class="content">
            <div class="top">
                <h1>vue3学习</h1>
            </div>
            <div class="login" >
                <a-form
                    :model="formState"
                    autocomplete="off"
                    @finish="handleLogin"
                    :rules="rules"
                >
                    <a-form-item name="userName">
                        <a-input placeholder="admin" v-model:value="formState.userName"></a-input>
                    </a-form-item>
                    <a-form-item name="password">
                        <a-input-password placeholder="jtp111" v-model:value="formState.password" />
                    </a-form-item>
                    <a-form-item>
                        <a-button
                            :style="{ width: '100%'}"
                            type="primary"
                            htmlType="submit"
                            :disabled="disabled"
                        >登陆</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
        <page-footer />
    </div>
</template>

<script setup>
import PageFooter from '@/layout/footer/PageFooter'
import { Login } from '@/service/login'
import { message } from 'ant-design-vue'
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

const _router = useRouter()
const formState = reactive({
    userName: 'admin',
    password: 'jtp111'
})
const rules = reactive({
    userName: [
        {required: true, message: '请输入用户名', trigger: 'change'}
    ],
    password: [
        {required: true, message: '请输入用密码', trigger: 'change'}
    ]
})

const disabled = computed(() => !(formState.userName && formState.password))

// 登陆
const handleLogin = (value) => {
    Login(value).then(res => {
        if(res.data.code === 0) {
            message.success(res.data.message)
            _router.push('/dashboard/workplace')
        } else {
            message.error(res.data.message)
        }
    })
}

</script>

<style lang="less" scoped>
.pageLogin {
    height: 100vh;
    overflow: hidden;
    background-image: url('@/assets/image/loginBg.webp');
    background-size: 100%;
    display: flex;
    flex-direction: column;

    .content {
        flex: 1;
        padding-top: 300px;
        @media (min-width: 768px) {
            padding-top: 200px;
        }

        .top {
            padding: 20px 0;
        }
        .login {
            width: 368px;
            margin: 0 auto;
        }
    }
}
</style>