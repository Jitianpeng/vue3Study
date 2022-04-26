<template>
    <div class="pageLogin">
        <div class="content">
            <div class="top">
                <h1>vue3学习</h1>
            </div>
            <div class="login" >
                <a-form :model="formState" autocomplete="off">
                    <a-form-item name="username">
                        <a-input v-model:value="formState.userName"></a-input>
                    </a-form-item>
                    <a-form-item name="password">
                        <a-input-password v-model:value="formState.password" />
                    </a-form-item>
                </a-form>
            </div>
        </div>
        <page-footer />
    </div>
</template>

<script setup>
import PageFooter from '@/layout/footer/PageFooter'
import { reactive, computed } from 'vue'
const formState = reactive({
    userName: '',
    password: ''
})
const disabled = computed(() => !(formState.userName && formState.password))
</script>

<style lang="less" scoped>
.pageLogin {
    height: 100vh;
    overflow: hidden;
    background-image: url('@/assets/image/loginBg.webp');
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