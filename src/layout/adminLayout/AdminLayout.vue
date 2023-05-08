<template>
    <a-layout class="adminLayout">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <!-- <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item key="1">
            <user-outlined />
            <span>nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
            </a-menu-item>
        </a-menu> -->
        </a-layout-sider>
        <a-layout>
            <AdminHeader :collapsed="collapsed" @change="handleChange" />
            <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup>
import AdminHeader from './AdminHeader'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const pageMinHeight = store.state.setting.pageMinHeight
const collapsed = ref(false)

// 点击切换折叠状态
const handleChange = val => {
    collapsed.value = val
}
</script>

<style lang="less" scoped>
.adminLayout {
    height: 100vh;
}
</style>