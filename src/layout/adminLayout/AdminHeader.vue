<template>
    <a-layout-header class="adminHeader">
        <div class="header-item-contain header-item-contain-left">
            <div class="header-item">
                <menu-unfold-outlined
                    v-if="props.collapsed"
                    class="trigger"
                    @click="handeChange"
                />
                <menu-fold-outlined v-else class="trigger" @click="handeChange" />
            </div>
        </div>
        <div class="header-item-contain header-item-contain-right">
            <div class="header-item">
                <a-dropdown>
                    <div class="header-avatar" style="cursor: pointer">
                        <!-- <a-avatar class="avatar" size="small" shape="circle" :src="user.avatar"/> -->
                        <span class="name">{{ '天月飞鸟' }}</span>
                    </div>
                    <template #overlay>
                        <a-menu :class="['avatar-menu']">
                            <a-menu-item>
                                <user-outlined style="margin-right: 8px;" />
                                <span>个人中心</span>
                            </a-menu-item>
                            <a-menu-item>
                                <setting-outlined style="margin-right: 8px;" />
                                <span>设置</span>
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item @click="logout">
                                <poweroff-outlined style="margin-right: 8px;" />
                                <span>退出登录</span>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </div>
    </a-layout-header>
</template>

<script setup>
const emits = defineEmits(['change'])
const props = defineProps(['collapsed'])
const handeChange = () => {
    emits('change', !props.collapsed)
}
</script>

<style lang="less" scoped>
.adminHeader {
    background-color: #fff;
    padding: 0;
    padding-left: 24px;
    padding-right: 12px;

    .header-item-contain {
        display: flex;
        .header-item {
            flex: 1;
            padding: 0 20px;

            .anticon {
                font-size: 22px;
            }
        }
        .header-item:hover {
            color: #13c2c2;
        }
    }

    .header-item-contain-left {
        float: left;
    }
    .header-item-contain-right {
        float: right;
    }
}
</style>