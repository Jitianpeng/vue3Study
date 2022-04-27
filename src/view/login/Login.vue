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
                        <a-input-password placeholder="111666" v-model:value="formState.password" />
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
import { message } from 'ant-design-vue';
import { reactive, computed } from 'vue'
const formState = reactive({
    userName: '',
    password: ''
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
const handleLogin = ({ userName, password }) => {
    if(userName === 'admin' && password === '111666') {
        message.success('登陆成功')
    } else {
        message.error('账户密码不存在')
    }
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