<template>
    <div class="pageLogin">
        登陆页面
    </div>
</template>

<script setup>
    import { reactive, computed } from 'vue'
    const state = reactive({
        formState: {
            userName: '',
            password: ''
        }
    })
    const disabled = computed(() => !(state.formState.userName && state.formState.password))
</script>

<style>

</style>