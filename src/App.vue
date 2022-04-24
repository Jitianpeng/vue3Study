<template>
    <a-config-provider :locale="data.locale">
        <router-view></router-view>
  </a-config-provider>
</template>

<script setup>
import { reactive } from 'vue'
const data = reactive({
    locale: {}
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
